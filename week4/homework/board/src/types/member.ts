export type Part = 'WEB' | 'iOS' | 'ANDROID'

export interface IssueMemberCodeRequest {
  part: Part
}

export interface IssueMemberCodeResponse {
  authorizationCode: string
}
