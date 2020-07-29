import axios from '../axios'

// 注册
export function register(o) {
  return axios({
    url: '/api/user/register',
    method: 'post',
    data: o
  })
}

// 登录
export function login(o) {
  return axios({
    url: '/api/user/login',
    method: 'post',
    data: o
  })
}

// 图片上传
export function uploadimg(o) {
  return axios({
    url: '/api/user/uploadimg',
    method: 'post',
    data: o,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}