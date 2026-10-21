import { typeFileName } from '../../dictionary/compiler/file-name'

/**
 * A generated type is written to <name>.ts and the build adds .js, .js.map and .d.ts beside it.
 * eCryptfs, which backs encrypted home directories on Linux and encrypted shares on Synology,
 * refuses any file name longer than 143 characters, so the name has to stay short enough for the
 * longest of those, with room for a .d.ts.map should declaration maps ever be switched on.
 */
const FILE_NAME_LIMIT = 143
const LONGEST_BUILD_EXTENSION = '.d.ts.map'
const LONGEST_STEM = FILE_NAME_LIMIT - LONGEST_BUILD_EXTENSION.length

// the names these produce are already committed under src/types, so they must not change
const NAMES_IN_THE_TREE = [
  ['StandardHeader', 'standard_header'],
  ['InstrumentLeg', 'instrument_leg'],
  ['PartiesNoPartyIDs', 'parties_no_party_i_ds'],
  ['LegInstrumentPartiesNoLegInstrumentParties', 'leg_instrument_parties_no_leg_instrument_parties']
]

const LONG_GROUP = 'UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp' +
  'NoUnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenters'

describe('typeFileName', () => {
  test.each(NAMES_IN_THE_TREE)('%s keeps the name it already has', (name, expected) => {
    expect(typeFileName(name)).toEqual(expected)
  })

  test('a name that exactly fills the limit is left alone', () => {
    const name = 'a'.repeat(LONGEST_STEM)
    expect(typeFileName(name)).toEqual(name)
  })

  test('a name one character over the limit is shortened to fit', () => {
    const name = 'a'.repeat(LONGEST_STEM + 1)
    const shortened = typeFileName(name)
    expect(shortened.length).toBeLessThanOrEqual(LONGEST_STEM)
    expect(shortened).not.toEqual(name)
  })

  test('a shortened name still reads as the type it came from', () => {
    expect(typeFileName(LONG_GROUP)).toMatch(/^underlying_provision_option_relevant_underlying_date_business_center_grp_no_/)
  })

  test('a shortened name is a plain snake_case file name wherever the cut falls', () => {
    // a leading word of 1 to 12 letters slides the cut through every position of the word cycle,
    // including the one where it lands straight after an underscore
    for (let lead = 1; lead <= 12; lead++) {
      const name = 'a'.repeat(lead) + 'WordPair'.repeat(30)
      expect(typeFileName(name)).toMatch(/^[a-z0-9]+(_[a-z0-9]+)*$/)
    }
  })

  test('long names that differ only at the end get different file names', () => {
    const prefix = 'A'.repeat(LONGEST_STEM + 20)
    expect(typeFileName(prefix + 'Alpha')).not.toEqual(typeFileName(prefix + 'Beta'))
  })

  test('the same long name always gets the same file name', () => {
    expect(typeFileName(LONG_GROUP)).toEqual(typeFileName(LONG_GROUP))
  })

  test('a long name keeps the file name it is committed under', () => {
    // the first 125 characters of the snake_case name, then the first 8 hex digits of the
    // sha256 of LONG_GROUP; both derived outside this code with `cut` and `sha256sum`
    expect(typeFileName(LONG_GROUP)).toEqual(
      'underlying_provision_option_relevant_underlying_date_business_center_grp_no_underlying_provision_option_relevant_underlying_d_6e63f261')
  })
})
