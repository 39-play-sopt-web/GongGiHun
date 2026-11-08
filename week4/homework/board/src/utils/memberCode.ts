const MEMBER_CODE_KEY = 'authorizationCode'
const PART_KEY = 'part'

export const getMemberCode = () => localStorage.getItem(MEMBER_CODE_KEY)
export const setMemberCode = (code: string) => localStorage.setItem(MEMBER_CODE_KEY, code)

export const getPart = () => localStorage.getItem(PART_KEY)
export const setPart = (part: string) => localStorage.setItem(PART_KEY, part)

export const removeMemberCode = () => {
  localStorage.removeItem(MEMBER_CODE_KEY)
  localStorage.removeItem(PART_KEY)
}
