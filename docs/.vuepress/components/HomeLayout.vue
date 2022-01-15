<template>
    <div class="home">
        <h1>sheep</h1>
        <a href="/">链接</a>
    </div>
</template>

<script>
export default {
    name: 'HomeLayout',
    data(){
        return {

        }
    },
    created() {
        console.log(222)
    }
}
</script>

<style lang="less">
    @import "../public/css/reset.less";
    @import "./HomeLayout.less";
</style>