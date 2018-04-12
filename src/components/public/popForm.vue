<template>
    <div>
        <div class="form">
            <div class="form-wrap">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        dialogVisible: true
    }
  },
  props: {
  },
  methods: {
handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  },
  mounted () {
  },
  computed: {
    
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
