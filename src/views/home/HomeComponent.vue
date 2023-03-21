<template>
  <div class="home-component">{{info.age}}</div>
</template>

<script setup>
  import {watchEffect} from 'vue'

  const props = defineProps({
    info: {
      type: Object,
      default: function () {
        return {}
      }
    }
  })

  watchEffect(() => {
    console.log(props.info)
  })
</script>

<style scoped lang="scss">

</style>
