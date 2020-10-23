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
        <div class="col-lg-7">
          <!-- <component :is="dynamicComponent"></component> -->
          <component
            v-bind:is="component"
            @task="authenticate"
            @something="edit"
            @update="update"
            :profile="profile"
            :did="id"
            :ethadress="ethaddress"
            :method="update"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from "vue";

import { DID } from "dids";
import CeramicClient from "@ceramicnetwork/ceramic-http-client";
import { IDXWeb } from "@ceramicstudio/idx-web";
import { publishIDXConfig } from "@ceramicstudio/idx-tools";
import {
  ThreeIdConnect,
  EthereumAuthProvider,
} from "../../node_modules/3id-connect/src/index";
import web3Modal from "../utils/provider.js";
import { EventBus } from "../utils/event-bus.js";
import card1 from "./components/card-one.vue";
import card2 from "./components/card-two.vue";
import card3 from "./components/card-three.vue";
import card4 from "./components/card-four.vue";

export default {
  name: "App",
  components: {
    card1,
    card2,
    card3,
    card4,
  },
  data: () => {
    return {
      component: "card1",
      idx: {},
      ceramic: {},
      did: {},
      profile: {},
      id: "",
      ethaddress: "",
      auth: false,
    };
  },

  created() {
    this.auth = false;
  },
  methods: {
    async authenticate() {
      const THREEID_CONNECT_URL = "https://3idconnect.org/index.html";
      const DEFAULT_API_URL = "https://ceramic.3boxlabs.com";
      const API_URL = "http://localhost:7007";
      const threeIdConnect = new ThreeIdConnect(THREEID_CONNECT_URL);
      const ceramic = new CeramicClient(DEFAULT_API_URL);
      //auth
      const ethProvider = await web3Modal.connect();
      const addresses = await ethProvider.request({ method: "eth_accounts" });
      console.log("Got the ethaddress");
      this.ethaddress = addresses[0];
      const authProvider = new EthereumAuthProvider(ethProvider, addresses[0]);
      await threeIdConnect.connect(authProvider);
      console.log("3id connect func executed");
      const didProvider = await threeIdConnect.getDidProvider();
      console.log("didProvider accessed");
      //console.dir( didProvider)
      const did = new DID({ provider: didProvider });
      //console.dir(did)
      await did.authenticate();
      console.log("This is the did " + did.id);
      const jws = await did.createJWS({ hello: "world" });
      console.log(jws);
      const { definitions } = await publishIDXConfig(ceramic);
      console.log("The Definitions");
      console.log(definitions);
      const appDefinitions = {
        profile: definitions.basicProfile,
      };
      await ceramic.setDIDProvider(didProvider);
      console.log("Ceramic DID Provider set");
      const idx = new IDXWeb({
        ceramic,
        definitions: appDefinitions,
        connect: threeIdConnect,
      });
      console.log("new idx instance created");
      const ethereum = { provider: ethProvider, address: addresses[0] };
      await idx.authenticate(ethereum);
      if (idx.authenticated) {
        console.log("authenticated IDX!!");
        //redirect upon this
        this.auth = true;
        this.id = idx.id;
        if (this.auth) {
          const MyProfile = await idx.get("profile", idx.id);
          this.profile = MyProfile;
          console.log("My Profile");
          console.dir(MyProfile);
        }
        this.idx = idx;
        this.ceramic = ceramic;
        this.did = did;
        this.component = "card3";
      }
    },
    async edit() {
      if (this.auth) {
        this.component = "card4";
      }
    },
    async update(profile2) {
      if (this.idx.authenticated) {
        console.log("update");
        const doc = await this.idx.set("profile", profile2);
        console.log(doc);
        const MyProfile = await this.idx.get("profile", this.idx.id);
        this.profile = MyProfile;
        this.component = "card3";
      }
    },
  },
};
</script>

<style></style>
