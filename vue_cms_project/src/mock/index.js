import Mock from 'mockjs'
import Api from './api'

Mock.mock(/\/api\/getlunbo/, 'get', Api.getlunbo)
Mock.mock(/\/api\/getnewslist/, 'get', Api.getnewslist)
Mock.mock(/\/api\/getnews/, 'get', Api.getnews)
Mock.mock(/\/api\/getimgcategory/, 'get', Api.getimgcategory)
Mock.mock(/\/api\/getimages/, 'get', Api.getimages)

export default Mock
