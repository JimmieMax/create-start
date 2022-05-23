import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { requestInterceptors, responseInterceptors } from './interceptors'


export const createAxiosByinterceptors = (config?: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout: 1000, //超时配置
    withCredentials: true, //跨域携带cookie
    ...config, // 自定义配置覆盖基本配置
  })
  // 添加请求拦截器
  instance.interceptors.request.use(...requestInterceptors)
  // 添加响应拦截器
  instance.interceptors.response.use(...responseInterceptors)
  return instance
}
