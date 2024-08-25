import { SAXStream } from '../../dict-primitive'
import { INumericKeyed } from '../../../collections/collection'
import * as path from 'path'
import * as fs from 'fs'
import { ISaxNode } from '../../sax-node'

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
  private nodes: Map<string, number>
  private includes: IInclude[]
  private graph: INumericKeyed<IGraphNode>
  constructor (public readonly root: string, public readonly main: string) {
  }

  public async build (): Promise<any> {
    this.includes = await this.getIncludes(this.main)
    this.assignNodes()
    this.getGraph()
  }

  public resolve (file: string): string[] | null {
    const label: number | undefined = this.nodes.get(file)
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
    if (node) {
      node.edges.forEach(e => {
        if (!depends.includes(e)) {
          this.resolve_nodes(e, depends)
        }
      })
    }
    depends.push(label)
  }

  private getGraph (): void {
    const nodes = this.nodes
    this.graph = this.includes.reduce<INumericKeyed<IGraphNode>>((a: INumericKeyed<IGraphNode>, current: IInclude) => {
      const parent: number | undefined = nodes.get(current.parent)
      if (parent == null) return a
      let parentNode = a[parent]
      if (!parentNode) {
        a[parent] = parentNode = {
          file: current.parent,
          node: parent,
          edges: []
        } as IGraphNode
      }
      current.children.forEach((s: string) => {
        const child: number | undefined = nodes.get(s)
        if (child) {
          if (!parentNode.edges.includes(child)) {
            parentNode.edges.push(child)
          }
        }
      })
      return a
    }, {})
  }

  private assignNodes (): void {
    let next: number = 0
    this.nodes = this.includes.reduce((a: Map<string, number>, current: IInclude) => {
      if (!a.has(current.parent)) {
        a.set(current.parent, next++)
      }
      current.children.forEach((c: string) => {
        if (!a.has(c)) {
          a.set(c, next++)
        }
      })
      return a
    }, new Map<string, number>())
  }

  private async scanIncludes (file: string): Promise<string[]> {
    return await new Promise<string[]>((resolve, reject) => {
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
        resolve(includes)
      })
      saxStream.on('error', (r) => {
        reject(r)
      })
      pass.pipe(saxStream)
    })
  }

  private async getIncludes (main: string): Promise<IInclude[]> {
    const q: any[] = []
    q.push([main])
    const ordered: IInclude[] = []
    const seen: Map<string, boolean> = new Map<string, boolean>()
    return await new Promise<IInclude[]>(async (resolve, reject) => {
      try {
        while (q.length > 0) {
          const batch: string[] = q.pop()
          for (const next of batch) {
            if (seen.has(next)) {
              continue
            }
            seen.set(next, true)
            const includes: string[] = await this.scanIncludes(next)
            ordered.push({
              parent: next,
              children: includes
            } as IInclude)
            q.push(includes)
          }
        }
        resolve(ordered)
      } catch (e) {
        reject(e)
      }
    })
  }
}
