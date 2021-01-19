<template>
<div class="bg">
    <h2>{{title}}</h2>
    <h2>{{age}}</h2>
    <!-- <pre>

        {{route}}
    </pre> -->

    <p>
        动态的跳转路由
        <a @click.prevent="jump">跳转到news路由组件</a>
    </p>
</div>

</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  setup(props, context) {
    let data = {
      ...props,
    }
    const router = useRouter()
    const jump = () => {
      router.push('/')
    }
    const methods = {
      jump,
    }
    const data2 = reactive(data)
    const route = useRoute()
    console.log(route)
    return {
      ...toRefs(data2),
      route,
      ...methods,
    }
  },
  props: {
    title: {
      type: String,
      required: false,
      default: 'rongrong',
    },
    age: {
      type: Number,
      default: 18,
    },
  },
})
</script>

<style>
.bg {
  background: #ccc;
}
</style>
