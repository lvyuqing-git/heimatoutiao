<template>
  <div class="btn"
       @click='btnclick'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    btnclick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang='less'>
.btn {
  width: 318 * 100vw/360;
  height: 50px;
  background-color: red;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  border-radius: 25px;
}
</style>