<template>
	<div id="app">
		<!--<img src="./assets/logo.png">-->
		<nav class="menu-box">
			<ul>
				<li>
					<a href="#/select">search-select</a>
				</li>
				<li>
					<a href='#/treeMenu'>tree-menu</a>
				</li>
				<li>
					<a>button</a>
				</li>
			</ul>
		</nav>
		<div class="content-box">
		<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	.menu-box{
		border-top:3px solid #009a61;
		height: 40px;
		background: #fafafa;
		overflow: hidden;
	}
	.menu-box ul{
		list-style: none;
		height: 30px;
		margin: 5px 0;
		line-height: 30px;
	}
	.menu-box ul li{
		cursor: pointer;
		color: #9e9e9e;
		float: left;
		/*border-right: 1px solid gainsboro;*/
		padding: 0 10px ;
		transition: all 0.5s linear;
	}
	.menu-box ul li a{
		text-decoration: none;
	}
	.menu-box ul li:hover{
		color: #de5959;
	}
	.content-box{
		padding: 15px;
	}
</style>