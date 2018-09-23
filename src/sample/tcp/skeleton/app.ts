import { SkeletonSession } from './skeleton-session'
import { runner } from '../launcher'
import { IJsFixConfig } from '../../../config/js-fix-config'

runner((config: IJsFixConfig) => new SkeletonSession(config)).then(() => {
  console.log('finished.')
})
