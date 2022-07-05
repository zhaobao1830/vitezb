<template>
  <div class="HomeView">
    <a-button @click="setUser">赋值</a-button>

    用户名 {{userStore.userInfo.name}}
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model:show="show" @confirm="onConfirm" />
  </div>
</template>

<script setup>
  import { useUserStore } from '@/store/modules/user'
  import { ref } from 'vue'

  const userStore = useUserStore()

  function setUser() {
    userStore.setUserInfo({
      name: 'zb',
      age: '25'
    })
  }

  const date = ref('')
  const show = ref(false)
  const onConfirm = (value) => {
    show.value = false
    date.value = formatDate(value)
  }
  const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`
</script>

<style scoped lang="scss">

</style>
