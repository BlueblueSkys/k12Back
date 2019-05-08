<template>
  <div>
    <webInfoControl></webInfoControl>
    <appInfoControl></appInfoControl>
    <recordCourseControl></recordCourseControl>
    <registerUserControl></registerUserControl>
    <serviceStaffControl></serviceStaffControl>
    <coinControl></coinControl>
  </div>
</template>

<script>
  import webInfoControl from './webInfo-control/webInfoControl'
  import appInfoControl from './appInfo-control/appInfoControl'
  import recordCourseControl from './recordCourse-control/recordCourseControl'
  import registerUserControl from './registerUser-control/registerUserControl'
  import serviceStaffControl from './serviceStaff-control/serviceStaffControl'
  import coinControl from './coin-control/coinControl'

    export default {
        name: "operatCenter",
        components:{
          webInfoControl,
          appInfoControl,
          recordCourseControl,
          registerUserControl,
          serviceStaffControl,
          coinControl
        }
    }
</script>

<style scoped>

</style>
