<template>
    <div class="home">
        <div class="avatar-box">
            <a href="javascript:;" title="头像">
                
            </a>
        </div>
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