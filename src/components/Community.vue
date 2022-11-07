<script setup>

</script>

<template>
    <div id="community" >
    <div class="homeContent">
        <a-row justify="center">
            <p class="title" style="font-size: 3.5rem; font-weight:800; margin: 50px">community</p>
        </a-row>
        <a-row id="footer" justify="center">
            <a-col  :lg="5" :md="12" :xs="12">
                <a href="">
                <img class="link-img" :src="$image('/images/component/', 'discord.png')" alt="" />
                </a>
            </a-col>
            <a-col :lg="5" :md="12" :xs="12">
                <a href="">
                <img class="link-img" :src="$image('/images/component/', 'telegram.png')"  alt="" />
                </a>
            </a-col>
            <a-col :lg="5" :md="12" :xs="12">
                <a href="">
                <img class="link-img" :src="$image('/images/component/', 'youtube.png')" alt="" />
                </a>
            </a-col>
            <a-col :lg="5" :md="12" :xs="12">
                <a href="">
                <img class="link-img" :src="$image('/images/component/', 'twiter.png')" alt="" />
                </a>
            </a-col>
        <a-col :lg="6" :md="6" :xs="0"><img class="link-img" :src="$image('/images/component/', 'logofoot.png')" alt="" /></a-col>
        </a-row>
        
        </div>
    </div>
</template>

<style>
#community {
    height: 100vh;
    background-color: #181670;
    background-image: url(/images/component/footbg.png);
   background-repeat: no-repeat;
   background-size: cover;
   background-position: top;
}


.link-img {
    width: 50%;
    margin: 50px 10px;
}
</style>
