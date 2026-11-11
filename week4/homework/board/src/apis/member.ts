import type { IssueMemberCodeRequest, IssueMemberCodeResponse } from '../types/member'
import { instance } from './instance'
import type { ApiResponse } from '../types/api'

export const issueMemberCode = async (body: IssueMemberCodeRequest) => {
  const response = await instance
    .post('members/authorization-code', { json: body })
    .json<ApiResponse<IssueMemberCodeResponse>>()
  return response.data
}
