<script>
</script>
<template>
    <div class="constract"
        v-bind:style="{ backgroundImage: 'url(' + $image('/images/component/', 'headerbg.png') + ') !important' }">
        <a-row justify="center" align="center">
            <a-col :lg="12" :xs="2">
                <div id="menu">
                    <a-row>
                        <a-col :sm="24" :xs="1">
                            <a-menu v-model:selectedKeys="current" mode="horizontal" :inline-collapsed="collapsed">
                                <a-menu-item @click="toHomeClick" key="logo">
                                        <img :src="$image('/images/component/', 'logomenu.png')"  alt="" style="width: 50px; height:50px">
                                </a-menu-item>
                                <a-menu-item @click="toHomeClick" key="Marketplace">
                                    NFT Marketplace
                                </a-menu-item>
                                <a-menu-item key="Roadmap">
                                <a href="#roadmap">

                                    Roadmap

                                </a>
                                </a-menu-item>
                                <a-menu-item @click="toHomeClick" key="Whitepaper">
                                    Whitepaper
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
            <a-col :lg="3" :md="2" :xs="0">
                <span style=" font-weight: 800; font-size: min(3vh,18px);  text-transform: uppercase; color:#ffff">
                    Contract</span>
            </a-col>
            <a-col :lg="9" :md="20" :xs="22" style="text-align: center;">
                <a-typography-text copyable
                    style="background: rgba(0, 0, 0, 0.5); border-radius: 8.40801px; padding: 10px 5px;  align-items: center;">
                    <span id="constract-code">
                        0x55a020925d1dBAE2aEF72cc9f4b2F584429a5b99
                    </span>
                </a-typography-text>
            </a-col>
        </a-row>
    </div>
</template>

<style>
.anticon svg {
    width: 2vh;
    height: 2vh;
    color: #fff;
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
    border-bottom: none;
}

#menu ul li:hover {
    color: yellow;
}

#menu .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-selected {
    color: yellow !important;
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


#constract-code {
    margin: 10px;
    font-weight: 500;
    font-style: italic;
    font-size: 16px;
    color: yellow;
    word-break: break-all;
}

@media screen and (max-width: 700px) {
    #constract-code {
        font-size: 10px;
    }
}
</style>