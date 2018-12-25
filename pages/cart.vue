<template>
  <div class="page-cart">
    <el-row>
      <el-col
        v-if="cart"
        :span="24"
        class="m-cart"
      ><list :cart-data="cart"/>
        <p>应付金额:<em class="money">￥{{ total }}</em></p>
        <div class="post">
          <el-button 
            type="primary" 
            @click="submit">提交订单</el-button>
        </div>
      </el-col>
      <el-col
        v-else
        class="empty"
      >购物车为空</el-col>
    </el-row>
  </div>
</template>

<script>
 import List from '@/components/cart/list.vue'
 export default {
   components: {
     List
   },
   async asyncData (ctx){
     let id = ctx.query.id
     let {status,data:{code,data:{name,price}}} = await ctx.$axios.post('/cart/getCart',{
       id
     })
     return {
       cart:[{name,price,count:1}]
     }
   },
   computed:{
     total(){
       let sum = 0
       this.cart.forEach(item=>{
         sum+=item.price*item.count
       })
       return sum
     }
   },
   methods:{
     submit(){
       console.info(this.cart[0].count)
     }
   }
 }
</script>

<style lang="scss">
@import '@/assets/css/cart/index.scss';
</style>
