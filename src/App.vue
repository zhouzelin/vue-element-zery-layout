<template>
  <div id="app">
    <zery-layout
      :menu-list="menuList"
      :bread-list="breadList"
      :router="false"
      @fold-menu="foldMenu"
    >
      <div slot="logo" class="logo-wrapper">
        <span class="logo">
          <img src="/assets/img/logo-icon.png" alt="logo">
        </span>
        <span class="text" v-show="!foldFlag">
          Zery Admin
        </span>
      </div>
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
        },
        {
          name: '导航一',
          path: '/location'
        }
      ]
    }
  },
  methods: {
    foldMenu(value) {
      this.foldFlag = value
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
</style>
