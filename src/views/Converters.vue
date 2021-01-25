<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Конвертер</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card card-small mb-4">
          <div class="card-body">
            <ConverterShow />

          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card card-small mb-4">
          <div class="card-body">
            <ConverterEdit
              :converters="converters"
              :key="converters.length + updateCount"
              @updated="updateConverter"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ConverterShow from '@/components/converters/ConverterShow'
import ConverterEdit from '@/components/converters/ConverterEdit'

export default {
  name: 'converter',
  // metaInfo() {
  //   return {
  //     title: this.$title('Menu_Converter'),
  //   }
  // },
  data: () => ({
    converters: [],
    loading: true,
    updateCount: 0,
  }),
  // async mounted() {
  //   this.converters = await this.$store.dispatch('fetchConverters')
  //   this.loading = false
  // },
  components: {
    ConverterShow,ConverterEdit
  },
  methods: {
    // addNewConverter(converter) {
    //   this.converters.push(converter)
    // },
    // updateConverter(converter) {
    //   const idx = this.converters.findIndex((c) => c.id === converter.id)
    //   // this.converters[idx].id = id
    //   this.updateCount++
    // },
  },
}
</script>
<style scoped>
.page-title{
  border-bottom: solid 1px rgba(51, 51, 51, .12);
}
.app-page{
  padding: 2rem;
}
</style>
