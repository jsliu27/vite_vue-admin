<template>
  <h1>123</h1>
  <p class="content_box">asdf</p>
  <div @click.prevent="click_handle">点击事件跳转链接</div>
</template>

<script lang='ts'>
import { inject, Ref, defineComponent, toRefs, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  name: 'home',
  setup(props, context) {
    let data = {
      ...props,
    }
    const menuVisible = inject<Ref<boolean>>('abc')
    console.log(menuVisible.value, 'topNav menuvisible')
    const router = useRouter()
    const click_handle = () => {
      router.push('/click')
    }
    const methods = {
      click_handle
    }
    const state = reactive(data)
    return {
      ...toRefs(state),
      ...methods,
    }
  },
})
</script>
<style lang="scss" scoped>
.content_box {
  color: red;
}
</style>
