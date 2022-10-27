<template>
    <div class="alloc-menu">
        这是角色ID 为:{{roleId}}
    </div>
  </template>

<script>
export default {
  name: 'AllocMenu',
  props: {
    roleId: {
      type: [Number, String],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
