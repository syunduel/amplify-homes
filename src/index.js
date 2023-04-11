import React from 'react';
import ReactDOM from 'react-dom';
import './common.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';

// WalletConnect
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'

// const chains = [arbitrum, mainnet, polygon]
const chains = [mainnet, polygon]
const projectId = '01d5c35c949a4b0eaf1b71d10424a03f'  // DressUpNFT

const { provider } = configureChains(chains, [w3mProvider({ projectId })])

const wagmiClient = createClient({
  autoConnect: true,
  // connectors: w3mConnectors({ projectId, version: 1, chains }),
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  // connectors: [connector],
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)


Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <AmplifyProvider>
        <App />
      </AmplifyProvider>
    </WagmiConfig>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient}
      themeVariables={{
        // '--w3m-font-family': 'Roboto, sans-serif',
        '--w3m-accent-color': '#ff6699'
      }}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
