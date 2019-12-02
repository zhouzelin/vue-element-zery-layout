<template>
  <el-container class="zery-layout-container">
    <!--菜单栏-->
    <el-aside :width="asideWidth" class="zery-layout-aside">
      <div class="zery-layout-logo">
        <slot name="logo"></slot>
      </div>
      <div class="zery-layout-menu-wrapper">
        <el-scrollbar>
          <el-menu
            :collapse="isCollapse"
            background-color="#1F262D"
            text-color="#fff"
            active-text-color="#ffd04b"
            class="zery-layout-menu"
            :collapse-transition="false"
            :unique-opened="uniqueOpened"
            :router="router"
          >
            <component
              v-for="(menu, index) in menuList"
              :key="index"
              :is="menu.children && menu.children.length ? 'el-submenu' : 'el-menu-item'"
              :index="menu.path"
            >
              <template v-if="menu.children && menu.children.length" slot="title">
                <i :class="menu.icon"></i><span slot="title">{{menu.name}}</span>
              </template>
              <template v-else>
                <i :class="menu.icon"></i><span slot="title">{{menu.name}}</span>
              </template>
              <component
                v-for="(item, index) in menu.children"
                :key="index"
                :is="item.children && item.children.length ? 'el-submenu' : 'el-menu-item'"
                :index="item.path"
              >
                <template v-if="item.children && item.children.length" slot="title">
                  <i :class="item.icon"></i><span slot="title">{{item.name}}</span>
                </template>
                <template v-else>
                  <i :class="item.icon"></i><span slot="title">{{item.name}}</span>
                </template>
              </component>
            </component>
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
      <!--头部栏-->
      <el-header height="64px" class="zery-layout-header">
        <div class="zery-layout-fold-menu-btn" @click="foldMenu">
          <i class="el-icon-s-unfold" v-show="isCollapse"></i>
          <i class="el-icon-s-fold" v-show="!isCollapse"></i>
        </div>
        <slot name="header">
          <el-breadcrumb separator="/" class="zery-layout-bread">
            <el-breadcrumb-item class="zery-layout-bread-item" v-for="(item, index) in breadList" :key="index">{{item.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="zery-layout-user-wrapper">
            <el-avatar
              size="small"
              :src="userPic"
              @blur="$emit('user-blur', $event)"
              @click="$emit('user-click', $event)"
            >
            </el-avatar>
            <slot name="option-list"></slot>
          </div>
        </slot>
      </el-header>
      <!--身体-->
      <el-main class="zery-layout-main">
        <slot></slot>
      </el-main>
      <!--底部部栏-->
      <el-footer height="30px" class="zery-layout-foot">
        <slot name="footer"></slot>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'zery-layout',
  data() {
    return {
      isCollapse: false,
      asideWidth: '250px'
    }
  },
  props: {
    menuList: {
      type: Array,
      default: () => []
    },
    uniqueOpened: {
      type: Boolean,
      default: true
    },
    userPic: {
      type: String,
      default: () => '/assets/img/user.png'
    },
    breadList: {
      type: Array,
      default: () => []
    },
    router: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    foldMenu() {
      if(this.isCollapse) {
        this.isCollapse = false
        this.asideWidth = '250px'
      } else {
        this.asideWidth = '64px'
        this.isCollapse = true
      }
      this.$emit('fold-menu', this.isCollapse)
    }
  }
}
</script>

<style lang="scss" scoped>
.zery-layout-container {
  height: 100%;
  width: 100%;
  .zery-layout-aside {
    background: #1F262D;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .zery-layout-menu-wrapper {
      flex: 1;
    }
    .zery-layout-menu {
      border-right: none;
    }
  }
  .zery-layout-header {
    background: #141619;
    padding-left: 0;
    display: flex;
    align-items: center;
    .zery-layout-fold-menu-btn {
      height: 100%;
      width: 54px;
      line-height: 64px;
      text-align: center;
      color: rgba(255, 255, 255, 0.8);
      font-size: 24px;
      margin-right: 10px;
      cursor: pointer;
      &:hover {
        color: #fff;
        background: lighten($color: #141619, $amount: 5);
      }
    }
    .zery-layout-bread {
      flex: 1;
      &-item {
        /deep/ .el-breadcrumb__inner {
          color: #fff;
        }
      }
    }
  }
  .zery-layout-main {
    background: #eeeeee;
    overflow: auto;
    padding: 8px;
  }
  .zery-layout-foot {
    background: #ffffff;
    color: #666;
  }
  .zery-layout-logo {
    height: 64px;
  }
}
</style>
