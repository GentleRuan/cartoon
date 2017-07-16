<template>
	<div class="classify">
		<header>
			<div class="back">{{msg}}</div>
			<div class="seek">
				<i class="glyphicon glyphicon-search"></i>
				<input type="text" placeholder="漫画名 | 作者 ^_^">
			</div>
		</header>
		<section>
			<div class="item">
				<img src="http://mhdufile.1391.com/upload/tc/lianai.png">
				<p>恋爱</p>
			</div>
			<div class="item">
				<img src="http://mhdufile.1391.com/upload/tc/rexue.png">
				<p>热血</p>
			</div>
			<div class="item">
				<img src="http://mhdufile.1391.com/upload/tc/dongzuo.png">
				<p>动作</p>
			</div>
			<div class="item">
				<img src="http://mhdufile.1391.com/upload/tc/maoxian.png">
				<p>冒险</p>
			</div>
			<div class="item">
				<img src="http://mhdufile.1391.com/upload/tc/xiaoyuan.png">
				<p>校园</p>
			</div>
			<div class="item">
				<img src="http://mhdufile.1391.com/upload/tc/dongzuo.png">
				<p>体育</p>
			</div>
			<div class="item">
				<img src="http://mhdufile.1391.com/upload/tc/kehuan.png">
				<p>科幻</p>
			</div>
			<div class="item">
				<img src="http://mhdufile.1391.com/upload/tc/bingjiao.png">
				<p>四格</p>
			</div>
			<div class="item">
				<img src="http://mhdufile.1391.com/upload/tc/kongbu.png">
				<p>恐怖</p>
			</div>
			<div class="item">
				<img src="http://mhdufile.1391.com/upload/tc/mohuan.png">
				<p>魔幻</p>
			</div>
			<div class="item">
				<img src="http://mhdufile.1391.com/upload/tc/zhiyu.png">
				<p>治愈</p>
			</div>
			<div class="item">
				<img src="http://mhdufile.1391.com/upload/tc/caiman.png">
				<p>彩漫</p>
			</div>
			<div class="item">
				<img src="http://mhdufile.1391.com/upload/tc/zhanzheng.png">
				<p>战争</p>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'classify',
		data () {
			return {
				msg: '<_<'
			}
		}
	}
</script>

<style scoped>
	.classify{
		width: 100%;
		height: 100%;
	}
	header{
		width: 100%;
		height: 7%;
		background: #eea933;
	}
	.back{
		width: 15%;
		height: 100%;
		float: left;
		font-size: 36px;
		color: #fff;
		text-align: center;
		margin-top: 3%;
	}
	.seek{
		width: 85%;
		height: 100%;
		float: left;
		position: relative;
	}
	.seek i{
		position: absolute;
		left: 5%;
		top: 36%;
		font-size: 36px;
		color: #999;
	}
	input{
		border: none;
		width: 95%;
		height: 70%;
		margin-top: 2%;
		border-radius: 10px;
		padding-left: 12%;
		font-size: 36px;
	}
	section{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.item{
		width: 33%;
		text-align: center;
		font-size: 36px;
		margin-top: 3%;
	}
	.item img{
		width: 200px;
		height: 200px;
	}
	.item p{
		margin-top: 6%;
	}
</style>
