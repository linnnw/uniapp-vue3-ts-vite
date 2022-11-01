<template>
  <u-tabbar
    v-model="Store.state.current"
    :list="list"
    @change="changeTabbar"
  ></u-tabbar>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
// interface propsType {
//   current: number
// }
// const props = withDefaults(defineProps<propsType>(), {
//   current: 0
// })

// 使用vuex
const Store = useStore()

const list = [
  {
    iconPath: 'home',
    selectedIconPath: 'home-fill',
    text: '首页',
    count: 2,
    url: '/pages/home/index',
    isDot: true,
    customIcon: false
  },
  {
    iconPath: 'account',
    selectedIconPath: 'account-fill',
    text: '我的',
    count: 23,
    isDot: false,
    url: '/pages/user/index',
    customIcon: false
  }
]

const changeTabbar = (index: number) => {
  if (index !== Store.state.current) {
    uni.switchTab({ url: list[index].url })
    Store.state.current = index
  }
  // emits('changeCurrent', index)
}
</script>
