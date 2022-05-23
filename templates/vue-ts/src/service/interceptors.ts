import { downloadFile } from './handle-download'
import { handleErrors } from './handle-errors'
import { createLoading, destoryLoading } from './handle-loading'

export const requestInterceptors = [
  function (config: any) {
    // 在发送请求之前做些什么
    const { loading = true } = config
    // config.headers.Authorization = vm.$Cookies.get("vue_admin_token");
    if (loading) createLoading()
    return config
  },
  function (error: any) {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
]

export const responseInterceptors = [
  function (response: any) {
    // 对响应数据做点什么
    const { loading = true } = response.config
    if (loading) destoryLoading()
    const { code, data, message } = response.data
    // config设置responseType为blob 处理文件下载
    if (response.data instanceof Blob) {
      return downloadFile(response)
    } else {
      if (code === 200) return data
      else {
        handleErrors(code, message)
        return Promise.reject(response.data)
      }
    }
  },
  function (error: any) {
    // 对响应错误做点什么
    const { loading = true } = error.config
    if (loading) destoryLoading()
    handleErrors(error.response.status, error?.response?.data?.message || '服务端异常')
    return Promise.reject(error)
  },
]
