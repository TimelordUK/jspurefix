import { EOL as newLine } from 'os'
import { ContainedComponentField, ContainedGroupField, ContainedSimpleField } from '../../contained'
import { FieldEnum } from '../../field-enum'
import { MessageDefinition, SimpleFieldDefinition } from '../../definition'

export class QuickFixXmlFormatter {
  private static isRequired (r: boolean): string {
    return r ? 'Y' : 'N'
  }

  private static whitespace (n: number): string {
    return ' '.repeat(n)
  }

  public static startFix (major: number, minor: number, servicePack: number): string {
    return `<fix major='${major}' type='FIX' servicepack='${servicePack}' minor='${minor}'>${newLine}`
  }

  public static endFix (): string {
    return `</fix>${newLine}`
  }

  public static startEntity (name: string, ws: number): string {
    return `${QuickFixXmlFormatter.whitespace(ws)}<${name}>${newLine}`
  }

  public static endEntity (name: string, ws: number): string {
    return `${QuickFixXmlFormatter.whitespace(ws)}</${name}>${newLine}`
  }

  public static startComponent (name: string, ws: number): string {
    return `${QuickFixXmlFormatter.whitespace(ws)}<component name='${name}'>${newLine}`
  }

  public static endComponent (ws: number): string {
    return `${QuickFixXmlFormatter.whitespace(ws)}</component>${newLine}`
  }

  public static addField (sf: ContainedSimpleField, ws: number): string {
    return `${QuickFixXmlFormatter.whitespace(ws)} <!-- ${sf.definition.tag} ${sf.definition.type} -->${newLine}${QuickFixXmlFormatter.whitespace(ws)}<field name='${sf.name}' required='${QuickFixXmlFormatter.isRequired(sf.required)}'/>${newLine}`
  }

  public static addComponent (cf: ContainedComponentField, ws: number): string {
    return `${QuickFixXmlFormatter.whitespace(ws)}<component name='${cf.name}' required='${QuickFixXmlFormatter.isRequired(cf.required)}'/>${newLine}`
  }

  public static addGroup (gf: ContainedGroupField, ws: number): string {
    return `${QuickFixXmlFormatter.whitespace(ws)} <!-- ${gf.definition.noOfField?.tag ?? -1} ${gf.definition.noOfField?.type} -->${newLine}${QuickFixXmlFormatter.whitespace(ws)}<group name='${gf.name}' required='${QuickFixXmlFormatter.isRequired(gf.required)}'>${newLine}`
  }

  public static endGroup (ws: number): string {
    return `${QuickFixXmlFormatter.whitespace(ws)}</group>${newLine}`
  }

  public static addEnum (fe: (FieldEnum | undefined), ws: number): string {
    return `${QuickFixXmlFormatter.whitespace(ws)}<value enum='${fe?.key}' description='${fe?.description ?? fe?.val}'/>${newLine}`
  }

  public static defineField (sf: SimpleFieldDefinition, ws: number): string {
    const term = sf.isEnum() ? '>' : '/>'
    return (`${QuickFixXmlFormatter.whitespace(ws)}<field number='${sf.tag}' name='${sf.name}' type='${sf.type}'${term}${newLine}`)
  }

  public static defineMessage (def: MessageDefinition, ws: number): string {
    return `${QuickFixXmlFormatter.whitespace(ws)}<message name='${def.name}' msgcat='${def.category}' msgtype='${def.msgType}'>${newLine}`
  }
}
