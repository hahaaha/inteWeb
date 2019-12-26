<template>
    <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section section1">
                F
            </div>
            <div class="section section2">
                s
            </div>
            <div class="section section3">
                F
            </div>
            <div class="section section4">
                s
            </div>
        </full-page>
</template>
<script>
export default {
    data() {
        return {
            options: {
                licenseKey: '',
                autoScrolling:true,
                loopTop: true,
                loopBottom: true,
                scrollBar: true,
                sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
            },
            input: ''
        }
    }
}
</script>

<style>
.section{
    background-size: cover;
}
.section1 {
    background-color: rosybrown;
    background-image: url('../../img/one.jpeg');
}
.section2 {
    background-color: darkkhaki;
    background-image: url('../../img/two.jpg');
}
.section3 {
    background-color: rosybrown;
    background-image: url('../../img/three.jpg');
}
.section4 {
    background-color: darkkhaki;
    background-image: url('../../img/four.jpeg');
}
</style>