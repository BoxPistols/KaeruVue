<template>
  <div>
    <Num num="12"/>
  </div>
</template>

<script>
import Num from "./props-child"

export default {
  name: "",
  data: () => ({
    num: ''
  }),
  components: {
    Num
  }

}
</script>

<style lang="sass" scoped>
</style>