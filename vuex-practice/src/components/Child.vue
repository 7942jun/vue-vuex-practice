<template lang="html">
  <div>
    Child counter : {{ childCounter }}
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: mapGetters({
    childCounter: 'getCounter'
  }),
  methods: {
    // 이벤트 추가
    ...mapMutations({
      addCounter: 'addCounter' // 앞 addCounter 는 해당 컴포넌트의 메서드를, 뒤 addCounter 는 Vuex 의 Mutations 를 의미
    }),
    ...mapMutations({
    subCounter: 'subtractCounter' // 앞 addCounter 는 해당 컴포넌트의 메서드를, 뒤 addCounter 는 Vuex 의 Mutations 를 의미
  })
  }
}
</script>

<style lang="css" scoped>
</style>
