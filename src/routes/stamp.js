import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useEthNFT, useEthNFTs } from '../api/evmnft';
import { ButtonGroup } from '@aws-amplify/ui-react';
import html2canvas from "html2canvas";
import {serverData} from '../data/serverData';
import {collectionData} from '../data/collectionData';


export default function Stamp() {

  console.log("Stamp start");

  const LAYER_MAX = 26;

  const wait = async (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const {tokenChain, tokenAddress} = useParams();
    console.log('tokenChain : ' + tokenChain);
    console.log('tokenAddress : ' + tokenAddress);

    let targetChain = tokenChain.replace(/[^0-9a-z]/g, '');
    let selectedChain = targetChain;
    if (selectedChain === "ethereum") {
      selectedChain = "Eth";
    } else if (selectedChain === "matic") {
      selectedChain = "Polygon"
    } else if (selectedChain === "goerli") {
      selectedChain = "Goerli"
    }
    const selectedNftAddress = tokenAddress.replace(/[^0-9a-z]/g, '');

    console.log('useEthNFTs',  selectedChain, selectedNftAddress);
    const [nfts, isLoaded, total] = useEthNFTs(selectedChain, selectedNftAddress, 3);

    let selectedEthNFT = null;
    let symbol = null;

    if (isLoaded && nfts !== null && nfts !== undefined && nfts.length > 0) {
      selectedEthNFT = nfts[0];
      symbol = selectedEthNFT.symbol;
    }

    console.log("nfts", nfts);
    console.log("selectedEthNFT", selectedEthNFT);

    const collectionInfo = collectionData[tokenChain.replace(/[^0-9a-z]/g, '') + "_" + selectedNftAddress];
    // console.log('collectionInfo', collectionInfo);


    const stampImageBase = serverData.serverStampRoot + selectedChain + "/" + symbol + "_" + selectedNftAddress + "/parts_v6/";


    const [selectedAttributes, setSelectedAttributes] = useState([]);
    const [selectedDressUpGroup, setSelectedDressUpGroup] = useState("Full-body,Parts01");

    const serverRoot = serverData.serverRoot;
    const noneUrl = "/noneStamp.png"

    const [dressUpPic01Url, setDressUpPic01Url] = useState(noneUrl);
    const [dressUpPic02Url, setDressUpPic02Url] = useState(noneUrl);
    const [dressUpPic03Url, setDressUpPic03Url] = useState(noneUrl);
    const [dressUpPic04Url, setDressUpPic04Url] = useState(noneUrl);
    const [dressUpPic05Url, setDressUpPic05Url] = useState(noneUrl);
    const [dressUpPic06Url, setDressUpPic06Url] = useState(noneUrl);
    const [dressUpPic07Url, setDressUpPic07Url] = useState(noneUrl);
    const [dressUpPic08Url, setDressUpPic08Url] = useState(noneUrl);
    const [dressUpPic09Url, setDressUpPic09Url] = useState(noneUrl);
    const [dressUpPic10Url, setDressUpPic10Url] = useState(noneUrl);
    const [dressUpPic11Url, setDressUpPic11Url] = useState(noneUrl);
    const [dressUpPic12Url, setDressUpPic12Url] = useState(noneUrl);
    const [dressUpPic13Url, setDressUpPic13Url] = useState(noneUrl);
    const [dressUpPic14Url, setDressUpPic14Url] = useState(noneUrl);
    const [dressUpPic15Url, setDressUpPic15Url] = useState(noneUrl);
    const [dressUpPic16Url, setDressUpPic16Url] = useState(noneUrl);
    const [dressUpPic17Url, setDressUpPic17Url] = useState(noneUrl);
    const [dressUpPic18Url, setDressUpPic18Url] = useState(noneUrl);
    const [dressUpPic19Url, setDressUpPic19Url] = useState(noneUrl);
    const [dressUpPic20Url, setDressUpPic20Url] = useState(noneUrl);
    const [dressUpPic21Url, setDressUpPic21Url] = useState(noneUrl);
    const [dressUpPic22Url, setDressUpPic22Url] = useState(noneUrl);
    const [dressUpPic23Url, setDressUpPic23Url] = useState(noneUrl);
    const [dressUpPic24Url, setDressUpPic24Url] = useState(noneUrl);
    const [dressUpPic25Url, setDressUpPic25Url] = useState(noneUrl);
    const [dressUpPic26Url, setDressUpPic26Url] = useState(noneUrl);
    const [dressUpPicCopyrightUrl, setDressUpPicCopyrightUrl] = useState(noneUrl);
    const [dressUpPicCopyrightDisp, setDressUpPicCopyrightDisp] = useState(false);
    const [dressUpPicVailStyle, setDressUpPicVailStyle] = useState({backgroundColor: 'lightgray'});
    const [dressUpPicSpin, setDressUpPicSpin] = useState("sk-cube-grid-stamp");

    const dressUpPartsSetSKB = {
      1 : {
        "layer": "01",
        "categoryName": "体",
        "group": "Full-body,Close-up",
        "parts": [
          {
            "name": "standard",
            "url": stampImageBase + "Body/A12EA0FECAF0-46D5-8DDC-0510B3E5BCDA.png",
            "group": "Full-body"
          },
          {
            "name": "brown",
            "url": stampImageBase + "Body/57F37D56-BBDD-4716-9735D32A2A00F378.png",
            "group": "Full-body"
          },
          {
            "name": "red",
            "url": stampImageBase + "Body/DC4D6C48-7C98-4B56-9CAE-54C8426B6FC9.png",
            "group": "Full-body"
          },
          {
            "name": "white",
            "url": stampImageBase + "Body/DE7148D3-84CC-450A-BBFC-95BBBDDDF2A9.png",
            "group": "Full-body"
          },
          {
            "name": "standard11",
            "url": stampImageBase + "Parts11/Body/Standardbody11.png",
            "group": "Parts11"
          },
          {
            "name": "brown11",
            "url": stampImageBase + "Parts11/Body/Brownbody11.png",
            "group": "Parts11"
          },
          {
            "name": "red11",
            "url": stampImageBase + "Parts11/Body/Redbody11.png",
            "group": "Parts11"
          },
          {
            "name": "white11",
            "url": stampImageBase + "Parts11/Body/Whitebody11.png",
            "group": "Parts11"
          },
          {
            "name": "standard12",
            "url": stampImageBase + "Parts12/Body/Standardbody12.png",
            "group": "Parts12"
          },
          {
            "name": "brown12",
            "url": stampImageBase + "Parts12/Body/Brownbody12.png",
            "group": "Parts12"
          },
          {
            "name": "red12",
            "url": stampImageBase + "Parts12/Body/Redbody12.png",
            "group": "Parts12"
          },
          {
            "name": "white12",
            "url": stampImageBase + "Parts12/Body/Whitebody12.png",
            "group": "Parts12"
          },
        ]
      },
      2 : {
        "layer": "02",
        "categoryName": "左足",
        "group": "Full-body",
        "parts": [
          {
            "name": "曲げる",
            "url": stampImageBase + "Left foot/9DA2F48C-59FC-47E9-A517-4C97683A098E.png"
          },
          {
            "name": "なし",
            "url": noneUrl
          },
          {
            "name": "直立",
            "url": stampImageBase + "Left foot/CC39338A-EEAD-4160-9726-E26CCFF7ADF2.png"
          },
          {
            "name": "足あげる",
            "url": stampImageBase + "Left foot/BF0E22F7-9884-4503-B45B-94CFEF21D84F.png"
          },
          {
            "name": "曲げる",
            "url": stampImageBase + "Left foot/0766228C-19F9-4C02-9F7A-667053E3841B.png"
          },
          {
            "name": "曲げる",
            "url": stampImageBase + "Left foot/68CC3766-0DCB-442A-826E-1FA647A8BE08.png"
          },
          {
            "name": "曲げる",
            "url": stampImageBase + "Left foot/B3159FE2-1097-4F4A-ABF7-77EC36098FDA.png"
          },
          {
            "name": "足あげる",
            "url": stampImageBase + "Left foot/71D2A87E-B905-414D-8D20-C8F6C06C5289.png"
          },
          {
            "name": "足あげる",
            "url": stampImageBase + "Left foot/F16741CC-2CDF-476D-A1C7-34E298BBD934.png"
          },
          {
            "name": "直立",
            "url": stampImageBase + "Left foot/F5C009F0-87CA-42DC-ABD0-9791F19D7AC2.png"
          },
          {
            "name": "曲げる",
            "url": stampImageBase + "Left foot/D130DEC3-E925-4603-8D9C-78DA5EC5DAC4.png"
          },
        ]
      },
      3 : {
        "layer": "03",
        "categoryName": "右足",
        "group": "Full-body",
        "parts": [
          {
            "name": "曲げる",
            "url": stampImageBase + "Right foot/E9EA5E42-86D7-4CF8-891A-2CD6C08E70FB.png"
          },
          {
            "name": "なし",
            "url": noneUrl
          },
          {
            "name": "足あげる",
            "url": stampImageBase + "Right foot/45028D52-307E-4D51-A7E3-838F16B80BC8.png"
          },
          {
            "name": "足あげる",
            "url": stampImageBase + "Right foot/31E87F0C-B015-406B-914E-F9787D77E765.png"
          },
          {
            "name": "直立",
            "url": stampImageBase + "Right foot/76CF78FF-BBEB-4A48-BD7B-A2711BD0F679.png"
          },
          {
            "name": "曲げる",
            "url": stampImageBase + "Right foot/CDBC5ADD-24B5-4CB8-8F4D-1BE51A3C5E3E.png"
          },
          {
            "name": "直立",
            "url": stampImageBase + "Right foot/0899DD2E-62DC-46BE-A543-0A6DB795BD44.png"
          },
          {
            "name": "曲げる",
            "url": stampImageBase + "Right foot/215BFD3A-A431-433D-9015-544EAADF1F51.png"
          },
          {
            "name": "曲げる",
            "url": stampImageBase + "Right foot/3A339263-48B0-4532-AF7A-52C209674976.png"
          },
          {
            "name": "足あげる",
            "url": stampImageBase + "Right foot/BD536C6F-6380-4FAE-8EDF-A4A572E1514F.png"
          },
          {
            "name": "曲げる",
            "url": stampImageBase + "Right foot/A9466192-047E-4D0B-B942-902F341161E6.png"
          },
        ]
      },
      4 : {
        "layer": "04",
        "categoryName": "左手（下レイヤー）",
        "group": "Full-body,Close-up",
        "parts": [
          {
            "name": "なし",
            "url": noneUrl
          },
          {
            "name": "グー",
            "url": stampImageBase + "Left hand under/Guu.png",
            "group": "Full-body"
          },
          {
            "name": "広げる",
            "url": stampImageBase + "Left hand under/Hirogeru.png",
            "group": "Full-body"
          },
          {
            "name": "腰",
            "url": stampImageBase + "Left hand under/Koshiate.png",
            "group": "Full-body"
          },
          {
            "name": "パー",
            "url": stampImageBase + "Left hand under/Pa-.png",
            "group": "Full-body"
          },
          {
            "name": "ピース",
            "url": stampImageBase + "Left hand under/Pi-su.png",
            "group": "Full-body"
          },
          {
            "name": "スタンダード",
            "url": stampImageBase + "Left hand under/Standard.png",
            "group": "Full-body"
          },
          {
            "name": "テヘ",
            "url": stampImageBase + "Left hand under/Tehe.png",
            "group": "Full-body"
          },
          {"group": "Parts11", "name": "Gu-lefthand11", "url": stampImageBase + "Parts11/Left hand under/Gu-lefthand11.png"},
          {"group": "Parts11", "name": "Hirogeru-lefthand11", "url": stampImageBase + "Parts11/Left hand under/Hirogeru-lefthand11.png"},
          {"group": "Parts11", "name": "Leftarm11", "url": stampImageBase + "Parts11/Left hand under/Leftarm11.png"},
          {"group": "Parts11", "name": "Pa-lefthand11", "url": stampImageBase + "Parts11/Left hand under/Pa-lefthand11.png"},
          {"group": "Parts11", "name": "Pi-us-lefthand11", "url": stampImageBase + "Parts11/Left hand under/Pi-us-lefthand11.png"},
          {"group": "Parts11", "name": "Tehe-lefthand11", "url": stampImageBase + "Parts11/Left hand under/Tehe-lefthand11.png"},
          {"group": "Parts12", "name": "Gu-lefthand12", "url": stampImageBase + "Parts12/Left hand under/Gu-lefthand12.png"},
          {"group": "Parts12", "name": "Hirogeru-lefthand12", "url": stampImageBase + "Parts12/Left hand under/Hirogeru-lefthand12.png"},
          {"group": "Parts12", "name": "Leftarm12", "url": stampImageBase + "Parts12/Left hand under/Leftarm12.png"},
          {"group": "Parts12", "name": "Pa-lefthand12", "url": stampImageBase + "Parts12/Left hand under/Pa-lefthand12.png"},
          {"group": "Parts12", "name": "Pi-us-lefthand12", "url": stampImageBase + "Parts12/Left hand under/Pi-us-lefthand12.png"},
          {"group": "Parts12", "name": "Tehe-lefthand12", "url": stampImageBase + "Parts12/Left hand under/Tehe-lefthand12.png"},
        ]
      },
      5 : {
        "layer": "05",
        "categoryName": "右手（下レイヤー）",
        "group": "Full-body,Close-up",
        "parts": [
          {
            "name": "なし",
            "url": noneUrl
          },
          {
            "name": "グー",
            "url": stampImageBase + "Right hand under/Guu.png",
            "group": "Full-body"
          },
          {
            "name": "広げる",
            "url": stampImageBase + "Right hand under/Hirogeru.png",
            "group": "Full-body"
          },
          {
            "name": "腰",
            "url": stampImageBase + "Right hand under/Koshiate.png",
            "group": "Full-body"
          },
          {
            "name": "パー",
            "url": stampImageBase + "Right hand under/Pa-.png",
            "group": "Full-body"
          },
          {
            "name": "ピース",
            "url": stampImageBase + "Right hand under/Pi-su.png",
            "group": "Full-body"
          },
          {
            "name": "スタンダード",
            "url": stampImageBase + "Right hand under/Standard.png",
            "group": "Full-body"
          },
          {
            "name": "テヘ",
            "url": stampImageBase + "Right hand under/Tehe.png",
            "group": "Full-body"
          },
          {"group": "Parts11", "name": "Gu-righthand11", "url": stampImageBase + "Parts11/Right hand under/Gu-righthand11.png"},
          {"group": "Parts11", "name": "Hirogeru-righthand11", "url": stampImageBase + "Parts11/Right hand under/Hirogeru-righthand11.png"},
          {"group": "Parts11", "name": "Pa-migiude11", "url": stampImageBase + "Parts11/Right hand under/Pa-migiude11.png"},
          {"group": "Parts11", "name": "Pi-us-righthand11", "url": stampImageBase + "Parts11/Right hand under/Pi-us-righthand11.png"},
          {"group": "Parts11", "name": "Rightarm11", "url": stampImageBase + "Parts11/Right hand under/Rightarm11.png"},
          {"group": "Parts11", "name": "Tehe-nigiude11", "url": stampImageBase + "Parts11/Right hand under/Tehe-nigiude11.png"},
          {"group": "Parts12", "name": "Gu-righthand12", "url": stampImageBase + "Parts12/Right hand under/Gu-righthand12.png"},
          {"group": "Parts12", "name": "Hirogeru-righthand12", "url": stampImageBase + "Parts12/Right hand under/Hirogeru-righthand12.png"},
          {"group": "Parts12", "name": "Pa-migiude12", "url": stampImageBase + "Parts12/Right hand under/Pa-migiude12.png"},
          {"group": "Parts12", "name": "Pi-us-righthand12", "url": stampImageBase + "Parts12/Right hand under/Pi-us-righthand12.png"},
          {"group": "Parts12", "name": "Rightarm12", "url": stampImageBase + "Parts12/Right hand under/Rightarm12.png"},
          {"group": "Parts12", "name": "Tehe-nigiude12", "url": stampImageBase + "Parts12/Right hand under/Tehe-nigiude12.png"},
        ]
      },
      6 : {
        "layer": "06",
        "categoryName": "左手の袖（下レイヤー）",
        "group": "Close-up", 
        "parts": [
          {"name": "なし", "url": noneUrl},
          {"group": "Parts11", "name": "Gu-leftsleeve11", "url": stampImageBase + "Parts11/Left hand sleeve under/Gu-leftsleeve11.png"},
          {"group": "Parts11", "name": "Hirogeru-leftsleeve11", "url": stampImageBase + "Parts11/Left hand sleeve under/Hirogeru-leftsleeve11.png"},
          {"group": "Parts11", "name": "Leftsleeve11", "url": stampImageBase + "Parts11/Left hand sleeve under/Leftsleeve11.png"},
          {"group": "Parts11", "name": "Pa-leftsleeve11", "url": stampImageBase + "Parts11/Left hand sleeve under/Pa-leftsleeve11.png"},
          {"group": "Parts11", "name": "Pi-su-leftsleeve11", "url": stampImageBase + "Parts11/Left hand sleeve under/Pi-su-leftsleeve11.png"},
          {"group": "Parts11", "name": "Tehe-leftsleeve11", "url": stampImageBase + "Parts11/Left hand sleeve under/Tehe-leftsleeve11.png"},
          {"group": "Parts12", "name": "Gu-leftsleeve12", "url": stampImageBase + "Parts12/Left hand sleeve under/Gu-leftsleeve12.png"},
          {"group": "Parts12", "name": "Hirogeru-leftsleeve12", "url": stampImageBase + "Parts12/Left hand sleeve under/Hirogeru-leftsleeve12.png"},
          {"group": "Parts12", "name": "Leftsleeve12", "url": stampImageBase + "Parts12/Left hand sleeve under/Leftsleeve12.png"},
          {"group": "Parts12", "name": "Pa-leftsleeve12", "url": stampImageBase + "Parts12/Left hand sleeve under/Pa-leftsleeve12.png"},
          {"group": "Parts12", "name": "Pi-su-leftsleeve12", "url": stampImageBase + "Parts12/Left hand sleeve under/Pi-su-leftsleeve12.png"},
          {"group": "Parts12", "name": "Tehe-leftsleeve12", "url": stampImageBase + "Parts12/Left hand sleeve under/Tehe-leftsleeve12.png"},
        ]
      },
      7 : {
        "layer": "07",
        "categoryName": "右手の袖（下レイヤー）",
        "group": "Close-up", 
        "parts": [
          {"name": "なし", "url": noneUrl},
          {"group": "Parts11", "name": "Gu-rightsleeve11", "url": stampImageBase + "Parts11/Right hand sleeve under/Gu-rightsleeve11.png"},
          {"group": "Parts11", "name": "Hirogeru-rightsleeve11", "url": stampImageBase + "Parts11/Right hand sleeve under/Hirogeru-rightsleeve11.png"},
          {"group": "Parts11", "name": "Rightsieeve11", "url": stampImageBase + "Parts11/Right hand sleeve under/Rightsieeve11.png"},
          {"group": "Parts11", "name": "Pa-rightsleeve11", "url": stampImageBase + "Parts11/Right hand sleeve under/Pa-rightsleeve11.png"},
          {"group": "Parts11", "name": "Pi-us-righesleeve11", "url": stampImageBase + "Parts11/Right hand sleeve under/Pi-us-righesleeve11.png"},
          {"group": "Parts11", "name": "Tehe-rightsleeve11", "url": stampImageBase + "Parts11/Right hand sleeve under/Tehe-rightsleeve11.png"},
          {"group": "Parts12", "name": "Gu-rightsleeve12", "url": stampImageBase + "Parts12/Right hand sleeve under/Gu-rightsleeve12.png"},
          {"group": "Parts12", "name": "Hirogeru-rightsleeve12", "url": stampImageBase + "Parts12/Right hand sleeve under/Hirogeru-rightsleeve12.png"},
          {"group": "Parts12", "name": "Rightsieeve12", "url": stampImageBase + "Parts12/Right hand sleeve under/Rightsieeve12.png"},
          {"group": "Parts12", "name": "Pa-rightsleeve12", "url": stampImageBase + "Parts12/Right hand sleeve under/Pa-rightsleeve12.png"},
          {"group": "Parts12", "name": "Pi-us-righesleeve12", "url": stampImageBase + "Parts12/Right hand sleeve under/Pi-us-righesleeve12.png"},
          {"group": "Parts12", "name": "Tehe-rightsleeve12", "url": stampImageBase + "Parts12/Right hand sleeve under/Tehe-rightsleeve12.png"},
        ]
      },
      8 : {
        "layer": "08",
        "categoryName": "服",
        "group": "Full-body,Close-up",
        "parts": [
          {
            "name": "CBAs 1",
            "url": stampImageBase + "Clothes/CBAs 1.png",
            "group": "Full-body"
          },
          {
            "name": "CBAs T2",
            "url": stampImageBase + "Clothes/CBAs T2.png",
            "group": "Full-body"
          },
          {
            "name": "CBAs T3",
            "url": stampImageBase + "Clothes/CBAs T3.png",
            "group": "Full-body"
          },
          {
            "name": "CBAs T4",
            "url": stampImageBase + "Clothes/CBAs T4.png",
            "group": "Full-body"
          },
          {
            "name": "HartT1",
            "url": stampImageBase + "Clothes/HartT1.png",
            "group": "Full-body"
          },
          {
            "name": "HartT2",
            "url": stampImageBase + "Clothes/HartT2.png",
            "group": "Full-body"
          },
          {
            "name": "HartT3",
            "url": stampImageBase + "Clothes/HartT3.png",
            "group": "Full-body"
          },
          {
            "name": "HartT4",
            "url": stampImageBase + "Clothes/HartT4.png",
            "group": "Full-body"
          },
          {
            "name": "Mizutama1",
            "url": stampImageBase + "Clothes/Mizutama1.png",
            "group": "Full-body"
          },
          {
            "name": "Mizutama2",
            "url": stampImageBase + "Clothes/Mizutama2.png",
            "group": "Full-body"
          },
          {
            "name": "Mizutama3",
            "url": stampImageBase + "Clothes/Mizutama3.png",
            "group": "Full-body"
          },
          {
            "name": "Mizutama4",
            "url": stampImageBase + "Clothes/Mizutama4.png",
            "group": "Full-body"
          },
          {
            "name": "Producer1",
            "url": stampImageBase + "Clothes/Producer1.png",
            "group": "Full-body"
          },
          {
            "name": "Producer2",
            "url": stampImageBase + "Clothes/Producer2.png",
            "group": "Full-body"
          },
          {
            "name": "Producer3",
            "url": stampImageBase + "Clothes/Producer3.png",
            "group": "Full-body"
          },
          {
            "name": "Producer4",
            "url": stampImageBase + "Clothes/Producer4.png",
            "group": "Full-body"
          },
          {
            "name": "Ribonn1",
            "url": stampImageBase + "Clothes/Ribonn1.png",
            "group": "Full-body"
          },
          {
            "name": "Ribonn2",
            "url": stampImageBase + "Clothes/Ribonn2.png",
            "group": "Full-body"
          },
          {
            "name": "Ribonn3",
            "url": stampImageBase + "Clothes/Ribonn3.png",
            "group": "Full-body"
          },
          {
            "name": "Ribonn4",
            "url": stampImageBase + "Clothes/Ribonn4.png",
            "group": "Full-body"
          },
          {
            "name": "Sailorsuit1",
            "url": stampImageBase + "Clothes/Sailorsuit1.png",
            "group": "Full-body"
          },
          {
            "name": "Sailorsuit2",
            "url": stampImageBase + "Clothes/Sailorsuit2.png",
            "group": "Full-body"
          },
          {
            "name": "Sailorsuit3",
            "url": stampImageBase + "Clothes/Sailorsuit3.png",
            "group": "Full-body"
          },
          {
            "name": "Sailorsuit4",
            "url": stampImageBase + "Clothes/Sailorsuit4.png",
            "group": "Full-body"
          },
          {
            "name": "ShikibuT1",
            "url": stampImageBase + "Clothes/ShikibuT1.png",
            "group": "Full-body"
          },
          {
            "name": "ShikibuT2",
            "url": stampImageBase + "Clothes/ShikibuT2.png",
            "group": "Full-body"
          },
          {
            "name": "ShikibuT3",
            "url": stampImageBase + "Clothes/ShikibuT3.png",
            "group": "Full-body"
          },
          {
            "name": "ShikibuT4",
            "url": stampImageBase + "Clothes/ShikibuT4.png",
            "group": "Full-body"
          },
          {
            "name": "Tanktop",
            "url": stampImageBase + "Clothes/Tanktop.png",
            "group": "Full-body"
          },
          {
            "name": "Uniform",
            "url": stampImageBase + "Clothes/Uniform.png",
            "group": "Full-body"
          },
          {
            "name": "CBAsT11",
            "url": stampImageBase + "Parts11/Clothes/CBAsT11.png",
            "group": "Parts11"
          },
          {
            "name": "Chokki11",
            "url": stampImageBase + "Parts11/Clothes/Chokki11.png",
            "group": "Parts11"
          },
          {
            "name": "Gakuran11",
            "url": stampImageBase + "Parts11/Clothes/Gakuran11.png",
            "group": "Parts11"
          },
          {
            "name": "Kawajan11",
            "url": stampImageBase + "Parts11/Clothes/Kawajan11.png",
            "group": "Parts11"
          },
          {
            "name": "Pa-ka-11",
            "url": stampImageBase + "Parts11/Clothes/Pa-ka-11.png",
            "group": "Parts11"
          },
          {
            "name": "ShikibuT11",
            "url": stampImageBase + "Parts11/Clothes/ShikibuT11.png",
            "group": "Parts11"
          },
          {
            "name": "Su-tu1-11",
            "url": stampImageBase + "Parts11/Clothes/Su-tu1-11.png",
            "group": "Parts11"
          },
          {
            "name": "Su-tu2-11",
            "url": stampImageBase + "Parts11/Clothes/Su-tu2-11.png",
            "group": "Parts11"
          },
          {
            "name": "Unifomu11",
            "url": stampImageBase + "Parts11/Clothes/Unifomu11.png",
            "group": "Parts11"
          },
          {
            "name": "Yankii-fuku11",
            "url": stampImageBase + "Parts11/Clothes/Yankii-fuku11.png",
            "group": "Parts11"
          },
          {
            "name": "CBAsT12",
            "url": stampImageBase + "Parts12/Clothes/CBAsT12.png",
            "group": "Parts12"
          },
          {
            "name": "Chokki12",
            "url": stampImageBase + "Parts12/Clothes/Chokki12.png",
            "group": "Parts12"
          },
          {
            "name": "Gakuran12",
            "url": stampImageBase + "Parts12/Clothes/Gakuran12.png",
            "group": "Parts12"
          },
          {
            "name": "Kawajann12",
            "url": stampImageBase + "Parts12/Clothes/Kawajann12.png",
            "group": "Parts12"
          },
          {
            "name": "Pa-ka-12",
            "url": stampImageBase + "Parts12/Clothes/Pa-ka-12.png",
            "group": "Parts12"
          },
          {
            "name": "ShikibuT12",
            "url": stampImageBase + "Parts12/Clothes/ShikibuT12.png",
            "group": "Parts12"
          },
          {
            "name": "Su-tu1-12",
            "url": stampImageBase + "Parts12/Clothes/Su-tu1-12.png",
            "group": "Parts12"
          },
          {
            "name": "Su-tu2-12",
            "url": stampImageBase + "Parts12/Clothes/Su-tu2-12.png",
            "group": "Parts12"
          },
          {
            "name": "Unifomu12",
            "url": stampImageBase + "Parts12/Clothes/Unifomu12.png",
            "group": "Parts12"
          },
          {
            "name": "Yanki-fuku12",
            "url": stampImageBase + "Parts12/Clothes/Yanki-fuku12.png",
            "group": "Parts12"
          },
        ]
      },
      9 : {
        "layer": "09",
        "categoryName": "顔",
        "parts": [
          {"group": "Parts01", "name": "standard", "url": stampImageBase + "Parts01/Face/Standard1.png"},
          {"group": "Parts01", "name": "red", "url": stampImageBase + "Parts01/Face/Red1.png"},
          {"group": "Parts01", "name": "brown", "url": stampImageBase + "Parts01/Face/Brown1.png"},
          {"group": "Parts01", "name": "white", "url": stampImageBase + "Parts01/Face/White1.png"},
          {"group": "Parts02", "name": "standard", "url": stampImageBase + "Parts02/Face/Standard2.png"},
          {"group": "Parts02", "name": "red", "url": stampImageBase + "Parts02/Face/Red2.png"},
          {"group": "Parts02", "name": "brown", "url": stampImageBase + "Parts02/Face/Brown2.png"},
          {"group": "Parts02", "name": "white", "url": stampImageBase + "Parts02/Face/White2.png"},
          {"group": "Parts03", "name": "standard", "url": stampImageBase + "Parts03/Face/Standard3.png"},
          {"group": "Parts03", "name": "red", "url": stampImageBase + "Parts03/Face/Red3.png"},
          {"group": "Parts03", "name": "brown", "url": stampImageBase + "Parts03/Face/Brown3.png"},
          {"group": "Parts03", "name": "white", "url": stampImageBase + "Parts03/Face/White3.png"},
          {"group": "Parts04", "name": "standard", "url": stampImageBase + "Parts04/Face/Standard4.png"},
          {"group": "Parts04", "name": "red", "url": stampImageBase + "Parts04/Face/Red4.png"},
          {"group": "Parts04", "name": "brown", "url": stampImageBase + "Parts04/Face/Brown4.png"},
          {"group": "Parts04", "name": "white", "url": stampImageBase + "Parts04/Face/White4.png"},
          {"group": "Parts05", "name": "standard", "url": stampImageBase + "Parts05/Face/Standard5.png"},
          {"group": "Parts05", "name": "red", "url": stampImageBase + "Parts05/Face/Red5.png"},
          {"group": "Parts05", "name": "brown", "url": stampImageBase + "Parts05/Face/Brown5.png"},
          {"group": "Parts05", "name": "white", "url": stampImageBase + "Parts05/Face/White5.png"},
          {"group": "Parts06", "name": "standard", "url": stampImageBase + "Parts06/Face/Standard6.png"},
          {"group": "Parts06", "name": "red", "url": stampImageBase + "Parts06/Face/Red6.png"},
          {"group": "Parts06", "name": "brown", "url": stampImageBase + "Parts06/Face/Brown6.png"},
          {"group": "Parts06", "name": "white", "url": stampImageBase + "Parts06/Face/White6.png"},
          {"group": "Parts07", "name": "standard", "url": stampImageBase + "Parts07/Face/Standard7.png"},
          {"group": "Parts07", "name": "red", "url": stampImageBase + "Parts07/Face/Red7.png"},
          {"group": "Parts07", "name": "brown", "url": stampImageBase + "Parts07/Face/Brown7.png"},
          {"group": "Parts07", "name": "white", "url": stampImageBase + "Parts07/Face/White7.png"},
          {"group": "Parts08", "name": "standard", "url": stampImageBase + "Parts08/Face/Standard8.png"},
          {"group": "Parts08", "name": "red", "url": stampImageBase + "Parts08/Face/Red8.png"},
          {"group": "Parts08", "name": "brown", "url": stampImageBase + "Parts08/Face/Brown8.png"},
          {"group": "Parts08", "name": "white", "url": stampImageBase + "Parts08/Face/White8.png"},
          {"group": "Parts09", "name": "standard", "url": stampImageBase + "Parts09/Face/Standard9.png"},
          {"group": "Parts09", "name": "red", "url": stampImageBase + "Parts09/Face/Red9.png"},
          {"group": "Parts09", "name": "brown", "url": stampImageBase + "Parts09/Face/Brown9.png"},
          {"group": "Parts09", "name": "white", "url": stampImageBase + "Parts09/Face/White9.png"},
          {"group": "Parts10", "name": "standard", "url": stampImageBase + "Parts10/Face/Standard10.png"},
          {"group": "Parts10", "name": "red", "url": stampImageBase + "Parts10/Face/Red10.png"},
          {"group": "Parts10", "name": "brown", "url": stampImageBase + "Parts10/Face/Brown10.png"},
          {"group": "Parts10", "name": "white", "url": stampImageBase + "Parts10/Face/White10.png"},
          {"group": "Parts11", "name": "standard", "url": stampImageBase + "Parts11/Face/Standard11.png"},
          {"group": "Parts11", "name": "red", "url": stampImageBase + "Parts11/Face/Red11.png"},
          {"group": "Parts11", "name": "brown", "url": stampImageBase + "Parts11/Face/Brown11.png"},
          {"group": "Parts11", "name": "white", "url": stampImageBase + "Parts11/Face/White11.png"},
          {"group": "Parts12", "name": "standard", "url": stampImageBase + "Parts12/Face/Standard12.png"},
          {"group": "Parts12", "name": "red", "url": stampImageBase + "Parts12/Face/Red12.png"},
          {"group": "Parts12", "name": "brown", "url": stampImageBase + "Parts12/Face/Brown12.png"},
          {"group": "Parts12", "name": "white", "url": stampImageBase + "Parts12/Face/White12.png"},
          {"group": "Parts14", "name": "Standard", "url": stampImageBase + "Parts14/Face/Standard.png"},
        ]
      },
      10 : {
        "layer": "10",
        "categoryName": "目",
        "parts": [
          {"group": "Parts01", "name": "スタンダード", "url": stampImageBase + "Parts13/Eyes/Standard-eye.png"},
          {"group": "Parts01", "name": "ガーン", "url": stampImageBase + "Parts13/Eyes/Ga-n.png"},
          {"group": "Parts01", "name": "ギュ", "url": stampImageBase + "Parts13/Eyes/Gyu.png"},
          {"group": "Parts01", "name": "ハート", "url": stampImageBase + "Parts13/Eyes/Ha-to.png"},
          {"group": "Parts01", "name": "泣く", "url": stampImageBase + "Parts13/Eyes/Naku.png"},
          {"group": "Parts01", "name": "ニッコリ", "url": stampImageBase + "Parts13/Eyes/Nikkori.png"},
          {"group": "Parts01", "name": "白目", "url": stampImageBase + "Parts13/Eyes/Shirome.png"},
          {"group": "Parts01", "name": "瞑る", "url": stampImageBase + "Parts13/Eyes/Tuburu.png"},
          {"group": "Parts01", "name": "上向き", "url": stampImageBase + "Parts13/Eyes/Uemuki.png"},
          {"group": "Parts01", "name": "ウィンク", "url": stampImageBase + "Parts13/Eyes/Uink.png"},
          {"group": "Parts01", "name": "キリッ", "url": stampImageBase + "Parts13/Eyes/Kiri.png"},
          {"group": "Parts01", "name": "キョトーン", "url": stampImageBase + "Parts13/Eyes/Kyoto-nn.png"},
          {"group": "Parts01", "name": "燃えるっ", "url": stampImageBase + "Parts13/Eyes/Moeru.png"},
          {"group": "Parts01", "name": "睨む", "url": stampImageBase + "Parts13/Eyes/Niramu.png"},
          {"group": "Parts01", "name": "怒る", "url": stampImageBase + "Parts13/Eyes/Okoru.png"},
          {"group": "Parts01", "name": "白目で怒る", "url": stampImageBase + "Parts13/Eyes/Shiromedeokoru.png"},
          {"group": "Parts01", "name": "静かに泣く", "url": stampImageBase + "Parts13/Eyes/Shizukaninaku.png"},
          // {"group": "Parts01", "name": "スタンダード", "url": stampImageBase + "Parts01/Eyes/Standard1.png"},
          // {"group": "Parts01", "name": "ボケ", "url": stampImageBase + "Parts01/Eyes/Boke1.png"},
          // {"group": "Parts01", "name": "ギュッ", "url": stampImageBase + "Parts01/Eyes/Gyu1.png"},
          // {"group": "Parts01", "name": "眠そう", "url": stampImageBase + "Parts01/Eyes/Nemusou1.png"},
          // {"group": "Parts01", "name": "ぱっちり", "url": stampImageBase + "Parts01/Eyes/Pacchiri1.png"},
          // {"group": "Parts01", "name": "下まつげ", "url": stampImageBase + "Parts01/Eyes/Shitamatuge1.png"},
          // {"group": "Parts01", "name": "つぶる", "url": stampImageBase + "Parts01/Eyes/Tuburu1.png"},
          // {"group": "Parts01", "name": "上向き", "url": stampImageBase + "Parts01/Eyes/Uemuki1.png"},
          // {"group": "Parts01", "name": "ウィンク", "url": stampImageBase + "Parts01/Eyes/Uink1.png"},
          {"group": "Parts02", "name": "スタンダード", "url": stampImageBase + "Parts02/Eyes/Standard2.png"},
          {"group": "Parts02", "name": "ボケ", "url": stampImageBase + "Parts02/Eyes/Boke2.png"},
          {"group": "Parts02", "name": "ギュッ", "url": stampImageBase + "Parts02/Eyes/Gyu2.png"},
          {"group": "Parts02", "name": "眠そう", "url": stampImageBase + "Parts02/Eyes/Nemusou2.png"},
          {"group": "Parts02", "name": "ぱっちり", "url": stampImageBase + "Parts02/Eyes/Pacchiri2.png"},
          {"group": "Parts02", "name": "下まつげ", "url": stampImageBase + "Parts02/Eyes/Shitamatuge2.png"},
          {"group": "Parts02", "name": "つぶる", "url": stampImageBase + "Parts02/Eyes/Tuburu2.png"},
          {"group": "Parts02", "name": "上向き", "url": stampImageBase + "Parts02/Eyes/Uemuki2.png"},
          {"group": "Parts02", "name": "ウィンク", "url": stampImageBase + "Parts02/Eyes/Uink2.png"},
          {"group": "Parts03", "name": "スタンダード", "url": stampImageBase + "Parts03/Eyes/Standard3.png"},
          {"group": "Parts03", "name": "ボケ", "url": stampImageBase + "Parts03/Eyes/Boke3.png"},
          {"group": "Parts03", "name": "ギュッ", "url": stampImageBase + "Parts03/Eyes/Gyu3.png"},
          {"group": "Parts03", "name": "眠そう", "url": stampImageBase + "Parts03/Eyes/Nemusou3.png"},
          {"group": "Parts03", "name": "ぱっちり", "url": stampImageBase + "Parts03/Eyes/Pacchiri3.png"},
          {"group": "Parts03", "name": "下まつげ", "url": stampImageBase + "Parts03/Eyes/Shitamatuge3.png"},
          {"group": "Parts03", "name": "つぶる", "url": stampImageBase + "Parts03/Eyes/Tuburu3.png"},
          {"group": "Parts03", "name": "上向き", "url": stampImageBase + "Parts03/Eyes/Uemuki3.png"},
          {"group": "Parts03", "name": "ウィンク", "url": stampImageBase + "Parts03/Eyes/Uink3.png"},
          {"group": "Parts04", "name": "スタンダード", "url": stampImageBase + "Parts04/Eyes/Standard4.png"},
          {"group": "Parts04", "name": "ボケ", "url": stampImageBase + "Parts04/Eyes/Boke4.png"},
          {"group": "Parts04", "name": "ギュッ", "url": stampImageBase + "Parts04/Eyes/Gyu4.png"},
          {"group": "Parts04", "name": "眠そう", "url": stampImageBase + "Parts04/Eyes/Nemusou4.png"},
          {"group": "Parts04", "name": "ぱっちり", "url": stampImageBase + "Parts04/Eyes/Pacchiri4.png"},
          {"group": "Parts04", "name": "下まつげ", "url": stampImageBase + "Parts04/Eyes/Shitamatuge4.png"},
          {"group": "Parts04", "name": "つぶる", "url": stampImageBase + "Parts04/Eyes/Tuburu4.png"},
          {"group": "Parts04", "name": "上向き", "url": stampImageBase + "Parts04/Eyes/Uemuki4.png"},
          {"group": "Parts04", "name": "ウィンク", "url": stampImageBase + "Parts04/Eyes/Uink4.png"},
          {"group": "Parts05", "name": "スタンダード", "url": stampImageBase + "Parts05/Eyes/Standard5.png"},
          {"group": "Parts05", "name": "ボケ", "url": stampImageBase + "Parts05/Eyes/Boke5.png"},
          {"group": "Parts05", "name": "ギュッ", "url": stampImageBase + "Parts05/Eyes/Gyu5.png"},
          {"group": "Parts05", "name": "眠そう", "url": stampImageBase + "Parts05/Eyes/Nemusou5.png"},
          {"group": "Parts05", "name": "ぱっちり", "url": stampImageBase + "Parts05/Eyes/Pacchiri5.png"},
          {"group": "Parts05", "name": "下まつげ", "url": stampImageBase + "Parts05/Eyes/Shitamatuge5.png"},
          {"group": "Parts05", "name": "つぶる", "url": stampImageBase + "Parts05/Eyes/Tuburu5.png"},
          {"group": "Parts05", "name": "上向き", "url": stampImageBase + "Parts05/Eyes/Uemuki5.png"},
          {"group": "Parts05", "name": "ウィンク", "url": stampImageBase + "Parts05/Eyes/Uink5.png"},
          {"group": "Parts06", "name": "スタンダード", "url": stampImageBase + "Parts06/Eyes/Standard6.png"},
          {"group": "Parts06", "name": "ボケ", "url": stampImageBase + "Parts06/Eyes/Boke6.png"},
          {"group": "Parts06", "name": "ギュッ", "url": stampImageBase + "Parts06/Eyes/Gyu6.png"},
          {"group": "Parts06", "name": "眠そう", "url": stampImageBase + "Parts06/Eyes/Nemusou6.png"},
          {"group": "Parts06", "name": "ぱっちり", "url": stampImageBase + "Parts06/Eyes/Pacchiri6.png"},
          {"group": "Parts06", "name": "下まつげ", "url": stampImageBase + "Parts06/Eyes/Shitamatuge6.png"},
          {"group": "Parts06", "name": "つぶる", "url": stampImageBase + "Parts06/Eyes/Tuburu6.png"},
          {"group": "Parts06", "name": "上向き", "url": stampImageBase + "Parts06/Eyes/Uemuki6.png"},
          {"group": "Parts06", "name": "ウィンク", "url": stampImageBase + "Parts06/Eyes/Uink6.png"},
          {"group": "Parts07", "name": "スタンダード", "url": stampImageBase + "Parts07/Eyes/Standard7.png"},
          {"group": "Parts07", "name": "ボケ", "url": stampImageBase + "Parts07/Eyes/Boke7.png"},
          {"group": "Parts07", "name": "ギュッ", "url": stampImageBase + "Parts07/Eyes/Gyu7.png"},
          {"group": "Parts07", "name": "眠そう", "url": stampImageBase + "Parts07/Eyes/Nemusou7.png"},
          {"group": "Parts07", "name": "ぱっちり", "url": stampImageBase + "Parts07/Eyes/Pacchiri7.png"},
          {"group": "Parts07", "name": "下まつげ", "url": stampImageBase + "Parts07/Eyes/Shitamatuge7.png"},
          {"group": "Parts07", "name": "つぶる", "url": stampImageBase + "Parts07/Eyes/Tuburu7.png"},
          {"group": "Parts07", "name": "上向き", "url": stampImageBase + "Parts07/Eyes/Uemuki7.png"},
          {"group": "Parts07", "name": "ウィンク", "url": stampImageBase + "Parts07/Eyes/Uink7.png"},
          {"group": "Parts08", "name": "スタンダード", "url": stampImageBase + "Parts08/Eyes/Standard8.png"},
          {"group": "Parts08", "name": "ボケ", "url": stampImageBase + "Parts08/Eyes/Boke8.png"},
          {"group": "Parts08", "name": "ギュッ", "url": stampImageBase + "Parts08/Eyes/Gyu8.png"},
          {"group": "Parts08", "name": "眠そう", "url": stampImageBase + "Parts08/Eyes/Nemusou8.png"},
          {"group": "Parts08", "name": "ぱっちり", "url": stampImageBase + "Parts08/Eyes/Pacchiri8.png"},
          {"group": "Parts08", "name": "下まつげ", "url": stampImageBase + "Parts08/Eyes/Shitamatuge8.png"},
          {"group": "Parts08", "name": "つぶる", "url": stampImageBase + "Parts08/Eyes/Tuburu8.png"},
          {"group": "Parts08", "name": "上向き", "url": stampImageBase + "Parts08/Eyes/Uemuki8.png"},
          {"group": "Parts08", "name": "ウィンク", "url": stampImageBase + "Parts08/Eyes/Uink8.png"},
          {"group": "Parts09", "name": "スタンダード", "url": stampImageBase + "Parts09/Eyes/Standard9.png"},
          {"group": "Parts09", "name": "ボケ", "url": stampImageBase + "Parts09/Eyes/Boke9.png"},
          {"group": "Parts09", "name": "ギュッ", "url": stampImageBase + "Parts09/Eyes/Gyu9.png"},
          {"group": "Parts09", "name": "眠そう", "url": stampImageBase + "Parts09/Eyes/Nemusou9.png"},
          {"group": "Parts09", "name": "ぱっちり", "url": stampImageBase + "Parts09/Eyes/Pacchiri9.png"},
          {"group": "Parts09", "name": "下まつげ", "url": stampImageBase + "Parts09/Eyes/Shitamatuge9.png"},
          {"group": "Parts09", "name": "つぶる", "url": stampImageBase + "Parts09/Eyes/Tuburu9.png"},
          {"group": "Parts09", "name": "上向き", "url": stampImageBase + "Parts09/Eyes/Uemuki9.png"},
          {"group": "Parts09", "name": "ウィンク", "url": stampImageBase + "Parts09/Eyes/Uink9.png"},
          {"group": "Parts10", "name": "スタンダード", "url": stampImageBase + "Parts10/Eyes/Standard10.png"},
          {"group": "Parts10", "name": "ボケ", "url": stampImageBase + "Parts10/Eyes/Boke10.png"},
          {"group": "Parts10", "name": "ギュッ", "url": stampImageBase + "Parts10/Eyes/Gyu10.png"},
          {"group": "Parts10", "name": "眠そう", "url": stampImageBase + "Parts10/Eyes/Nemusou10.png"},
          {"group": "Parts10", "name": "ぱっちり", "url": stampImageBase + "Parts10/Eyes/Pacchiri10.png"},
          {"group": "Parts10", "name": "下まつげ", "url": stampImageBase + "Parts10/Eyes/Shitamatuge10.png"},
          {"group": "Parts10", "name": "つぶる", "url": stampImageBase + "Parts10/Eyes/Tuburu10.png"},
          {"group": "Parts10", "name": "上向き", "url": stampImageBase + "Parts10/Eyes/Uemuki10.png"},
          {"group": "Parts10", "name": "ウィンク", "url": stampImageBase + "Parts10/Eyes/Uink10.png"},
          {"group": "Parts11", "name": "スタンダード", "url": stampImageBase + "Parts11/Eyes/Standard11.png"},
          {"group": "Parts11", "name": "ボケ", "url": stampImageBase + "Parts11/Eyes/Boke11.png"},
          {"group": "Parts11", "name": "ギュッ", "url": stampImageBase + "Parts11/Eyes/Gyu11.png"},
          {"group": "Parts11", "name": "眠そう", "url": stampImageBase + "Parts11/Eyes/Nemusou11.png"},
          {"group": "Parts11", "name": "ぱっちり", "url": stampImageBase + "Parts11/Eyes/Pacchiri11.png"},
          {"group": "Parts11", "name": "下まつげ", "url": stampImageBase + "Parts11/Eyes/Shitamatuge11.png"},
          {"group": "Parts11", "name": "上向き", "url": stampImageBase + "Parts11/Eyes/Uemuki11.png"},
          {"group": "Parts11", "name": "ウィンク", "url": stampImageBase + "Parts11/Eyes/Uink11.png"},
          {"group": "Parts11", "name": "ギロッ", "url": stampImageBase + "Parts11/Eyes/Giro11.png"},
          {"group": "Parts12", "name": "スタンダード", "url": stampImageBase + "Parts12/Eyes/Standard12.png"},
          {"group": "Parts12", "name": "ボケ", "url": stampImageBase + "Parts12/Eyes/Boke12.png"},
          {"group": "Parts12", "name": "ギュッ", "url": stampImageBase + "Parts12/Eyes/Gyu12.png"},
          {"group": "Parts12", "name": "眠そう", "url": stampImageBase + "Parts12/Eyes/Nemusou12.png"},
          {"group": "Parts12", "name": "ぱっちり", "url": stampImageBase + "Parts12/Eyes/Pacchiri12.png"},
          {"group": "Parts12", "name": "下まつげ", "url": stampImageBase + "Parts12/Eyes/Shitamatuge12.png"},
       // {"group": "Parts12", "name": "つぶる", "url": stampImageBase + "Parts12/Eyes/Tuburu12.png"},
          {"group": "Parts12", "name": "上向き", "url": stampImageBase + "Parts12/Eyes/Uemuki12.png"},
          {"group": "Parts12", "name": "ウィンク", "url": stampImageBase + "Parts12/Eyes/Uink12.png"},
          {"group": "Parts12", "name": "ギロッ", "url": stampImageBase + "Parts12/Eyes/Giro12.png"},
          {"group": "Parts14", "name": "ウィンク", "url": stampImageBase + "Parts14/Eyes/Wink.png"},
          {"group": "Parts14", "name": "ギュッ", "url": stampImageBase + "Parts14/Eyes/Gyu.png"},
          {"group": "Parts14", "name": "ギロッ", "url": stampImageBase + "Parts14/Eyes/Giro.png"},
          {"group": "Parts14", "name": "ニコリ", "url": stampImageBase + "Parts14/Eyes/Nikori.png"},
          {"group": "Parts14", "name": "のほほん", "url": stampImageBase + "Parts14/Eyes/Nohohon.png"},
          {"group": "Parts14", "name": "泣く", "url": stampImageBase + "Parts14/Eyes/Cry.png"},
        ]
      },
      11 : {
        "layer": "11",
        "categoryName": "鼻",
        "parts": [
          {"group": "Parts01", "name": "鼻", "url": stampImageBase + "Parts13/Nose/Nose.png"},
          // {"group": "Parts01", "name": "スタンダード", "url": stampImageBase + "Parts01/Nose/Standard1.png"},
          {"name": "なし", "url": noneUrl},
          // {"group": "Parts01", "name": "絆創膏", "url": stampImageBase + "Parts01/Nose/Bannsoukou1.png"},
          // {"group": "Parts01", "name": "動物鼻", "url": stampImageBase + "Parts01/Nose/Doubutuhana1.png"},
          // {"group": "Parts01", "name": "鼻ピアス", "url": stampImageBase + "Parts01/Nose/Hanapiasu1.png"},
          // {"group": "Parts01", "name": "ピエロ", "url": stampImageBase + "Parts01/Nose/Piero1.png"},
          {"group": "Parts02", "name": "スタンダード", "url": stampImageBase + "Parts02/Nose/Standard2.png"},
          {"group": "Parts02", "name": "絆創膏", "url": stampImageBase + "Parts02/Nose/Bannsoukou2.png"},
          {"group": "Parts02", "name": "動物鼻", "url": stampImageBase + "Parts02/Nose/Doubutuhana2.png"},
          {"group": "Parts02", "name": "鼻ピアス", "url": stampImageBase + "Parts02/Nose/Hanapiasu2.png"},
          {"group": "Parts02", "name": "ピエロ", "url": stampImageBase + "Parts02/Nose/Piero2.png"},
          {"group": "Parts03", "name": "スタンダード", "url": stampImageBase + "Parts03/Nose/Standard3.png"},
          {"group": "Parts03", "name": "絆創膏", "url": stampImageBase + "Parts03/Nose/Bannsoukou3.png"},
          {"group": "Parts03", "name": "動物鼻", "url": stampImageBase + "Parts03/Nose/Doubutuhana3.png"},
          {"group": "Parts03", "name": "鼻ピアス", "url": stampImageBase + "Parts03/Nose/Hanapiasu3.png"},
          {"group": "Parts03", "name": "ピエロ", "url": stampImageBase + "Parts03/Nose/Piero3.png"},
          {"group": "Parts04", "name": "スタンダード", "url": stampImageBase + "Parts04/Nose/Standard4.png"},
          {"group": "Parts04", "name": "絆創膏", "url": stampImageBase + "Parts04/Nose/Bannsoukou4.png"},
          {"group": "Parts04", "name": "動物鼻", "url": stampImageBase + "Parts04/Nose/Doubutuhana4.png"},
          {"group": "Parts04", "name": "鼻ピアス", "url": stampImageBase + "Parts04/Nose/Hanapiasu4.png"},
          {"group": "Parts04", "name": "ピエロ", "url": stampImageBase + "Parts04/Nose/Piero4.png"},
          {"group": "Parts05", "name": "スタンダード", "url": stampImageBase + "Parts05/Nose/Standard5.png"},
          {"group": "Parts05", "name": "絆創膏", "url": stampImageBase + "Parts05/Nose/Bannsoukou5.png"},
          {"group": "Parts05", "name": "動物鼻", "url": stampImageBase + "Parts05/Nose/Doubutuhana5.png"},
          {"group": "Parts05", "name": "鼻ピアス", "url": stampImageBase + "Parts05/Nose/Hanapiasu5.png"},
          {"group": "Parts05", "name": "ピエロ", "url": stampImageBase + "Parts05/Nose/Piero5.png"},
          {"group": "Parts06", "name": "スタンダード", "url": stampImageBase + "Parts06/Nose/Standard6.png"},
          {"group": "Parts06", "name": "絆創膏", "url": stampImageBase + "Parts06/Nose/Bannsoukou6.png"},
          {"group": "Parts06", "name": "動物鼻", "url": stampImageBase + "Parts06/Nose/Doubutuhana6.png"},
          {"group": "Parts06", "name": "鼻ピアス", "url": stampImageBase + "Parts06/Nose/Hanapiasu6.png"},
          {"group": "Parts06", "name": "ピエロ", "url": stampImageBase + "Parts06/Nose/Piero6.png"},
          {"group": "Parts07", "name": "スタンダード", "url": stampImageBase + "Parts07/Nose/Standard7.png"},
          {"group": "Parts07", "name": "絆創膏", "url": stampImageBase + "Parts07/Nose/Bannsoukou7.png"},
          {"group": "Parts07", "name": "動物鼻", "url": stampImageBase + "Parts07/Nose/Doubutuhana7.png"},
          {"group": "Parts07", "name": "鼻ピアス", "url": stampImageBase + "Parts07/Nose/Hanapiasu7.png"},
          {"group": "Parts07", "name": "ピエロ", "url": stampImageBase + "Parts07/Nose/Piero7.png"},
          {"group": "Parts08", "name": "スタンダード", "url": stampImageBase + "Parts08/Nose/Standard8.png"},
          {"group": "Parts08", "name": "絆創膏", "url": stampImageBase + "Parts08/Nose/Bannsoukou8.png"},
          {"group": "Parts08", "name": "動物鼻", "url": stampImageBase + "Parts08/Nose/Doubutuhana8.png"},
          {"group": "Parts08", "name": "鼻ピアス", "url": stampImageBase + "Parts08/Nose/Hanapiasu8.png"},
          {"group": "Parts08", "name": "ピエロ", "url": stampImageBase + "Parts08/Nose/Piero8.png"},
          {"group": "Parts09", "name": "スタンダード", "url": stampImageBase + "Parts09/Nose/Standard9.png"},
          {"group": "Parts09", "name": "絆創膏", "url": stampImageBase + "Parts09/Nose/Bannsoukou9.png"},
          {"group": "Parts09", "name": "動物鼻", "url": stampImageBase + "Parts09/Nose/Doubutuhana9.png"},
          {"group": "Parts09", "name": "鼻ピアス", "url": stampImageBase + "Parts09/Nose/Hanapiasu9.png"},
          {"group": "Parts09", "name": "ピエロ", "url": stampImageBase + "Parts09/Nose/Piero9.png"},
          {"group": "Parts10", "name": "スタンダード", "url": stampImageBase + "Parts10/Nose/Standard10.png"},
          {"group": "Parts10", "name": "絆創膏", "url": stampImageBase + "Parts10/Nose/Bannsoukou10.png"},
          {"group": "Parts10", "name": "動物鼻", "url": stampImageBase + "Parts10/Nose/Doubutuhana10.png"},
          {"group": "Parts10", "name": "鼻ピアス", "url": stampImageBase + "Parts10/Nose/Hanapiasu10.png"},
          {"group": "Parts10", "name": "ピエロ", "url": stampImageBase + "Parts10/Nose/Piero10.png"},
          {"group": "Parts11", "name": "スタンダード", "url": stampImageBase + "Parts11/Nose/Standard11.png"},
          {"group": "Parts11", "name": "絆創膏", "url": stampImageBase + "Parts11/Nose/Bannsoukou11.png"},
          {"group": "Parts11", "name": "動物鼻", "url": stampImageBase + "Parts11/Nose/Doubutuhana11.png"},
          {"group": "Parts11", "name": "鼻ピアス", "url": stampImageBase + "Parts11/Nose/Hanapiasu11.png"},
          {"group": "Parts11", "name": "ピエロ", "url": stampImageBase + "Parts11/Nose/Piero11.png"},
          {"group": "Parts12", "name": "スタンダード", "url": stampImageBase + "Parts12/Nose/Standard12.png"},
          {"group": "Parts12", "name": "絆創膏", "url": stampImageBase + "Parts12/Nose/Bannsoukou12.png"},
          {"group": "Parts12", "name": "動物鼻", "url": stampImageBase + "Parts12/Nose/Doubutuhana12.png"},
          {"group": "Parts12", "name": "鼻ピアス", "url": stampImageBase + "Parts12/Nose/Hanapiasu12.png"},
          {"group": "Parts12", "name": "ピエロ", "url": stampImageBase + "Parts12/Nose/Piero12.png"},
          {"group": "Parts14", "name": "スタンダード", "url": stampImageBase + "Parts14/Nose/Standard.png"},
        ]
      },
      12 : {
        "layer": "12",
        "categoryName": "口",
        "parts": [
          {"group": "Parts01", "name": "スタンダード", "url": stampImageBase + "Parts13/Mouth/Standard.png"},
          {"name": "なし", "url": noneUrl},
          {"group": "Parts01", "name": "チュ", "url": stampImageBase + "Parts13/Mouth/Chu.png"},
          {"group": "Parts01", "name": "ホェ〜", "url": stampImageBase + "Parts13/Mouth/Hoe.png"},
          {"group": "Parts01", "name": "ホ〜", "url": stampImageBase + "Parts13/Mouth/Hoo.png"},
          {"group": "Parts01", "name": "口唇", "url": stampImageBase + "Parts13/Mouth/Kutibiru.png"},
          {"group": "Parts01", "name": "ニヒッ", "url": stampImageBase + "Parts13/Mouth/Nihi.png"},
          {"group": "Parts01", "name": "ニコリ", "url": stampImageBase + "Parts13/Mouth/Nikori.png"},
          {"group": "Parts01", "name": "ンー", "url": stampImageBase + "Parts13/Mouth/Nn.png"},
          {"group": "Parts01", "name": "オット", "url": stampImageBase + "Parts13/Mouth/Otto.png"},
          {"group": "Parts01", "name": "テヘッ", "url": stampImageBase + "Parts13/Mouth/Tehe.png"},
          {"group": "Parts01", "name": "アハハ", "url": stampImageBase + "Parts13/Mouth/Ahaha.png"},
          // {"group": "Parts01", "name": "スタンダード", "url": stampImageBase + "Parts01/Mouth/Standard1.png"},
          // {"group": "Parts01", "name": "口唇", "url": stampImageBase + "Parts01/Mouth/Kuchibiru1.png"},
          // {"group": "Parts01", "name": "前歯", "url": stampImageBase + "Parts01/Mouth/Maeba1.png"},
          // {"group": "Parts01", "name": "ニヒッ", "url": stampImageBase + "Parts01/Mouth/Nihi1.png"},
          // {"group": "Parts01", "name": "ニィー", "url": stampImageBase + "Parts01/Mouth/Nii1.png"},
          // {"group": "Parts01", "name": "ニッコリ", "url": stampImageBase + "Parts01/Mouth/Nikkori1.png"},
          // {"group": "Parts01", "name": "おちょぼ口", "url": stampImageBase + "Parts01/Mouth/Ochoboguchi1.png"},
          // {"group": "Parts01", "name": "ぷっくり", "url": stampImageBase + "Parts01/Mouth/Pukkuri1.png"},
          // {"group": "Parts01", "name": "テヘペロ", "url": stampImageBase + "Parts01/Mouth/Tehepero1.png"},
          {"group": "Parts02", "name": "スタンダード", "url": stampImageBase + "Parts02/Mouth/Standard2.png"},
          {"group": "Parts02", "name": "口唇", "url": stampImageBase + "Parts02/Mouth/Kuchibiru2.png"},
          {"group": "Parts02", "name": "前歯", "url": stampImageBase + "Parts02/Mouth/Maeba2.png"},
          {"group": "Parts02", "name": "ニヒッ", "url": stampImageBase + "Parts02/Mouth/Nihi2.png"},
          {"group": "Parts02", "name": "ニィー", "url": stampImageBase + "Parts02/Mouth/Nii2.png"},
          {"group": "Parts02", "name": "ニッコリ", "url": stampImageBase + "Parts02/Mouth/Nikkori2.png"},
          {"group": "Parts02", "name": "おちょぼ口", "url": stampImageBase + "Parts02/Mouth/Ochoboguchi2.png"},
          {"group": "Parts02", "name": "ぷっくり", "url": stampImageBase + "Parts02/Mouth/Pukkuri2.png"},
          {"group": "Parts02", "name": "テヘペロ", "url": stampImageBase + "Parts02/Mouth/Tehepero2.png"},
          {"group": "Parts03", "name": "スタンダード", "url": stampImageBase + "Parts03/Mouth/Standard3.png"},
          {"group": "Parts03", "name": "口唇", "url": stampImageBase + "Parts03/Mouth/Kuchibiru3.png"},
          {"group": "Parts03", "name": "前歯", "url": stampImageBase + "Parts03/Mouth/Maeba3.png"},
          {"group": "Parts03", "name": "ニヒッ", "url": stampImageBase + "Parts03/Mouth/Nihi3.png"},
          {"group": "Parts03", "name": "ニィー", "url": stampImageBase + "Parts03/Mouth/Nii3.png"},
          {"group": "Parts03", "name": "ニッコリ", "url": stampImageBase + "Parts03/Mouth/Nikkori3.png"},
          {"group": "Parts03", "name": "おちょぼ口", "url": stampImageBase + "Parts03/Mouth/Ochoboguchi3.png"},
          {"group": "Parts03", "name": "ぷっくり", "url": stampImageBase + "Parts03/Mouth/Pukkuri3.png"},
          {"group": "Parts03", "name": "テヘペロ", "url": stampImageBase + "Parts03/Mouth/Tehepero3.png"},
          {"group": "Parts04", "name": "スタンダード", "url": stampImageBase + "Parts04/Mouth/Standard4.png"},
          {"group": "Parts04", "name": "口唇", "url": stampImageBase + "Parts04/Mouth/Kuchibiru4.png"},
          {"group": "Parts04", "name": "前歯", "url": stampImageBase + "Parts04/Mouth/Maeba4.png"},
          {"group": "Parts04", "name": "ニヒッ", "url": stampImageBase + "Parts04/Mouth/Nihi4.png"},
          {"group": "Parts04", "name": "ニィー", "url": stampImageBase + "Parts04/Mouth/Nii4.png"},
          {"group": "Parts04", "name": "ニッコリ", "url": stampImageBase + "Parts04/Mouth/Nikkori4.png"},
          {"group": "Parts04", "name": "おちょぼ口", "url": stampImageBase + "Parts04/Mouth/Ochoboguchi4.png"},
          {"group": "Parts04", "name": "ぷっくり", "url": stampImageBase + "Parts04/Mouth/Pukkuri4.png"},
          {"group": "Parts04", "name": "テヘペロ", "url": stampImageBase + "Parts04/Mouth/Tehepero4.png"},
          {"group": "Parts05", "name": "スタンダード", "url": stampImageBase + "Parts05/Mouth/Standard5.png"},
          {"group": "Parts05", "name": "口唇", "url": stampImageBase + "Parts05/Mouth/Kuchibiru5.png"},
          {"group": "Parts05", "name": "前歯", "url": stampImageBase + "Parts05/Mouth/Maeba5.png"},
          {"group": "Parts05", "name": "ニヒッ", "url": stampImageBase + "Parts05/Mouth/Nihi5.png"},
          {"group": "Parts05", "name": "ニィー", "url": stampImageBase + "Parts05/Mouth/Nii5.png"},
          {"group": "Parts05", "name": "ニッコリ", "url": stampImageBase + "Parts05/Mouth/Nikkori5.png"},
          {"group": "Parts05", "name": "おちょぼ口", "url": stampImageBase + "Parts05/Mouth/Ochoboguchi5.png"},
          {"group": "Parts05", "name": "ぷっくり", "url": stampImageBase + "Parts05/Mouth/Pukkuri5.png"},
          {"group": "Parts05", "name": "テヘペロ", "url": stampImageBase + "Parts05/Mouth/Tehepero5.png"},
          {"group": "Parts06", "name": "スタンダード", "url": stampImageBase + "Parts06/Mouth/Standard6.png"},
          {"group": "Parts06", "name": "口唇", "url": stampImageBase + "Parts06/Mouth/Kuchibiru6.png"},
          {"group": "Parts06", "name": "前歯", "url": stampImageBase + "Parts06/Mouth/Maeba6.png"},
          {"group": "Parts06", "name": "ニヒッ", "url": stampImageBase + "Parts06/Mouth/Nihi6.png"},
          {"group": "Parts06", "name": "ニィー", "url": stampImageBase + "Parts06/Mouth/Nii6.png"},
          {"group": "Parts06", "name": "ニッコリ", "url": stampImageBase + "Parts06/Mouth/Nikkori6.png"},
          {"group": "Parts06", "name": "おちょぼ口", "url": stampImageBase + "Parts06/Mouth/Ochoboguchi6.png"},
          {"group": "Parts06", "name": "ぷっくり", "url": stampImageBase + "Parts06/Mouth/Pukkuri6.png"},
          {"group": "Parts06", "name": "テヘペロ", "url": stampImageBase + "Parts06/Mouth/Tehepero6.png"},
          {"group": "Parts07", "name": "スタンダード", "url": stampImageBase + "Parts07/Mouth/Standard7.png"},
          {"group": "Parts07", "name": "口唇", "url": stampImageBase + "Parts07/Mouth/Kuchibiru7.png"},
          {"group": "Parts07", "name": "前歯", "url": stampImageBase + "Parts07/Mouth/Maeba7.png"},
          {"group": "Parts07", "name": "ニヒッ", "url": stampImageBase + "Parts07/Mouth/Nihi7.png"},
          {"group": "Parts07", "name": "ニィー", "url": stampImageBase + "Parts07/Mouth/Nii7.png"},
          {"group": "Parts07", "name": "ニッコリ", "url": stampImageBase + "Parts07/Mouth/Nikkori7.png"},
          {"group": "Parts07", "name": "おちょぼ口", "url": stampImageBase + "Parts07/Mouth/Ochoboguchi7.png"},
          {"group": "Parts07", "name": "ぷっくり", "url": stampImageBase + "Parts07/Mouth/Pukkuri7.png"},
          {"group": "Parts07", "name": "テヘペロ", "url": stampImageBase + "Parts07/Mouth/Tehepero7.png"},
          {"group": "Parts08", "name": "スタンダード", "url": stampImageBase + "Parts08/Mouth/Standard8.png"},
          {"group": "Parts08", "name": "口唇", "url": stampImageBase + "Parts08/Mouth/Kuchibiru8.png"},
          {"group": "Parts08", "name": "前歯", "url": stampImageBase + "Parts08/Mouth/Maeba8.png"},
          {"group": "Parts08", "name": "ニヒッ", "url": stampImageBase + "Parts08/Mouth/Nihi8.png"},
          {"group": "Parts08", "name": "ニィー", "url": stampImageBase + "Parts08/Mouth/Nii8.png"},
          {"group": "Parts08", "name": "ニッコリ", "url": stampImageBase + "Parts08/Mouth/Nikkori8.png"},
          {"group": "Parts08", "name": "おちょぼ口", "url": stampImageBase + "Parts08/Mouth/Ochoboguchi8.png"},
          {"group": "Parts08", "name": "ぷっくり", "url": stampImageBase + "Parts08/Mouth/Pukkuri8.png"},
          {"group": "Parts08", "name": "テヘペロ", "url": stampImageBase + "Parts08/Mouth/Tehepero8.png"},
          {"group": "Parts09", "name": "スタンダード", "url": stampImageBase + "Parts09/Mouth/Standard9.png"},
          {"group": "Parts09", "name": "口唇", "url": stampImageBase + "Parts09/Mouth/Kuchibiru9.png"},
          {"group": "Parts09", "name": "前歯", "url": stampImageBase + "Parts09/Mouth/Maeba9.png"},
          {"group": "Parts09", "name": "ニヒッ", "url": stampImageBase + "Parts09/Mouth/Nihi9.png"},
          {"group": "Parts09", "name": "ニィー", "url": stampImageBase + "Parts09/Mouth/Nii9.png"},
          {"group": "Parts09", "name": "ニッコリ", "url": stampImageBase + "Parts09/Mouth/Nikkori9.png"},
          {"group": "Parts09", "name": "おちょぼ口", "url": stampImageBase + "Parts09/Mouth/Ochoboguchi9.png"},
          {"group": "Parts09", "name": "ぷっくり", "url": stampImageBase + "Parts09/Mouth/Pukkuri9.png"},
          {"group": "Parts09", "name": "テヘペロ", "url": stampImageBase + "Parts09/Mouth/Tehepero9.png"},
          {"group": "Parts10", "name": "スタンダード", "url": stampImageBase + "Parts10/Mouth/Standard10.png"},
          {"group": "Parts10", "name": "口唇", "url": stampImageBase + "Parts10/Mouth/Kuchibiru10.png"},
          {"group": "Parts10", "name": "前歯", "url": stampImageBase + "Parts10/Mouth/Maeba10.png"},
          {"group": "Parts10", "name": "ニヒッ", "url": stampImageBase + "Parts10/Mouth/Nihi10.png"},
          {"group": "Parts10", "name": "ニィー", "url": stampImageBase + "Parts10/Mouth/Nii10.png"},
          {"group": "Parts10", "name": "ニッコリ", "url": stampImageBase + "Parts10/Mouth/Nikkori10.png"},
          {"group": "Parts10", "name": "おちょぼ口", "url": stampImageBase + "Parts10/Mouth/Ochoboguchi10.png"},
          {"group": "Parts10", "name": "ぷっくり", "url": stampImageBase + "Parts10/Mouth/Pukkuri10.png"},
          {"group": "Parts10", "name": "テヘペロ", "url": stampImageBase + "Parts10/Mouth/Tehepero10.png"},
          {"group": "Parts11", "name": "スタンダード", "url": stampImageBase + "Parts11/Mouth/Standard11.png"},
          {"group": "Parts11", "name": "口唇", "url": stampImageBase + "Parts11/Mouth/Kuchibiru11.png"},
       // {"group": "Parts11", "name": "前歯", "url": stampImageBase + "Parts11/Mouth/Maeba11.png"},
          {"group": "Parts11", "name": "ニヒッ", "url": stampImageBase + "Parts11/Mouth/Nihi11.png"},
          {"group": "Parts11", "name": "ニィー", "url": stampImageBase + "Parts11/Mouth/Nii11.png"},
       // {"group": "Parts11", "name": "ニッコリ", "url": stampImageBase + "Parts11/Mouth/Nikkori11.png"},
       // {"group": "Parts11", "name": "おちょぼ口", "url": stampImageBase + "Parts11/Mouth/Ochoboguchi11.png"},
          {"group": "Parts11", "name": "ぷっくり", "url": stampImageBase + "Parts11/Mouth/Pukkuri11.png"},
          {"group": "Parts11", "name": "テヘペロ", "url": stampImageBase + "Parts11/Mouth/Tehepero11.png"},
          {"group": "Parts12", "name": "スタンダード", "url": stampImageBase + "Parts12/Mouth/Standard12.png"},
          {"group": "Parts12", "name": "口唇", "url": stampImageBase + "Parts12/Mouth/Kuchibiru12.png"},
       // {"group": "Parts12", "name": "前歯", "url": stampImageBase + "Parts12/Mouth/Maeba12.png"},
          {"group": "Parts12", "name": "ニヒッ", "url": stampImageBase + "Parts12/Mouth/Nihi12.png"},
          {"group": "Parts12", "name": "ニィー", "url": stampImageBase + "Parts12/Mouth/Nii12.png"},
       // {"group": "Parts12", "name": "ニッコリ", "url": stampImageBase + "Parts12/Mouth/Nikkori12.png"},
       // {"group": "Parts12", "name": "おちょぼ口", "url": stampImageBase + "Parts12/Mouth/Ochoboguchi12.png"},
          {"group": "Parts12", "name": "ぷっくり", "url": stampImageBase + "Parts12/Mouth/Pukkuri12.png"},
          {"group": "Parts12", "name": "テヘペロ", "url": stampImageBase + "Parts12/Mouth/Tehepero12.png"},
          {"group": "Parts14", "name": "チュ", "url": stampImageBase + "Parts14/Mouth/Chu.png"},
          {"group": "Parts14", "name": "ニコッ", "url": stampImageBase + "Parts14/Mouth/Nikori.png"},
          {"group": "Parts14", "name": "ニヤリ", "url": stampImageBase + "Parts14/Mouth/Niyari.png"},
          {"group": "Parts14", "name": "ほぉ", "url": stampImageBase + "Parts14/Mouth/Hoo.png"},
          {"group": "Parts14", "name": "ポカーン", "url": stampImageBase + "Parts14/Mouth/Pokaan.png"},
          {"group": "Parts14", "name": "むむ", "url": stampImageBase + "Parts14/Mouth/Mumu.png"},
        ]
      },
      13 : {
        "layer": "13",
        "categoryName": "眉毛",
        "parts": [
          {"group": "Parts01", "name": "スタンダード", "url": stampImageBase + "Parts13/Eyebrows/Mayuge.png"},
          {"name": "なし", "url": noneUrl},
          // {"group": "Parts01", "name": "スタンダード", "url": stampImageBase + "Parts01/Eyebrows/Standard1.png"},
          // {"group": "Parts01", "name": "困り眉", "url": stampImageBase + "Parts01/Eyebrows/Komarimayu1.png"},
          // {"group": "Parts01", "name": "怒り眉", "url": stampImageBase + "Parts01/Eyebrows/Okorimayu1.png"},
          // {"group": "Parts01", "name": "繋がり眉", "url": stampImageBase + "Parts01/Eyebrows/Tunagarimayu1.png"},
          {"group": "Parts02", "name": "スタンダード", "url": stampImageBase + "Parts02/Eyebrows/Standard2.png"},
          {"group": "Parts02", "name": "困り眉", "url": stampImageBase + "Parts02/Eyebrows/Komarimayu2.png"},
          {"group": "Parts02", "name": "怒り眉", "url": stampImageBase + "Parts02/Eyebrows/Okorimayu2.png"},
          {"group": "Parts02", "name": "繋がり眉", "url": stampImageBase + "Parts02/Eyebrows/Tunagarimayu2.png"},
          {"group": "Parts03", "name": "スタンダード", "url": stampImageBase + "Parts03/Eyebrows/Standard3.png"},
          {"group": "Parts03", "name": "困り眉", "url": stampImageBase + "Parts03/Eyebrows/Komarimayu3.png"},
          {"group": "Parts03", "name": "怒り眉", "url": stampImageBase + "Parts03/Eyebrows/Okorimayu3.png"},
          {"group": "Parts03", "name": "繋がり眉", "url": stampImageBase + "Parts03/Eyebrows/Tunagarimayu3.png"},
          {"group": "Parts04", "name": "スタンダード", "url": stampImageBase + "Parts04/Eyebrows/Standard4.png"},
          {"group": "Parts04", "name": "困り眉", "url": stampImageBase + "Parts04/Eyebrows/Komarimayu4.png"},
          {"group": "Parts04", "name": "怒り眉", "url": stampImageBase + "Parts04/Eyebrows/Okorimayu4.png"},
          {"group": "Parts04", "name": "繋がり眉", "url": stampImageBase + "Parts04/Eyebrows/Tunagarimayu4.png"},
          {"group": "Parts05", "name": "スタンダード", "url": stampImageBase + "Parts05/Eyebrows/Standard5.png"},
          {"group": "Parts05", "name": "困り眉", "url": stampImageBase + "Parts05/Eyebrows/Komarimayu5.png"},
          {"group": "Parts05", "name": "怒り眉", "url": stampImageBase + "Parts05/Eyebrows/Okorimayu5.png"},
          {"group": "Parts05", "name": "繋がり眉", "url": stampImageBase + "Parts05/Eyebrows/Tunagarimayu5.png"},
          {"group": "Parts06", "name": "スタンダード", "url": stampImageBase + "Parts06/Eyebrows/Standard6.png"},
          {"group": "Parts06", "name": "困り眉", "url": stampImageBase + "Parts06/Eyebrows/Komarimayu6.png"},
          {"group": "Parts06", "name": "怒り眉", "url": stampImageBase + "Parts06/Eyebrows/Okorimayu6.png"},
          {"group": "Parts06", "name": "繋がり眉", "url": stampImageBase + "Parts06/Eyebrows/Tunagarimayu6.png"},
          {"group": "Parts07", "name": "スタンダード", "url": stampImageBase + "Parts07/Eyebrows/Standard7.png"},
          {"group": "Parts07", "name": "困り眉", "url": stampImageBase + "Parts07/Eyebrows/Komarimayu7.png"},
          {"group": "Parts07", "name": "怒り眉", "url": stampImageBase + "Parts07/Eyebrows/Okorimayu7.png"},
          {"group": "Parts07", "name": "繋がり眉", "url": stampImageBase + "Parts07/Eyebrows/Tunagarimayu7.png"},
          {"group": "Parts08", "name": "スタンダード", "url": stampImageBase + "Parts08/Eyebrows/Standard8.png"},
          {"group": "Parts08", "name": "困り眉", "url": stampImageBase + "Parts08/Eyebrows/Komarimayu8.png"},
          {"group": "Parts08", "name": "怒り眉", "url": stampImageBase + "Parts08/Eyebrows/Okorimayu8.png"},
          {"group": "Parts08", "name": "繋がり眉", "url": stampImageBase + "Parts08/Eyebrows/Tunagarimayu8.png"},
          {"group": "Parts09", "name": "スタンダード", "url": stampImageBase + "Parts09/Eyebrows/Standard9.png"},
          {"group": "Parts09", "name": "困り眉", "url": stampImageBase + "Parts09/Eyebrows/Komarimayu9.png"},
          {"group": "Parts09", "name": "怒り眉", "url": stampImageBase + "Parts09/Eyebrows/Okorimayu9.png"},
          {"group": "Parts09", "name": "繋がり眉", "url": stampImageBase + "Parts09/Eyebrows/Tunagarimayu9.png"},
          {"group": "Parts10", "name": "スタンダード", "url": stampImageBase + "Parts10/Eyebrows/Standard10.png"},
          {"group": "Parts10", "name": "困り眉", "url": stampImageBase + "Parts10/Eyebrows/Komarimayu10.png"},
          {"group": "Parts10", "name": "怒り眉", "url": stampImageBase + "Parts10/Eyebrows/Okorimayu10.png"},
          {"group": "Parts10", "name": "繋がり眉", "url": stampImageBase + "Parts10/Eyebrows/Tunagarimayu10.png"},
          {"group": "Parts11", "name": "スタンダード", "url": stampImageBase + "Parts11/Eyebrows/Standard11.png"},
          {"group": "Parts11", "name": "困り眉", "url": stampImageBase + "Parts11/Eyebrows/Komarimayu11.png"},
          {"group": "Parts11", "name": "怒り眉", "url": stampImageBase + "Parts11/Eyebrows/Okorimayu11.png"},
          {"group": "Parts11", "name": "繋がり眉", "url": stampImageBase + "Parts11/Eyebrows/Tunagarimayu11.png"},
          {"group": "Parts12", "name": "スタンダード", "url": stampImageBase + "Parts12/Eyebrows/Standard12.png"},
          {"group": "Parts12", "name": "困り眉", "url": stampImageBase + "Parts12/Eyebrows/Komarimayu12.png"},
          {"group": "Parts12", "name": "怒り眉", "url": stampImageBase + "Parts12/Eyebrows/Okorimayu12.png"},
          {"group": "Parts12", "name": "繋がり眉", "url": stampImageBase + "Parts12/Eyebrows/Tunagarimayu12.png"},
          {"group": "Parts14", "name": "スタンダード", "url": stampImageBase + "Parts14/Eyebrows/Standard.png"},
        ]
      },
      14 : {
        "layer": "14",
        "categoryName": "ほっぺ",
        "parts": [
          {"name": "なし", "url": noneUrl},
          {"group": "Parts01", "name": "カワイイ", "url": stampImageBase + "Parts01/Curse/Kawaii1.png"},
          {"group": "Parts01", "name": "泣きぼくろ", "url": stampImageBase + "Parts01/Curse/Nakibokuro1.png"},
          {"group": "Parts02", "name": "カワイイ", "url": stampImageBase + "Parts02/Curse/Kawaii2.png"},
          {"group": "Parts02", "name": "泣きぼくろ", "url": stampImageBase + "Parts02/Curse/Nakibokuro2.png"},
          {"group": "Parts03", "name": "カワイイ", "url": stampImageBase + "Parts03/Curse/Kawaii3.png"},
          {"group": "Parts03", "name": "泣きぼくろ", "url": stampImageBase + "Parts03/Curse/Nakibokuro3.png"},
          {"group": "Parts04", "name": "カワイイ", "url": stampImageBase + "Parts04/Curse/Kawaii4.png"},
          {"group": "Parts04", "name": "泣きぼくろ", "url": stampImageBase + "Parts04/Curse/Nakibokuro4.png"},
          {"group": "Parts05", "name": "カワイイ", "url": stampImageBase + "Parts05/Curse/Kawaii5.png"},
          {"group": "Parts05", "name": "泣きぼくろ", "url": stampImageBase + "Parts05/Curse/Nakibokuro5.png"},
          {"group": "Parts06", "name": "カワイイ", "url": stampImageBase + "Parts06/Curse/Kawaii6.png"},
          {"group": "Parts06", "name": "泣きぼくろ", "url": stampImageBase + "Parts06/Curse/Nakibokuro6.png"},
          {"group": "Parts07", "name": "カワイイ", "url": stampImageBase + "Parts07/Curse/Kawaii7.png"},
          {"group": "Parts07", "name": "泣きぼくろ", "url": stampImageBase + "Parts07/Curse/Nakibokuro7.png"},
          {"group": "Parts08", "name": "カワイイ", "url": stampImageBase + "Parts08/Curse/Kawaii8.png"},
          {"group": "Parts08", "name": "泣きぼくろ", "url": stampImageBase + "Parts08/Curse/Nakibokuro8.png"},
          {"group": "Parts09", "name": "カワイイ", "url": stampImageBase + "Parts09/Curse/Kawaii9.png"},
          {"group": "Parts09", "name": "泣きぼくろ", "url": stampImageBase + "Parts09/Curse/Nakibokuro9.png"},
          {"group": "Parts10", "name": "カワイイ", "url": stampImageBase + "Parts10/Curse/Kawaii10.png"},
          {"group": "Parts10", "name": "泣きぼくろ", "url": stampImageBase + "Parts10/Curse/Nakibokuro10.png"},
          {"group": "Parts11", "name": "カワイイ", "url": stampImageBase + "Parts11/Curse/Kawaii11.png"},
          {"group": "Parts11", "name": "泣きぼくろ", "url": stampImageBase + "Parts11/Curse/Nakibokuro11.png"},
          {"group": "Parts12", "name": "カワイイ", "url": stampImageBase + "Parts12/Curse/Kawaii12.png"},
          {"group": "Parts12", "name": "泣きぼくろ", "url": stampImageBase + "Parts12/Curse/Nakibokuro12.png"},
          {"group": "Parts14", "name": "カワイイ", "url": stampImageBase + "Parts14/Curse/Kawaii.png"},
        ]
      },
      15 : {
        "layer": "15",
        "categoryName": "髪",
        "parts": [
          {"group": "Parts01", "name": "アフロ", "url": stampImageBase + "Parts01/Hair/Afuro1.png"},
          {"name": "なし", "url": noneUrl},
          {"group": "Parts01", "name": "ちょんまげ", "url": stampImageBase + "Parts01/Hair/Chonmage1.png"},
          {"group": "Parts01", "name": "フランク", "url": stampImageBase + "Parts01/Hair/Furannkuhiar1.png"},
          {"group": "Parts01", "name": "イケてる風", "url": stampImageBase + "Parts01/Hair/Iketerufuu1.png"},
          {"group": "Parts01", "name": "カジュアル", "url": stampImageBase + "Parts01/Hair/Kajuaru1.png"},
          {"group": "Parts01", "name": "キューピー", "url": stampImageBase + "Parts01/Hair/Kyu-pi-fuu1.png"},
          {"group": "Parts01", "name": "お団子", "url": stampImageBase + "Parts01/Hair/Odangohair1.png"},
          {"group": "Parts01", "name": "おかっぱ", "url": stampImageBase + "Parts01/Hair/Okappa1.png"},
          {"group": "Parts01", "name": "ぱっつんボブ", "url": stampImageBase + "Parts01/Hair/Pattunnbobu1.png"},
          {"group": "Parts01", "name": "ぴしっと", "url": stampImageBase + "Parts01/Hair/Pishittohair1.png"},
          {"group": "Parts01", "name": "リーゼント", "url": stampImageBase + "Parts01/Hair/Ri-zennto1.png"},
          {"group": "Parts02", "name": "アフロ", "url": stampImageBase + "Parts02/Hair/Afuro2.png"},
          {"group": "Parts02", "name": "ちょんまげ", "url": stampImageBase + "Parts02/Hair/Chonmage2.png"},
          {"group": "Parts02", "name": "フランク", "url": stampImageBase + "Parts02/Hair/Furannkuhiar2.png"},
          {"group": "Parts02", "name": "イケてる風", "url": stampImageBase + "Parts02/Hair/Iketerufuu2.png"},
          {"group": "Parts02", "name": "カジュアル", "url": stampImageBase + "Parts02/Hair/Kajuaru2.png"},
          {"group": "Parts02", "name": "キューピー", "url": stampImageBase + "Parts02/Hair/Kyu-pi-fuu2.png"},
          {"group": "Parts02", "name": "お団子", "url": stampImageBase + "Parts02/Hair/Odangohair2.png"},
          {"group": "Parts02", "name": "おかっぱ", "url": stampImageBase + "Parts02/Hair/Okappa2.png"},
          {"group": "Parts02", "name": "ぱっつんボブ", "url": stampImageBase + "Parts02/Hair/Pattunnbobu2.png"},
          {"group": "Parts02", "name": "ぴしっと", "url": stampImageBase + "Parts02/Hair/Pishittohair2.png"},
          {"group": "Parts02", "name": "リーゼント", "url": stampImageBase + "Parts02/Hair/Ri-zennto2.png"},
          {"group": "Parts03", "name": "アフロ", "url": stampImageBase + "Parts03/Hair/Afuro3.png"},
          {"group": "Parts03", "name": "ちょんまげ", "url": stampImageBase + "Parts03/Hair/Chonmage3.png"},
          {"group": "Parts03", "name": "フランク", "url": stampImageBase + "Parts03/Hair/Furannkuhiar3.png"},
          {"group": "Parts03", "name": "イケてる風", "url": stampImageBase + "Parts03/Hair/Iketerufuu3.png"},
          {"group": "Parts03", "name": "カジュアル", "url": stampImageBase + "Parts03/Hair/Kajuaru3.png"},
          {"group": "Parts03", "name": "キューピー", "url": stampImageBase + "Parts03/Hair/Kyu-pi-fuu3.png"},
          {"group": "Parts03", "name": "お団子", "url": stampImageBase + "Parts03/Hair/Odangohair3.png"},
          {"group": "Parts03", "name": "おかっぱ", "url": stampImageBase + "Parts03/Hair/Okappa3.png"},
          {"group": "Parts03", "name": "ぱっつんボブ", "url": stampImageBase + "Parts03/Hair/Pattunnbobu3.png"},
          {"group": "Parts03", "name": "ぴしっと", "url": stampImageBase + "Parts03/Hair/Pishittohair3.png"},
          {"group": "Parts03", "name": "リーゼント", "url": stampImageBase + "Parts03/Hair/Ri-zennto3.png"},
          {"group": "Parts04", "name": "アフロ", "url": stampImageBase + "Parts04/Hair/Afuro4.png"},
          {"group": "Parts04", "name": "ちょんまげ", "url": stampImageBase + "Parts04/Hair/Chonmage4.png"},
          {"group": "Parts04", "name": "フランク", "url": stampImageBase + "Parts04/Hair/Furannkuhiar4.png"},
          {"group": "Parts04", "name": "イケてる風", "url": stampImageBase + "Parts04/Hair/Iketerufuu4.png"},
          {"group": "Parts04", "name": "カジュアル", "url": stampImageBase + "Parts04/Hair/Kajuaru4.png"},
          {"group": "Parts04", "name": "キューピー", "url": stampImageBase + "Parts04/Hair/Kyu-pi-fuu4.png"},
          {"group": "Parts04", "name": "お団子", "url": stampImageBase + "Parts04/Hair/Odangohair4.png"},
          {"group": "Parts04", "name": "おかっぱ", "url": stampImageBase + "Parts04/Hair/Okappa4.png"},
          {"group": "Parts04", "name": "ぱっつんボブ", "url": stampImageBase + "Parts04/Hair/Pattunnbobu4.png"},
          {"group": "Parts04", "name": "ぴしっと", "url": stampImageBase + "Parts04/Hair/Pishittohair4.png"},
          {"group": "Parts04", "name": "リーゼント", "url": stampImageBase + "Parts04/Hair/Ri-zennto4.png"},
          {"group": "Parts05", "name": "アフロ", "url": stampImageBase + "Parts05/Hair/Afuro5.png"},
          {"group": "Parts05", "name": "ちょんまげ", "url": stampImageBase + "Parts05/Hair/Chonmage5.png"},
          {"group": "Parts05", "name": "フランク", "url": stampImageBase + "Parts05/Hair/Furannkuhiar5.png"},
          {"group": "Parts05", "name": "イケてる風", "url": stampImageBase + "Parts05/Hair/Iketerufuu5.png"},
          {"group": "Parts05", "name": "カジュアル", "url": stampImageBase + "Parts05/Hair/Kajuaru5.png"},
          {"group": "Parts05", "name": "キューピー", "url": stampImageBase + "Parts05/Hair/Kyu-pi-fuu5.png"},
          {"group": "Parts05", "name": "お団子", "url": stampImageBase + "Parts05/Hair/Odangohair5.png"},
          {"group": "Parts05", "name": "おかっぱ", "url": stampImageBase + "Parts05/Hair/Okappa5.png"},
          {"group": "Parts05", "name": "ぱっつんボブ", "url": stampImageBase + "Parts05/Hair/Pattunnbobu5.png"},
          {"group": "Parts05", "name": "ぴしっと", "url": stampImageBase + "Parts05/Hair/Pishittohair5.png"},
          {"group": "Parts05", "name": "リーゼント", "url": stampImageBase + "Parts05/Hair/Ri-zennto5.png"},
          {"group": "Parts06", "name": "アフロ", "url": stampImageBase + "Parts06/Hair/Afuro6.png"},
          {"group": "Parts06", "name": "ちょんまげ", "url": stampImageBase + "Parts06/Hair/Chonmage6.png"},
          {"group": "Parts06", "name": "フランク", "url": stampImageBase + "Parts06/Hair/Furannkuhiar6.png"},
          {"group": "Parts06", "name": "イケてる風", "url": stampImageBase + "Parts06/Hair/Iketerufuu6.png"},
          {"group": "Parts06", "name": "カジュアル", "url": stampImageBase + "Parts06/Hair/Kajuaru6.png"},
          {"group": "Parts06", "name": "キューピー", "url": stampImageBase + "Parts06/Hair/Kyu-pi-fuu6.png"},
          {"group": "Parts06", "name": "お団子", "url": stampImageBase + "Parts06/Hair/Odangohair6.png"},
          {"group": "Parts06", "name": "おかっぱ", "url": stampImageBase + "Parts06/Hair/Okappa6.png"},
          {"group": "Parts06", "name": "ぱっつんボブ", "url": stampImageBase + "Parts06/Hair/Pattunnbobu6.png"},
          {"group": "Parts06", "name": "ぴしっと", "url": stampImageBase + "Parts06/Hair/Pishittohair6.png"},
          {"group": "Parts06", "name": "リーゼント", "url": stampImageBase + "Parts06/Hair/Ri-zennto6.png"},
          {"group": "Parts07", "name": "アフロ", "url": stampImageBase + "Parts07/Hair/Afuro7.png"},
          {"group": "Parts07", "name": "ちょんまげ", "url": stampImageBase + "Parts07/Hair/Chonmage7.png"},
          {"group": "Parts07", "name": "フランク", "url": stampImageBase + "Parts07/Hair/Furannkuhiar7.png"},
          {"group": "Parts07", "name": "イケてる風", "url": stampImageBase + "Parts07/Hair/Iketerufuu7.png"},
          {"group": "Parts07", "name": "カジュアル", "url": stampImageBase + "Parts07/Hair/Kajuaru7.png"},
          {"group": "Parts07", "name": "キューピー", "url": stampImageBase + "Parts07/Hair/Kyu-pi-fuu7.png"},
          {"group": "Parts07", "name": "お団子", "url": stampImageBase + "Parts07/Hair/Odangohair7.png"},
          {"group": "Parts07", "name": "おかっぱ", "url": stampImageBase + "Parts07/Hair/Okappa7.png"},
          {"group": "Parts07", "name": "ぱっつんボブ", "url": stampImageBase + "Parts07/Hair/Pattunnbobu7.png"},
          {"group": "Parts07", "name": "ぴしっと", "url": stampImageBase + "Parts07/Hair/Pishittohair7.png"},
          {"group": "Parts07", "name": "リーゼント", "url": stampImageBase + "Parts07/Hair/Ri-zennto7.png"},
          {"group": "Parts08", "name": "アフロ", "url": stampImageBase + "Parts08/Hair/Afuro8.png"},
          {"group": "Parts08", "name": "ちょんまげ", "url": stampImageBase + "Parts08/Hair/Chonmage8.png"},
          {"group": "Parts08", "name": "フランク", "url": stampImageBase + "Parts08/Hair/Furannkuhiar8.png"},
          {"group": "Parts08", "name": "イケてる風", "url": stampImageBase + "Parts08/Hair/Iketerufuu8.png"},
          {"group": "Parts08", "name": "カジュアル", "url": stampImageBase + "Parts08/Hair/Kajuaru8.png"},
          {"group": "Parts08", "name": "キューピー", "url": stampImageBase + "Parts08/Hair/Kyu-pi-fuu8.png"},
          {"group": "Parts08", "name": "お団子", "url": stampImageBase + "Parts08/Hair/Odangohair8.png"},
          {"group": "Parts08", "name": "おかっぱ", "url": stampImageBase + "Parts08/Hair/Okappa8.png"},
          {"group": "Parts08", "name": "ぱっつんボブ", "url": stampImageBase + "Parts08/Hair/Pattunnbobu8.png"},
          {"group": "Parts08", "name": "ぴしっと", "url": stampImageBase + "Parts08/Hair/Pishittohair8.png"},
          {"group": "Parts08", "name": "リーゼント", "url": stampImageBase + "Parts08/Hair/Ri-zennto8.png"},
          {"group": "Parts09", "name": "アフロ", "url": stampImageBase + "Parts09/Hair/Afuro9.png"},
          {"group": "Parts09", "name": "ちょんまげ", "url": stampImageBase + "Parts09/Hair/Chonmage9.png"},
          {"group": "Parts09", "name": "フランク", "url": stampImageBase + "Parts09/Hair/Furannkuhiar9.png"},
          {"group": "Parts09", "name": "イケてる風", "url": stampImageBase + "Parts09/Hair/Iketerufuu9.png"},
          {"group": "Parts09", "name": "カジュアル", "url": stampImageBase + "Parts09/Hair/Kajuaru9.png"},
          {"group": "Parts09", "name": "キューピー", "url": stampImageBase + "Parts09/Hair/Kyu-pi-fuu9.png"},
          {"group": "Parts09", "name": "お団子", "url": stampImageBase + "Parts09/Hair/Odangohair9.png"},
          {"group": "Parts09", "name": "おかっぱ", "url": stampImageBase + "Parts09/Hair/Okappa9.png"},
          {"group": "Parts09", "name": "ぱっつんボブ", "url": stampImageBase + "Parts09/Hair/Pattunnbobu9.png"},
          {"group": "Parts09", "name": "ぴしっと", "url": stampImageBase + "Parts09/Hair/Pishittohair9.png"},
          {"group": "Parts09", "name": "リーゼント", "url": stampImageBase + "Parts09/Hair/Ri-zennto9.png"},
          {"group": "Parts10", "name": "アフロ", "url": stampImageBase + "Parts10/Hair/Afuro10.png"},
          {"group": "Parts10", "name": "ちょんまげ", "url": stampImageBase + "Parts10/Hair/Chonmage10.png"},
          {"group": "Parts10", "name": "フランク", "url": stampImageBase + "Parts10/Hair/Furannkuhiar10.png"},
          {"group": "Parts10", "name": "イケてる風", "url": stampImageBase + "Parts10/Hair/Iketerufuu10.png"},
          {"group": "Parts10", "name": "カジュアル", "url": stampImageBase + "Parts10/Hair/Kajuaru10.png"},
          {"group": "Parts10", "name": "キューピー", "url": stampImageBase + "Parts10/Hair/Kyu-pi-fuu10.png"},
          {"group": "Parts10", "name": "お団子", "url": stampImageBase + "Parts10/Hair/Odangohair10.png"},
          {"group": "Parts10", "name": "おかっぱ", "url": stampImageBase + "Parts10/Hair/Okappa10.png"},
          {"group": "Parts10", "name": "ぱっつんボブ", "url": stampImageBase + "Parts10/Hair/Pattunnbobu10.png"},
          {"group": "Parts10", "name": "ぴしっと", "url": stampImageBase + "Parts10/Hair/Pishittohair10.png"},
          {"group": "Parts10", "name": "リーゼント", "url": stampImageBase + "Parts10/Hair/Ri-zennto10.png"},
          {"group": "Parts11", "name": "アフロ", "url": stampImageBase + "Parts11/Hair/Afuro11.png"},
          {"group": "Parts11", "name": "ちょんまげ", "url": stampImageBase + "Parts11/Hair/Chonmage11.png"},
          {"group": "Parts11", "name": "フランク", "url": stampImageBase + "Parts11/Hair/Furannkuhiar11.png"},
          {"group": "Parts11", "name": "イケてる風", "url": stampImageBase + "Parts11/Hair/Iketerufuu11.png"},
          {"group": "Parts11", "name": "カジュアル", "url": stampImageBase + "Parts11/Hair/Kajuaru11.png"},
       // {"group": "Parts10", "name": "キューピー", "url": stampImageBase + "Parts10/Hair/Kyu-pi-fuu11.png"},
          {"group": "Parts11", "name": "お団子", "url": stampImageBase + "Parts11/Hair/Odangohair11.png"},
          {"group": "Parts11", "name": "おかっぱ", "url": stampImageBase + "Parts11/Hair/Okappa11.png"},
          {"group": "Parts11", "name": "ぱっつんボブ", "url": stampImageBase + "Parts11/Hair/Pattunnbobu11.png"},
          {"group": "Parts11", "name": "ぴしっと", "url": stampImageBase + "Parts11/Hair/Pishittohair11.png"},
          {"group": "Parts11", "name": "リーゼント", "url": stampImageBase + "Parts11/Hair/Ri-zennto11.png"},
          {"group": "Parts11", "name": "ポニーテール", "url": stampImageBase + "Parts11/Hair/Poni-te-ru11.png"},
          {"group": "Parts11", "name": "Shikibuヘアー", "url": stampImageBase + "Parts11/Hair/Shikibuhair11.png"},
          {"group": "Parts11", "name": "ウェーブ", "url": stampImageBase + "Parts11/Hair/Ue-bu11.png"},
          {"group": "Parts11", "name": "おまけ", "url": stampImageBase + "Parts11/Hair/Okame11.png"},
          {"group": "Parts12", "name": "アフロ", "url": stampImageBase + "Parts12/Hair/Afuro12.png"},
          {"group": "Parts12", "name": "ちょんまげ", "url": stampImageBase + "Parts12/Hair/Chonmage12.png"},
          {"group": "Parts12", "name": "フランク", "url": stampImageBase + "Parts12/Hair/Furannkuhiar12.png"},
          {"group": "Parts12", "name": "イケてる風", "url": stampImageBase + "Parts12/Hair/Iketerufuu12.png"},
          {"group": "Parts12", "name": "カジュアル", "url": stampImageBase + "Parts12/Hair/Kajuaru12.png"},
       // {"group": "Parts12", "name": "キューピー", "url": stampImageBase + "Parts12/Hair/Kyu-pi-fuu12.png"},
          {"group": "Parts12", "name": "お団子", "url": stampImageBase + "Parts12/Hair/Odangohair12.png"},
          {"group": "Parts12", "name": "おかっぱ", "url": stampImageBase + "Parts12/Hair/Okappa12.png"},
          {"group": "Parts12", "name": "ぱっつんボブ", "url": stampImageBase + "Parts12/Hair/Pattunnbobu12.png"},
          {"group": "Parts12", "name": "ぴしっと", "url": stampImageBase + "Parts12/Hair/Pishittohair12.png"},
          {"group": "Parts12", "name": "リーゼント", "url": stampImageBase + "Parts12/Hair/Ri-zennto12.png"},
          {"group": "Parts12", "name": "ポニーテール", "url": stampImageBase + "Parts12/Hair/Poni-te-ru12.png"},
          {"group": "Parts12", "name": "Shikibuヘアー", "url": stampImageBase + "Parts12/Hair/Shikibuhair12.png"},
          {"group": "Parts12", "name": "ウェーブ", "url": stampImageBase + "Parts12/Hair/Ue-bu12.png"},
          {"group": "Parts12", "name": "おまけ", "url": stampImageBase + "Parts12/Hair/Okame12.png"},
          {"group": "Parts14", "name": "オールバック", "url": stampImageBase + "Parts14/Hair/AllBack.png"},
          {"group": "Parts14", "name": "おかっぱ", "url": stampImageBase + "Parts14/Hair/Okappa.png"},
          {"group": "Parts14", "name": "センター分け", "url": stampImageBase + "Parts14/Hair/CenterParted.png"},
          {"group": "Parts14", "name": "ちょんまげ", "url": stampImageBase + "Parts14/Hair/Chonmage.png"},
          {"group": "Parts14", "name": "ツインテール", "url": stampImageBase + "Parts14/Hair/TwinTail.png"},
          {"group": "Parts14", "name": "ボブ", "url": stampImageBase + "Parts14/Hair/Bob.png"},
          {"group": "Parts14", "name": "ロング", "url": stampImageBase + "Parts14/Hair/Long.png"},
        ]
      },
      16 : {
        "layer": "16",
        "categoryName": "メガネ",
        "group": "Full-body,Close-up",
        "parts": [
          {"name": "なし", "url": noneUrl},
          {"group": "Parts01", "name": "仮面", "url": stampImageBase + "Parts01/Glasses/Kamen1.png"},
          {"group": "Parts01", "name": "丸メガネ", "url": stampImageBase + "Parts01/Glasses/Marumegane1.png"},
          {"group": "Parts01", "name": "メガネ", "url": stampImageBase + "Parts01/Glasses/Megane1.png"},
          {"group": "Parts01", "name": "サングラス", "url": stampImageBase + "Parts01/Glasses/Sanngurasu1.png"},
          {"group": "Parts02", "name": "仮面", "url": stampImageBase + "Parts02/Glasses/Kamen2.png"},
          {"group": "Parts02", "name": "丸メガネ", "url": stampImageBase + "Parts02/Glasses/Marumegane2.png"},
          {"group": "Parts02", "name": "メガネ", "url": stampImageBase + "Parts02/Glasses/Megane2.png"},
          {"group": "Parts02", "name": "サングラス", "url": stampImageBase + "Parts02/Glasses/Sanngurasu2.png"},
          {"group": "Parts03", "name": "仮面", "url": stampImageBase + "Parts03/Glasses/Kamen3.png"},
          {"group": "Parts03", "name": "丸メガネ", "url": stampImageBase + "Parts03/Glasses/Marumegane3.png"},
          {"group": "Parts03", "name": "メガネ", "url": stampImageBase + "Parts03/Glasses/Megane3.png"},
          {"group": "Parts03", "name": "サングラス", "url": stampImageBase + "Parts03/Glasses/Sanngurasu3.png"},
          {"group": "Parts04", "name": "仮面", "url": stampImageBase + "Parts04/Glasses/Kamen4.png"},
          {"group": "Parts04", "name": "丸メガネ", "url": stampImageBase + "Parts04/Glasses/Marumegane4.png"},
          {"group": "Parts04", "name": "メガネ", "url": stampImageBase + "Parts04/Glasses/Megane4.png"},
          {"group": "Parts04", "name": "サングラス", "url": stampImageBase + "Parts04/Glasses/Sanngurasu4.png"},
          {"group": "Parts05", "name": "仮面", "url": stampImageBase + "Parts05/Glasses/Kamen5.png"},
          {"group": "Parts05", "name": "丸メガネ", "url": stampImageBase + "Parts05/Glasses/Marumegane5.png"},
          {"group": "Parts05", "name": "メガネ", "url": stampImageBase + "Parts05/Glasses/Megane5.png"},
          {"group": "Parts05", "name": "サングラス", "url": stampImageBase + "Parts05/Glasses/Sanngurasu5.png"},
          {"group": "Parts06", "name": "仮面", "url": stampImageBase + "Parts06/Glasses/Kamen6.png"},
          {"group": "Parts06", "name": "丸メガネ", "url": stampImageBase + "Parts06/Glasses/Marumegane6.png"},
          {"group": "Parts06", "name": "メガネ", "url": stampImageBase + "Parts06/Glasses/Megane6.png"},
          {"group": "Parts06", "name": "サングラス", "url": stampImageBase + "Parts06/Glasses/Sanngurasu6.png"},
          {"group": "Parts07", "name": "仮面", "url": stampImageBase + "Parts07/Glasses/Kamen7.png"},
          {"group": "Parts07", "name": "丸メガネ", "url": stampImageBase + "Parts07/Glasses/Marumegane7.png"},
          {"group": "Parts07", "name": "メガネ", "url": stampImageBase + "Parts07/Glasses/Megane7.png"},
          {"group": "Parts07", "name": "サングラス", "url": stampImageBase + "Parts07/Glasses/Sanngurasu7.png"},
          {"group": "Parts08", "name": "仮面", "url": stampImageBase + "Parts08/Glasses/Kamen8.png"},
          {"group": "Parts08", "name": "丸メガネ", "url": stampImageBase + "Parts08/Glasses/Marumegane8.png"},
          {"group": "Parts08", "name": "メガネ", "url": stampImageBase + "Parts08/Glasses/Megane8.png"},
          {"group": "Parts08", "name": "サングラス", "url": stampImageBase + "Parts08/Glasses/Sanngurasu8.png"},
          {"group": "Parts09", "name": "仮面", "url": stampImageBase + "Parts09/Glasses/Kamen9.png"},
          {"group": "Parts09", "name": "丸メガネ", "url": stampImageBase + "Parts09/Glasses/Marumegane9.png"},
          {"group": "Parts09", "name": "メガネ", "url": stampImageBase + "Parts09/Glasses/Megane9.png"},
          {"group": "Parts09", "name": "サングラス", "url": stampImageBase + "Parts09/Glasses/Sanngurasu9.png"},
          {"group": "Parts10", "name": "仮面", "url": stampImageBase + "Parts10/Glasses/Kamen10.png"},
          {"group": "Parts10", "name": "丸メガネ", "url": stampImageBase + "Parts10/Glasses/Marumegane10.png"},
          {"group": "Parts10", "name": "メガネ", "url": stampImageBase + "Parts10/Glasses/Megane10.png"},
          {"group": "Parts10", "name": "サングラス", "url": stampImageBase + "Parts10/Glasses/Sanngurasu10.png"},
          {"group": "Parts11", "name": "仮面", "url": stampImageBase + "Parts11/Glasses/Kamen11.png"},
          {"group": "Parts11", "name": "丸メガネ", "url": stampImageBase + "Parts11/Glasses/Marumegane11.png"},
          {"group": "Parts11", "name": "メガネ", "url": stampImageBase + "Parts11/Glasses/Megane11.png"},
          {"group": "Parts11", "name": "サングラス", "url": stampImageBase + "Parts11/Glasses/Sanngurasu11.png"},
          {"group": "Parts12", "name": "仮面", "url": stampImageBase + "Parts12/Glasses/Kamen12.png"},
          {"group": "Parts12", "name": "丸メガネ", "url": stampImageBase + "Parts12/Glasses/Marumegane12.png"},
          {"group": "Parts12", "name": "メガネ", "url": stampImageBase + "Parts12/Glasses/Megane12.png"},
          {"group": "Parts12", "name": "サングラス", "url": stampImageBase + "Parts12/Glasses/Sanngurasu12.png"},
        ]
      },
      17 : {
        "layer": "17",
        "categoryName": "左手（上レイヤー）",
        "group": "Full-body,Close-up",
        "parts": [
          {
            "name": "Good",
            "url": stampImageBase + "Left hand over/Good.png",
            "group": "Full-body"
          },
          {"name": "なし", "url": noneUrl},
          {
            "name": "Ok",
            "url": stampImageBase + "Left hand over/Ok.png",
            "group": "Full-body"
          },
          {
            "name": "パー",
            "url": stampImageBase + "Left hand over/%E3%83%91%E3%83%BC.png",
            "group": "Full-body"
          },
          {
            "name": "顔に手あてる",
            "url": stampImageBase + "Left hand over/%E9%A1%94%E3%81%AB%E6%89%8B%E3%81%82%E3%81%A6%E3%82%8B.png",
            "group": "Full-body"
          },
          {
            "name": "Good",
            "url": stampImageBase + "Parts11/Left hand over/Good11.png",
            "group": "Parts11"
          },
          {
            "name": "Ok",
            "url": stampImageBase + "Parts11/Left hand over/Ok11.png",
            "group": "Parts11"
          },
          {
            "name": "パー",
            "url": stampImageBase + "Parts11/Left hand over/Lefthand11.png",
            "group": "Parts11"
          },
          {
            "name": "顔に手あてる",
            "url": stampImageBase + "Parts11/Left hand over/Kaoniteateru11.png",
            "group": "Parts11"
          },
          {
            "name": "Good",
            "url": stampImageBase + "Parts12/Left hand over/Good12.png",
            "group": "Parts12"
          },
          {
            "name": "Ok",
            "url": stampImageBase + "Parts12/Left hand over/Ok12.png",
            "group": "Parts12"
          },
          {
            "name": "パー",
            "url": stampImageBase + "Parts12/Left hand over/Lefthand12.png",
            "group": "Parts12"
          },
          {
            "name": "顔に手あてる",
            "url": stampImageBase + "Parts12/Left hand over/Kaoniteateru12.png",
            "group": "Parts12"
          },
        ]
      },
      18 : {
        "layer": "18",
        "categoryName": "右手（上レイヤー）",
        "group": "Full-body,Close-up",
        "parts": [
          {
            "name": "Good",
            "url": stampImageBase + "Right hand over/Good.png",
            "group": "Full-body"
          },
          {"name": "なし", "url": noneUrl},
          {
            "name": "Ok",
            "url": stampImageBase + "Right hand over/Ok.png",
            "group": "Full-body"
          },
          {
            "name": "パー",
            "url": stampImageBase + "Right hand over/%E3%83%91%E3%83%BC.png",
            "group": "Full-body"
          },
          {
            "name": "顔に手あてる",
            "url": stampImageBase + "Right hand over/%E9%A1%94%E3%81%AB%E6%89%8B%E3%81%82%E3%81%A6%E3%82%8B.png",
            "group": "Full-body"
          },
          {"group": "Parts11", "name": "Good-righthand11", "url": stampImageBase + "Parts11/Right hand over/Good-righthand11.png"},
          {"group": "Parts11", "name": "Kaoniteateru-righthand11", "url": stampImageBase + "Parts11/Right hand over/Kaoniteateru-righthand11.png"},
          {"group": "Parts11", "name": "Ok-righthand11", "url": stampImageBase + "Parts11/Right hand over/Ok-righthand11.png"},
          {"group": "Parts11", "name": "Refthand11", "url": stampImageBase + "Parts11/Right hand over/Refthand11.png"},
          {"group": "Parts12", "name": "Good-righthand12", "url": stampImageBase + "Parts12/Right hand over/Good-righthand12.png"},
          {"group": "Parts12", "name": "Kaoniteateru-righthand12", "url": stampImageBase + "Parts12/Right hand over/Kaoniteateru-righthand12.png"},
          {"group": "Parts12", "name": "Ok-righthand12", "url": stampImageBase + "Parts12/Right hand over/Ok-righthand12.png"},
          {"group": "Parts12", "name": "Refthand12", "url": stampImageBase + "Parts12/Right hand over/Refthand12.png"},
        ]
      },
      19 : {
        "layer": "19",
        "categoryName": "左手の袖（上レイヤー）",
        "group": "Close-up",
        "parts": [
          {"name": "なし", "url": noneUrl},
          {"group": "Parts11", "name": "Good-leftskeeve11", "url": stampImageBase + "Parts11/Left hand sleeve over/Good-leftskeeve11.png"},
          {"group": "Parts11", "name": "Kaoniteateru-leftsleeve11", "url": stampImageBase + "Parts11/Left hand sleeve over/Kaoniteateru-leftsleeve11.png"},
          {"group": "Parts11", "name": "Ok-leftsleeve11", "url": stampImageBase + "Parts11/Left hand sleeve over/Ok-leftsleeve11.png"},
          {"group": "Parts12", "name": "Good-leftskeeve12", "url": stampImageBase + "Parts12/Left hand sleeve over/Good-leftskeeve12.png"},
          {"group": "Parts12", "name": "Kaoniteateru-leftsleeve12", "url": stampImageBase + "Parts12/Left hand sleeve over/Kaoniteateru-leftsleeve12.png"},
          {"group": "Parts12", "name": "Ok-leftsleeve12", "url": stampImageBase + "Parts12/Left hand sleeve over/Ok-leftsleeve12.png"},
        ]
      },
      20 : {
        "layer": "20",
        "categoryName": "右手の袖（上レイヤー）",
        "group": "Close-up",
        "parts": [
          {"name": "なし", "url": noneUrl},
          {"group": "Parts11", "name": "Good-rightsleeve11", "url": stampImageBase + "Parts11/Right hand sleeve over/Good-rightsleeve11.png"},
          {"group": "Parts11", "name": "Kaoniteateru-rightsleeve11", "url": stampImageBase + "Parts11/Right hand sleeve over/Kaoniteateru-rightsleeve11.png"},
          {"group": "Parts11", "name": "Ok-rightsleeve11", "url": stampImageBase + "Parts11/Right hand sleeve over/Ok-rightsleeve11.png"},
          {"group": "Parts12", "name": "Good-rightsleeve12", "url": stampImageBase + "Parts12/Right hand sleeve over/Good-rightsleeve12.png"},
          {"group": "Parts12", "name": "Kaoniteateru-rightsleeve12", "url": stampImageBase + "Parts12/Right hand sleeve over/Kaoniteateru-rightsleeve12.png"},
          {"group": "Parts12", "name": "Ok-rightsleeve12", "url": stampImageBase + "Parts12/Right hand sleeve over/Ok-rightsleeve12.png"},
        ]
      },
      21 : {
        "layer": "21",
        "categoryName": "ピノキオの鼻",
        "group": "Full-body,Close-up",
        "parts": [
          {"name": "なし", "url": noneUrl},
          {"group": "Parts01", "name": "ピノキオ", "url": stampImageBase + "Parts01/Nose/Pinokio1.png"},
          {"group": "Parts02", "name": "ピノキオ", "url": stampImageBase + "Parts02/Nose/Pinokio2.png"},
          {"group": "Parts03", "name": "ピノキオ", "url": stampImageBase + "Parts03/Nose/Pinokio3.png"},
          {"group": "Parts04", "name": "ピノキオ", "url": stampImageBase + "Parts04/Nose/Pinokio4.png"},
          {"group": "Parts05", "name": "ピノキオ", "url": stampImageBase + "Parts05/Nose/Pinokio5.png"},
          {"group": "Parts06", "name": "ピノキオ", "url": stampImageBase + "Parts06/Nose/Pinokio6.png"},
          {"group": "Parts07", "name": "ピノキオ", "url": stampImageBase + "Parts07/Nose/Pinokio7.png"},
          {"group": "Parts08", "name": "ピノキオ", "url": stampImageBase + "Parts08/Nose/Pinokio8.png"},
          {"group": "Parts09", "name": "ピノキオ", "url": stampImageBase + "Parts09/Nose/Pinokio9.png"},
          {"group": "Parts10", "name": "ピノキオ", "url": stampImageBase + "Parts10/Nose/Pinokio10.png"},
          {"group": "Parts11", "name": "ピノキオ", "url": stampImageBase + "Parts11/Nose/Pinokio11.png"},
          {"group": "Parts12", "name": "ピノキオ", "url": stampImageBase + "Parts12/Nose/Pinokio12.png"},
        ]
      },
      22 : {
        "layer": "22",
        "categoryName": "体",
        "group": "Cute",
        "parts": [
          {"group": "Parts14", "name": "Standard", "url": stampImageBase + "Parts14/Body/Standard.png"},
        ]
      },
      23 : {
        "layer": "23",
        "categoryName": "服",
        "group": "Cute",
        "parts": [
          {
            "name": "CBAsTシャツ",
            "url": stampImageBase + "Parts14/Clothes/CBAsT.png",
            "group": "Parts14"
          },
          {
            "name": "仕事服",
            "url": stampImageBase + "Parts14/Clothes/Work.png",
            "group": "Parts14"
          },
          {
            "name": "普段着",
            "url": stampImageBase + "Parts14/Clothes/Normal.png",
            "group": "Parts14"
          },
          {
            "name": "しきぶTシャツ",
            "url": stampImageBase + "Parts14/Clothes/ShikibuT.png",
            "group": "Parts14"
          },
          {
            "name": "パーカー",
            "url": stampImageBase + "Parts14/Clothes/Hoodie.png",
            "group": "Parts14"
          },
          {
            "name": "革ジャン",
            "url": stampImageBase + "Parts14/Clothes/LeatherJacket.png",
            "group": "Parts14"
          },
          {
            "name": "ジャージ",
            "url": stampImageBase + "Parts14/Clothes/Jersey.png",
            "group": "Parts14"
          },
          {
            "name": "タンクトップ",
            "url": stampImageBase + "Parts14/Clothes/TankTop.png",
            "group": "Parts14"
          },
          {
            "name": "学生服（女子）",
            "url": stampImageBase + "Parts14/Clothes/SchoolUniformWoman.png",
            "group": "Parts14"
          },
          {
            "name": "学生服（男子）",
            "url": stampImageBase + "Parts14/Clothes/SchoolUniformMan.png",
            "group": "Parts14"
          },
        ]
      },
      24 : {
        "layer": "24",
        "categoryName": "CBAs(左)",
        "parts": [
          {"name": "なし", "url": noneUrl},
          {"name": "Alligator", "url": stampImageBase + "CBAs/Alligator/${30}.png"},
          {"name": "Alpaca", "url": stampImageBase + "CBAs/Alpaca/${30}.png"},
          {"name": "Armadillo", "url": stampImageBase + "CBAs/Armadillo/${30}.png"},
          {"name": "Baby chick", "url": stampImageBase + "CBAs/Baby chick/${30}.png"},
          {"name": "Cat", "url": stampImageBase + "CBAs/Cat/${31}.png"},
          {"name": "Cheetah", "url": stampImageBase + "CBAs/Cheetah/${30}.png"},
          {"name": "Dog", "url": stampImageBase + "CBAs/Dog/${32}.png"},
          {"name": "Elephant", "url": stampImageBase + "CBAs/Elephant/${30}.png"},
          {"name": "Fox", "url": stampImageBase + "CBAs/Fox/${30}.png"},
          {"name": "Frog", "url": stampImageBase + "CBAs/Frog/${30}.png"},
          {"name": "Giraffe", "url": stampImageBase + "CBAs/Giraffe/${30}.png"},
          {"name": "Gorilla", "url": stampImageBase + "CBAs/Gorilla/${30}.png"},
          {"name": "Hamster", "url": stampImageBase + "CBAs/Hamster/${30}.png"},
          {"name": "Hedgehog", "url": stampImageBase + "CBAs/Hedgehog/${30}.png"},
          {"name": "Hippopotamus", "url": stampImageBase + "CBAs/Hippopotamus/${30}.png"},
          {"name": "Horse", "url": stampImageBase + "CBAs/Horse/${30}.png"},
          {"name": "Hyena", "url": stampImageBase + "CBAs/Hyena/${30}.png"},
          {"name": "Koala", "url": stampImageBase + "CBAs/Koala/${30}.png"},
          {"name": "Lion", "url": stampImageBase + "CBAs/Lion/${32}.png"},
          {"name": "Meerkat", "url": stampImageBase + "CBAs/Meerkat/${30}.png"},
          {"name": "Monkey", "url": stampImageBase + "CBAs/Monkey/${30}.png"},
          {"name": "Mouse", "url": stampImageBase + "CBAs/Mouse/${30}.png"},
          {"name": "Panda", "url": stampImageBase + "CBAs/Panda/${30}.png"},
          {"name": "Penguin", "url": stampImageBase + "CBAs/Penguin/${30}.png"},
          {"name": "Pig", "url": stampImageBase + "CBAs/Pig/${30}.png"},
          {"name": "Rabbit", "url": stampImageBase + "CBAs/Rabbit/${30}.png"},
          {"name": "Raccoon dog", "url": stampImageBase + "CBAs/Raccoon dog/${30}.png"},
          {"name": "Reindeer", "url": stampImageBase + "CBAs/Reindeer/${30}.png"},
          {"name": "Rhino", "url": stampImageBase + "CBAs/Rhino/${30}.png"},
          {"name": "Seal", "url": stampImageBase + "CBAs/Seal/${30}.png"},
          {"name": "Sheep", "url": stampImageBase + "CBAs/Sheep/${30}.png"},
          {"name": "Sloth", "url": stampImageBase + "CBAs/Sloth/${30}.png"},
          {"name": "Tiger", "url": stampImageBase + "CBAs/Tiger/${30}.png"},
          {"name": "Unicorn", "url": stampImageBase + "CBAs/Unicorn/${9}.png"},
        ]
      },
      25 : {
        "layer": "25",
        "categoryName": "CBAs(右)",
        "parts": [
          {"name": "なし", "url": noneUrl},
          {"name": "Alligator", "url": stampImageBase + "CBAs/Alligator/${30}.png"},
          {"name": "Alpaca", "url": stampImageBase + "CBAs/Alpaca/${30}.png"},
          {"name": "Armadillo", "url": stampImageBase + "CBAs/Armadillo/${30}.png"},
          {"name": "Baby chick", "url": stampImageBase + "CBAs/Baby chick/${30}.png"},
          {"name": "Cat", "url": stampImageBase + "CBAs/Cat/${31}.png"},
          {"name": "Cheetah", "url": stampImageBase + "CBAs/Cheetah/${30}.png"},
          {"name": "Dog", "url": stampImageBase + "CBAs/Dog/${32}.png"},
          {"name": "Elephant", "url": stampImageBase + "CBAs/Elephant/${30}.png"},
          {"name": "Fox", "url": stampImageBase + "CBAs/Fox/${30}.png"},
          {"name": "Frog", "url": stampImageBase + "CBAs/Frog/${30}.png"},
          {"name": "Giraffe", "url": stampImageBase + "CBAs/Giraffe/${30}.png"},
          {"name": "Gorilla", "url": stampImageBase + "CBAs/Gorilla/${30}.png"},
          {"name": "Hamster", "url": stampImageBase + "CBAs/Hamster/${30}.png"},
          {"name": "Hedgehog", "url": stampImageBase + "CBAs/Hedgehog/${30}.png"},
          {"name": "Hippopotamus", "url": stampImageBase + "CBAs/Hippopotamus/${30}.png"},
          {"name": "Horse", "url": stampImageBase + "CBAs/Horse/${30}.png"},
          {"name": "Hyena", "url": stampImageBase + "CBAs/Hyena/${30}.png"},
          {"name": "Koala", "url": stampImageBase + "CBAs/Koala/${30}.png"},
          {"name": "Lion", "url": stampImageBase + "CBAs/Lion/${32}.png"},
          {"name": "Meerkat", "url": stampImageBase + "CBAs/Meerkat/${30}.png"},
          {"name": "Monkey", "url": stampImageBase + "CBAs/Monkey/${30}.png"},
          {"name": "Mouse", "url": stampImageBase + "CBAs/Mouse/${30}.png"},
          {"name": "Panda", "url": stampImageBase + "CBAs/Panda/${30}.png"},
          {"name": "Penguin", "url": stampImageBase + "CBAs/Penguin/${30}.png"},
          {"name": "Pig", "url": stampImageBase + "CBAs/Pig/${30}.png"},
          {"name": "Rabbit", "url": stampImageBase + "CBAs/Rabbit/${30}.png"},
          {"name": "Raccoon dog", "url": stampImageBase + "CBAs/Raccoon dog/${30}.png"},
          {"name": "Reindeer", "url": stampImageBase + "CBAs/Reindeer/${30}.png"},
          {"name": "Rhino", "url": stampImageBase + "CBAs/Rhino/${30}.png"},
          {"name": "Seal", "url": stampImageBase + "CBAs/Seal/${30}.png"},
          {"name": "Sheep", "url": stampImageBase + "CBAs/Sheep/${30}.png"},
          {"name": "Sloth", "url": stampImageBase + "CBAs/Sloth/${30}.png"},
          {"name": "Tiger", "url": stampImageBase + "CBAs/Tiger/${30}.png"},
          {"name": "Unicorn", "url": stampImageBase + "CBAs/Unicorn/${9}.png"},
        ]
      },
      26 : {
        "layer": "26",
        "categoryName": "セリフ",
        "parts": [
          {"name": "なし", "url": noneUrl},
          {"name": "ありえんて…", "url": stampImageBase + "Dialogue/Ariente.png"},
          {"name": "ありがたや〜", "url": stampImageBase + "Dialogue/Arigataya.png"},
          {"name": "あざーす！", "url": stampImageBase + "Dialogue/Aza-su.png"},
          {"name": "大丈夫？", "url": stampImageBase + "Dialogue/Daijobu.png"},
          {"name": "だいじょうぶ", "url": stampImageBase + "Dialogue/Daijobu2.png"},
          {"name": "ダル…", "url": stampImageBase + "Dialogue/Daru.png"},
          {"name": "ですね。", "url": stampImageBase + "Dialogue/Desune.png"},
          {"name": "どしたの？", "url": stampImageBase + "Dialogue/Dositano.png"},
          {"name": "どういう事〜？", "url": stampImageBase + "Dialogue/Douiukoto.png"},
          {"name": "どぅも〜(左)", "url": stampImageBase + "Dialogue/Doumo_left.png"},
          {"name": "どぅも〜(右)", "url": stampImageBase + "Dialogue/Doumo_right.png"},
          {"name": "どうして？", "url": stampImageBase + "Dialogue/Doushite.png"},
          {"name": "エイエイオ〜", "url": stampImageBase + "Dialogue/Eieio.png"},
          {"name": "えらいこっちゃ", "url": stampImageBase + "Dialogue/Eraikoccha.png"},
          {"name": "ファイト!!(左)", "url": stampImageBase + "Dialogue/Fight_left.png"},
          {"name": "ファイト!!(右)", "url": stampImageBase + "Dialogue/Fight_right.png"},
          {"name": "がんばって!!", "url": stampImageBase + "Dialogue/Ganbatte.png"},
          {"name": "ごめん", "url": stampImageBase + "Dialogue/Gomen2.png"},
          {"name": "ごめん!!", "url": stampImageBase + "Dialogue/Gomen.png"},
          {"name": "ございます", "url": stampImageBase + "Dialogue/Gozaimasu.png"},
          {"name": "は〜い(左)", "url": stampImageBase + "Dialogue/Ha-i_left.png"},
          {"name": "は〜い(右)", "url": stampImageBase + "Dialogue/Ha-i_right.png"},
          {"name": "恥ずかしい!!", "url": stampImageBase + "Dialogue/Hazukashii.png"},
          {"name": "いまどこ？", "url": stampImageBase + "Dialogue/Imadoko.png"},
          {"name": "いってきます", "url": stampImageBase + "Dialogue/Ittekimasu.png"},
          {"name": "いってらっしゃい", "url": stampImageBase + "Dialogue/Itterasshai.png"},
          {"name": "感激!!", "url": stampImageBase + "Dialogue/Kangeki.png"},
          {"name": "気合だ!!", "url": stampImageBase + "Dialogue/Kiaida.png"},
          {"name": "こんばんは", "url": stampImageBase + "Dialogue/Konbanha.png"},
          {"name": "こんにちは", "url": stampImageBase + "Dialogue/Konnichiha.png"},
          {"name": "今日無理", "url": stampImageBase + "Dialogue/Kyoumuri.png"},
          {"name": "まぢで？", "url": stampImageBase + "Dialogue/Madide.png"},
          {"name": "マジかよ", "url": stampImageBase + "Dialogue/Majikayo.png"},
          {"name": "待ってるよ", "url": stampImageBase + "Dialogue/Matteruyo.png"},
          {"name": "問題なし", "url": stampImageBase + "Dialogue/Mondainashi.png"},
          {"name": "申し訳ございません", "url": stampImageBase + "Dialogue/Mousiwakegozaimasen.png"},
          {"name": "なんで？", "url": stampImageBase + "Dialogue/Nande.png"},
          {"name": "何してるの？", "url": stampImageBase + "Dialogue/Nanishiteruno.png"},
          {"name": "なんか", "url": stampImageBase + "Dialogue/Nanka2.png"},
          {"name": "なんか…", "url": stampImageBase + "Dialogue/Nanka.png"},
          {"name": "なんてこった", "url": stampImageBase + "Dialogue/Nantekotta.png"},
          {"name": "眠たい…", "url": stampImageBase + "Dialogue/Nemutai.png"},
          {"name": "おはよう", "url": stampImageBase + "Dialogue/Ohayo.png"},
          {"name": "おぃおぃ", "url": stampImageBase + "Dialogue/Oioi.png"},
          {"name": "おめでとう", "url": stampImageBase + "Dialogue/Omedeto.png"},
          {"name": "お願い〜", "url": stampImageBase + "Dialogue/Onegai.png"},
          {"name": "お願いします", "url": stampImageBase + "Dialogue/Onegaishimasu.png"},
          {"name": "おそろしい人やで", "url": stampImageBase + "Dialogue/Osoroshi-hitoyade.png"},
          {"name": "お疲れ様です", "url": stampImageBase + "Dialogue/Otsukaresamadesu.png"},
          {"name": "応援してる!!", "url": stampImageBase + "Dialogue/Ouen-shiteru.png"},
          {"name": "おやすみなさい", "url": stampImageBase + "Dialogue/Oyasuminasai.png"},
          {"name": "ポジティブ〜", "url": stampImageBase + "Dialogue/Positive.png"},
          {"name": "理解した。", "url": stampImageBase + "Dialogue/Rikaishita.png"},
          {"name": "そこまで言う？", "url": stampImageBase + "Dialogue/Sokomadeiu.png"},
          {"name": "すごくイイ", "url": stampImageBase + "Dialogue/Sugokuii.png"},
          {"name": "すみません", "url": stampImageBase + "Dialogue/Sumimasen.png"},
          {"name": "助かります", "url": stampImageBase + "Dialogue/Tasukarimasu.png"},
          {"name": "陳謝。", "url": stampImageBase + "Dialogue/Tinsha.png"},
          {"name": "うんうん。", "url": stampImageBase + "Dialogue/Unun.png"},
          {"name": "うれピ〜", "url": stampImageBase + "Dialogue/Urepi.png"},
          {"name": "ウソでしょ!?", "url": stampImageBase + "Dialogue/Usodesho.png"},
          {"name": "わかりません", "url": stampImageBase + "Dialogue/Wakarimasen.png"},
          {"name": "わっかる〜", "url": stampImageBase + "Dialogue/Wakkaru.png"},
          {"name": "やったぁ", "url": stampImageBase + "Dialogue/Yatta.png"},
          {"name": "よろしく", "url": stampImageBase + "Dialogue/Yoroshiku.png"},
          {"name": "ありがとうございます", "url": stampImageBase + "Dialogue/arigato-gozaimasu.png"},
          {"name": "ありがとう", "url": stampImageBase + "Dialogue/arigato.png"},
          {"name": "ババァーン!!", "url": stampImageBase + "Dialogue/baba-n.png"},
          {"name": "だいすき", "url": stampImageBase + "Dialogue/daisuki.png"},
          {"name": "ドォーン!!", "url": stampImageBase + "Dialogue/do-n.png"},
          {"name": "え!?", "url": stampImageBase + "Dialogue/e.png"},
          {"name": "はっ!!", "url": stampImageBase + "Dialogue/ha.png"},
          {"name": "了解です", "url": stampImageBase + "Dialogue/ryokai-desu.png"},
          {"name": "すき(左)", "url": stampImageBase + "Dialogue/suki_left.png"},
          {"name": "すき(右)", "url": stampImageBase + "Dialogue/suki_right.png"},
          {"name": "ただいま〜", "url": stampImageBase + "Dialogue/tadaima.png"},
          {"name": "テヘッ", "url": stampImageBase + "Dialogue/tehe.png"},
        ]
      },
    };




    useEffect(() => {
      window.scrollTo(0, 0)

      const nowSelectedAttributes = {};

      if (selectedEthNFT != null) {

        if (selectedEthNFT.duMetadata !== null && selectedEthNFT.duMetadata !== undefined
              && selectedEthNFT.duMetadata.attributes !== null && selectedEthNFT.duMetadata.attributes !== undefined) {
          for (var i = 0; i < selectedEthNFT.duMetadata.attributes.length; i++) {
            const attribute = selectedEthNFT.duMetadata.attributes[i];
            nowSelectedAttributes[attribute.trait_type] = attribute.value;
          };
        }

        // console.log("selectedEthNFT");
        // console.log(selectedEthNFT);

        // console.log("nowSelectedAttributes");
        // console.log(nowSelectedAttributes);
        setSelectedAttributes(nowSelectedAttributes);
        selectedEthNFT.attributes = nowSelectedAttributes;

        if (selectedEthNFT.symbol === "SKB") {
          setDressUpPic01Url(dressUpPartsSetSKB[1].parts[0].url);
          setDressUpPic02Url(dressUpPartsSetSKB[2].parts[0].url);
          setDressUpPic03Url(dressUpPartsSetSKB[3].parts[0].url);
          setDressUpPic04Url(dressUpPartsSetSKB[4].parts[0].url);
          setDressUpPic05Url(dressUpPartsSetSKB[5].parts[0].url);
          setDressUpPic06Url(dressUpPartsSetSKB[6].parts[0].url);
          setDressUpPic07Url(dressUpPartsSetSKB[7].parts[0].url);
          setDressUpPic08Url(dressUpPartsSetSKB[8].parts[0].url);
          setDressUpPic09Url(dressUpPartsSetSKB[9].parts[0].url);
          setDressUpPic10Url(dressUpPartsSetSKB[10].parts[0].url);
          setDressUpPic11Url(dressUpPartsSetSKB[11].parts[0].url);
          setDressUpPic12Url(dressUpPartsSetSKB[12].parts[0].url);
          setDressUpPic13Url(dressUpPartsSetSKB[13].parts[0].url);
          setDressUpPic14Url(dressUpPartsSetSKB[14].parts[0].url);
          setDressUpPic15Url(dressUpPartsSetSKB[15].parts[0].url);
          setDressUpPic16Url(dressUpPartsSetSKB[16].parts[0].url);
          setDressUpPic17Url(dressUpPartsSetSKB[17].parts[0].url);
          setDressUpPic18Url(dressUpPartsSetSKB[18].parts[0].url);
          setDressUpPic19Url(dressUpPartsSetSKB[19].parts[0].url);
          setDressUpPic20Url(dressUpPartsSetSKB[20].parts[0].url);
          setDressUpPic21Url(dressUpPartsSetSKB[21].parts[0].url);
          // setDressUpPic22Url(dressUpPartsSetSKB[22].parts[0].url);
          // setDressUpPic23Url(dressUpPartsSetSKB[23].parts[0].url);
          // setDressUpPic24Url(dressUpPartsSetSKB[24].parts[0].url);
          // setDressUpPic25Url(dressUpPartsSetSKB[25].parts[0].url);
          // setDressUpPic26Url(dressUpPartsSetSKB[26].parts[0].url);
          
        } else {
          // スタンプ対象外のNFTの場合、元の画像をそのまま入れる
          setDressUpPic02Url(selectedEthNFT.moralisImageUri);
        }

        // パーツがパラパラ表示されるのを防ぐために灰色にしておいたヴェールを2秒後に透明にする
        // パーツ画像が全部ロードされたのを検知してやりたかったが、難しかったので固定の秒数で暫定対応
        const timer = setTimeout(() => {
          //some action
          setDressUpPicVailStyle({backgroundColor: 'transparent'});
          setDressUpPicSpin("");
        }, 1.3 * 1000);
      }

    }, [selectedEthNFT]);


    const onClickDressUpItem = (event) => {
      if (event.target.value === null || event.target.value === undefined) {
        return;
      }

      // タブ区切りでLayerとCategoryを取得
      const nowDressUpPicDataArray = event.target.value.split("\t");
      console.log("nowDressUpPicDataArray", nowDressUpPicDataArray);
      if (nowDressUpPicDataArray.length !== 3) {
        return;
      }
      const nowDressUpPicAccessoryLayer = nowDressUpPicDataArray[0];
      const nowDressUpPicAccessoryCategory = nowDressUpPicDataArray[1];
      var nowDressUpPicAccessoryUrl = nowDressUpPicDataArray[2];

      // CBAsの場合は「${10}」に範囲内（例の場合は1から10）のランダムな数字を置き換えて表示する
      if (nowDressUpPicAccessoryUrl.indexOf("${") !== -1) {
        const startIndex = nowDressUpPicAccessoryUrl.indexOf("${")
        const closeIndex = nowDressUpPicAccessoryUrl.indexOf("}");
        const numStr = nowDressUpPicAccessoryUrl.substring(startIndex + 2, closeIndex);
        const num = parseInt(numStr);
        const randomNum = Math.floor(Math.random() * num) + 1;
        const replacedUrl = nowDressUpPicAccessoryUrl.replace("${" + numStr + "}", randomNum);
        nowDressUpPicAccessoryUrl = replacedUrl;
      }

      setDressUpPic(nowDressUpPicAccessoryLayer, nowDressUpPicAccessoryUrl);
    }

    const onClickDressUpGroup = (event) => {
      if (event.target.value === null || event.target.value === undefined) {
        return;
      }

      const nowDressUpPicAccessoryCategory = event.target.value;
      setSelectedDressUpGroup(nowDressUpPicAccessoryCategory);

      setDressUpPic04Url(noneUrl);
      setDressUpPic05Url(noneUrl);
      setDressUpPic06Url(noneUrl);
      setDressUpPic07Url(noneUrl);
      setDressUpPic14Url(noneUrl);
      setDressUpPic16Url(noneUrl);
      setDressUpPic19Url(noneUrl);
      setDressUpPic20Url(noneUrl);
      setDressUpPic21Url(noneUrl);
      // setDressUpPic22Url(noneUrl);
      // setDressUpPic23Url(noneUrl);

      if (nowDressUpPicAccessoryCategory.includes("Full-body")) {
        setDressUpPic01Url(dressUpPartsSetSKB[1].parts[0].url);
        setDressUpPic02Url(dressUpPartsSetSKB[2].parts[0].url);
        setDressUpPic03Url(dressUpPartsSetSKB[3].parts[0].url);
        setDressUpPic08Url(dressUpPartsSetSKB[8].parts[0].url);
        setDressUpPic17Url(dressUpPartsSetSKB[17].parts[0].url);
        setDressUpPic18Url(dressUpPartsSetSKB[18].parts[0].url);
        setDressUpPic19Url(noneUrl);
        setDressUpPic20Url(noneUrl);
        setDressUpPic22Url(noneUrl);
        setDressUpPic23Url(noneUrl);
      } else if (nowDressUpPicAccessoryCategory.includes("Close-up")) {
        setDressUpPic02Url(noneUrl);
        setDressUpPic03Url(noneUrl);
        setDressUpPic22Url(noneUrl);
        setDressUpPic23Url(noneUrl);
      } else if (nowDressUpPicAccessoryCategory.includes("Cute")) {
        setDressUpPic01Url(noneUrl);
        setDressUpPic02Url(noneUrl);
        setDressUpPic03Url(noneUrl);
        setDressUpPic04Url(noneUrl);
        setDressUpPic05Url(noneUrl);
        setDressUpPic06Url(noneUrl);
        setDressUpPic07Url(noneUrl);
        setDressUpPic08Url(noneUrl);
        setDressUpPic16Url(noneUrl);
        setDressUpPic17Url(noneUrl);
        setDressUpPic18Url(noneUrl);
        setDressUpPic19Url(noneUrl);
        setDressUpPic20Url(noneUrl);
        setDressUpPic21Url(noneUrl);
        setDressUpPic22Url(dressUpPartsSetSKB[22].parts[0].url);
        setDressUpPic23Url(dressUpPartsSetSKB[23].parts[0].url);
      }

      if (nowDressUpPicAccessoryCategory.includes("Parts01")) {
        setDressUpPic09Url(dressUpPartsSetSKB[9].parts[0].url);
        setDressUpPic10Url(dressUpPartsSetSKB[10].parts[0].url);
        setDressUpPic11Url(dressUpPartsSetSKB[11].parts[0].url);
        setDressUpPic12Url(dressUpPartsSetSKB[12].parts[0].url);
        setDressUpPic13Url(dressUpPartsSetSKB[13].parts[0].url);
        setDressUpPic15Url(dressUpPartsSetSKB[15].parts[0].url);

      } else if (nowDressUpPicAccessoryCategory.includes("Parts02")) {
        setDressUpPic09Url(dressUpPartsSetSKB[9].parts[4].url);
        setDressUpPic10Url(dressUpPartsSetSKB[10].parts[9].url);
        setDressUpPic11Url(dressUpPartsSetSKB[11].parts[6].url);
        setDressUpPic12Url(dressUpPartsSetSKB[12].parts[10].url);
        setDressUpPic13Url(dressUpPartsSetSKB[13].parts[5].url);
        setDressUpPic15Url(dressUpPartsSetSKB[15].parts[12].url);

      } else if (nowDressUpPicAccessoryCategory.includes("Parts03")) {
        setDressUpPic09Url(dressUpPartsSetSKB[9].parts[8].url);
        setDressUpPic10Url(dressUpPartsSetSKB[10].parts[18].url);
        setDressUpPic11Url(dressUpPartsSetSKB[11].parts[11].url);
        setDressUpPic12Url(dressUpPartsSetSKB[12].parts[19].url);
        setDressUpPic13Url(dressUpPartsSetSKB[13].parts[9].url);
        setDressUpPic15Url(dressUpPartsSetSKB[15].parts[23].url);

      } else if (nowDressUpPicAccessoryCategory.includes("Parts04")) {
        setDressUpPic09Url(dressUpPartsSetSKB[9].parts[12].url);
        setDressUpPic10Url(dressUpPartsSetSKB[10].parts[27].url);
        setDressUpPic11Url(dressUpPartsSetSKB[11].parts[16].url);
        setDressUpPic12Url(dressUpPartsSetSKB[12].parts[28].url);
        setDressUpPic13Url(dressUpPartsSetSKB[13].parts[13].url);
        setDressUpPic15Url(dressUpPartsSetSKB[15].parts[34].url);

      } else if (nowDressUpPicAccessoryCategory.includes("Parts05")) {
        setDressUpPic09Url(dressUpPartsSetSKB[9].parts[16].url);
        setDressUpPic10Url(dressUpPartsSetSKB[10].parts[36].url);
        setDressUpPic11Url(dressUpPartsSetSKB[11].parts[21].url);
        setDressUpPic12Url(dressUpPartsSetSKB[12].parts[37].url);
        setDressUpPic13Url(dressUpPartsSetSKB[13].parts[17].url);
        setDressUpPic15Url(dressUpPartsSetSKB[15].parts[45].url);

      } else if (nowDressUpPicAccessoryCategory.includes("Parts06")) {
        setDressUpPic09Url(dressUpPartsSetSKB[9].parts[20].url);
        setDressUpPic10Url(dressUpPartsSetSKB[10].parts[45].url);
        setDressUpPic11Url(dressUpPartsSetSKB[11].parts[26].url);
        setDressUpPic12Url(dressUpPartsSetSKB[12].parts[46].url);
        setDressUpPic13Url(dressUpPartsSetSKB[13].parts[21].url);
        setDressUpPic15Url(dressUpPartsSetSKB[15].parts[56].url);

      } else if (nowDressUpPicAccessoryCategory.includes("Parts07")) {
        setDressUpPic09Url(dressUpPartsSetSKB[9].parts[24].url);
        setDressUpPic10Url(dressUpPartsSetSKB[10].parts[54].url);
        setDressUpPic11Url(dressUpPartsSetSKB[11].parts[31].url);
        setDressUpPic12Url(dressUpPartsSetSKB[12].parts[55].url);
        setDressUpPic13Url(dressUpPartsSetSKB[13].parts[25].url);
        setDressUpPic15Url(dressUpPartsSetSKB[15].parts[67].url);

      } else if (nowDressUpPicAccessoryCategory.includes("Parts08")) {
        setDressUpPic09Url(dressUpPartsSetSKB[9].parts[28].url);
        setDressUpPic10Url(dressUpPartsSetSKB[10].parts[63].url);
        setDressUpPic11Url(dressUpPartsSetSKB[11].parts[36].url);
        setDressUpPic12Url(dressUpPartsSetSKB[12].parts[64].url);
        setDressUpPic13Url(dressUpPartsSetSKB[13].parts[29].url);
        setDressUpPic15Url(dressUpPartsSetSKB[15].parts[78].url);

      } else if (nowDressUpPicAccessoryCategory.includes("Parts09")) {
        setDressUpPic09Url(dressUpPartsSetSKB[9].parts[32].url);
        setDressUpPic10Url(dressUpPartsSetSKB[10].parts[72].url);
        setDressUpPic11Url(dressUpPartsSetSKB[11].parts[41].url);
        setDressUpPic12Url(dressUpPartsSetSKB[12].parts[73].url);
        setDressUpPic13Url(dressUpPartsSetSKB[13].parts[33].url);
        setDressUpPic15Url(dressUpPartsSetSKB[15].parts[89].url);

      } else if (nowDressUpPicAccessoryCategory.includes("Parts10")) {
        setDressUpPic09Url(dressUpPartsSetSKB[9].parts[36].url);
        setDressUpPic10Url(dressUpPartsSetSKB[10].parts[81].url);
        setDressUpPic11Url(dressUpPartsSetSKB[11].parts[46].url);
        setDressUpPic12Url(dressUpPartsSetSKB[12].parts[82].url);
        setDressUpPic13Url(dressUpPartsSetSKB[13].parts[37].url);
        setDressUpPic15Url(dressUpPartsSetSKB[15].parts[100].url);

      } else if (nowDressUpPicAccessoryCategory.includes("Parts11")) {
        setDressUpPic01Url(dressUpPartsSetSKB[1].parts[4].url);
        setDressUpPic08Url(dressUpPartsSetSKB[8].parts[30].url);
        setDressUpPic09Url(dressUpPartsSetSKB[9].parts[40].url);
        setDressUpPic10Url(dressUpPartsSetSKB[10].parts[90].url);
        setDressUpPic11Url(dressUpPartsSetSKB[11].parts[51].url);
        setDressUpPic12Url(dressUpPartsSetSKB[12].parts[91].url);
        setDressUpPic13Url(dressUpPartsSetSKB[13].parts[41].url);
        setDressUpPic15Url(dressUpPartsSetSKB[15].parts[111].url);
        setDressUpPic17Url(dressUpPartsSetSKB[17].parts[5].url);
        setDressUpPic18Url(dressUpPartsSetSKB[18].parts[5].url);

      } else if (nowDressUpPicAccessoryCategory.includes("Parts12")) {
        setDressUpPic01Url(dressUpPartsSetSKB[1].parts[8].url);
        setDressUpPic08Url(dressUpPartsSetSKB[8].parts[40].url);
        setDressUpPic09Url(dressUpPartsSetSKB[9].parts[44].url);
        setDressUpPic10Url(dressUpPartsSetSKB[10].parts[99].url);
        setDressUpPic11Url(dressUpPartsSetSKB[11].parts[56].url);
        setDressUpPic12Url(dressUpPartsSetSKB[12].parts[97].url);
        setDressUpPic13Url(dressUpPartsSetSKB[13].parts[45].url);
        setDressUpPic15Url(dressUpPartsSetSKB[15].parts[125].url);
        setDressUpPic17Url(dressUpPartsSetSKB[17].parts[9].url);
        setDressUpPic18Url(dressUpPartsSetSKB[18].parts[9].url);

      } else if (nowDressUpPicAccessoryCategory.includes("Parts14")) {
        setDressUpPic09Url(dressUpPartsSetSKB[9].parts[48].url);
        setDressUpPic10Url(dressUpPartsSetSKB[10].parts[116].url);
        setDressUpPic11Url(dressUpPartsSetSKB[11].parts[57].url);
        setDressUpPic12Url(dressUpPartsSetSKB[12].parts[105].url);
        setDressUpPic13Url(dressUpPartsSetSKB[13].parts[46].url);
        setDressUpPic15Url(dressUpPartsSetSKB[15].parts[139].url);

      }

    }

    const createPartsArea = () => {

      console.log("createPartsArea");

      let partsArea = [];

      // パーツのカテゴリぶん回す
      for (let i = 1; i <= LAYER_MAX; i++) {
        const nowPartsCategory = dressUpPartsSetSKB[i];
        console.log("nowPartsCategory", nowPartsCategory);
        const nowPartsCategoryLayer = nowPartsCategory.layer;
        const nowPartsCategoryName = nowPartsCategory.categoryName;
        const nowPartsCategoryGroup = nowPartsCategory.group;
        const nowCategoryParts = nowPartsCategory.parts;

        if (nowPartsCategoryGroup !== undefined && !selectedDressUpGroup.includes(nowPartsCategoryGroup)) {
          continue;
        }

        partsArea.push(
          <>
            <dt>{nowPartsCategoryName}</dt>
            <dd>
              <ButtonGroup aria-label="Word-btn" style={{flexWrap: 'wrap'}} onClick={onClickDressUpItem}>
                {createPartsButtons(nowPartsCategoryLayer, nowPartsCategoryName, nowCategoryParts)}
              </ButtonGroup>
            </dd>
          </>
        );
      }
      console.log("createPartsArea", partsArea);
      return partsArea;
    }

    const createPartsButtons = (layer, categoryName, parts) => {
      let partsButtons = [];

      if (parts === null || parts === undefined || parts.length === 0) {
        return partsButtons;
      }

      // パーツの数ぶん回す
      for (let i = 0; i < parts.length; i++) {
        const nowParts = parts[i];
        const nowPartsName = nowParts.name;
        const nowPartsUrl = nowParts.url;
        const nowPartsValue = layer + "\t" + categoryName + "\t" + nowPartsUrl;
        const nowPartsGroup = nowParts.group;
        var firstParts = true;

        if (nowPartsGroup !== undefined && !selectedDressUpGroup.includes(nowPartsGroup)) {
          // setDressUpPic(layer, noneUrl);
          continue;
        }

        // if (firstParts) {
        //   setDressUpPic(layer, nowPartsUrl);
        //   firstParts = false;
        // }

        partsButtons.push(
          <>
            <button value={nowPartsValue}>{nowPartsName}</button>
          </>
        );
      }

      return partsButtons;

    }


    const saveAsImage = uri => {
      const downloadLink = document.createElement("a");

      if (typeof downloadLink.download === "string") {
        downloadLink.href = uri;

        // ファイル名
        downloadLink.download = "stamp.png";

        // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
        document.body.appendChild(downloadLink);

        // ダウンロードリンクが設定された a タグをクリック
        downloadLink.click();

        // Firefox 対策で追加したリンクを削除しておく
        document.body.removeChild(downloadLink);
      } else {
        window.open(uri);
      }
    }

    const onClickExport = async() => {

      // DownloadするときだけCopyrightをセットする
      setDressUpPicCopyrightDisp(true);

      await wait(500);

      // 画像に変換する component の id を指定
      var target = document.getElementById("dress-up-window");
      target.style.width = "370px";
      target.style.height = "320px";

      const area = target.getBoundingClientRect();

      html2canvas(target, {
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        width: area.width,
        height: area.height,
        onrendered: function (canvas) {
          document.body.appendChild(canvas);
        },
        backgroundColor :null,
      }).then(canvas => {
        const targetImgUri = canvas.toDataURL("img/png");
        saveAsImage(targetImgUri);
      });

      // Downloadが終わったらCopyrightを削除する
      setDressUpPicCopyrightDisp(false);

      target.style.width = "";
      target.style.height = "";

    }

  return (
      <>
        <div class="card card__dress-up">
          <div class="card__dress-up--header">
            <div>
              <Link to={`/`} class="back-link">←Change NFT</Link>
              <h1 class="card__dress-up--title">Stamp Maker</h1>
            </div>
            <button onClick={onClickExport}>↓ Download</button>
          </div>
          <div class="card__dress-up--change">
            <div class="card__dress-up--image">
              {selectedEthNFT != null &&
                <>
                  <div id="dress-up-window" width="370" height="320">
                    <img className="dress-up-pic-base" src="/noneStamp.png"/>
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic01Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic02Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic03Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic04Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic05Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic06Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic07Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic08Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic09Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic10Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic11Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic12Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic13Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic14Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic15Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic16Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic17Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic18Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic19Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic20Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic21Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic22Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic23Url} />
                    <img className="dress-up-pic-cbas-left" crossOrigin='anonymous' src={dressUpPic24Url} />
                    <img className="dress-up-pic-cbas-right" crossOrigin='anonymous' src={dressUpPic25Url} />
                    <img className="dress-up-pic" crossOrigin='anonymous' src={dressUpPic26Url} />
                    <img id="dress-up-pic-copyright" className={dressUpPicCopyrightDisp? "dress-up-pic": "dress-up-pic-hidden"} crossOrigin='anonymous' src={dressUpPicCopyrightUrl} />
                    <div id="dress-up-pic-vail" className='dress-up-pic' style={dressUpPicVailStyle} />
                    <div id="dress-up-spin" className={dressUpPicSpin}>
                      <div className="sk-cube sk-cube1"></div>
                      <div className="sk-cube sk-cube2"></div>
                      <div className="sk-cube sk-cube3"></div>
                      <div className="sk-cube sk-cube4"></div>
                      <div className="sk-cube sk-cube5"></div>
                      <div className="sk-cube sk-cube6"></div>
                      <div className="sk-cube sk-cube7"></div>
                      <div className="sk-cube sk-cube8"></div>
                      <div className="sk-cube sk-cube9"></div>
                    </div>
                  </div>

                  <p class="card__dress-up--no">{`${selectedEthNFT.name}`}</p>
                </>
              }
              {selectedEthNFT == null &&
                <>
                  <div id="dress-up-window" width="370" height="320">
                    <img className="dress-up-pic-background" src="/noneStamp.png"/>
                  </div>
                  <p class="card__dress-up--pj"></p>
                  <p class="card__dress-up--no"></p>
                </>
              }
            </div>
            <div class="card__dress-up--option">

              {/* SKB */}
              {selectedEthNFT !== null && symbol === "SKB" &&
                <>
                  <dl>
                    <dt>レイアウト</dt>
                    <dd>
                      <ButtonGroup aria-label="Word-btn" style={{flexWrap: 'wrap'}} onClick={onClickDressUpGroup}>
                        <button value="Full-body,Parts01">全身左向き1</button>
                        <button value="Full-body,Parts02">全身左向き2</button>
                        <button value="Full-body,Parts03">全身左向き3</button>
                        <button value="Full-body,Parts04">全身左向き4</button>
                        <button value="Full-body,Parts05">全身左向き5</button>
                        <button value="Full-body,Parts06">全身右向き1</button>
                        <button value="Full-body,Parts07">全身右向き2</button>
                        <button value="Full-body,Parts08">全身右向き3</button>
                        <button value="Full-body,Parts09">全身右向き4</button>
                        <button value="Full-body,Parts10">全身右向き5</button>
                        <button value="Close-up,Parts12">アップ左向き</button>
                        <button value="Close-up,Parts11">アップ右向き</button>
                        <button value="Cute,Parts14">キュート</button>
                      </ButtonGroup>
                    </dd>
                  </dl>

                  <dl>
                    {createPartsArea()}
                  </dl>
                </>
              }

            </div>
          </div>
        </div>
      </>

    );

  function setDressUpPic(nowDressUpPicAccessoryLayer, nowDressUpPicAccessoryUrl) {
    if (nowDressUpPicAccessoryLayer === "01") {
      setDressUpPic01Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "02") {
      setDressUpPic02Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "03") {
      setDressUpPic03Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "04") {
      setDressUpPic04Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "05") {
      setDressUpPic05Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "06") {
      setDressUpPic06Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "07") {
      setDressUpPic07Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "08") {
      setDressUpPic08Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "09") {
      setDressUpPic09Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "10") {
      setDressUpPic10Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "11") {
      setDressUpPic11Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "12") {
      setDressUpPic12Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "13") {
      setDressUpPic13Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "14") {
      setDressUpPic14Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "15") {
      setDressUpPic15Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "16") {
      setDressUpPic16Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "17") {
      setDressUpPic17Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "18") {
      setDressUpPic18Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "19") {
      setDressUpPic19Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "20") {
      setDressUpPic20Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "21") {
      setDressUpPic21Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "22") {
      setDressUpPic22Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "23") {
      setDressUpPic23Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "24") {
      setDressUpPic24Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "25") {
      setDressUpPic25Url(nowDressUpPicAccessoryUrl);
    } else if (nowDressUpPicAccessoryLayer === "26") {
      setDressUpPic26Url(nowDressUpPicAccessoryUrl);
    }
  }
  }
