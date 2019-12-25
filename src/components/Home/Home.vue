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
    },
    computed: {
        currentComponent() {
            return "Photo"
        }
    }
}
</script>