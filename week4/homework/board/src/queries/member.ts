import { useMutation } from '@tanstack/react-query'
import { issueMemberCode } from '../apis/member'
import { setMemberCode, setPart } from '../utils/memberCode'

export const useIssueMemberCode = () => {
  return useMutation({
    mutationFn: issueMemberCode,
    onSuccess: ({ authorizationCode }, { part }) => {
      setMemberCode(authorizationCode)
      setPart(part)
    },
  })
}
