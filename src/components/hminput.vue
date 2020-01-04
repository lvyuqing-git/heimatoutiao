<template>
  <input type="text"
         @input="inputfn"
         @blur="blurfn"
         :class="{success:state,err:!state}">
</template>

<script>
export default {
  props: ['rule', 'msg'],
  data () {
    return {
      state: true
    }
  },
  methods: {
    inputfn (event) {
      let value = event.target.value

      if (this.rule && this.rule.test(value)) {
        console.log(this.rule.test(value));
        this.state = true
      } else {
        this.state = false

      }
      this.$emit('input', event.target.value)
    },
    blurfn (event) {
      let value = event.target.value
      if (this.rule && !this.rule.test(value)) {
        // this.$emit('blur')
        this.$toast.fail({
          message: this.msg,
          duration: 1000
        })

      }


    }

  }
}
</script>

<style lang='less' scoped>
input {
  width: 318 * 100vw/360;
  height: 45px;
  border: none;
  border-bottom: 3px solid black;
  font-size: 25px;
  outline: none;
}
.success {
  border-bottom: 3px solid green;
}
.err {
  border-bottom: 3px solid red;
}
</style>