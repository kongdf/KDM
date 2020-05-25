/*
 **作者：孔大夫
 */

var ErrorCode = {
    InitFailedNoSupportWebRTC: 1,

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
    /**
     * 检查浏览器是否支持WebRTC 
     */
    CheckDeviceSupport() {
        return new Promise((resolve, reject) => {
            if (navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                resolve('浏览器支持WebRTC')
            } else {
                reject({
                    code: ErrorCode['InitFailedNoSupportWebRTC']
                })
                console.error('浏览器不支持WebRTC');
            }
        })
    }

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



    /**
     * 去空格
     * @param {string} str － 需要去空格的字符串
     * @param {string} options － 去除哪里的空格
     * all 去除所有的空格
     * left 去除左边的空格
     * right去除右边的空格
     * both 去除两边的空格
     * center 去除中间的空格
     * 
     */
    trim(str, options = 'all') {

        if (!str) throw new Error('请输入要转换的字符串')

        switch (options) {
            case ('left'):
                str = str.replace(/^\s+/, '')
                break;
            case ('right'):
                str = str.replace(/\s+$/, '')
                break;
            case ('both'):
                str = str.replace(/^\s+/, '').replace(/\s+$/, '')
                break;
            case ('center'):
                while (str.match(/\w\s+\w/)) {
                    str = str.replace(/(\w)(\s+)(\w)/, `$1$3`)
                }
                break;
            case ('all'):
                str = str.replace(/\s/g, '')
                break;
            default:
        }

        return str
    }

    /**
     * 去除指定字符串
     * @param {string} str － 需要去空格的字符串
     * @param {string} delstr － 去除哪里的空格
     */
    delAppoint(str, delstr) {
        return str.replace(delstr, "");
    }



    /**
     * 获得浏览器信息
     * @param {string} str － 需要去空格的字符串
     * @param {string} delstr － 去除哪里的空格
     */
    GetBrowserInfo() {
        let BrowserInfo = {}
        var ua = navigator.userAgent //获取浏览器的userAgent,并转化为小写——注：userAgent是用户可以修改的 
        BrowserInfo.isMobile = /iPhone|iPad|iPod|iOS|Android/i.test(ua);
        BrowserInfo.userAgent = ua;
        if (!!window.ActiveXObject || "ActiveXObject" in window) {
            BrowserInfo.Explorer = 'ie';
        }
        if (window.document.documentMode) {
            BrowserInfo.Explorer = 'ie';
        } else if (ua.includes("Firefox")) {
            BrowserInfo.Explorer = 'Firefox';
            BrowserInfo.Version = ua.split('Firefox/')[1].split('.')[0];
        } else if (ua.includes("Chrome")) {
            BrowserInfo.Explorer = 'Chrome';
            BrowserInfo.Version = ua.split('Chrome/')[1].split('.')[0];
        } else if (ua.includes("Safari")) {
            BrowserInfo.Explorer = 'Safari';
            BrowserInfo.Version = ua.split('Safari/')[1].split('.')[0];
        }

        BrowserInfo.isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1; //g
        BrowserInfo.isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        BrowserInfo.isMac = /macintosh|mac os x/i.test(ua);
        BrowserInfo.isWin=/windows|win32/i.test(ua)

        return BrowserInfo

    }

    GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    // var ua = navigator.userAgent.toLowerCase(); //获取浏览器的userAgent,并转化为小写——注：userAgent是用户可以修改的





}

export default new KDF()