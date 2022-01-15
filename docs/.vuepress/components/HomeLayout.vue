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
                <a href="/interview/blockchain/01">Blockchain</a>
            </div>
            <div class="link-item">
                <a href="/interview/blockchain/01">Javascript</a>
            </div>
            <div class="link-item">
                <a href="http://music.163.com/playlist?id=972966771&userid=332295694">Music</a>
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