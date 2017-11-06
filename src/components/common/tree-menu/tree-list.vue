<template>
	<li>
		<div @click="toggle">
			<i class="fa" :class="[open ? 'fa-folder-open':'fa-folder']" v-if='isFolder'></i>
			<i class="fa fa-file-text" v-if='!isFolder'></i> {{options.menuName}}
		</div>
		<ul v-show="open" :style="{paddingLeft:paddingLeft}">
			<tree-list v-for='item in options.children' :options='item'></tree-list>
		</ul>
	</li>
</template>
<script>
	export default {
		name: 'treeList',
		props: ['options'],
		data() {
			return {
				open: false,
				left: 0
			}
		},
		computed: {
			paddingLeft() {
				this.left = this.left + 16;
				return this.left + 'px';
			},
			isFolder() {
				return this.options.children && this.options.children.length
			}
		},
		mounted() {
			//			console.log(this.model)
		},
		methods: {
			toggle() {
				if(this.isFolder) {
					this.open = !this.open
				}
			}
		}
	}
</script>

<style>

</style>