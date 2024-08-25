import { ILooseObject } from '../collections/collection'
import {
  ContainedSimpleField,
  IContainedSet,
  ContainedGroupField,
  ContainedComponentField,
  FieldsDispatch
} from '../dictionary/contained'
import { FixDefinitions, MessageDefinition } from '../dictionary/definition'

import moment = require('moment')
import { IFieldDispatcher } from '../dictionary/contained/field-dispatcher'
import { TagType } from '../buffer/tag/tag-type'

export class JsonHelper {
  dispatcher: FieldsDispatch = new FieldsDispatch()
  constructor (public readonly definitions: FixDefinitions) {
  }

  private static patchSimple (object: ILooseObject, field: ContainedSimpleField): void {
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

      case TagType.UtcTimestamp: {
        const m = moment(v)
        const d = m.toDate()
        object[name] = d
        break
      }

      case TagType.UtcDateOnly: {
        const m = moment(v)
        object[name] = m.toDate()
        break
      }

      case TagType.UtcTimeOnly: {
        const m = moment(v)
        object[name] = m.toDate()
        break
      }

      case TagType.LocalDate: {
        const m = moment(v)
        object[name] = m.toDate()
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
    const def: MessageDefinition | undefined = this.definitions.message.get(msgType)
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

  public patchJsonFields (set: IContainedSet, object: ILooseObject): void {
    if (!object) {
      return
    }

    const dispatcher: IFieldDispatcher = {
      simple: (field: ContainedSimpleField) => { JsonHelper.patchSimple(object, field) },
      group: (gf: ContainedGroupField) => { this.patchGroup(object, gf) },
      component: (cf: ContainedComponentField) => { this.patchComponent(object, cf) }
    }

    this.dispatcher.dispatchFields(set.localAttribute, dispatcher)
    this.dispatcher.dispatchFields(set.fields, dispatcher)
  }

  private patchComponent (object: ILooseObject, cf: ContainedComponentField): void {
    const c = object[cf.name] || object[cf.definition.name]
    if (c) {
      this.patchJsonFields(cf.definition, c)
    }
  }

  private patchGroup (object: ILooseObject, gf: ContainedGroupField): void {
    const arr: ILooseObject[] = object[gf.definition.name] || object[gf.name]
    if (arr) {
      arr.forEach((o) => {
        this.patchJsonFields(gf.definition, o)
      })
    }
  }
}
