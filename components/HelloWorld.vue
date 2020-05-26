<template>
  <div class="BG">
    <ul>
      <li @click="openCamera">打开摄像头</li>
      <li @click="closeCamer">关闭摄像头</li>
      <li @click="openMic">打开麦克风</li>
    </ul>
    <video id="selfvideo" autoplay muted></video>
    <audio ref='selfaudio' autoplay></audio>
  </div>
</template>

<script>
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

      // var  BrowserInfo= KDF.GetBrowserInfo()

      // console.log(BrowserInfo)

      // var str='1234abc1234abc'
      // console.log(str.split('1').length-1)



      // let arr=[1,2,3,1,2,3,4,5,6,7,1,1,3]
      // console.log([...new Set(arr)])
      for (var i = 0; i < 5; i++) {
        console.count('count');
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