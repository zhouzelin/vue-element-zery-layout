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
@import '@/common/css/base.scss';
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
