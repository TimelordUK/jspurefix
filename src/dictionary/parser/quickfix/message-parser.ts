import { MessageDefinition } from '../../definition'
import { NodeParser } from './node-parser'
import { ParseContext } from './parse-context'
import { ContainedComponentField, ContainedSetBuilder } from '../../contained'
import { ISaxNode } from '../../sax-node'
import { ParseProgress } from './parse-progress'
import { ILooseObject } from '../../../collections/collection'

export class MessageParser extends NodeParser {
  constructor (protected readonly progress: ParseProgress) {
    super(progress)
  }

  public open (line: number, node: ISaxNode): void {
    switch (node.name) {
      case 'message': {
        const att: ILooseObject = node.attributes
        const msg: MessageDefinition = new MessageDefinition(att.name as string, att.name as string, att.msgtype as string, att.msgcat as string, null)
        const context: ParseContext = new ParseContext(msg.name, true, msg)
        this.header(msg, context)
        break
      }

      case 'field': {
        this.addSimple(node)
        break
      }

      case 'component': {
        if (node.isSelfClosing) {
          this.addComponentField(node.attributes.name as string, node)
        }
        break
      }

      case 'group': {
        if (!node.isSelfClosing) {
          this.beginGroupDefinition(node)
        }
        break
      }
    }
  }

  private header (msg: MessageDefinition, context: ParseContext): void {
    const hdr = this.progress.definitions.component.get('StandardHeader')
    const builder = new ContainedSetBuilder(msg)
    const contained = hdr
      ? new ContainedComponentField(hdr, msg.fields.length, true)
      : null
    if (contained) {
      this.progress.newAdds++
      builder.add(contained)
      this.startContext(context)
    }
  }

  public close (line: number, name: string): void {
    switch (name) {
      case 'message': {
        const parent: ParseContext | null = this.parseContexts.pop() ?? null
        const message: MessageDefinition | null = parent?.asMessage() ?? null
        if (message) {
          this.progress.newDefines++
          this.progress.definitions.addMessage(message)
        }
        break
      }

      case 'group': {
        this.addGroupField(name)
        break
      }
    }
  }
}
