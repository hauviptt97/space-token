<script setup>

</script>

<template>
    <div id="pte" >
    <div class="homeContent">
        <a-row justify="center">
            <img id="pte-img" :src="$image('/images/component/', 'playtoearn.png')" alt="">
        </a-row>
        <a-row>
            <a-col :span="8">
                <span class="title">STAKING</span>
            </a-col>
            <a-col :span="8">
                <span class="title">STAKING</span>
            </a-col>
            <a-col :span="8">
                <span class="title">STAKING</span>
            </a-col>
        </a-row>
     
        </div>
    </div>
</template>

<style>
#pte {
    background-color: #181670;
    width: 100vw;
    height: 100vh;
}
#pte .ant-row .ant-col {
    text-align: center;

}

#pte-img {
    margin-top: -2vh;
    width: 33%;
}
</style>
