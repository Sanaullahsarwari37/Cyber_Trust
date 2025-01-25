<template>
  <transition name="fade" mode="out-in">
      <router-view></router-view> <!-- The content inside the route -->
  </transition>
</template>



<script>

</script>
<style>
/* Fade transition effect */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
