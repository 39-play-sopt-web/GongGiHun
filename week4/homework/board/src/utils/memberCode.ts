const MEMBER_CODE_KEY = 'authorizationCode'

export const getMemberCode = () => localStorage.getItem(MEMBER_CODE_KEY)
export const setMemberCode = (code: string) => localStorage.setItem(MEMBER_CODE_KEY, code)
export const removeMemberCode = () => localStorage.removeItem(MEMBER_CODE_KEY)
