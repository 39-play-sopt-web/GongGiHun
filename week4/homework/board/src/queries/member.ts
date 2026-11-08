import { useMutation } from '@tanstack/react-query'
import { issueMemberCode } from '../apis/member'
import { setMemberCode } from '../utils/memberCode'

export const useIssueMemberCode = () => {
  return useMutation({
    mutationFn: issueMemberCode,
    onSuccess: ({ authorizationCode }) => {
      setMemberCode(authorizationCode)
    },
  })
}
