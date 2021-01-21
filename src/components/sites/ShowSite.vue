<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small mb-4 pt-3">
          <div class="card-header border-bottom text-center">
            <div class="mb-3 mx-auto"></div>
            <!-- vertical table head example -->
            <table
              v-for="(s, index) in sites"
              :key="index"
              class="table table-bordered"
              style="width: 100%"
            >
              <tr>
                <th class="text-left">Наименование участка:</th>
                <td>{{ s.siteName }}</td>
              </tr>
              <tr>
                <th class="text-left">Комментарии:</th>
                <td>{{ s.siteComments }}</td>
              </tr>
            </table>
          </div>
          <div class="card-footer text-muted">
            <d-button @click="goBack()" pill>
              <a class="text-white"> &larr; Вернуться назад </a>
            </d-button>
          </div>
        </div>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
export default {
  name: 'show-site',
  data() {
    return {
      sites: [
        {
          siteName: 'Казахстан',
          siteComments: 'йцукенглджсмг'
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
