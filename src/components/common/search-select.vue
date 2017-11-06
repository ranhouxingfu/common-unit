<template>
	<div class="wrap">
		<div class="searchTcp" >
			<div class="clearFix">
				<input type="text" v-model="inputVal" @focus="showAll" />
				<button class="search-btn"><i class="fa fa-search"></i> {{btnValue}}</button>
			</div>
			<div class="select-box">
				<ul class="select-list" v-show='visiviblity'>
					<li v-for="items in filterList" @click="selectValue(items)">{{items.menuName}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['select-options'],
		data() {
			return {
				btnValue: this.selectOptions.btnValue || "Go",
				selectData: this.selectOptions.selectData || [],
				inputVal: '',
				visiviblity: false
			}
		},
		computed: {
			filterList: function() { //类似于模糊查询
				var searchVal = this.inputVal;
				if(searchVal) {
					return this.selectData.filter(function(items) {
						return Object.keys(items).some(function(key) {
							return String(items[key]).indexOf(searchVal) > -1
						})
					})
				}
				return this.selectData
			}
		},
		methods: {
			selectValue(items) {
				//在子组件中选中,将里面的只放入到input中,进行交互
				//告知父级改变input框的value值
				this.inputVal = items.content;
				this.visiviblity = false
			},
			showAll() { //获取焦点显示所有
				this.inputVal = '';
				this.visiviblity = true
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.wrap {
		/*background: greenyellow;*/
		width: 280px;
		/*padding: 30px;*/
	}
	
	.searchTcp {
		background: whitesmoke;
		border-radius: 8px;
		padding: 5px 0;
		transition: all 2s ease;
	}
	
	.clearFix input[type='text'] {
		border-radius: 8px;
		padding: 5px 10px;
		border: 1px solid ghostwhite;
		background: ghostwhite;
		outline: none;
	}
	
	.clearFix input[type='text']:focus {
		border: 1px solid rgba(253, 163, 130, 0.59);
		;
	}
	
	.clearFix .search-btn {
		border-radius: 8px;
		padding: 5px 10px;
		border: none;
		background: rgba(253, 163, 130, 0.59);
		outline: none;
		cursor: pointer;
		color: white;
	}
	
	.clearFix input[type='button']:hover {
		border: 2px solid rgba(253, 163, 130, 0.8);
	}
	
	.select-list {
		list-style: none;
		margin-top: 5px;
		padding-left: 5px;
	}
	
	.select-list>li {
		height: 30px;
		line-height: 30px;
		width: 65%;
		text-align: left;
		padding: 0 10px;
		border-radius: 8px;
		cursor: pointer;
	}
	
	.select-list>li:hover {
		background: rgba(253, 163, 130, 0.59);
		color: white;
	}
</style>