/*
 **作者：孔大夫
 */

var ErrorCode={
    InitFailedNoSupportWebRTC:1,
    
}

class KDF {
    /**
     * 参数说明
     * @param {string} userId － 用户的userid
     * @param {string} appId － 企业id
     * @param {Array} participants 人员列表
     */
    constructor() {
        userId: null
        appId: null
        participants: []
        videoStream: null
        audioStream: null
       
    }
    Init() {
        return new Promise((resolve, reject) => {
            if (!(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)) {
                reject({code:ErrorCode['InitFailedNoSupportWebRTC']})
                console.error('浏览器不支持WebRTC');
            } else {
                resolve('浏览器支持WebRTC')
            }
        })
    }
    // stream.getTracks()
    GetUserMedia(control) {
        return new Promise((resolve, reject) => {

            navigator.mediaDevices.getUserMedia({
                    audio: control.audio,
                    video: control.video
                })
                .then(openLocalStream => {

                    resolve(openLocalStream)
                })
                .catch(function (error) {
                    reject(error)
                });
        })
    }

    // {
    //     audio: data.needAudio,
    //     video: data.isVideo
    //   }
    GetSelfVideoStream(ref) { //获取视频流
        return new Promise((resolve, reject) => {
            this.GetUserMedia({
                    audio: false,
                    video: true
                }).then(openLocalStream => {
                    this.videoStream = openLocalStream
                    document.getElementById(ref).srcObject = openLocalStream
                    // resolve(openLocalStream)
                    resolve('okk')
                })
                .catch(function (error) {
                    reject(error)
                });
        })
    }
    GetSelfAudioStream(ref) { //获取音频流
        return new Promise((resolve, reject) => {
            this.GetUserMedia({
                    audio: true,
                    video: false
                }).then(openLocalStream => {
                    document.getElementById(ref).srcObject = openLocalStream
                    this.audioStream = openLocalStream
                    resolve(openLocalStream)
                })
                .catch(function (error) {
                    reject(error)
                });
        })
    }
    UnPublishVideo() {
        return new Promise((resolve, reject) => {
            console.log(navigator.mediaDevices.getUserMedia)
            navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false
                })
                .then(openLocalStream => {
                    debugger
                    resolve(openLocalStream)
                })
                .catch(function (error) {
                    reject(error)
                });
        })
    }






}

export default new KDF()