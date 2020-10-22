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
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-center mb-4">
                <h4>
                  To get started, please give access through metamask followed
                  by 3id.
                </h4>
              </div>

              <div class="text-center mb-5">
                <base-button type="primary" class="my-4" @click="authenticate"
                  >Get Started</base-button
                >
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { DID } from "dids";
import CeramicClient from "@ceramicnetwork/ceramic-http-client";
import { IDXWeb } from "@ceramicstudio/idx-web";
import { publishIDXConfig } from "@ceramicstudio/idx-tools";
//import { definitions, schemas } from '@ceramicstudio/idx-constants'
import ThreeIdConnect from "../../node_modules/3id-connect/src/threeIdConnect";
import EthereumAuthProvider from "../../node_modules/3id-connect/src/authProvider/ethereumAuthProvider";
import web3Modal from "../utils/provider.js";
import Portis from "@portis/web3";
import Authereum from "authereum";
import Fortmatic from "fortmatic";
import WalletConnectProvider from "@walletconnect/web3-provider";
export default {
  name: "App",
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
      }

      // let doc = await idx.set("profile", {
      //   name: "Aditya",
      //   emoji: "",
      //   image: "",
      //   gender: "Male",
      //   birthDate: "2001-05-09",
      //   background: "",
      //   description: "",
      //   affiliations: [""],
      //   homeLocation: "",
      //   nationalities: ["IN", "CA"],
      //   residenceCountry: "IN",
      // });
      // console.log("CID: " + doc);
      // const sum = await ceramic.loadDocument(doc);
      // console.dir(sum);
      // console.log(sum.head);

      //   const gett = async () => {
      //     let profile = await idx.get("profile", idx.id);
      //     console.log("My Profile : ");
      //     console.dir(profile);
      //   };
      // },
      // async verifysign() {
      //   let publicKeys = await ceramic.context.resolver.resolve("did");
      //   let keys = await ceramic.loadDocument(
      //     "ceramic://" + idx.id.split(":")[2]
      //   );
      // },
    },
  },
  data: () => {
    return {};
  },
};
</script>

<style></style>
