import ky from 'ky'
import { getMemberCode } from '../utils/memberCode'

export const instance = ky.create({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prefix: 'api/v1',
  retry: 0, // 재시도는 tanstackquery에 위임
  hooks: {
    beforeRequest: [
      ({ request }) => {
        const memberCode = getMemberCode()
        if (memberCode) request.headers.set('Authorization', memberCode)
      },
    ],
  },
})
