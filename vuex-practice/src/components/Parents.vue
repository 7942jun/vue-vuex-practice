<template lang="html">
  <div>
    Parent counter : {{ parentCounter }}
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

    <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props 로 전달한다. -->
    <child></child>
  </div>
</template>

<script>
import Child from './Child'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'parents',
  data () {
    return { }
  },
  computed: mapGetters({
    parentCounter: 'getCounter'
  }),
  methods: {
    // 이벤트 추가
    ...mapMutations({
      addCounter: 'addCounter' // 앞 addCounter 는 해당 컴포넌트의 메서드를, 뒤 addCounter 는 Vuex 의 Mutations 를 의미
    }),
    ...mapMutations({
    subCounter: 'subtractCounter' // 앞 addCounter 는 해당 컴포넌트의 메서드를, 뒤 addCounter 는 Vuex 의 Mutations 를 의미
  })
  },
  components: {
    // Child 컴포넌트를 하위 컴포넌트로 등록
    'child': Child
  }
}
</script>

<style lang="css" scoped>
</style>
