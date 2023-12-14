import Mock from 'mockjs'

import banner from './banner.json'
import floor from './floor.json'
import typeNav from './typeNav.json'
import address from './address.json'

Mock.mock("/mock/banner", { code: 200, data: banner })
Mock.mock("/mock/floor", { code: 200, data: floor })
Mock.mock("/mock/typeNav", { code: 200, data: typeNav })
Mock.mock("/mock/address", { code: 200, data: address })

