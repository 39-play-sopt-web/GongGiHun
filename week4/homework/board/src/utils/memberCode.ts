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

// 코드가 없으면 alert 후 false 반환 (글쓰기 라우트 가드, 수정/삭제 버튼에서 사용)
export const checkMemberCode = () => {
  if (getMemberCode()) return true
  alert('먼저 파트를 선택하고 코드를 발급해주세요.')
  return false
}
