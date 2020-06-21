<template>
  <div class="BG">
    <div class="imgbg">
      <img class='jpgs'
        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1963304009,2816364381&fm=26&gp=0.jpg" alt="">
      <img src="../sy.png" alt="" class="sy">
    </div>
    <!-- <ul> -->
    <!-- <li @click="openCamera">打开摄`111111像头</li>
      <li @click="closeCamer">关闭摄像头</li>
      <li @click="openMic">打开麦克风</li>
    </ul>
    <video id="selfvideo" autoplay muted></video>
    <audio ref='selfaudio' autoplay></audio> -->
  </div>
</template>

<script>
  document.onmousedown = function () {
    if (event.button == 2) {
      alert("当前页面不能使用右键！");
      return false;
    }
  }
  // import KDF from "kongdf";
  import KDF from "../KDF";
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        count: 0
      }
    },
    created() {


      window.KDF = KDF
      // KDF.CheckDeviceSupport().then(() => {
      //   console.log('初始化成功')
      // }).catch(error => {
      // })

      var BrowserInfo = KDF.GetBrowserInfo()

      // console.log(BrowserInfo)

      // var str='1234abc1234abc'
      // console.log(str.split('1').length-1)



      // let arr=[1,2,3,1,2,3,4,5,6,7,1,1,3]
      // console.log([...new Set(arr)])
      for (var i = 0; i < 5; i++) {
        // console.count('count');
      }
    },
    methods: {








      openCamera() {
        KDF.GetSelfVideoStream('selfvideo').then(srteam => {
          console.log('摄像头已打开')
        }).catch(err => {
          console.log(err)
        })
      },
      openMic() {
        KDF.GetSelfAudioStream('selfaudio').then(srteam => {
          console.log('麦克风已打开')
        }).catch(err => {
          console.log(err)
        })
      },
      closeCamer() {
        KDF.UnPublishVideo().then(srteam => {
          debugger
        }).catch(err => {
          console.log(err)
        })
      }
    }

  }
</script>
<style lang="scss">
  .BG {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: white;

    .imgbg {
      width: 500px;
      height: 500px;
      position: relative;

      .jpgs {
        width: 500px;
        height: 500px;
      }

      .sy {
        width: 100px;
        height: 100px;
        position: absolute;
        bottom: 0;
        right: 0;
      }

    }

    ul {
      float: right;
      // margin-top: 50px;
      width: 100px;
      height: 800px;
      background: #2A54B5;

      li {
        cursor: pointer;
      }
    }
  }
</style>