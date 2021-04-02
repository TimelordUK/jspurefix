import { Iheader } from './set/header'
import { Itrailer } from './set/trailer'

export interface IUserResponse {
  header: Iheader
  UserRequestID: string// 923
  Username: string// 553
  UserStatus?: number// 926
  UserStatusText?: string// 927
  trailer: Itrailer
}
