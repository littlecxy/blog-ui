import axios from '../axios'
// 接口测试
export function test(o) {
  return axios({
    url: '/api/user',
    method: 'post',
    data: o
  })
}

// export const getData = data => {
//   return service({
//       url: '/api/user/getUserInfo',
//       method: 'post',
//       data
//   })
// };