<template>
  <d-card>
    <d-card-header>
      <strong class="text-muted d-block mb-3">Лимиты 9654.03 тонн </strong>
      <button type="button" class="btn btn-outline-primary btn-sm">
        <span class="material-icons">cloud_download</span>
      </button>
    </d-card-header>
    <d-card-body>
      <d-list-group flush>
        <d-list-group-item class="px-3">
          <div class="mb-2">
            <d-progress height="5px" class="mb-3" :value="20" :max="100" />
            <d-progress
              theme="royal-blue"
              height="5px"
              class="mb-3"
              :value="40"
              :max="100"
            />
            <d-progress
              theme="salmon"
              height="5px"
              class="mb-3"
              :value="60"
              :max="100"
            />
            <d-progress
              theme="warning"
              height="5px"
              class="mb-3"
              :value="80"
              :max="100"
            />
          </div>
        </d-list-group-item>
      </d-list-group>
    </d-card-body>
  </d-card>
</template>

<script>
export default {
  name: 'limit-mass',
  props: {
    // rows: {
    //   required: true,
    //   type: Array,
    // },
  },
  data() {
    return {
      columns: [],
    };
  },
  methods: {},
  components: {},
};
</script>
