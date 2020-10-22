<template>
  <v-btn @click="authenticate">Click here</v-btn>
  <v-btn @click="test">newDoc</v-btn>
  <v-btn @click="gett">getDoc</v-btn>
</template>

<script>
import { DID } from 'dids'
import CeramicClient from '@ceramicnetwork/ceramic-http-client'
import { IDXWeb } from '@ceramicstudio/idx-web'
import { publishIDXConfig } from '@ceramicstudio/idx-tools'
//import { definitions, schemas } from '@ceramicstudio/idx-constants'
import ThreeIdConnect  from './node_modules/3id-connect/src/threeIdConnect'
import EthereumAuthProvider from './node_modules/3id-connect/src/authProvider/ethereumAuthProvider'
import Web3Modal from "web3modal"
import Portis from "@portis/web3";
import Authereum from "authereum";
import Fortmatic from "fortmatic";
import WalletConnectProvider from "@walletconnect/web3-provider";
export default {
  name: 'App',
  components: {
    HelloWorld,
  },



// const THREEID_CONNECT_URL = 'https://3idconnect.org/index.html'
// const DEFAULT_API_URL = 'https://ceramic.3boxlabs.com'
// const API_URL = "http://localhost:7007"



authenticate = async () => {
  const threeIdConnect = new ThreeIdConnect(THREEID_CONNECT_URL)
const ceramic = new CeramicClient(DEFAULT_API_URL)
  const ethProvider = await web3Modal.connect()
  const addresses = await ethProvider.request({ method: 'eth_accounts' })
  console.log('Got the ethaddress')

  const authProvider = new EthereumAuthProvider(ethProvider, addresses[0])
  await threeIdConnect.connect(authProvider)
  console.log('3id connect func executed')

  const didProvider = await threeIdConnect.getDidProvider()
  console.log('didProvider accessed')
  //console.dir( didProvider)
  const did = new DID({ provider: didProvider })
  //console.dir(did)

  await did.authenticate()
  console.log('This is the did ' + did.id)

  const jws = await did.createJWS({ hello: 'world' })
  console.log(jws)

  const { definitions } = await publishIDXConfig(ceramic)
  console.log('The Definitions')
  console.log(definitions)
  const appDefinitions = {
    profile: definitions.basicProfile
  }


  await ceramic.setDIDProvider(didProvider)
  console.log('Ceramic DID Provider set')

  const idx = new IDXWeb({ ceramic, definitions: appDefinitions,connect: threeIdConnect})
  console.log('new idx instance created')

  const ethereum = { provider: ethProvider, address: addresses[0] }
  await idx.authenticate(ethereum)
  if (idx.authenticated) {
    console.log('authenticated IDX!!')
  }


  const test = async () => {
    let doc = await idx.set('profile', { name: 'Aditya', emoji: "",image: "", gender: "Male", birthDate: "2001-05-09", background: "", description: "", affiliations: [ ""], homeLocation: "", nationalities: ["IN", "CA"],residenceCountry:"IN"  })
    console.log('CID: '+ doc)
    const sum = await ceramic.loadDocument(doc)
    console.dir(sum)
    console.log(sum.head)
  }

  const gett = async () => {
    let profile = await idx.get('profile', idx.id)
    console.log('My Profile : ')
    console.dir(profile)

  }


},



verifysign = async () => {
  let publicKeys = await ceramic.context.resolver.resolve('did')
  let keys = await ceramic.loadDocument('ceramic://' + idx.id.split(':')[2])
},
 providerOptions = {
  portis: {
    package: Portis,
    options: {
      id: "8f5cf962-ad62-4861-ab0c-7b234b6e6cff"
    }
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "e87f83fb85bf4aa09bdf6605ebe144b7"
    }
  },
  fortmatic: {
    package: Fortmatic,
    options: {
      key: "pk_live_EC842EEAC7F08995"
    }
  },
  authereum: {
    package: Authereum,
    options: {}
  }
},

 web3Modal = new Web3Modal({
  network: "mainnet",
  cacheProvider: true,
  providerOptions
})
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
