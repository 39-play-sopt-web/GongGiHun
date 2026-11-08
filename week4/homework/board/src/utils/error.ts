// 여러 페이지에서 재사용 가능하도록....
import { isHTTPError } from 'ky'
import type { ApiResponse } from '../types/api'

export const getErrorMessage = (error: unknown, fallback: string) => {
  if (isHTTPError<ApiResponse<null>>(error) && typeof error.data === 'object') {
    return error.data.message
  }

  return fallback
}
