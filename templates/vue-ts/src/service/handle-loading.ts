
// import { Loading } from 'element-ui'
// import { ElLoadingComponent } from 'element-ui/types/loading'

let loadingInstance = null
let requestNum = 0

export const createLoading = () => {
  // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
  requestNum++
  if (requestNum == 1) {
    // loadingInstance = Loading.service({
    //   text: '正在努力加载中....',
    //   background: 'rgba(0, 0, 0, 0)',
    // })
  }
}

export const destoryLoading = () => {
  // 取消loading 如果pending请求数量等于0，关闭loading
  requestNum--
  if (requestNum === 0) {
    // loadingInstance?.close()
  }
}