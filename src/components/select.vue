<template>
	<section>
		<h3>搜索式下拉框：</h3>
		<search-select :select-options='selectOptions'></search-select>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				selectOptions: {
					btnValue: 'search',
					selectData: [{
						content: 'java'
					}, {
						content: 'HTML'
					}, {
						content: 'CSS'
					}, {
						content: 'javaScript'
					}, {
						content: 'jQuery'
					}, {
						content: 'angularjs'
					}]
				}
			}
		}
	}
</script>

<style>

</style>