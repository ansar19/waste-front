<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">{{ pageTitle }}</span>
      </d-col>
    </d-row>

    <!-- Small Stats Blocks -->
    <d-row>
      <d-col lg v-for="(stats, idx) in smallStats" :key="idx" class="mb-4">
        <small-stats
          :id="`small-stats-${idx}`"
          variation="1"
          :chart-data="stats.datasets"
          :label="stats.label"
          :value="stats.value"
          :percentage="stats.percentage"
          :increase="stats.increase"
          :decrease="stats.decrease"
        />
      </d-col>
    </d-row>

    <d-row>
      <!-- Time Distribution Overview -->
      <d-col lg="8" md="6" sm="12" class="mb-4">
        <bo-distribution-by-time />
      </d-col>

      <!-- Wastes by Types -->
      <d-col lg="4" md="6" sm="12" class="mb-4">
        <bo-wastes-by-types />
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import SmallStats from '@/components/common/SmallStats.vue';
import DistributionByTime from '@/components/stats/DistributionByTime.vue';
import WastesByTypes from '@/components/stats/WastesByTypes.vue';

export default {
  components: {
    SmallStats,
    boDistributionByTime: DistributionByTime,
    boWastesByTypes: WastesByTypes,
  },
  data() {
    return {
      dateRange: {
        from: null,
        to: null,
      },
      pageTitle: 'Главная',
    };
  },
  methods: {
    handleApprove(id) {
      alert(`Approving discussion id: ${id}`); // eslint-disable-line no-alert
    },
    handleReject(id) {
      alert(`Rejecting discussion id: ${id}`); // eslint-disable-line no-alert
    },
    handleEdit(id) {
      alert(`Editing discussion id: ${id}`); // eslint-disable-line no-alert
    },
    handleViewAllComments() {
      alert('Viewing all comments!'); // eslint-disable-line no-alert
    },
  },
  computed: {
    smallStats() {
      return [
        {
          label: 'Записей',
          value: '2,390',
          percentage: '4.7%',
          increase: true,
          labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
          datasets: [
            {
              label: 'Today',
              fill: 'start',
              borderWidth: 1.5,
              backgroundColor: 'rgba(0, 184, 216, 0.1)',
              borderColor: 'rgb(0, 184, 216)',
              data: [1, 2, 1, 3, 5, 4, 7],
            },
          ],
        },
        {
          label: 'Принято отходов, т',
          value: '182',
          percentage: '12.4',
          increase: true,
          labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
          datasets: [
            {
              label: 'Today',
              fill: 'start',
              borderWidth: 1.5,
              backgroundColor: 'rgba(23,198,113,0.1)',
              borderColor: 'rgb(23,198,113)',
              data: [1, 2, 3, 3, 3, 4, 4],
            },
          ],
        },
        {
          label: 'Вывезено отходов, т',
          value: '8,147',
          percentage: '3.8%',
          increase: false,
          decrease: true,
          labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
          datasets: [
            {
              label: 'Today',
              fill: 'start',
              borderWidth: 1.5,
              backgroundColor: 'rgba(255,180,0,0.1)',
              borderColor: 'rgb(255,180,0)',
              data: [2, 3, 3, 3, 4, 3, 3],
            },
          ],
        },
        {
          label: 'Опасные отходы, т',
          value: '29',
          percentage: '2.71%',
          increase: false,
          decrease: true,
          labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
          datasets: [
            {
              label: 'Today',
              fill: 'start',
              borderWidth: 1.5,
              backgroundColor: 'rgba(255,65,105,0.1)',
              borderColor: 'rgb(255,65,105)',
              data: [1, 7, 1, 3, 1, 4, 8],
            },
          ],
        },
        {
          label: 'Не опасные отходы, т',
          value: '17,281',
          percentage: '2.4%',
          increase: false,
          decrease: true,
          labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
          datasets: [
            {
              label: 'Today',
              fill: 'start',
              borderWidth: 1.5,
              backgroundColor: 'rgb(0,123,255,0.1)',
              borderColor: 'rgb(0,123,255)',
              data: [3, 2, 3, 2, 4, 5, 4],
            },
          ],
        },
      ];
    },
  },
};
</script>

