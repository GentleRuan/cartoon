<template>
    <div class="rank">
        <v-toper></v-toper>
        <section>
            <div class="item">
                <div class="pic">
                  <img src="http://mhdtestks3.1391.com/upload/mhfm/170310/dldl.jpg">
                </div>
                <div class="info">
                  <h1>斗罗大陆</h1>
                  <p>作者：风炫动漫 穆逢春</p>
                  <p>人气：13.43亿</p>
                </div>
                <div class="ico">
                  <img src="../assets/one.jpg">
                </div>
            </div>
            <div class="item">
                <div class="pic">
                  <img src="http://mhdtestks3.1391.com/upload/mhfm/170310/dldl.jpg">
                </div>
                <div class="info">
                  <h1>斗罗大陆</h1>
                  <p>作者：风炫动漫 穆逢春</p>
                  <p>人气：13.43亿</p>
                </div>
                <div class="ico">
                  <img src="../assets/two.jpg">
                </div>
            </div>
            <div class="item">
                <div class="pic">
                  <img src="http://mhdtestks3.1391.com/upload/mhfm/170310/dldl.jpg">
                </div>
                <div class="info">
                  <h1>斗罗大陆</h1>
                  <p>作者：风炫动漫 穆逢春</p>
                  <p>人气：13.43亿</p>
                </div>
                <div class="ico">
                  <img src="../assets/three.jpg">
                </div>
            </div>
            <div class="item">
                <div class="pic">
                  <img src="http://mhdtestks3.1391.com/upload/mhfm/170310/dldl.jpg">
                </div>
                <div class="info">
                  <h1>斗罗大陆</h1>
                  <p>作者：风炫动漫 穆逢春</p>
                  <p>人气：13.43亿</p>
                </div>
                <div class="ico">
                  <span>4</span>
                </div>
            </div>
            <div class="item">
                <div class="pic">
                  <img src="http://mhdtestks3.1391.com/upload/mhfm/170310/dldl.jpg">
                </div>
                <div class="info">
                  <h1>斗罗大陆</h1>
                  <p>作者：风炫动漫 穆逢春</p>
                  <p>人气：13.43亿</p>
                </div>
                <div class="ico">
                  <span>5</span>
                </div>
            </div>
            <div class="item">
                <div class="pic">
                  <img src="http://mhdtestks3.1391.com/upload/mhfm/170310/dldl.jpg">
                </div>
                <div class="info">
                  <h1>斗罗大陆</h1>
                  <p>作者：风炫动漫 穆逢春</p>
                  <p>人气：13.43亿</p>
                </div>
                <div class="ico">
                  <span>6</span>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import toper from '../components/toper'
    export default {
        name: 'rank',
        data () {
          	return {
              	
            }
        },
        components: {
            'v-toper': toper
        }
    }
</script>

<style scoped>
    .rank{
        width: 100%;
        height: 100%;
    }
    section{
      width: 100%;
    }
    .item{
      width: 100%;
      height: 320px;
      display: flex;
      padding-top: 3%;
      border-bottom: 1px solid #eea933;
      font-size: 36px;
    }
    .pic{
      width: 30%;
      height: 100%;
      text-align: center;
    }
    .pic img{
      width: 200px;
      height: 260px;
    }
    .info{
      width: 50%;
      height: 100%;
    }
    .ico{
      width: 120px;
      text-align: center;
      position: relative;
    }
    .ico img{
      margin-top: 47%;
    }
    .ico span{
      color: #999;
      position: absolute;
      top: 34%;
      left: 0;
      right: 0;
      margin: auto;
    }
    h1{
      font-size: 44px;
    }
    p{
      color: #999;
      line-height: 240%;
    }
</style>
