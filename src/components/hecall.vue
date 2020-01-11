<template>
	<div class="cell"  @click="clickfn">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="right">
			<slot name="right"> </slot>
			<span>
				<van-icon name="arrow" />
			</span>
		</div>
	</div>
</template>

<script>
export default {
    methods: {
    clickfn(event){
        this.$emit('click',event)
    }
    }
}
</script>

<style lang="less" scoped>
.cell {
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
	height: 50px;
	line-height: 50px;
    margin: 0 15px;
    .right{
        display: flex
    }
}
</style>
