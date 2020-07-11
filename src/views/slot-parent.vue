<template>
  <div>
    <SlotChild/>

    <SlotChild>
      <h1>Head</h1>
      <p>{{ tx }}</p>
    </SlotChild>

  </div>
</template>

<script>
/* eslint-disable */
import SlotChild from "./slot-child";

export default {
  name: "",
  data: () => ({
    n: 12,
  }),
  components: {
    SlotChild,
  }
}
</script>

<style lang="sass" scoped>
h1
  color: orange
</style>