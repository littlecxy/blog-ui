import axios from '../axios'

// 发表文章
export function postArticle(o) {
  return axios({
    url: '/api/article/postArticle',
    method: 'post',
    data: o
  })
}