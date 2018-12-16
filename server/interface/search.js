import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({
  prefix: '/search'
})

const sign = '8e61723289af0245d7c47bec67652bb6'

router.get('/top', async ctx => {
  let {
    status,
    data: {
      top
    }
  } = await axios.get(`http://cp-tools.cn/search/top`, {
    params: {
      city: ctx.query.city,
      input: ctx.query.input,
      sign
    }
  })
  ctx.body = {
    top: status === 200 ? top : []
  }
})
export default router
