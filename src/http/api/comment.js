import axios from '../axios'

// 发表评论
export function postComment(o) {
  return axios({
    url: '/api/comment/postComment',
    method: 'post',
    data: o
  })
}

// 查询评论
export function findComment(o) {
  return axios({
    url: '/api/comment/findComment',
    method: 'post',
    data: o
  })
}