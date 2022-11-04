<script setup>
import { ClockCircleOutlined } from '@ant-design/icons-vue';

</script>

<template>
    <div id="about"  v-bind:style="{ backgroundImage: 'url(' + $image('/', 'octopusbg3.jpg') + ')' } " class="bg">
    <div class="homeContent">
        <a-timeline mode="alternate">
            <a href="" target="_blank">
            <a-timeline-item>
                <a-typography>
                        <blockquote>
                            Contract is created 20-10-2022
                        </blockquote>
                    <a-divider />
                    <a-typography-paragraph>
                        Octopuses are sea animals famous for their rounded bodies, bulging eyes, and eight long arms. They live in all the
                        world’s oceans but are especially abundant in warm, tropical waters. Octopuses, like their cousin, the squid, are often
                        considered “monsters of the deep,”. And now, the return of Ocean ruler
                    </a-typography-paragraph>
                </a-typography>
            </a-timeline-item>
            </a>
            <a-timeline-item>
                <a-typography>
                    <blockquote>Community is born 21-10-2022</blockquote>
                    <a-divider />
                    <a-typography-paragraph>
                    Octopus's team has been pouring in work over the last week, create telegram community, twitter, building a website design plan
                    </a-typography-paragraph>
                </a-typography>
                </a-timeline-item>
                <a-timeline-item>
                    <a-typography>
                        <blockquote>Website is created 25-10-2022</blockquote>
                        <a-divider />
                        <a-typography-paragraph>
                            Octopus community has been pouring in work over the last week, creating websites, marketing
                            videos,
                            community events, and too many other community centric items to list. This is Octopus community of 2022
                        </a-typography-paragraph>
                    </a-typography>
                </a-timeline-item>
                <a-timeline-item color="green">Add liquied 29-10-2022</a-timeline-item>
        </a-timeline>
        </div>
    </div>
</template>

<style>
#about{
    overflow-y: scroll !important;
     
}

#about .ant-row .ant-col {
    text-align: center;
}

#about .homeContent{
    margin-top: 25vh;
    padding: 20px;
}
.homeContent .ant-timeline , .homeContent .ant-typography{
    font-size: 1rem;
    color: #fff;
}

 .homeContent .ant-typography blockquote {
    display: inline;
    border-left: 4px solid yellowgreen;
    opacity: 0.85;
}
</style>
