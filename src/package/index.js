import Vue from 'vue'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import layout from './layout.vue'
Vue.use(elementUi)

layout.install = Vue => Vue.component(layout.name, layout)

if(typeof window != 'undefined' && window.vue) {
  window.Vue.use(layout)
}

export default layout
