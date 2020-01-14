<template>
  <div>
      111111111
  </div>
</template>

<script>
import {getDetailInfo} from '../apis/article'
export default {
   async mounted () {
        let res = await getDetailInfo(this.$route.params.id)    
        console.log(res);
        
    }
}
</script>

<style>

</style>