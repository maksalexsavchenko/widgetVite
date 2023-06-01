<template>
<div class="widget"
    :style="{
    'background-color': backgroundColor
    }"
    >
    <input v-model="name" type="text" placeholder="Coin" @blur="showValue">
</div>
</template>

<script >
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
    methods: {
        showValue() {
            alert(this.name)
        }
    }

}
</script>

<style >

</style>
