
<script setup>

const btnPlayNames = ['playgamebf.png','playgame.png']
const hovered = false
</script>

<template>
    <div  id="home" v-bind:style="{ backgroundImage: 'url(' + $image('/images/', 'banner.jpg') + ')' } " class="bg">
        <div class="homeContent">
<a-row  justify="center" @mouseover="hover" @mouseleave="unhover" >
    <a class="linkplay">
        <img :src="$image('/images/component/', hovered ? btnPlayNames[1]:btnPlayNames[0])" @mouseover="this.hovered=!hovered" style="width:50%"  >
    </a>
</a-row>
</div>
    </div>
    

</template>

<style>
.bg {
    width: 100%;
    height: 90vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
}
#home {
    margin-top:12vh;
}

#home .ant-row {
    margin-bottom: 3vh;
}

.ant-row .ant-col {
    text-align: center;
    color: #fff;
}

#home .ant-row i {
    font-size: 3vw;
    color: #fff;
}

.title {
    font-size: 3.3rem;
    font-weight: 500;
    font-family: 'Courier New', Courier, monospace;
    color: white;
}

.linkplay {
    margin-top: 35vh;
}

.linkplay .change {
    display:none
}

.linkplay:hover {
    
}



</style>
