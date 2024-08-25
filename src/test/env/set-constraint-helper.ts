import { IContainedSet, ContainedFieldType } from '../../dictionary/contained'
import { FixDefinitions } from '../../dictionary/definition'

export class SetConstraintHelper {
  constructor (public definitions: FixDefinitions) {}
  public isComponent (set: (IContainedSet | undefined), index: number, name: string, expected: boolean): void {
    expect(set).toBeTruthy()
    const field = set?.fields[index]
    expect(field?.type).toEqual(ContainedFieldType.Component)
    expect(field?.name).toEqual(name)
    expect(field?.required).toEqual(expected)
    expect(set?.components.get(name)).toBeTruthy()
  }

  public isGroup (set: (IContainedSet | undefined), index: number, name: string, expected: boolean): void {
    expect(set).toBeTruthy()
    const field = set?.fields[index]
    expect(field?.type).toEqual(ContainedFieldType.Group)
    expect(field?.name).toEqual(name)
    expect(field?.required).toEqual(expected)
    expect(set?.groups.get(name)).toBeTruthy()
  }

  public isSimple (set: (IContainedSet | undefined), index: number, name: string, expected: boolean): void {
    expect(set).toBeTruthy()
    const field = set?.fields[index]
    expect(field?.type).toEqual(ContainedFieldType.Simple)
    expect(field?.name).toEqual(name)
    expect(field?.required).toEqual(expected)
    const masterDef = this.definitions.simple.get(name)
    expect(masterDef).toBeTruthy()
    expect(masterDef?.name).toEqual(name)
    const tag = masterDef?.tag ?? -1
    expect(set?.containedTag[tag]).toBeTruthy()
    expect(set?.simple.get(name)).toBeTruthy()
    expect(set?.localTag[tag]).toBeTruthy()
    expect(set?.tagToSimple[tag]).toBeTruthy()
    expect(set?.localNameToField.get(name)).toBeTruthy()
    // expect(set?.tagToField[tag]).toBeFalsy()
  }
}
