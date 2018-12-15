<template>
  <div class="m-menu">
    <dl 
      class="nav" 
      @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd 
        v-for="(item,index) in menu" 
        :key="index"
        @mouseenter="enter"
      >
        <i :class="item.type"/>{{ item.name }}<span class="arrow"/>
      </dd>
    </dl>
    <div 
      v-if="kind" 
      class="detail"
      @mouseenter="sover"
      @mouseleave="sleave"
    >
      <template v-for="(item,index) in curdetail.child">
        <h4 :key="index">{{ item.title }}</h4>
        <span 
          v-for="v in item.child" 
          :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      kind: '',
      menu: this.$store.state.home.menu
    }
  },
  computed: {
    curdetail() {
      return this.menu.filter(item => item.type === this.kind)[0]
    }
  },
  methods: {
    mouseleave() {
      let self = this
      self._timer = setTimeout(() => {
        this.kind = ''
      }, 150)
    },
    enter(e) {
      this.kind = e.target.querySelector('i').className
    },
    sover() {
      clearTimeout(this._timer)
    },
    sleave() {
      this.mouseleave()
    }
  }
}
</script>

<style>
</style>
