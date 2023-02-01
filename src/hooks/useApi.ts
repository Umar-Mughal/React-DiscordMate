import { useEffect, useState } from 'react'
import axios from 'axios'
import { config } from '../config'
import { IUseApiProps } from '../types/IUseApi'

const useApi = ({ url, method, data, headers, onSuccess, onError, autoFetch, mock, withToken, params }: IUseApiProps) => {
  const [response, setResponse] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const [loading, setIsLoading] = useState<boolean>(false)
  const [rawResponse, setRawResponse] = useState<any>(null)
  if (!config.apiUrl) throw new Error(`No backend api found for ${config.apiUrl}`)

  const call = async (callData?: any) => {
    setIsLoading(true)
    try {
      const paramsString = Object.entries(callData.params)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')

      const res = await axios({
        url: `${!mock ? config.apiUrl + callData.url : callData.url}${!callData.params ? (params ? Object.values(params).join('/') : '') : `?${paramsString}`}`,
        method,
        data: callData,
        headers: {
          ...headers,
          ...(withToken
            ? {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
              }
            : {}),
        },
      })
      setRawResponse(res)
      setIsLoading(false)
      setResponse(res.data)
      if (onSuccess) onSuccess(res.data)
    } catch (err: any) {
      setIsLoading(false)
      setError(err.response)
      if (onError) onError(err.response)
    }
  }

  useEffect(() => {
    if (autoFetch) call()
  }, [])

  return {
    response,
    error,
    loading,
    call,
    rawResponse,
  }
}

export default useApi
