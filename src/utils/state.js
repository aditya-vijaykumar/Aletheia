import { reactive, toRefs } from "vue";

export default function auth {
    const authenticate = async () => {}
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
};
