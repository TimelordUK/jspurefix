import { MessageDefinition } from '../../definition'
import { NodeParser } from './node-parser'
import { ParseContext } from './parse-context'
import { ContainedComponentField } from '../../contained'
import { ISaxNode } from '../../sax-node'
import { ParseProgress } from './parse-progress'

export class MessageParser extends NodeParser {
  constructor (protected readonly progress: ParseProgress) {
    super(progress)
  }

  public open (line: number, node: ISaxNode): void {
    switch (node.name) {
      case 'message': {
        const att: any = node.attributes
        const msg: MessageDefinition = new MessageDefinition(att.name, att.name, att.msgtype, att.msgcat, null)
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
          this.addComponentField(node.attributes.name, node)
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
    const contained = hdr
      ? new ContainedComponentField(hdr, msg.fields.length, true)
      : null
    if (contained) {
      this.progress.newAdds++
      msg.add(contained)
      this.progress.newContexts++
      this.parseContexts.push(context)
    }
  }

  public close (line: number, name: string): void {
    switch (name) {
      case 'message': {
        const parent: ParseContext | null = this.parseContexts.pop() ?? null
        const message: MessageDefinition | null = parent?.asMessage() ?? null
        if (message != null) {
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
