import axios from '@/axios.js'
let api = {
// 搜索框部分
  searchHotWords () {
    return axios.get('/api/meituan/header/searchHotWords.json')
  },
  searchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  // 首页左侧 全部分类部分
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  // 有格调内容区数据获取
  getByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  // 获取省份列表
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  // 热门城市
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  // 最近访问城市
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  // 获取城市列表
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  // 分类列表
  getClassify () {
    return axios.get('/api/meituan/list/classify.json')
  },
  // 区域列表
  getArealist () {
    return axios.get('/api/meituan/list/areaList.json')
  },
  // 产品列表
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  // 右侧推荐产品列表
  getRecomment () {
    return axios.get('/api/meituan/list/recommend.json')
  },
  // 获取当前位置
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  // 用户登录
  login (params) {
    return axios.get('/api/meituan/login', params)
  },
  // 用户注册
  register (params) {
    return axios.get('/api/meituan/register', params)
  }
}

export default api
