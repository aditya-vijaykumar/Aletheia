<template>
  <card
    type="secondary"
    shadow
    header-classes="bg-white pb-5"
    body-classes="px-lg-5 py-lg-5"
    class="border-0"
  >
    <div class="text-center mb-3">
      <h3>
        <span class="text-danger">No profile found for DID.</span>
      </h3>
    </div>

    <template>
      <div class="text-center">
        <base-button type="primary" class="my-4" @click="back"
          >Back</base-button
        >
      </div>
    </template>
  </card>
</template>
<script>
export default {
  name: "exploreFail",
  methods: {
    back() {
      NProgress.start();
      this.$emit("back");
    },
  },
};
</script>
