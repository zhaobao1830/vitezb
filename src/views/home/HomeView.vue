<template>
  <div class="HomeView">
    <a-button @click="setUser">赋值</a-button>

    用户名 {{userStore.userInfo.name}}
  </div>
</template>

<script setup>
  import { useUserStore } from '@/store/modules/user'

  const userStore = useUserStore()

  function setUser() {
    userStore.setUserInfo({
      name: 'zb',
      age: '25'
    })
  }
</script>

<style scoped lang="scss">

</style>
