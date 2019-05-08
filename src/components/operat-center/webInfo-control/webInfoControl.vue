<template>
    <div>
      <infoControl></infoControl>
      <noticeControl></noticeControl>
      <slideshowControl></slideshowControl>
      <videoControl></videoControl>
    </div>
</template>

<script>
  import infoControl from './info-control/infoControl'
  import noticeControl from './notice-control/noticeControl'
  import slideshowControl from './slideshow-control/slideshowControl'
  import videoControl from './video-control/videoControl'
    export default {
        name: "webInfoControl",
        components:{
          infoControl,
          noticeControl,
          slideshowControl,
          videoControl
      }
    }
</script>

<style scoped>

</style>
