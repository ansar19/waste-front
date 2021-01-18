<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">
          Список мест утилизации</span
        >
        <h3 class="page-title">Места утилизации</h3>
      </div>
    </div>
    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
            <UtilizerTable :rows="rows" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import '@/assets/scss/vue-tables.scss';

import UtilizerTable from '@/components/utilizer/UtilizerTable';

export default {
  data() {
    return {
      rows: [
        {
          id: 1,
          name: 'Место утилизации 1',
          age: 20,
          createdAt: '',
          score: 0.03343,
        },
        {
          id: 2,
          name: 'Место утилизации 2',
          age: 24,
          createdAt: '2011-10-31',
          score: 0.03343,
        },
        {
          id: 3,
          name: 'Место утилизации 3',
          age: 16,
          createdAt: '2011-10-30',
          score: 0.03343,
        },
        {
          id: 4,
          name: 'Место утилизации 4',
          age: 55,
          createdAt: '2011-10-11',
          score: 0.03343,
        },
      ],
    };
  },
  components: {
    UtilizerTable,
  },
};
</script>
