<template>
  <card
    type="secondary"
    shadow
    header-classes="bg-white pb-5"
    body-classes="px-lg-5 py-lg-5"
    class="border-0"
  >
    <div class="text-center mb-3">
      <h3>Enter did to resolve for profile</h3>
    </div>

    <template>
      <form role="form">
        <base-input
          v-model="did"
          alternative
          class="mb-3"
          placeholder="did"
          addon-left-icon="ni ni-hat-3"
        >
        </base-input>

        <div class="text-center">
          <base-button
            type="primary"
            :disabled="disabled"
            class="my-4"
            @click="fetch"
            >Resolve</base-button
          >
        </div>
      </form>
    </template>
  </card>
</template>
<script>
export default {
  name: "exploreDid",
  data: () => {
    return {
      did: "",
    };
  },
  props: { method: { type: Function } },
  methods: {
    fetch() {
      console.log(this.did);
      this.method(this.did);
    },
  },
};
</script>
