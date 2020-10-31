# Aletheia : Best tool to help other developers use IDX and Ceramic

### Project was created for ETHOnline 2020 


 > [ETHOnline Submission](https://hack.ethglobal.co/showcase/aletheia-recLcP1mm9KbQZmQA)    
 
 > [ Live Demo ](https://www.youtube.com/watch?v=lCnc9H-vKzI) 



## Description

This project is built to unlock a whole new web3 experience with identities and profiles being universally accessible while being fully decentralized and at the same time, the data being fully controlled by the user.

**Aletheia** allows users to connect their ethereum accounts using metamask, portis or a few other web3 providers. The app then connects to 3id connect. Once the user gives the necessary permissions, the basic profile is loaded using the schema definition and idx protocol.The user can then view and make updates to the profile. The avatar images are uploaded to IPFS and the link is stored. 

There is also an explore route wherein the users can fetch details of any other profile using the did. This is obviously read only.

Since the profiles are being stored as ceramic documents, there is absolute control over the modifications over the details and at the same time various versions can also be fetched. 

## How It's Made
This project uses Ceramic Network as the underlying layer for document store, signs and stores records. The IDX protocol built on top of Ceramic Network along with 3id connect is implemented to access and store the basic profiles. 

Here 3id Connect functions as the did provider. The schemas are fetched using idx-tools library and the idx interface is the idx-web library. 


## Tech Stack Used
| Technology used | Links |  twitter handle |
|-----------------|:-------------| :-------------|
| Ceramic Network | https://www.ceramic.network/  |  https://twitter.com/ceramicnetwork |
| IPFS            | https://ipfs.io/         | https://twitter.com/IPFS |
| IDX             | https://www.npmjs.com/package/@ceramicstudio/idx-cli |  https://twitter.com/identityindex |
| Vue Js          |https://vuejs.org/ | https://twitter.com/vuejs |

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
