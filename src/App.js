import React, { useEffect } from 'react';
import './App.css';

// AWS Amplify
import { NavBar, MarketingFooter } from './ui-components'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// WalletConnect
import { useWeb3Modal } from '@web3modal/react'
import { useAccount, useContract, useSigner, useEnsName, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import CollectionList from './routes/collectionList';
import Organization from './routes/organization';
import Collection from './routes/collection';
import Dressup from "./routes/dressup";



function App() {
  
  const navBarOverrides = {
    "LoginButton": {
      onClick: (event) => { LoginWithWalletConnect() },
      style: { visibility: "visible" },
      children: "Connect your wallet",
    },
    "LogoutButton": {
      onClick: (event) => { LogoutWithWalletConnect() },
      style: { visibility: "hidden" },
    },
    "logo-dressupnft": {
      onClick: (event) => { window.location.href = "/"; },
      className: "ext-link",
    },
    "logo-twitter": {
      className: "ext-link",
    },
    "logo-discord": {
      className: "ext-link",
    },
    "logo-openSea": {
      className: "ext-link",
    },
    "hamburger-menu": {
      className: "hamburger-menu",
    },
  };


  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  const { isOpen, open, close, setDefaultChain } = useWeb3Modal();

  function LoginWithWalletConnect() {
    if (isConnected) {
      return open();
    } else {
      return connect();
    }
  }

  function LogoutWithWalletConnect() {
    return disconnect();
  }


  const dispNavBar = () => {

    if (isConnected) {
      navBarOverrides.LoginButton.children = getDispAddress();
      navBarOverrides.LogoutButton.style.visibility = "visible";
    } else {
      navBarOverrides.LoginButton.children = "Connect your wallet";
      navBarOverrides.LogoutButton.style.visibility = "hidden";
    }

    navBarOverrides.Twitter = {
      style: {
        hover: {cursor: 'pointer'},
      }
    }

    return <NavBar width={"100vw"} overrides={navBarOverrides} className="nav-bar"></NavBar>;

  }

  const getDispAddress = () => {
    // let ethAddress = user.get("ethAddress");
    let ethAddress = ensName ?? address;
    let dispAddress = ethAddress.substr(0, 5) + "..." + ethAddress.slice(-5);
    return dispAddress
  }

  
  return (

  <div className="App">
    <BrowserRouter>
      {dispNavBar()}

      <Routes>
        <Route path="/" element={<CollectionList />} />
        <Route path="/organization/:organizationName" element={<Organization />} />
        <Route path="/collection/:tokenChain/:tokenAddress" element={<Collection />} />
        <Route path="/dressup/:tokenChain/:tokenAddress/:tokenId" element={<Dressup />} />
      </Routes>
    </BrowserRouter>

    <div className="mv" key={'mv3'} style={{marginTop: '8em'}}>
        <p>Dress Up NFT is currently in beta version.</p>
        <p>Please contact <a href='https://twitter.com/IchiroTech'>Ichiro(@IchiroTech)</a> to report bugs, request improvements, or discuss adding collections.</p>
    </div>

    <MarketingFooter width={"100vw"}  className="footer-bar" />

  </div>

  );
}

export default App;
/*
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

*/
