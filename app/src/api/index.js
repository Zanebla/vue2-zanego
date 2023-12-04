import requests from './request'
import mockRequests from './mockAjax'

// export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
export const reqCategoryList = () => mockRequests({ url: '/typeNav', method: 'get' })

export const reqGetBannerList = () => mockRequests({ url: '/banner', method: 'get' })
export const reqFloorList = () => mockRequests.get('/floor')

export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })