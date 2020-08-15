import axios from '../axios'

// 发表文章
export function postArticle(o) {
  return axios({
    // url: '/api/article/postArticle',
    url: '/article/postArticle',
    method: 'post',
    data: o
  })
}

// 获取文章列表
export function findArticle() {
  return axios({
    url: '/api/article/findArticle',
    // url: '/article/findArticle',
    method: 'post'
  })
}

// 获取文章列表
export function findArticleByType(o) {
  return axios({
    // url: '/api/article/findArticleByType',
    url: '/article/findArticleByType',
    method: 'post',
    data: o
  })
}