import axios from '../axios'
// 接口测试
export function test() {
  return axios({
    url: '/api/user',
    method: 'get'
  })
}

// export const getData = data => {
//   return service({
//       url: '/api/user/getUserInfo',
//       method: 'post',
//       data
//   })
// };