<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="router"></router-view>
    </transition>
    <demo-popup v-if="showDemoPopup" @close="showDemoPopup = false"></demo-popup>
  </div>
  
</template>

<script>
import DemoPopup from "@/components/DemoPopup.vue"
export default {
  data() {
    return {
      showDemoPopup: false
    }

  },
  components: {
    DemoPopup
  },
  mounted () {
    if (this.$route.path == "/") {
      this.showDemoPopup = true
    }
  }
}
</script>



<style>
* { margin: 0; }
#app {
  cursor: default;
  max-width: 100%;
  min-height: 100%;
  /* overflow: hidden; */
  font-family: 'Avenir Next', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.router {
  overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
