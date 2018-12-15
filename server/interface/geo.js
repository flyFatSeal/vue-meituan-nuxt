import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({
  prefix: '/geo'
})

const sign = '8e61723289af0245d7c47bec67652bb6'

router.get('/getPosition', async ctx => {
  let {
    status,
    data: {
      province,
      city
    }
  } = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  if (status === 200)
    ctx.body = {
      province,
      city
    }
  else
    ctx.body = {
      province: null,
      city: null
    }
})

router.get('/menu', async ctx => {
  let {
    status,
    data: {
      menu
    }
  } = await axios.get(`http://cp-tools.cn/geo/menu?sign=${sign}`)
  if (status === 200)
    ctx.body = {
      menu
    }
  else
    ctx.body = {
      menu: []
    }
})


router.get('/province', async ctx => {
  let {
    status,
    data: {
      province
    }
  } = await axios.get(`http://cp-tools.cn/geo/province?sign=${sign}`)
  ctx.body = {
    province: status === 200 ? province : []
  }
})
export default router
