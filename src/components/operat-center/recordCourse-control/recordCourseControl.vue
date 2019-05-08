<template>
  <div>
    <classifyControl></classifyControl>
    <courseList></courseList>
    <courseTypeControl></courseTypeControl>
  </div>
</template>

<script>
  import classifyControl from './classifyControl/classifyControl'
  import courseList from './courseList/courseList'
  import courseTypeControl from './courseTypeControl/courseTypeControl'
    export default {
        name: "recordCourseControl",
        components:{
          classifyControl,
          courseList,
          courseTypeControl
        }
    }
</script>

<style scoped>

</style>
