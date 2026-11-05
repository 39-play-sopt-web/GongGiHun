import ky from 'ky'

export const instance = ky.create({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prefix: 'api/v1',
  retry: 0, // 재시도는 tanstackquery에 위임
})
