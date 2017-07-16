<template>
	<div class="index">
		<header>
			<div class="left">
				<img class="logo" src="../assets/logo.png">
				<span>{{msg}}</span>
			</div>
			<div class="right">
				<i class="glyphicon glyphicon-search"></i>
				<img class="user" src="../assets/smile.jpeg"></img>
			</div>
		</header>
		<div class="banner">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide">
						<img src="http://mhdtestks3.1391.com/upload/jdt/170425/gmlgdwhj.jpg">
			        </div>
			        <div class="swiper-slide">
			        	<img src="http://mhdtestks3.1391.com/upload/jdt/170516/dzz.jpg">
			        </div>
			        <div class="swiper-slide">
			        	<img src="http://mhdtestks3.1391.com/upload/jdt/170426/fxdhj.jpg">
			        </div>
			        <div class="swiper-slide">
			        	<img src="http://mhdtestks3.1391.com/upload/jdt/170517/dldal.jpg">
			        </div>
			        <div class="swiper-slide">
			        	<img src="http://mhdtestks3.1391.com/upload/jdt/170425/ylcq.jpg">
			        </div>
			        <div class="swiper-slide">
			        	<img src="http://mhdtestks3.1391.com/upload/jtd/170516/wdhdny.jpg">
			        </div>
			    </div>
			</div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
		<nav>
			<router-link class="link" :to="{ path: 'classify' }">
				<img src="../assets/nav01.jpg">
				<span>分类</span>
			</router-link>
			<router-link class="link" :to="{ path: 'rank' }">
				<img src="../assets/nav02.jpg">
				<span>排行</span>
			</router-link>
			<router-link class="link" :to="{ path: 'original' }">
				<img src="../assets/nav03.jpg">
				<span>原创</span>
			</router-link>
			<router-link class="link" :to="{ path: 'book' }">
				<img src="../assets/nav04.jpg">
				<span>书单</span>
			</router-link>
		</nav>
		<section>
			<div class="s-item">
				<img src="http://mhd.ufile.ucloud.com.cn/upload/pbl/0711/dldl.jpg">
				<p>斗罗大陆</p>
			</div>
			<div class="s-item">
				<img src="http://mhd.ufile.ucloud.com.cn/upload/fm/wangpaixiaocaofm.jpg">
				<p>王牌校草</p>
			</div>
			<div class="s-item">
				<img src="http://mhd.ufile.ucloud.com.cn/upload/fm/wangpaixiaocaofm.jpg">
				<p>王牌校草</p>
			</div>
			<div class="s-item">
				<img src="http://mhd.ufile.ucloud.com.cn/upload/pbl/0711/dldl.jpg">
				<p>斗罗大陆</p>
			</div>
		</section>
		<footer>加载更多...</footer>
	</div>
</template>

<script>
	export default {
	  name: 'index',
	  data () {
	    return {
	      msg: '青葱漫画'
	    }
	  }
	}
</script>

<style scoped>
 	.index{
 		width: 100%;
 		height: 100%;
 		position: relative;
 	}
 	header{
	    width: 100%;
	    height: 7%;
	    background: #fff;
	    font-size: 52px;
	    color: #eea933;
	    position: fixed;
	    top: 0;
	    left: 0;
  	}
  	.left{
  		float: left;
  		width: 80%;
  		height: 100%;
  	}
  	.right{
  		float: right;
  		width: 20%;
  		height: 100%;
  		text-align: center;
		padding-top: 16px;
  	}
 	.logo{
		width: 117px;
		height: 117px;
 	}
 	.user{
		width: 80px;
		height: 80px;
		margin-left: 20px;
		border-radius: 50%;
 	}
 	.banner{
 		width: 100%;
 		height: 28%;
 		overflow: hidden;
 		margin-top: 13%;
 	}
 	.swiper-container,.swiper-wrapper,.swiper-slide,.swiper-slide img{
 		width: 100%;
 		height: 100%;
 	}
 	nav{
 		width: 100%;
 		height: 12%;
 		display: flex;
 		justify-content: space-around;
 		font-size: 42px;
 	}
 	nav .link{
 		width: 25%;
 		text-align: center;
 		color: #666;
 		display: flex;
 		flex-direction: column;
 		justify-content: space-around;
 	}
 	nav img{
 		width: 84px;
 		height: 84px;
 		margin-left: 33%;
 		border-radius: 50%;
 	}
 	nav a:hover{
 		text-decoration: none;
 	}
 	section{
 		width: 100%;
 		display: flex;
 		flex-wrap: wrap;
 		justify-content: space-around;
 	}
 	.s-item{
 		width: 46%;
 	}
 	.s-item img{
 		width: 100%;
 		height: 85%;
 	}
 	.s-item p{
 		width: 100%;
 		height: 100px;
 		line-height: 100px;
 		font-size: 38px;
 	}
 	footer{
 		text-align: center;
 		width: 100%;
 		height: 140px;
 		line-height: 140px;
 		font-size: 36px;
 	}
</style>
