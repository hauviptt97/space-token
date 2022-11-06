<script setup>
import { ref } from 'vue'
import Home from './Home.vue'
import PTE from './PTE.vue'
import Links from './Links.vue'
import About from './About.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';

const collapsed = true

const pages = [Home, PTE, Links, About]

</script>

<template>
  <a-layout>
    <a-layout-header>
    <div class="constract" v-bind:style="{ backgroundImage: 'url(' + $image('/images/component/', 'headerbg.png') + ') !important' } ">
    <a-row justify="center" align="center" >
      <a-col :sm="6" :xs="0">
        <span style=" font-weight: 800; font-size: min(3vh,18px);  text-transform: uppercase; color:#ffff"> SIP Contract:</span>
      </a-col>
      <a-col :sm="18" :xs="21" style="text-align: center;">
        <a-typography-text copyable
          style="background: rgba(0, 0, 0, 0.5); border-radius: 8.40801px; padding: 10px 5px;  align-items: center;">
          <span style="  margin: 10px; font-weight: 500; font-style: italic; font-size: min(3.3vw, 15px); color: yellow; word-break: break-all;">
            0x55a020925d1dBAE2aEF72cc9f4b2F584429a5b99
          </span>
        </a-typography-text>
      </a-col>
      <a-col :sm="24" :xs="3">
      <div id="menu">
        <a-row>
          <a-col :sm="24" :xs="4">
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
          </a-col>
        </a-row>
      </div>
      </a-col>
    </a-row>
    

    </div>
    </a-layout-header>
    <a-layout-content >
      <Home />
      <PTE />
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

.ant-typography-expand,
.ant-typography-edit,
.ant-typography-copy{
}

.anticon svg {
    width:2vh;
    height:2vh;
    color:#fff;
}

#menu ul {
  background: transparent;
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
  height: max-content;
  width: 100vw;
  color: rgba(0, 0, 0, 0.85);
  line-height: 64px;
  background: transparent;
}

.ant-layout .ant-layout-header .ant-menu-horizontal {
  border: none;
}

.ant-layout .ant-layout-content {
height: 100vh;
}

.constract {
  background-position: 50%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}



</style>
