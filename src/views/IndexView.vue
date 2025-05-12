<template>
    <template v-if="typeof(query) == 'undefined' || query==''">
        <HomeView :googleCseCx="googleCseCx"></HomeView>
    </template>
    <template v-else>
        <ResultView :googleCseCx="googleCseCx"></ResultView>
    </template>
</template>
<script>
    import HomeView from "@/views/HomeView.vue"
    import ResultView from "@/views/ResultView.vue"
    export default {
        props:['query','googleCseCx'],
        components:{
            HomeView,
            ResultView
        }
    }
</script>
