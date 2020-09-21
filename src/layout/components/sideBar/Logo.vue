<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link">

      </router-link>

    </transition>

  </div>
</template>

<script>
    export default {
        name: "SidebarLogo",
        props:{
          collapse: {
            type: Boolean,
            required: true
          }
        }
    }
</script>

<style scoped>

</style>
