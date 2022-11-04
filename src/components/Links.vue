<script setup>

</script>

<template>
    <div id="links"  v-bind:style="{ backgroundImage: 'url(' + $image('/', 'octopusbg2.jpg') + ')' } " class="bg">
    <div class="homeContent">
        <a-row style="margin-bottom: 70px;">
            <a-col :span="24">
                <span class="title">JOIN WITH ME</span>
            </a-col>
        </a-row>
        <a-row justify="center">
            <a-col :span="2">
                <a href="https://t.me/OctopusDegen" target="_blank"><i class="fa-brands fa-telegram"></i></a>
            </a-col>
            <a-col :span="2">
                <a href="https://twitter.com/Octopusdegen" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            </a-col>
        </a-row>
        </div>
    </div>
</template>

<style>
#links .ant-row .ant-col {
    text-align: center;
}

#links .ant-row i {
    font-size: 6vw;
    color: #fff;
}
</style>
