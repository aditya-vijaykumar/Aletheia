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
      <div class="card-profile-image text-center">
        <a href="#">
          <img
            v-lazy="'img/theme/team-4-800x800.jpg'"
            class="rounded-circle"
            style="height: 200px"
          />
        </a>
      </div>
      <div class="text-center mt-3">
        <h3>
          Name
          <span class="font-weight-light">, emoji</span>
        </h3>
        <div class="h6 font-weight-500">
          <i class="ni location_pin mr-2"></i>gender
        </div>
        <div class="h6 font-weight-500">
          <i class="ni location_pin mr-2"></i>Birthdate
        </div>
        <div class="h6 font-weight-500">
          <i class="ni location_pin mr-2"></i>homeLocation
        </div>
        <div class="h6 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i>affiliation
        </div>
        <div><i class="ni education_hat mr-2"></i>Nationality</div>
      </div>
      <div class="mt-1 pt-4 border-top text-center">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <p>
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-1 pt-2 border-top text-center">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <p>DID: xyz</p>
            <p>ethaddress</p>
          </div>
        </div>
      </div>
      <div class="text-center mb-2">
        <base-button type="primary" class="my-4" @click="part3"
          >EDIT</base-button
        >
      </div>
      <div class="text-center mb-5">
        <base-button type="primary" class="my-4" @click="part3"
          >Get Deets</base-button
        >
      </div>
    </template>
  </card>
</template>
<script>
export default {
  name: "card3",
  props: {},
  methods: {
    part3() {
      this.$emit("part3");
    },
  },
};
</script>
