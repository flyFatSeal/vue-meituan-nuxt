<template>
  <div class="m-user">
    <template v-if="user">
      欢迎你,<span class="username">{{ user }}</span>
      <nuxt-link to="/exit">退出</nuxt-link>
    </template>
    <template v-else>
      <nuxt-link 
        to="/login" 
        class="login">立即登录</nuxt-link>
      <nuxt-link 
        class="register" 
        to="/register">注册</nuxt-link>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: ''
    }
  },
  async mounted() {
    const { status, data } = await this.$axios.get('/users/getUser')
    if (status === 200 && data) this.user = decodeURIComponent(data.user)
  }
}
</script>
<style>
</style>
