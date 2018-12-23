<template>
  <div class="m-crumbs">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">{{ decodeURIComponent(city) }}美团</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">{{ decodeURIComponent(city) }}{{ decodeURIComponent(keyword) }}</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      default: ''
    },
    city:{
      type:String,
      default:''
    }
  }
}
</script>
