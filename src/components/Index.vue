<script setup>
import { ref,reactive } from 'vue'
import Home from './Home.vue'
import PTE from './PTE.vue'
import Roadmap from './Roadmap.vue'
import Community from './Community.vue'
import SpaceNFT from './SpaceNFT.vue'
import Header from './layout/Header.vue'
import About from './About.vue'
import 'vue3-carousel/dist/carousel.css'

const state = reactive({
  collapsed: false,
});

//const pages = [Home, PTE, Links, About]

</script>

<template>
  <a-layout>
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout-content >
      <Home />
      <PTE />
      <SpaceNFT />
      <Roadmap />
      <Community />
    </a-layout-content>
  </a-layout>
</template>

<style>
.ant-layout {
  width: 100vw;
  height: 100vh;
}

.ant-layout-header{
  padding:0px !important;
  position: fixed;
    width: 100%;
    z-index: 99;
}
</style>
