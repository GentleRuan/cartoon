<template>
  <div class="toper">
    <div class="back">{{msg}}</div>
    <div class="title">排行榜</div>
    <div class="search">
      <i class="glyphicon glyphicon-search"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'toper',
    data () {
      return {
        msg: '<_<'
      }
    }
  }
</script>

<style scoped>
  .toper{
    width: 100%;
    height: 7%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    font-size: 36px;
    padding: 4% 4% 0;
  }
  .back{
    width: 10%;
    text-align: center;
    font-weight: bold;
  }
  .title{
    width: 80%;
    text-align: center;
  }
  .search{
    width: 10%;
    text-align: center;
    color: #eea933;
  }
</style>
