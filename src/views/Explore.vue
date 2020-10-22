<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-9">
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
                  <base-button type="primary" class="my-4">Resolve</base-button>
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { IDXWeb } from "@ceramicstudio/idx-web";
import CeramicClient from "@ceramicnetwork/ceramic-http-client";
import { ThreeIdConnect } from "../../node_modules/3id-connect/src/index";
export default {
  name: "explore",
  data: () => {
    return {};
  },
  methods: {
    async fetch() {
      const THREEID_CONNECT_URL = "https://3idconnect.org/index.html";
      const DEFAULT_API_URL = "https://ceramic.3boxlabs.com";
      const API_URL = "http://localhost:7007";
      const threeIdConnect = new ThreeIdConnect(THREEID_CONNECT_URL);
      const ceramic = new CeramicClient(DEFAULT_API_URL);
      const { definitions } = await publishIDXConfig(ceramic);
      const appDefinitions = {
        profile: definitions.basicProfile,
      };
      const bobClient = new IDXWeb({
        ceramic,
        definitions: appDefinitions,
        connect: threeIdConnect,
      });
      const MyProfile = await bobClient.get("profile", this.did);

      console.log("My Profile: ");
      console.dir(MyProfile);
    },
  },
};
</script>
<style></style>
