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
  import KDF from "../../public/KM_SDK_1.0";
  import {
    ref,
    reactive,
    onMounted,
    onUpdated,
    onUnmounted
  } from 'vue'
  export default {

    // setup() {
    //   const selfvideo = ref(selfvideo)
    //   onMounted(() => {
    //     console.log('mounted!')
    //     KDM.GetSelfStream().then(srteam => {
    //       console.log(srteam)
    //       selfvideo.srcObject = srteam
    //     }).catch(err => {
    //       console.log(err)
    //       debugger
    //     })
    //   })
    //   onUpdated(() => {
    //     console.log('updated!')
    //   })
    //   onUnmounted(() => {
    //     console.log('unmounted!')
    //   })

    //   return{
    //     selfvideo
    //   }
    // },




    created() {
      window.KDF = KDF
      KDF.Init().then(() => {
        console.log('初始化成功')
      }).catch(error=>{
        debugger
      })

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

  // created() {

  //   KDM.GetSelfStream().then(srteam => {
  //     console.log(srteam)
  //     this.$refs['selfvideo'].srcObject = srteam
  //   }).catch(err => {
  //     console.log(err)
  //     debugger
  //   })

  // }
  // }
</script>

<style lang="scss">
  .BG {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: white;


    ul {
      float: right;
      margin-top: 50px;
      width: 100px;
      height: 800px;
      background: #2A54B5;

      li {
        cursor: pointer;
      }
    }
  }
</style>