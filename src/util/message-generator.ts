import { ILooseObject } from '../collections/collection'
import { ContainedComponentField, ContainedGroupField, IContainedSet, ContainedSimpleField } from '../dictionary/contained'
import { FixDefinitions, MessageDefinition, SimpleFieldDefinition } from '../dictionary/definition'
import { SetReduce } from '../dictionary'
import { TagType } from '../buffer/tag/tag-type'

export class MessageGenerator {
  private word: number = 0
  private length: number = 0

  constructor (public readonly words: string[], public readonly definitions: FixDefinitions) {
  }

  public static getRandomEnum (field: SimpleFieldDefinition): any {
    const tagType: TagType = field.tagType
    const keys: string[] = Array.from(field.enums.keys())
    const choice: string = keys[Math.floor(Math.random() * keys.length)]
    switch (tagType) {
      case TagType.Int: {
        return parseInt(choice, 10)
      }
      case TagType.Float: {
        return parseFloat(choice)
      }
      case TagType.Boolean: {
        return choice === 'Y'
      }
      default: {
        return choice
      }
    }
  }

  private static randomIntFromInterval (min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  private static makeRandomString (len: number): string {
    let text: string = ''
    const possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i: number = 0; i < len; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return text
  }

  private static makeBuffer (len: number): Buffer {
    return Buffer.from(MessageGenerator.makeRandomString(len))
  }

  public generate (msgType: string, density?: number, repeatGroups: boolean = true): ILooseObject {
    if (!density) {
      density = 1.0
    }
    density = Math.max(0.2, density)
    density = Math.min(1.0, density)
    const def: MessageDefinition | undefined = this.definitions.message.get(msgType)
    if (!def) {
      throw new Error(`definitions do not contain type ${msgType}`)
    }
    return this.toObject(def, density, repeatGroups)
  }

  private toObject (set: IContainedSet, density: number, repeatGroups: boolean): ILooseObject {
    const reducer = new SetReduce<ILooseObject>()
    return reducer.reduce(set, {
      simple: (a: ILooseObject, sf: ContainedSimpleField) => {
        const tag: number = sf.definition.tag
        const include = tag === set.firstSimple?.definition.tag || this.length > 0 || Math.random() <= density
        if (include) {
          const val: any = sf.definition.isEnum() ? MessageGenerator.getRandomEnum(sf.definition) : this.createSimple(sf)
          if (val != null) {
            a[sf.name] = val
          }
        }
      },
      component: (a: ILooseObject, cf: ContainedComponentField) => {
        if (cf.name !== 'StandardHeader' && cf.name !== 'StandardTrailer') {
          a[cf.name] = this.toObject(cf.definition, density, repeatGroups)
        }
      },
      group: (a: ILooseObject, gf: ContainedGroupField) => {
        if (repeatGroups) {
          const numberGroups: number = MessageGenerator.randomIntFromInterval(1, 3)
          const arr: ILooseObject[] = new Array(numberGroups)
          a[gf.name] = arr
          for (let j: number = 0; j < numberGroups; ++j) {
            arr[j] = this.toObject(gf.definition, density, repeatGroups)
          }
        }
      }
    }, {})
  }

  private createSimple (field: ContainedSimpleField): any {
    const tagType: TagType = field.definition.tagType
    switch (tagType) {
      case TagType.String: {
        return this.nextString()
      }

      case TagType.Float: {
        this.length = 0
        const sign = MessageGenerator.randomIntFromInterval(1, 10) <= 5 ? 1 : -1
        const num = sign * MessageGenerator.randomIntFromInterval(1, 100000)
        const raised = MessageGenerator.randomIntFromInterval(1, 8)
        const r = num * Math.pow(10, -1 * raised)
        // console.log(`sign = ${sign} num = ${num} raised = ${raised} r = ${r} ret = ${ret}`)
        return Math.round(r * 1e7) / 1e7
      }

      case TagType.Int: {
        this.length = 0
        return MessageGenerator.randomIntFromInterval(1, 100000)
      }

      case TagType.Length: {
        this.length = MessageGenerator.randomIntFromInterval(5, 20)
        return this.length
      }

      case TagType.Boolean: {
        this.length = 0
        return MessageGenerator.randomIntFromInterval(1, 2) === 1
      }

      case TagType.UtcDateOnly: {
        this.length = 0
        const now: Date = new Date()
        return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()
          , 0, 0, 0, 0))
      }

      case TagType.UtcTimeOnly: {
        this.length = 0
        const s: Date = new Date()
        return new Date(Date.UTC(0, 0, 0, s.getUTCHours(), s.getUTCMinutes(),
          s.getUTCSeconds(), s.getUTCMilliseconds()))
      }

      case TagType.UtcTimestamp: {
        this.length = 0
        const now: Date = new Date()
        return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
          now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()))
      }

      case TagType.LocalDate: {
        const now = new Date()
        return new Date(now.getFullYear(), now.getMonth(), now.getDate()
          , 0, 0, 0, 0)
      }

      case TagType.RawData: {
        const length = this.length
        this.length = 0
        return length > 0 ? MessageGenerator.makeBuffer(length) : null
      }

      default: {
        throw new Error(`cannot manage type ${tagType}`)
      }
    }
  }

  private nextString (): string {
    const words: string[] = this.words
    const w: string = words[this.word++]
    if (this.word === words.length) {
      this.word = 0
    }
    return w
  }
}
