<template>
    <div class="widget">
        <input v-model="name" type="text" placeholder="Coin">
    </div>
</template>

<script>
export default {
    name: 'WidgetComponent',
    data() {
        return {
            name: '',
            backgroundColor: ''
        }
    },
    mounted() {
        let q = this.$route.query
        this.name = q.coin
    },
}
</script>

<style>

</style>
