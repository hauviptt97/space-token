<script setup>
const btnPlayNames = ['playgamebf.png', 'playgame.png']
const hovered = false
</script>

<template>
    <div id="mghome"></div>
<div id="home" v-bind:style="{ backgroundImage: 'url(' + $image('/images/', 'banner.jpg') + ')' } " class="bg">
    <a-row justify="center">
        <a-col span="6">
            <div class="night">
                <div v-for="n in 10" class="shooting_star"></div>

            </div>
        </a-col>
        <a-col span="6">
            <div class="night">
                <div v-for="n in 10" class="shooting_star"></div>
                <div style=" margin-top: 45vh; transform: rotateZ(-130deg);">
                    <a class="linkplay">
                        <img :src="$image('/images/component/', hovered ? btnPlayNames[1]:btnPlayNames[0])" @mouseover="this.hovered=!hovered" style="width:100%">
                    </a>
                </div>

            </div>
        </a-col>
        <a-col span="6">
            <div class="night">
                <div v-for="n in 15" class="shooting_star"></div>
            </div>
        </a-col>
    </a-row>

    <!-- <div class="homeContent">

<a-row  justify="center" @mouseover="hover" @mouseleave="unhover" >

</a-row>
</div> -->
</div>
</template>

<style>
.bg {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
}

#mghome{
    height: 7vh;
}

@media screen and (max-width: 1000px) {
    #mghome {
            height: 0;
        }
}

#home {
    width: 100%;
    height: 100vh;
    position: relative;
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
    font-weight: 700;
    font-family: 'Courier New', Courier, monospace;
    color: white;
}


.linkplay .change {
    display: none
}

.linkplay:hover {}

.night {
    transform: rotateZ(130deg);
}


@media screen and (min-width: 800px) {



.shooting_star {
    position: absolute;
    height: 2px;
    background: linear-gradient(-45deg, #fff, rgba(0, 0, 255, 0));
    border-radius: 999px;
    filter: drop-shadow(0 0 6px #699bff);
    -webkit-animation: tail 8000ms ease-in-out infinite, shooting 8000ms ease-in-out infinite;
    animation: tail 8000ms ease-in-out infinite, shooting 8000ms ease-in-out infinite;
}

.shooting_star::before {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff, rgba(0, 0, 255, 0));
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    -webkit-animation: shining 8000ms ease-in-out infinite;
    animation: shining 8000ms ease-in-out infinite;
}

.shooting_star::after {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff, rgba(0, 0, 255, 0));
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    -webkit-animation: shining 8000ms ease-in-out infinite;
    animation: shining 8000ms ease-in-out infinite;
    transform: translateX(50%) rotateZ(-45deg);
}

.shooting_star:nth-child(1) {
    top: calc(50% - 106px);
    left: calc(50% - 221px);
    -webkit-animation-delay: 6152ms;
    animation-delay: 6152ms;
}

.shooting_star:nth-child(1)::before,
.shooting_star:nth-child(1)::after {
    -webkit-animation-delay: 6152ms;
    animation-delay: 6152ms;
}

.shooting_star:nth-child(2) {
    top: calc(50% - 117px);
    left: calc(50% - 85px);
    -webkit-animation-delay: 852ms;
    animation-delay: 852ms;
}

.shooting_star:nth-child(2)::before,
.shooting_star:nth-child(2)::after {
    -webkit-animation-delay: 852ms;
    animation-delay: 852ms;
}

.shooting_star:nth-child(3) {
    top: calc(50% - -77px);
    left: calc(50% - 78px);
    -webkit-animation-delay: 3943ms;
    animation-delay: 3943ms;
}

.shooting_star:nth-child(3)::before,
.shooting_star:nth-child(3)::after {
    -webkit-animation-delay: 3943ms;
    animation-delay: 3943ms;
}

.shooting_star:nth-child(4) {
    top: calc(50% - 166px);
    left: calc(50% - 108px);
    -webkit-animation-delay: 479ms;
    animation-delay: 479ms;
}

.shooting_star:nth-child(4)::before,
.shooting_star:nth-child(4)::after {
    -webkit-animation-delay: 479ms;
    animation-delay: 479ms;
}

.shooting_star:nth-child(5) {
    top: calc(50% - -146px);
    left: calc(50% - 43px);
    -webkit-animation-delay: 3973ms;
    animation-delay: 3973ms;
}

.shooting_star:nth-child(5)::before,
.shooting_star:nth-child(5)::after {
    -webkit-animation-delay: 3973ms;
    animation-delay: 3973ms;
}

.shooting_star:nth-child(6) {
    top: calc(50% - -5px);
    left: calc(50% - 35px);
    -webkit-animation-delay: 5878ms;
    animation-delay: 5878ms;
}

.shooting_star:nth-child(6)::before,
.shooting_star:nth-child(6)::after {
    -webkit-animation-delay: 5878ms;
    animation-delay: 5878ms;
}

.shooting_star:nth-child(7) {
    top: calc(50% - 189px);
    left: calc(50% - 131px);
    -webkit-animation-delay: 2435ms;
    animation-delay: 2435ms;
}

.shooting_star:nth-child(7)::before,
.shooting_star:nth-child(7)::after {
    -webkit-animation-delay: 2435ms;
    animation-delay: 2435ms;
}

.shooting_star:nth-child(8) {
    top: calc(50% - 138px);
    left: calc(50% - 237px);
    -webkit-animation-delay: 8168ms;
    animation-delay: 8168ms;
}

.shooting_star:nth-child(8)::before,
.shooting_star:nth-child(8)::after {
    -webkit-animation-delay: 8168ms;
    animation-delay: 8168ms;
}

.shooting_star:nth-child(9) {
    top: calc(50% - -85px);
    left: calc(50% - 81px);
    -webkit-animation-delay: 1882ms;
    animation-delay: 1882ms;
}

.shooting_star:nth-child(9)::before,
.shooting_star:nth-child(9)::after {
    -webkit-animation-delay: 1882ms;
    animation-delay: 1882ms;
}

.shooting_star:nth-child(10) {
    top: calc(50% - -135px);
    left: calc(50% - 167px);
    -webkit-animation-delay: 8553ms;
    animation-delay: 8553ms;
}

.shooting_star:nth-child(10)::before,
.shooting_star:nth-child(10)::after {
    -webkit-animation-delay: 8553ms;
    animation-delay: 8553ms;
}

.shooting_star:nth-child(11) {
    top: calc(50% - -8px);
    left: calc(50% - 15px);
    -webkit-animation-delay: 3717ms;
    animation-delay: 3717ms;
}

.shooting_star:nth-child(11)::before,
.shooting_star:nth-child(11)::after {
    -webkit-animation-delay: 3717ms;
    animation-delay: 3717ms;
}

.shooting_star:nth-child(12) {
    top: calc(50% - 20px);
    left: calc(50% - 300px);
    -webkit-animation-delay: 4154ms;
    animation-delay: 4154ms;
}

.shooting_star:nth-child(12)::before,
.shooting_star:nth-child(12)::after {
    -webkit-animation-delay: 4154ms;
    animation-delay: 4154ms;
}

.shooting_star:nth-child(13) {
    top: calc(50% - -99px);
    left: calc(50% - 59px);
    -webkit-animation-delay: 9538ms;
    animation-delay: 9538ms;
}

.shooting_star:nth-child(13)::before,
.shooting_star:nth-child(13)::after {
    -webkit-animation-delay: 9538ms;
    animation-delay: 9538ms;
}

.shooting_star:nth-child(14) {
    top: calc(50% - -12px);
    left: calc(50% - 285px);
    -webkit-animation-delay: 3996ms;
    animation-delay: 3996ms;
}

.shooting_star:nth-child(14)::before,
.shooting_star:nth-child(14)::after {
    -webkit-animation-delay: 3996ms;
    animation-delay: 3996ms;
}

.shooting_star:nth-child(15) {
    top: calc(50% - 131px);
    left: calc(50% - 117px);
    -webkit-animation-delay: 1739ms;
    animation-delay: 1739ms;
}

.shooting_star:nth-child(15)::before,
.shooting_star:nth-child(15)::after {
    -webkit-animation-delay: 1739ms;
    animation-delay: 1739ms;
}

.shooting_star:nth-child(16) {
    top: calc(50% - 8px);
    left: calc(50% - 249px);
    -webkit-animation-delay: 3496ms;
    animation-delay: 3496ms;
}

.shooting_star:nth-child(16)::before,
.shooting_star:nth-child(16)::after {
    -webkit-animation-delay: 3496ms;
    animation-delay: 3496ms;
}

.shooting_star:nth-child(17) {
    top: calc(50% - -79px);
    left: calc(50% - 289px);
    -webkit-animation-delay: 6530ms;
    animation-delay: 6530ms;
}

.shooting_star:nth-child(17)::before,
.shooting_star:nth-child(17)::after {
    -webkit-animation-delay: 6530ms;
    animation-delay: 6530ms;
}

.shooting_star:nth-child(18) {
    top: calc(50% - 53px);
    left: calc(50% - 3px);
    -webkit-animation-delay: 5481ms;
    animation-delay: 5481ms;
}

.shooting_star:nth-child(18)::before,
.shooting_star:nth-child(18)::after {
    -webkit-animation-delay: 5481ms;
    animation-delay: 5481ms;
}

.shooting_star:nth-child(19) {
    top: calc(50% - -64px);
    left: calc(50% - 292px);
    -webkit-animation-delay: 7390ms;
    animation-delay: 7390ms;
}

.shooting_star:nth-child(19)::before,
.shooting_star:nth-child(19)::after {
    -webkit-animation-delay: 7390ms;
    animation-delay: 7390ms;
}

.shooting_star:nth-child(20) {
    top: calc(50% - 32px);
    left: calc(50% - 170px);
    -webkit-animation-delay: 8364ms;
    animation-delay: 8364ms;
}

.shooting_star:nth-child(20)::before,
.shooting_star:nth-child(20)::after {
    -webkit-animation-delay: 8364ms;
    animation-delay: 8364ms;
}

@-webkit-keyframes tail {
    0% {
        width: 0;
    }

    30% {
        width: 200px;
    }

    100% {
        width: 0;
    }
}

@keyframes tail {
    0% {
        width: 0;
    }

    30% {
        width: 100px;
    }

    100% {
        width: 0;
    }
}

@-webkit-keyframes shining {
    0% {
        width: 0;
    }

    50% {
        width: 30px;
    }

    100% {
        width: 0;
    }
}

@keyframes shining {
    0% {
        width: 0;
    }

    50% {
        width: 30px;
    }

    100% {
        width: 0;
    }
}

@-webkit-keyframes shooting {
    0% {
        transform: translateX(0vw);
    }

    100% {
        transform: translateX(80vw);
    }
}

@keyframes shooting {
    0% {
        transform: translateX(0vw);
    }

    100% {
        transform: translateX(80vw);
    }
}

@-webkit-keyframes sky {
    0% {
        transform: rotate(45deg);
    }

    100% {
        transform: rotate(405deg);
    }
}

@keyframes sky {
    0% {
        transform: rotate(45deg);
    }

    100% {
        transform: rotate(405deg);
    }
}
}
</style>
