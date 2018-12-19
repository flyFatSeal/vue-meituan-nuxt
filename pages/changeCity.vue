<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24"><is-select/></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><hot/></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><cate-groy/></el-col>
    </el-row>
  </div>
</template>

<script>
  import isSelect from '@/components/changeCity/iselect.vue'
  import Hot from '@/components/changeCity/hot.vue'
  import cateGroy from '@/components/changeCity/categroy.vue'
 export default {
   components: {
      isSelect,
      Hot,
      cateGroy
   },
   data () {
     return {

     }
   },
 }
</script>

<style>
</style>
