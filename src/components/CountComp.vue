<template>
  <div>
    <p>count: {{ count }}</p>
    <button class="btn" @click="count++">count</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
const show = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('show')
    }, 2000)
  })
}
show().then(res => {
  console.log(res)
})
</script>
<style scoped lang="scss">
/* @import "@/assets/styles/variables.scss"; */
.btn {
  padding: 0.6em 1.2em;
  font-family: inherit;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  background-color: #1a1a1a;
  border: 1px solid transparent;
  border-radius: $border-radius;
  transition: border-color 0.25s;
  &:hover {
    border-color: $border-color;
    transform: scale(1.05, 1.05);
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
}
</style>
