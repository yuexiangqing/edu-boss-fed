import request from '@/utils/request'

// 分页查询课程信息
export const getQueryCourses = data => {
  return request({
    method: 'POST',
    url: '/boss/course/getQueryCourses',
    data
  })
}
// 课程上下架接口
// 要注意请求方式为GET的发送方式（两个值）
// export const changeState = data => {
export const changeState = params => {
  return request({
    method: 'GET',
    url: '/boss/course/changeState',
    // params: data
    // params: params
    params
  })
}
