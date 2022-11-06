<script setup>

</script>

<template>
    <div id="pte" >
    <div class="homeContent">
        <a-row justify="center">
            <img id="pte-img" :src="$image('/images/component/', 'playtoearn.png')" alt="">
        </a-row>
        <a-row  :gutter="[24,24]">
            <a-col :sm="8" :xs="24">
                <img class="ptes" :src="$image('/images/component/', 'build.png')" alt="">
                <p class="title">BUILD</p>
                <p class="description">Build your own team with the rarest NFT ships, equipments and items from the universe.</p>
            </a-col>
            <a-col :sm="8" :xs="24">
                <img class="ptes" :src="$image('/images/component/', 'conquer.png')" alt="">
                <p class="title">CONQUER</p>
                <p class="description">Travel to the stars, discover new worlds and win the epic battles.</p>
            </a-col>
            <a-col :sm="8" :xs="24">
                <img class="ptes" :src="$image('/images/component/', 'earn.png')" alt="">
                <p class="title">EARN</p>
                <p class="description">Earn NFTs by playing the game, then sell it on the marketplace for profit.</p>
            </a-col>
        </a-row>
        </div>
    </div>
</template>

<style>
#pte {
    background-color: #181670;
    padding: 20px;
}
#pte .ant-row .ant-col {
    text-align: center;
}

#pte-img {
    margin-top: -30px;
    width: 50%;
}

.ptes {
    width: 50%;
    margin: 20px 10px;
}

.description {
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Courier New', Courier, monospace;
    color: white;
}

@media screen and (max-width: 700px) {
    #pte-img {
            margin-top: -27px;
            width: 50%;
            height: 30%;
    }
}
</style>
