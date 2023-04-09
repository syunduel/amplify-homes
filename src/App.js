import React, { useEffect } from 'react';
import './App.css';
import { NavBar, MarketingFooter } from './ui-components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CollectionList from './routes/collectionList';
import Organization from './routes/organization';
import Collection from './routes/collection';
import Dressup from "./routes/dressup";
import { AlchemyMultichainClient } from './lib/alchemy-multichain-client';
import { Network } from 'alchemy-sdk';

function App() {

  const alchemyTest = async () => {

    // Default config to use for all networks.
    const defaultConfig = {
      apiKey: 'upbO14aoCDMzJiLouJJbWfisrDJVunnO', // TODO: Replace with your API key.
      network: Network.ETH_MAINNET
    };
    // Include optional setting overrides for specific networks.
    const overrides = {
      // TODO: Replace with your API keys.
      [Network.MATIC_MAINNET]: { apiKey: 'Izx3-0WVznJi1Rxp4wTcWF6fGIDJs8GI', maxRetries: 10 },
      [Network.ARB_MAINNET]: { apiKey: 'arb-api-key' }
    };
    const alchemy = new AlchemyMultichainClient(defaultConfig, overrides);

    // get NFTs in multiple networks
    const owner = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';
    const mainnetNfts = await alchemy
      .forNetwork(Network.ETH_MAINNET)
      .nft.getNftsForOwner(owner, { pageSize: 5 });
    const maticNfts = await alchemy
      .forNetwork(Network.MATIC_MAINNET)
      .nft.getNftsForOwner(owner, { pageSize: 5 });

    console.log('mainnetNfts', mainnetNfts);
    console.log('maticNfts', maticNfts);

    return <div></div>;
  }

  alchemyTest();


  // TODO
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = {};

  const navBarOverrides = {
    "LoginButton": {
      onClick: (event) => { logIn() },
      style: { visibility: "visible" },
      children: "Connect your wallet",
    },
    "LogoutButton": {
      onClick: (event) => { logOut() },
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

  const dispNavBar = () => {

    if (isAuthenticated) {
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

    return <NavBar width={"100vw"} overrides={navBarOverrides} className="nav-bar" />;

  }

  const getDispAddress = () => {
    let ethAddress = user.get("ethAddress");
    let dispAddress = ethAddress.substr(0, 5) + "....." + ethAddress.slice(-5);
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
