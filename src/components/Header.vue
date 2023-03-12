<template>
  <header class="header"></header>
</template>
<script setup lang="ts">
import { AddValues } from '@/helpers/helper'
import { ref, onMounted } from 'vue'
const param = ref(null)
onMounted(() => {
  param.value = AddValues(2, 3)
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

header {
    width: 100%;
  height: 80px;
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
    }
</style>
