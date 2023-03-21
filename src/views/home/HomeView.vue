<template>
  <div class="HomeView">
    <a-button>赋值</a-button>

    用户名 {{userStore.userInfo.name}}

    <home-component :info="info"></home-component>

    <van-button @click="change">切换</van-button>
  </div>
</template>

<script setup>
  import { useUserStore } from '@/store/modules/user'
  import HomeComponent from './HomeComponent'
  import {ref} from 'vue'

  const userStore = useUserStore()

  const info = ref({
    name: 'zb',
    age: 25
  })

  function change() {
    info.value.age += 1
    // info.value.inforObj.ss += 1
  }
</script>

<style scoped lang="scss">

</style>
