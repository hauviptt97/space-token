<script setup>
import { ref } from 'vue'
import Home from './Home.vue'
import Staking from './Staking.vue'
import Links from './Links.vue'
import About from './About.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';


const pages = [Home, Staking, Links, About]

</script>

<template>
  <a-layout>
    <a-layout-header style="position:fixed;">
    <div class="constract" v-bind:style="{ backgroundImage: 'url(' + $image('/images/component/', 'headerbg.png') + ')' } ">
    <a-row justify="center" >
      <span style=" font-weight: 900; font-size: 20px;  text-transform: uppercase; color:#ffff"> SIP Contract:</span> 
        <div style="margin-top: -2px; margin-left: 10px">
        <a-typography-text copyable style="background: rgba(0, 0, 0, 0.5);
    border-radius: 8.40801px;
    padding: 10px 20px;
    align-items: center;">
        <span  style="  margin: 50px; font-weight: 500; font-style: italic; font-size: 1.5rem; color: yellow;">
        0x55a020925d1dBAE2aEF72cc9f4b2F584429a5b99
        </span>
        </a-typography-text>
        </div>
    </a-row>
    <div id="menu">
    <a-row >
      <a-menu v-model:selectedKeys="current" mode="horizontal" :inline-collapsed="collapsed">
      <a-menu-item @click="toHomeClick" key="Marketplace">
          NFT Marketplace
        </a-menu-item>
        <a-menu-item @click="toHomeClick" key="Roadmap">
          Roadmap
        </a-menu-item>
        <a-menu-item @click="toHomeClick" key="Whitepaper">
          Whitepaper
        </a-menu-item>
        <a-menu-item @click="toHomeClick" key="Deck">
          Pitch Deck
        </a-menu-item>
        <a-menu-item @click="toStakingClick" key="staking">
          Staking
        </a-menu-item>
        <a-menu-item @click="toLinksClick" key="link">
          Links
        </a-menu-item>
      </a-menu>
      </a-row>
    </div>

    </div>
    </a-layout-header>
    <a-layout-content >
      <Home />
      <Home />
    </a-layout-content>
  </a-layout>
</template>

<style>
.ant-layout {
  width: 100%;
  height: 100vh;
}

.ant-layout-header{
  padding:0px !important;
}

.anticon svg {
    width:2rem;
    height:1.5rem;
    color:#fff
}

#menu ul {
    background: linear-gradient(180deg,#181670 74.7%,rgba(15,33,55,0));
  color: #fff;
  font-size: 1rem;
  width: 100%;
  font-weight: 400;
  font-family: 'Courier New',
    Courier,
    monospace;
}

#menu .ant-menu-horizontal {
  border-bottom:none;
}

#menu ul li:hover{
  color: yellow;
}

#menu .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-selected {
  color: yellow;
}


#menu .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-selected::after {
  border-bottom: 2px solid yellow;
}


.ant-layout .ant-layout-header {
  height: 10vh;
  width: 100vw;
  color: rgba(0, 0, 0, 0.85);
  line-height: 64px;
  background: transparent;
}

.ant-layout .ant-layout-header .ant-menu-horizontal {
  border: none;
}

.ant-layout .ant-layout-content {
height: 93vh;
}

.constract {
  background-position: 50%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
