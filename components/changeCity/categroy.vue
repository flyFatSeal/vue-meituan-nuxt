<template>
  <div class="">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd
        v-for="item in list"
        :key="item">
        <a :href="'#city-'+item">{{ item }}</a>
      </dd>
    </dl>
    <dl 
      v-for="item in block"
      :key="item.title" 
      class="m-categroy-section"
      @click="changeCity"
    >
      <dt :id="'city-'+item.title">{{ item.title }}</dt>
      <dd>
        <span 
          v-for="city in item.city" 
          :key="city">
          {{ city }}
        </span>
      </dd>
    </dl>
  </div>
</template>

<script>
 import pyjs from 'js-pinyin'
 import { mapMutations } from 'vuex'
 export default {
   data () {
     return {
       list:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
       block:[]
     }
   },
   async mounted () {
    let {status,data:{city}} = await this.$axios.get('/geo/city')
    if(status === 200){
      let p,c,d={},block = []
      city.forEach(item=>{
        p = pyjs.getFullChars(item.name).toLocaleUpperCase().slice(0,1)
        c = p.charCodeAt(0)
        if(c>=65 && c<=90){
          if(!d[p])
            d[p] = []
          d[p].push(item.name)
        }
      })
      for(let k in d){
        block.push({
          title:k,
          city:d[k]
        })
      }
      this.block = block.sort((a,b)=> a.title.charCodeAt()-b.title.charCodeAt())
    }
   },
   methods: {
    changeCity(e){
      if(e.target.tagName !== 'SPAN') return
      this.toggle({city: e.target.innerText.replace('市',''),province: ""})
      this.$router.push('/')
    },
    ...mapMutations({
      toggle: 'geo/setPosition'
    })
  }
 }
</script>

<style lang="scss">
@import '@/assets/css/changeCity/categroy.scss';
</style>
