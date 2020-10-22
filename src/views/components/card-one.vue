<template>
  <card
    type="secondary"
    shadow
    header-classes="bg-white pb-5"
    body-classes="px-lg-5 py-lg-5"
    class="border-0"
    v-show="!auth"
  >
    <template>
      <div class="text-center mb-4">
        <h4>
          To get started, please give access through metamask followed by 3id.
        </h4>
      </div>

      <div class="text-center mb-5">
        <base-button type="primary" class="my-4" @click="something"
          >Get Started</base-button
        >
      </div>
    </template>
  </card>
</template>
<script>
export default {
  name: "card1",
  methods: {
    something() {
      this.$emit("task");
    },
  },
};
</script>
