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

  // TODO
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = {};


  // function Profile() {
  //   const { address, isConnected } = useAccount()
  //   const { connect } = useConnect({
  //     connector: new InjectedConnector(),
  //   })
  //   const { disconnect } = useDisconnect()
  
  //   if (isConnected) {
  //     // return (
  //     //   <div>
  //     //     Connected to {address}
  //     //   </div>
  //     // )
  //     return <Web3Button />

  //   } else {
  //     // return <Web3Button />
  //     return <button onClick={() => connect()}>Connect Wallet</button>
  //   }
  // }
  
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

  useEffect(() => {
    console.log("isAuthenticated : " + isAuthenticated);
    if (isAuthenticated) {
      // add your logic here
      // dispNFTs();

    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const logIn = async () => {
    if (!isAuthenticated) {

      await authenticate({signingMessage: "Welcome to DressUpNFT! Please log in to dress up your NFT!" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  const logOut = async () => {
    await logout();
    console.log("logged out");
  }

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

      <div className="page-head" key={'mv1'}>
          <p className="title--primary">Let's dress up your NFT</p>
          <p>You can change your NFT clothes. First, select the NFT you want to dress up.</p>
      </div>

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
