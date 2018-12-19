<template>
  <div class="m-hcity">
    <dl @click="changeCity">
      <dt>热门城市：</dt>
      <dd
        v-for="item in list"
        :key="item.id">{{ item.name==='市辖区'?item.province:item.name }}</dd>
    </dl>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data(){
    return {
      list:[]
    }
  },
  async mounted(){
    let {status,data:{hots}}=await this.$axios.get('/geo/hotCity')
    if(status===200){
      this.list=hots
    }
  },
  methods: {
    changeCity(e){
      if(e.target.tagName !== 'DD') return
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
@import '@/assets/css/changeCity/hot.scss';
</style>
