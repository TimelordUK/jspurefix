import { ILooseObject } from '../collections/collection'
import { FixDefinitions, MessageDefinition, SimpleFieldDefinition } from '../dictionary/definition'
import {
  ContainedComponentField,
  ContainedField,
  IContainedSet,
  ContainedFieldType,
  ContainedGroupField,
  ContainedSimpleField
} from '../dictionary/contained'
import { TagType } from './tag/tag-type'

export class EncodeProxy {
  constructor (public readonly definitions: FixDefinitions) {
  }

  private static SimpleFieldCheck (field: ContainedSimpleField, val: any): void {
    const definition: SimpleFieldDefinition = field.definition
    if (definition.isEnum()) {
      const resolved: boolean = definition.containsEnum(String(val))
      if (!resolved) {
        throw new Error(`enum field ${field.name} does not support "${val}"`)
      }
    }
    switch (definition.tagType) {
      case TagType.LocalDate:
      case TagType.UtcTimeOnly:
      case TagType.UtcDateOnly:
      case TagType.UtcTimestamp: {
        const isDate: boolean = val instanceof Date
        if (!isDate) {
          throw new Error(`field ${field.name} expects Date but receives "${typeof val}"`)
        }
        break
      }

      case TagType.Boolean: {
        if (typeof (val) !== typeof true) {
          throw new Error(`field ${field.name} expects boolean but receives "${typeof val}"`)
        }
        break
      }

      case TagType.String: {
        if (typeof (val) !== 'string') {
          throw new Error(`field ${field.name} expects string but receives "${typeof val}"`)
        }
        break
      }

      case TagType.RawData: {
        const isBuffer: boolean = val instanceof Buffer
        if (!isBuffer) {
          throw new Error(`field ${field.name} expects Buffer but receives "${typeof val}"`)
        }
        break
      }

      case TagType.Int:
      case TagType.Float:
      case TagType.Length: {
        if (isNaN(val as number)) {
          throw new Error(`field ${field.name} expects number but receives "${typeof val}"`)
        }
        break
      }
    }
  }

  private static checkProperties (wrapped: ILooseObject, val: ILooseObject): ILooseObject {
    const keys: string[] = Object.keys(val)
    for (const k of keys) {
      wrapped[k] = val[k]
    }
    return wrapped
  }

  private static ComponentFieldCheck (field: ContainedComponentField, val: any): object {
    const isComplex: boolean = typeof val === 'object'
    if (!isComplex) {
      throw new Error(`type ${field.name} is a component but is given type "${typeof val}"`)
    }
    return EncodeProxy.checkProperties(new Proxy({}, EncodeProxy.handler(field.definition)), val as ILooseObject)
  }

  private static GroupFieldCheck (field: ContainedGroupField, val: any): object {
    const accepted: boolean = Array.isArray(val) || !isNaN(val as number)
    if (!accepted) {
      throw new Error(`type ${field.name} is a group and needs array or number, not "${typeof val}"`)
    }
    const gf: ContainedComponentField = field as ContainedComponentField
    const j: number = val
    const isNumber: boolean = !isNaN(val as number)
    if (isNumber) {
      const arr: ILooseObject[] = new Array(j)
      for (let i: number = 0; i < j; ++i) {
        arr[i] = new Proxy({}, EncodeProxy.handler(gf.definition))
      }
      return arr
    } else {
      const arr: ILooseObject[] = val
      for (let i: number = 0; i < arr.length; ++i) {
        arr[i] = EncodeProxy.checkProperties(new Proxy({}, EncodeProxy.handler(gf.definition)), arr[i])
      }
      return arr
    }
  }

  private static handler (set: IContainedSet): Object {
    return {
      set (target: ILooseObject, prop: string, val: any): boolean {
        const field: ContainedField | undefined = set.localNameToField.get(prop)
        if (!field) {
          throw new Error(`type ${set.name} has no field named ${prop}`)
        }
        target[prop] = EncodeProxy.examine(field, val)
        return true
      }
    }
  }

  private static examine (field: ContainedField, val: any): any {
    switch (field.type) {
      case ContainedFieldType.Simple: {
        EncodeProxy.SimpleFieldCheck(field as ContainedSimpleField, val)
        break
      }

      case ContainedFieldType.Component: {
        val = EncodeProxy.ComponentFieldCheck(field as ContainedComponentField, val)
        break
      }

      case ContainedFieldType.Group: {
        val = EncodeProxy.GroupFieldCheck(field as ContainedGroupField, val)
        break
      }
    }
    return val
  }

  public wrap (msgName: string): ILooseObject {
    const msg: MessageDefinition | undefined = this.definitions.message.get(msgName)
    if (!msg) {
      throw new Error(`no message defined for type ${msgName}`)
    }

    return new Proxy({}, EncodeProxy.handler(msg))
  }
}
