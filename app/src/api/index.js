import requests from './request'
import mockRequests from './mockAjax'

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
export const reqGetBannerList = () => mockRequests({ url: '/banner', method: 'get' })
export const reqFloorList = () => mockRequests.get('/floor')
