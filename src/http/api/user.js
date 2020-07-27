import axios from '../axios'

// 注册
export function register(o) {
  return axios({
    url: '/api/user/register',
    method: 'post',
    data: o
  })
}
