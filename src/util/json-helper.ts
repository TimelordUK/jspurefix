import { FixDefinitions } from '../dictionary/definition/fix-definitions'
import { ContainedGroupField } from '../dictionary/contained/contained-group-field'
import { MessageDefinition } from '../dictionary/definition/message-definition'
import { ContainedComponentField } from '../dictionary/contained/contained-component-field'
import { ILooseObject } from '../collections/collection'
import { ContainedFieldSet } from '../dictionary/contained/contained-field-set'
import { ContainedSimpleField } from '../dictionary/contained/contained-simple-field'
import { TagType } from '../buffer/tags'
import { dispatchFields, IFieldDispatcher } from '../dictionary/fields-dispatch'
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
        object[name] = m.toDate()
        break

      case TagType.UtcDateOnly: {
        const m = moment(v)
        const d = m.toDate()
        object[name] = new Date(Date.UTC(d.getFullYear(), d.getMonth() - 1, d.getDay(), 0, 0, 0, 0))
        break
      }

      case TagType.UtcTimeOnly:
      case TagType.LocalDate: {
        const m = moment(v)
        const d = m.toDate()
        object[name] = new Date(d.getFullYear(), d.getMonth() - 1, d.getDay(), 0, 0, 0, 0)
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
    this.patchJsonFields(def, msg)
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
