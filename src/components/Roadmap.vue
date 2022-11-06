<script setup>

</script>

<template>
    <div ref="roadmap" id="roadmap" >
    <div class="homeContent">
        <a-row justify="center" style="background-image: url(/images/component/artbg.png); ;">
            <p class="title" style="font-size: 3.5rem; font-weight:800; margin-top: 50px">Roadmap 2022</p>
        </a-row>
        <a-row id="art">
            <a-col  :span="24">
                <img :src="$image('/images/component/', 'roadmap.svg')" style="width: 100%; height: 100%;" alt="" />
            </a-col>
        </a-row>
        </div>
    </div>
</template>

<style>
#roadmap {
    background-color: #181670;
    background-image: url(/images/component/starbg.png) !important;
   background-repeat: no-repeat;
   background-size: cover;
   background-position: top;
}

#art {
    background-image: url(/images/component/artbg.png);
    background-repeat: no-repeat;
    background-size: contain;
}

</style>
