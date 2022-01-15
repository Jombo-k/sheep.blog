<template>
    <div class="home">
        <div class="avatar-box">
            <div class="avatar-img">
                <a href="javascript:;" title="头像"></a>
            </div>
            <div class="avatar-name">
                <a href="https://github.com/Jombo-k/Jombo-k.github.io">Jombo-k</a>
            </div>
        </div>
        <div class="link-box">
            <div class="link-item">
                <a href="/interview/blockchain/01">[区块链]</a>
            </div>
            <div class="link-item">
                <a href="/interview/blockchain/01">「后朋」</a>
            </div>
            <div class="link-item">
                <a href="/interview/blockchain/01">「后摇」</a>
            </div>
            <div class="link-item">
                <!-- <a href="/interview/blockchain/01">「后朋」</a> -->
            </div>
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