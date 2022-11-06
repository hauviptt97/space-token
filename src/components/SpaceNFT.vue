<script setup>
import 'vue3-carousel/dist/carousel.css';
import {
    Carousel,
    Slide,
    Pagination,
    Navigation
} from 'vue3-carousel';
const titleNFT = ["nft1.png", "nft2.png", "nft3.png", "nft4.png","ntf5.png"]
const dataNFT = [["nft1a.png", "nft1b.png", "nft1c.png", "nft1d.png"], ["nft2a.png", "nft2b.png", "nft2c.png", "nft2d.png"], ["nft3a.png", "nft3b.png", "nft3c.png", "nft3d.png"], ["nft4a.png", "nft4b.png", "nft4c.png", "nft4d.png"], ["nft5a.png", "nft5b.png", "nft5c.png", "nft5d.png"]]
</script>

<template>
    <div id="spacenft" >
    <div class="homeContent">
        <a-row justify="center">
            <a-col :span="24">
                <p class="title" style="font-size: 3.5rem; font-weight:800">SPACE SIP NFT</p>
                <p class="description">Every NFT Character has its own unique characteristics</p>
                <p class="description">from outlook to rarity which open different strategies in playing game.</p>
            </a-col>
        </a-row>
        <a-row justify="center">
            <a-col :span="5">
            <Carousel items-to-show="1" itemsToScroll="1"  autoplay="5000" :wrap-around="true" pause-autoplay-on-hover>
                <Slide v-for="list in dataNFT" :key="list">
                        <div class="carousel__item" >
                            <a-row>
                              <a-col v-for="item in list"  :key="item" :lg="6" :md="12" :xs="12" style="padding-bottom: 20px; ">
                                <img :src="$image('/images/nft/', item)" alt="" style="width: max(80%, 120px) " />
                            </a-col>
                            </a-row>
                        </div>
                </Slide>
                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
            </a-col>
        </a-row>
        </div>
    </div>
</template>

<style>
#spacenft {
    background-color: #181670;
    padding: 10px;
    padding-top: 70px;
}
#spacenft .ant-row .ant-col {
    display: flex;
        flex-direction: column;
        align-items: center;
    text-align: center;
            mix-blend-mode: screen;
            background-position: bottom;
            background-repeat: no-repeat;
            padding: 60px 20px;
}


.description {
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Courier New', Courier, monospace;
    color: white;
}

.carousel{
    width: 100vw;
}

.carousel__pagination{
    position: absolute;
    left: 37%;
    top: -20%;
}



 .carousel__pagination-item:nth-child(1) .carousel__pagination-button {
    width: 60px;
    height: 60px;
    margin: 15px;
    background-image: url(/images/nft/nft1.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.carousel__pagination-item:nth-child(2) .carousel__pagination-button {
    width: 60px;
    height: 60px;
    margin: 15px;
    background-image:  url(/images/nft/nft2.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.carousel__pagination-item:nth-child(3) .carousel__pagination-button {
    width: 60px;
    height: 60px;
    margin: 15px;
    background-image: url(/images/nft/nft3.png);
    background-repeat: no-repeat;
    background-size: cover;
}

.carousel__pagination-item:nth-child(4) .carousel__pagination-button {
    width: 60px;
    height: 60px;
    margin: 15px;
    background-image: url(/images/nft/nft4.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.carousel__pagination-item:nth-child(5) .carousel__pagination-button {
    width: 60px;
    height: 60px;
    margin: 15px;
    background-image: url(/images/nft/nft5.png);
    background-repeat: no-repeat;
    background-size: cover;
}


.carousel__pagination-item .carousel__pagination-button::after {
    display: none;
    }

        .carousel__pagination-button--active{
            border: 3px solid #fff;
            border-radius: 50%;
            padding: 2px;
        }

 @media screen and (max-width: 500px) {
     .carousel__pagination {
         position: absolute!important;
         left: 0 !important;
         top: -10% !important;
     }
    .carousel__pagination-button {
        margin: 10px !important;
        width: 40px !important;
        height: 40px !important;
     }
 }

 @media screen and (min-width: 500px) and (max-width: 800px) {
     .carousel__pagination {
         position: absolute !important;
         left: 15% !important;
         top: -10% !important;
     }
 }
</style>
