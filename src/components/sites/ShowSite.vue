<template>
  <div class="container-fluid px-4 pb-4">
    <div class="row py-4">
      <div class="col-12" lg="12" md="12">
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
            <button class="btn btn-secondary" @click="goBack()" pill>
              <a class="text-white"> &larr; Вернуться назад </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowSite',
  data() {
    return {
      sites: [
        {
          siteName: 'Kazakhstan',
          siteComments: 'qwetyuiasdfghjkzxcvbnm',
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

<style scoped>

</style>
