<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <h3 class="page-title">Лимиты:</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
            <LimitMass />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LimitMass from '@/components/limit/LimitMass';

export default {
  data() {
    return {};
  },
  components: {
    LimitMass,
  },
};
</script>

<style scoped>
</style>
