import web3Modal from './providers.js'
import { DID } from 'dids'
import CeramicClient from '@ceramicnetwork/ceramic-http-client'
import { IDXWeb } from '@ceramicstudio/idx-web'
import { publishIDXConfig } from '@ceramicstudio/idx-tools'

import { ThreeIdConnect, EthereumAuthProvider } from '3id-connect'

const THREEID_CONNECT_URL = 'https://3idconnect.org/index.html'
const API_URL = "http://localhost:7007"

const threeIdConnect = new ThreeIdConnect(THREEID_CONNECT_URL)
const ceramic = new CeramicClient()


async function idxcheck() {
  const { definitions } = await publishIDXConfig(ceramic)
  console.log('The Definitions')
  console.log(definitions)

}

const authenticate = async () => {
  const ethProvider = await web3Modal.connect()
  const addresses = await ethProvider.request({ method: 'eth_accounts' })
  console.log(addresses)
  console.log('Got the address')
  
  const authProvider = new EthereumAuthProvider(ethProvider, addresses[0])
  await threeIdConnect.connect(authProvider)
  console.log('3id connect func executed')
  
  const didProvider = await threeIdConnect.getDidProvider()
  console.log('didProvider: ' + didProvider)
  console.dir( didProvider)
  const did = new DID({ provider: didProvider })
  console.dir(did)
  
  await did.authenticate()
  console.log('This is the did ' + did.id)
  
  const jws = await did.createJWS({ hello: 'world' })
  console.log(jws)
  
  idxcheck()

  await ceramic.setDIDProvider(didProvider)
  const doc = await ceramic.createDocument('tile', { content: { test: 123 } }, { applyOnly: true, skipWait: true })
  console.log(doc)
  
  const idx = new IDXWeb({ ceramic, connect: threeIdConnect})
  console.log('new idx instance created')
  
  const ethereum = { provider: ethProvider, address: addresses[0] }
  await idx.authenticate(ethereum)
  if (idx.authenticated) {
    console.log('authenticated IDX!!')
  }
  
 }


bauth.addEventListener('click', authenticate)
