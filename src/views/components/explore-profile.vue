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
          {{ profile.name }}
          <span class="font-weight-light">, {{ profile.emoji }}</span>
        </h3>
        <div class="h6 font-weight-500">
          <i class="ni location_pin mr-2"></i>{{ profile.gender }}
        </div>
        <div class="h6 font-weight-500">
          <i class="ni location_pin mr-2"></i>{{ profile.birthDate }}
        </div>
        <div class="h6 font-weight-500">
          <i class="ni location_pin mr-2"></i>{{ profile.homeLocation }}
        </div>
        <div class="h6 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i
          >{{ profile.affiliations[0] }}
        </div>
        <div>
          <i class="ni education_hat mr-2"></i>
          <span v-for="x in profile.nationalities" :key="x">
            {{ x }}
          </span>
        </div>
      </div>
      <div class="mt-1 pt-4 border-top text-center">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <p>
              {{ profile.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-1 pt-2 border-top text-center">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <p>DID: {{ did }}</p>
            <!-- <p>ethaddress: {{ ethaddress }}</p> -->
          </div>
        </div>
      </div>
      <div class="text-center mb-2">
        <base-button type="primary" class="my-4" @click="back"
          >BACK</base-button
        >
      </div>
    </template>
  </card>
</template>
<script>
export default {
  name: "exploreProfile",
  props: ["profile", "did"],
  methods: {
    back() {
      NProgress.start();
      this.$emit("back");
    },
  },
};
</script>