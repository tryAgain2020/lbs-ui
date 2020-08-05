// 整个包的入口

// 1.引入所有组件
import Button from './Button.vue'
import Dialog from './Dialog.vue'
import Input from './Input.vue'
import './fonts/iconfont.css'

// 2.储存组件列表
const components = [Button, Dialog, Input]

// 3.定义 indtall 方法，接收 Vue 作为参数，使用use注册插件，注册所有组件
const install = function(Vue) {
  // 4.全局注册所有组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

// 判断是否直接引入文件，如果是，就不用调Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
