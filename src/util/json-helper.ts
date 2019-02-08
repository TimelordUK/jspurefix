import { TagType } from '../buffer'
import { ILooseObject } from '../collections/collection'
import { ContainedSimpleField, ContainedFieldSet, ContainedGroupField, ContainedComponentField, dispatchFields, IFieldDispatcher, FixDefinitions, MessageDefinition } from '../dictionary'
import moment = require('moment')

export class JsonHelper {
  constructor (public readonly definitions: FixDefinitions) {
  }

  private static patchSimple (object: ILooseObject, field: ContainedSimpleField) {
    let name: string = field.definition.name
    let v: any = object[name]
    if (v == null) {
      v = object[field.name]
      if (v !== null) {
        name = field.name
      }
    }
    if (v == null) {
      return
    }
    switch (field.definition.tagType) {
      case TagType.RawData: {
        object[name] = Buffer.from(v, 'utf8')
        break
      }

      case TagType.UtcTimestamp:
        const m = moment(v)
        const d = m.utc(true).toDate()
        object[name] = d
        break

      case TagType.UtcDateOnly: {
        const m = moment(v)
        const d = m.toDate()
        object[name] = new Date(Date.UTC(d.getFullYear(), d.getMonth() - 1, d.getDay(), 0, 0, 0, 0))
        break
      }

      case TagType.UtcTimeOnly: {
        const m = moment(v)
        const d = m.toDate()
        object[name] = new Date(Date.UTC(0, 0, 0, d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()))
        break
      }

      case TagType.LocalDate: {
        const m = moment(v)
        const d = m.toDate()
        object[name] = new Date(d.getFullYear(), d.getMonth() - 1, d.getDay(), 0, 0, 0, 0)
        break
      }

      case TagType.Float: {
        object[name] = parseFloat(v)
        break
      }

      case TagType.Int:
      case TagType.Length: {
        object[name] = parseInt(v, 10)
        break
      }
    }
  }

  public fromJson (fileName: string, msgType: string): ILooseObject {
    const msg: ILooseObject = require(fileName)
    const def: MessageDefinition = this.definitions.message.get(msgType)
    if (!def) {
      return msg
    }
    if (msg.Batch) {
      msg.Batch.forEach((m: ILooseObject) => {
        this.patchJsonFields(def, m)
      })
    } else {
      this.patchJsonFields(def, msg)
    }
    return msg
  }

  public patchJsonFields (set: ContainedFieldSet, object: ILooseObject): void {
    if (!object) {
      return
    }

    const dispatcher: IFieldDispatcher = {
      simple: (field: ContainedSimpleField) => JsonHelper.patchSimple(object, field),
      group: (gf: ContainedGroupField) => this.patchGroup(object, gf),
      component: (cf: ContainedComponentField) => this.patchComponent(object, cf)
    }

    dispatchFields(set.localAttribute, dispatcher)
    dispatchFields(set.fields, dispatcher)
  }

  private patchComponent (object: ILooseObject, cf: ContainedComponentField) {
    const c = object[cf.name] || object[cf.definition.name]
    if (c) {
      this.patchJsonFields(cf.definition, c)
    }
  }

  private patchGroup (object: ILooseObject, gf: ContainedGroupField) {
    const arr: ILooseObject[] = object[gf.definition.name] || object[gf.name]
    if (arr) {
      arr.forEach((o) => {
        this.patchJsonFields(gf.definition, o)
      })
    }
  }
}
