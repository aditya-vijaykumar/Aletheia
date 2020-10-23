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
          <component
            v-bind:is="component"
            @fetch="fetch"
            @back="back"
            :profile="profile"
            :did="did"
            :disabled="disabled"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { IDXWeb } from "@ceramicstudio/idx-web";
import { DID } from "dids";
import CeramicClient from "@ceramicnetwork/ceramic-http-client";
import {
  ThreeIdConnect,
  EthereumAuthProvider,
} from "../../node_modules/3id-connect/src/index";
import { publishIDXConfig } from "@ceramicstudio/idx-tools";
import web3Modal from "../utils/provider.js";

import exploreDid from "./components/explore-did";
import exploreFail from "./components/explore-fail";
import exploreProfile from "./components/explore-profile";

export default {
  name: "explore",
  data: () => {
    return {
      component: "exploreDid",
      profile: {},
      did: "",
      blah:
        "did:3:bagcqcerad3qnhxyusdy3u2ilm5wrxxxlb6d4x3wf3xr23u5p4i4nni4qwfma",
      disabled: false,
    };
  },
  components: {
    exploreDid,
    exploreFail,
    exploreProfile,
  },
  methods: {
    async fetch(event, value) {
      console.log("fetch function in parent called");
      NProgress.start();
      this.disabled = true;

      // Re-enable after 5 seconds
      this.timeout = setTimeout(() => {
        this.disabled = false;
      }, 20000);

      const THREEID_CONNECT_URL = "https://3idconnect.org/index.html";
      const DEFAULT_API_URL = "https://ceramic.3boxlabs.com";
      const API_URL = "http://localhost:7007";
      const threeIdConnect = new ThreeIdConnect(THREEID_CONNECT_URL);
      const ceramic = new CeramicClient(DEFAULT_API_URL);

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
      const ClientDid = new DID({ provider: didProvider });
      //console.dir(did)
      await ClientDid.authenticate();
      console.log("This is the did " + ClientDid.id);
      const jws = await ClientDid.createJWS({ hello: "world" });

      const { definitions } = await publishIDXConfig(ceramic);
      const appDefinitions = {
        profile: definitions.basicProfile,
      };
      await ceramic.setDIDProvider(didProvider);
      console.log("Ceramic DID Provider set");
      const Client = new IDXWeb({
        ceramic,
        definitions: appDefinitions,
      });
      console.log("Value:" + value);
      await Client.get("profile", value)
        .then((MyProfile) => {
          if (MyProfile) {
            this.profile = MyProfile;
            this.component = "exploreProfile";
            NProgress.done();
          } else {
            this.component = "exploreFail";
            NProgress.done();
          }
        })
        .catch((err) => {
          this.component = "exploreFail";
          NProgress.done();
        });

      console.log("My Profile: ");
      console.dir(MyProfile);
    },
    back() {
      this.component = "exploreDid";
      NProgress.done();
    },
  },
};
</script>
<style></style>
