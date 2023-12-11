import requests from './request'
import mockRequests from './mockAjax'

// export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
export const reqCategoryList = () => mockRequests({ url: '/typeNav', method: 'get' })

export const reqGetBannerList = () => mockRequests({ url: '/banner', method: 'get' })
export const reqFloorList = () => mockRequests.get('/floor')

export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

export const reqCartList = () => requests({ url: '/cart/cartList', method: "get" })

export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' }) 