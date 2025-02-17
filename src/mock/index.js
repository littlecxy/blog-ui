import Mock from 'mockjs'

// 3. 开启/关闭[业务模块中某个请求]拦截, 通过函数返回对象中的[isOpen属性]设置.
// let openMock = true
let openMock = false

// fnCreate(login, openMock)

/**
 * 创建mock模拟数据
 * @param {*} mod 模块
 * @param {*} isOpen 是否开启?
 */
function fnCreate (mod, isOpen = true) {
  
    if (isOpen) {
      for (var key in mod) {
        ((res) => {
          if (res.isOpen !== false) {
            let url = baseUrl
            if(!url.endsWith("/")) {
              url = url + "/"
            }
            url = url + res.url
            Mock.mock(new RegExp(url), res.type, (opts) => {
              opts['data'] = opts.body ? JSON.parse(opts.body) : null
              delete opts.body
              console.log('\n')
              console.log('%cmock拦截, 请求: ', 'color:blue', opts)
              console.log('%cmock拦截, 响应: ', 'color:blue', res.data)
              return res.data
            })
          }
        })(mod[key]() || {})
      }
    }
  }