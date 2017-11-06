<template>
	<div>
		<ul class="tree-box" v-for='items in treeData'>
			<my-tree :options='items'></my-tree>
		</ul>
	</div>
</template>

<script>
	import myTree from './tree-list'
	export default {
		components: {
			myTree
		},
		data() {
			return {
				treeData: [{
						'id': '1',
						'menuName': '基础管理',
						'menuCode': '10',
						'children': [{
								'menuName': '用户管理',
								'menuCode': '11'
							},
							{
								'menuName': '角色管理',
								'menuCode': '12',
								'children': [{
										'menuName': '管理员',
										'menuCode': '121'
									},
									{
										'menuName': 'CEO',
										'menuCode': '122'
									},
									{
										'menuName': 'CFO',
										'menuCode': '123'
									},
									{
										'menuName': 'COO',
										'menuCode': '124'
									},
									{
										'menuName': '普通人',
										'menuCode': '124'
									}
								]
							},
							{
								'menuName': '权限管理',
								'menuCode': '13'
							}
						]
					}]
			}
		}
	}
</script>

<style>
	.tree-box,
	.tree-box ul {
		list-style: none;
	}
</style>