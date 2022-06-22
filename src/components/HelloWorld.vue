<template>
  <div class="helloWorld">
    <div class="title">{{msg}}
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue'

  defineProps({
    msg: String
  })
  const msgs = ref('')
</script>

<style scoped lang="scss">
  .helloWorld{
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
      font-size: 16px;
      color: $color-theme;
    }
  }
</style>
