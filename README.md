# Zery-Layout
一个基于vue和element-ui开发的UI插件，其能快速搭建一个后台管理系统的布局。
###Attribute
|参数|说明|类型|可选值|默认值|
| :------------ | :------------ | :------------ | :------------ | :------------ |
|menu-list|导航菜单列表，配置项查看option|Array|--|[]|
|unique-opende|是否只保持一个子菜单的展开|Boolean|--|true|
|user-pic|用户头像|String|--| '/assets/img/user.png'  |
|bread-list|面包屑列表，配置项查看option|Array|--|this.$route.match()|
|router|是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转|boolen|--|false|
###Event
|事件|说明|回调参数|
| :------------ | :------------ | :------------ |
|fold-menu|菜单折叠和展开回调|value:菜单栏折叠状态|
|select-menu|菜单激活回调|index: 选中菜单项的 index, indexPath: 选中菜单项的 index path|
###menu-list option
|参数|说明|类型|
| :------------ | :------------ | :------------ |
|name|菜单名称|String|
|icon|图标，图标class|String|
|path|route路径|String|
|children|子菜单配置项，配置参数和上级配置项一致，当前版本支持最高二级菜单|String|
###bread-list option
|参数|说明|类型|
| :------------ | :------------ | :------------ |
|name|菜单名称|String|
####slot
|name|说明|
|:----|:----|
|logo|logo内容|
|drapdown|用户图标点击展示下拉框内容|
|header|头部栏内容，注意使用这个插槽时logo，drapdown，面包屑会被覆盖|
|main|主体栏内容|
|footer|底部栏内容|
###例子
`````
<template>
  <div id="app">
    <zery-layout
      :menu-list="menuList"
      :bread-list="breadList"
      :router="false"
      @fold-menu="foldMenu"
      @select-menu="selectMenu"
    >
      <div slot="logo" class="logo-wrapper">
        <span class="logo">
          <img src="/assets/img/logo-icon.png" alt="logo">
        </span>
        <span class="text" v-show="!foldFlag">Zery Admin</span>
      </div>
      <ul slot="dropdown" class="dropdown">
        <li>基本信息</li>
        <li>修改密码</li>
        <li>退出登录</li>
      </ul>
      <div slot="main" class="main">main</div>
      <div slot="footer" class="footer">Copyright &copy; 2019-2039 Zery Admin</div>
    </zery-layout>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      menuList: [
        {
          name: '导航一',
          icon: 'el-icon-location',
          path: '/location'
        },
        {
          name: '导航二',
          icon: 'el-icon-menu',
          path: '/menu',
          children: [
            {
              name: '选项一',
              path: '/menu/1'
            },
            {
              name: '选项二',
              path: '/meun/2'
            }
          ]
        },
        {
          name: '导航三',
          icon: 'el-icon-document',
          path: '/document'
        },
        {
          name: '导航四',
          icon: 'el-icon-setting',
          path: '/setting'
        }
      ],
      foldFlag: false,
      breadList: [
        {
          name: '首页',
          path: '/home',
        }
      ]
    }
  },
  methods: {
    foldMenu(value) {
      this.foldFlag = value
    },
    selectMenu(index, pathIndex) {
      this.breadList = pathIndex.map(item => {
        let obj = {}
        this.menuList.forEach(x => {
          if(x.path === item) {
            obj = {
              name: x.name,
              path: x.path
            }
          } else if(x.children){
            x.children.forEach(y => {
              if(y.path === item) {
                obj = {
                  name: y.name,
                  path: y.path
                }
              }
            })
          }
        })
        return obj
      })
    }
  }
}
</script>
<style lang="scss">
html, body {
  height:100%;
}
#app {
  height: 100%;
}
.logo-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background: #1F262D;
}
.logo {
  width: 40px;
  padding-left: 10px;
}
.text {
  font-size: 24px;
  color: #ffffff;
  font-weight: bold;
}
.footer {
  line-height: 30px;
  text-align: center;
}
.main {
  background: #fff;
  height: 100%;
}
.dropdown {
  width: 100%;
}
.dropdown li {
  padding: 4px 20px;
  text-align: center;
  cursor: pointer;
}
.dropdown li:hover {
  background: #606266;
  color: #fff;
}
</style>
`````
![zery-admin]("https://raw.githubusercontent.com/zhouzelin/vue-element-zery-layout/master/public/assets/img/zery-admin.png")

###github地址
[https://github.com/zhouzelin/vue-element-zery-layout][1]
[1]: https://github.com/zhouzelin/vue-element-zery-layout