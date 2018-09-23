import { ISaxNode, SAXStream } from '../../dict-primitive'
import { Dictionary } from '../../../collections/dictionary'
import * as path from 'path'
import * as fs from 'fs'
import { INumericKeyed } from '../../../collections/collection'

export interface IInclude {
  parent: string
  children: string[]
}

export interface IGraphNode {
  file: string
  node: number
  edges: number[]
}

/*
  construct a dependency graph from all the xsd files to compute an order to build the definition
 */

export class IncludeGraph {
  private nodes: Dictionary<number>
  private includes: IInclude[]
  private graph: INumericKeyed<IGraphNode>
  constructor (public readonly root: string, public readonly main: string) {
  }

  public async build (): Promise<any> {
    this.includes = await this.getIncludes(this.main)
    this.assignNodes()
    this.getGraph()
  }

  public resolve (file: string): string[] {
    const label: number = this.nodes.get(file)
    if (label == null) {
      return null
    }
    const depends: number[] = []
    this.resolve_nodes(label, depends)
    return depends.map((i: number) => {
      return this.graph[i].file
    })
  }

  private resolve_nodes (label: number, depends: number[]): void {
    const node: IGraphNode = this.graph[label]
    for (let e of node.edges) {
      if (depends.indexOf(e) < 0) {
        this.resolve_nodes(e, depends)
      }
    }
    depends.push(label)
  }

  private getGraph () {
    const nodes = this.nodes
    this.graph = this.includes.reduce((a: INumericKeyed<IGraphNode>, current: IInclude) => {
      const parent: number = nodes.get(current.parent)
      let parentNode = a[parent]
      if (!parentNode) {
        a[parent] = parentNode = {
          file: current.parent,
          node: parent,
          edges: []
        } as IGraphNode
      }
      current.children.forEach((s: string) => {
        const child: number = nodes.get(s)
        if (parentNode.edges.indexOf(child) < 0) {
          parentNode.edges.push(child)
        }
      })
      return a
    }, {} as INumericKeyed<IGraphNode>)
  }

  private assignNodes () {
    let next: number = 0
    this.nodes = this.includes.reduce((a: Dictionary<number>, current: IInclude) => {
      if (!a.containsKey(current.parent)) {
        a.add(current.parent, next++)
      }
      current.children.forEach((c: string) => {
        if (!a.containsKey(c)) {
          a.add(c, next++)
        }
      })
      return a
    }, new Dictionary<number>())
  }

  private scanIncludes (file: string): Promise<string[]> {
    return new Promise<string[]>((accept, reject) => {
      const includes: string[] = []
      const pass: fs.ReadStream = fs.createReadStream(path.join(this.root, file))
      const saxStream: SAXStream = require('sax').createStream(true, {})
      saxStream.on('opentag', (node) => {
        const saxNode: ISaxNode = node
        switch (saxNode.name) {
          case 'xs:include': {
            includes.push(saxNode.attributes.schemaLocation)
            break
          }
        }
      })
      saxStream.on('ready', () => {
        accept(includes)
      })
      saxStream.on('error', (r) => {
        reject(r)
      })
      pass.pipe(saxStream)
    })
  }

  private getIncludes (main: string): Promise<IInclude[]> {
    const q: any[] = []
    q.push([main])
    const ordered: IInclude[] = []
    const seen: Dictionary<boolean> = new Dictionary<boolean>()
    return new Promise<IInclude[]>(async (accept, reject) => {
      try {
        while (q.length > 0) {
          const batch: string[] = q.pop()
          for (let next of batch) {
            if (seen.containsKey(next)) {
              continue
            }
            seen.add(next, true)
            const includes: string[] = await this.scanIncludes(next)
            ordered.push({
              parent: next,
              children: includes
            } as IInclude)
            q.push(includes)
          }
        }
        accept(ordered)
      } catch (e) {
        reject(e)
      }
    })
  }
}
