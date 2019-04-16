import axios from 'axios'
// 添加请求拦截器
axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(function (config) {
// 在发送请求之前做些什么
// console.log(config)
  config.params = {
    ...config.params,
    appkey: 'ruguo123__1551255163978'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
export default axios
