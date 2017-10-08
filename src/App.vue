<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {}
  },
  created: function() {
    this.$store.dispatch('checkUser')
  }

}
</script>

<style lang="scss">
#app {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABGdBTUEAALGPC/xhBQAAAC1JREFUCB1j/P//PwcDA4MAEIPAB0aggASQwQTmMjD8gzGgfIjMByDvHxR/AADR0wv9ywO3IQAAAABJRU5ErkJggg==) 0 0 repeat, linear-gradient(-45deg, #a17ee6, #0af);
  min-height: 100%;
  padding-left: calc(100vw - 100%);
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>