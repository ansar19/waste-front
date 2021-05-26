<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">{{ pageTitle }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <LimitMass />
      </div>
    </div>
  </div>
</template>

<script>
import LimitMass from '@/components/limit/LimitMass';

export default {
  data() {
    return {
      pageTitle: 'Лимиты',
    };
  },
  components: {
    LimitMass,
  },
};
</script>

<style scoped>
</style>
