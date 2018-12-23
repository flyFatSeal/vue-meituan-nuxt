<template>
  <div class="m-products-list">
    <dl>
      <dd
        v-for="item in nav"
        :key="item.name"
        :class="[item.name,item.active?'s-nav-active':'']"
        @click="navSelect(item)"
      >{{ item.txt }}</dd>
    </dl>
    <ul>
      <Item
        v-for="(item,idx) in list"
        :key="idx"
        :meta="item"/>
    </ul>
  </div>
</template>

<script>
import Item from './product.vue'
export default {
  components: {
    Item
  },
  props: {
    list: {
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      nav: [
        {
          name: 's-default',
          txt: '智能排序',
          active: true
        }, {
          name: 's-price',
          txt: '价格最低',
          active: false
        }, {
          name: 's-visit',
          txt: '人气最高',
          active: false
        }, {
          name: 's-comment',
          txt: '评价最高',
          active: false
        }
      ],
      preList:[]
    }
  },
  mounted () {
    this.preList = this.list
  },
  async asyncData({app}) {
    let { data } = await app.$axios.get('searchList')
    return { items: data.list }
  },
  methods: {
    navSelect: function (item) {
      this.nav.forEach(item => {
        item.active = false
      });
      item.active = true
      this.sort(item.name)
    },
    sort(compre){
      if(compre === 's-default')
        this.list = this.preList
      if(compre === 's-price')
        this.list.sort((a,b)=> b.price-a.price)
      if(compre === 's-comment')
        this.list.sort((a,b)=> b.rate-a.rate)
      if(compre === 's-visit')
        this.list.sort((a,b)=> b.comment-a.comment)
    }
  }
}
</script>
