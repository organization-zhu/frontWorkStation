<template>
    <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
