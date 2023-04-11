<template>
  <n-layout>
    <n-layout-header bordered inverted>
      <div class="nav-box">
        <div class="left-menu">
          <n-gradient-text
            :size="24"
            gradient="linear-gradient(90deg, hsla(232, 73%, 65%, 1) 0%, hsla(148, 74%, 36%, 1) 0%, hsla(148, 74%, 36%, 1) 0%, hsla(37, 87%, 53%, 1) 100%, hsla(37, 87%, 53%, 1) 100%)"
          >
            BOOK TRACKER
          </n-gradient-text>
        </div>
      </div>
    </n-layout-header>
    <n-layout-content content-style="padding: 10px;">
      <div class="content-box">
        <div class="content">
          <slot />
        </div>
      </div>
    </n-layout-content>
  </n-layout>
</template>
<script lang="ts" setup>
import { NLayout, NLayoutHeader, NLayoutContent, NGradientText } from 'naive-ui'
</script>
<style>
#__nuxt {
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 320px;
  --header-height: 64px;
  --content-width: 1300px;
  --content-max-width: calc(100vw - 32px);
}

body {
  overflow: auto;
  -webkit-font-smoothing: antialiased;
}

.n-scrollbar {
  --n-scrollbar-width: 10px !important;
  --n-scrollbar-height: 12px !important;
}

.n-layout-header {
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 16px;
}

.nav {
  height: calc(var(--header-height) - 1px);
  display: flex;
  justify-content: center;
}

.nav-box {
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: var(--content-width);
  max-width: var(--content-max-width);
}

.left-menu {
  display: flex;
}

.nav-menu {
  padding-left: 100px;
  font-size: 18px;
  font-weight: 500;
}

.ui-logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
}

.ui-logo > img {
  margin-right: 12px;
  height: 32px;
  width: 100px;
}

.content-box {
  margin: auto;
  width: var(--content-width);
  max-width: var(--content-max-width);
}
</style>
