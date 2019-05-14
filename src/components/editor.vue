<template>
  <div id="editor">
    <div id="editorElem" style="text-align:left"></div>
  </div>
</template>

<script>
  import E from '../../node_modules/wangeditor/release/wangEditor.min'
  export default {
    name: 'editor',
      data () {
      return {
        editorContent: ''
      }
    },
    methods: {
      getContent: function () {
        alert(this.editorContent)
      }
    },
    mounted() {
      var editor = new E('#editorElem')
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.create()
    }
  }
</script>

<style scoped>

</style>
