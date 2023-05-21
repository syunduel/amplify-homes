import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useEthNFT, useEthNFTs } from '../api/evmnft';
import { ButtonGroup } from '@aws-amplify/ui-react';
import html2canvas from "html2canvas";
import {serverData} from '../data/serverData';
import {collectionData} from '../data/collectionData';


export default function Stamp() {

  console.log("Stamp start");

  const LAYER_MAX = 17;

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


    const stampImageBase = serverData.serverStampRoot + selectedChain + "/" + symbol + "_" + selectedNftAddress + "/parts_v4/";


    const [selectedAttributes, setSelectedAttributes] = useState([]);

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
    const [dressUpPicCopyrightUrl, setDressUpPicCopyrightUrl] = useState(noneUrl);
    const [dressUpPicCopyrightDisp, setDressUpPicCopyrightDisp] = useState(false);
    const [dressUpPicVailStyle, setDressUpPicVailStyle] = useState({backgroundColor: 'lightgray'});
    const [dressUpPicSpin, setDressUpPicSpin] = useState("sk-cube-grid-stamp");

    const dressUpPartsSetSKB = {
      1 : {
        "layer": "01",
        "categoryName": "体",
        "parts": [
          {
            "name": "standard",
            "url": stampImageBase + "Body/A12EA0FECAF0-46D5-8DDC-0510B3E5BCDA.png"
          },
          {
            "name": "brown",
            "url": stampImageBase + "Body/57F37D56-BBDD-4716-9735D32A2A00F378.png"
          },
          {
            "name": "red",
            "url": stampImageBase + "Body/DC4D6C48-7C98-4B56-9CAE-54C8426B6FC9.png"
          },
          {
            "name": "white",
            "url": stampImageBase + "Body/DE7148D3-84CC-450A-BBFC-95BBBDDDF2A9.png"
          },
        ]
      },
      2 : {
        "layer": "02",
        "categoryName": "左足",
        "parts": [
          {
            "name": "曲げる",
            "url": stampImageBase + "Left foot/9DA2F48C-59FC-47E9-A517-4C97683A098E.png"
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
        "parts": [
          {
            "name": "曲げる",
            "url": stampImageBase + "Right foot/E9EA5E42-86D7-4CF8-891A-2CD6C08E70FB.png"
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
        "parts": [
          {
            "name": "なし",
            "url": noneUrl
          },
          {
            "name": "グー",
            "url": stampImageBase + "Left hand under/Guu.png"
          },
          {
            "name": "広げる",
            "url": stampImageBase + "Left hand under/Hirogeru.png"
          },
          {
            "name": "腰",
            "url": stampImageBase + "Left hand under/Koshiate.png"
          },
          {
            "name": "パー",
            "url": stampImageBase + "Left hand under/Pa-.png"
          },
          {
            "name": "ピース",
            "url": stampImageBase + "Left hand under/Pi-su.png"
          },
          {
            "name": "スタンダード",
            "url": stampImageBase + "Left hand under/Standard.png"
          },
          {
            "name": "テヘ",
            "url": stampImageBase + "Left hand under/Tehe.png"
          },
        ]
      },
      5 : {
        "layer": "05",
        "categoryName": "右手（下レイヤー）",
        "parts": [
          {
            "name": "なし",
            "url": noneUrl
          },
          {
            "name": "グー",
            "url": stampImageBase + "Right hand under/Guu.png"
          },
          {
            "name": "広げる",
            "url": stampImageBase + "Right hand under/Hirogeru.png"
          },
          {
            "name": "腰",
            "url": stampImageBase + "Right hand under/Koshiate.png"
          },
          {
            "name": "パー",
            "url": stampImageBase + "Right hand under/Pa-.png"
          },
          {
            "name": "ピース",
            "url": stampImageBase + "Right hand under/Pi-su.png"
          },
          {
            "name": "スタンダード",
            "url": stampImageBase + "Right hand under/Standard.png"
          },
          {
            "name": "テヘ",
            "url": stampImageBase + "Right hand under/Tehe.png"
          },
        ]
      },
      6 : {
        "layer": "06",
        "categoryName": "服",
        "parts": [
          {
            "name": "CBAs 1",
            "url": stampImageBase + "Clothes/CBAs 1.png"
          },
          {
            "name": "CBAs T2",
            "url": stampImageBase + "Clothes/CBAs T2.png"
          },
          {
            "name": "CBAs T3",
            "url": stampImageBase + "Clothes/CBAs T3.png"
          },
          {
            "name": "CBAs T4",
            "url": stampImageBase + "Clothes/CBAs T4.png"
          },
          {
            "name": "HartT1",
            "url": stampImageBase + "Clothes/HartT1.png"
          },
          {
            "name": "HartT2",
            "url": stampImageBase + "Clothes/HartT2.png"
          },
          {
            "name": "HartT3",
            "url": stampImageBase + "Clothes/HartT3.png"
          },
          {
            "name": "HartT4",
            "url": stampImageBase + "Clothes/HartT4.png"
          },
          {
            "name": "Mizutama1",
            "url": stampImageBase + "Clothes/Mizutama1.png"
          },
          {
            "name": "Mizutama2",
            "url": stampImageBase + "Clothes/Mizutama2.png"
          },
          {
            "name": "Mizutama3",
            "url": stampImageBase + "Clothes/Mizutama3.png"
          },
          {
            "name": "Mizutama4",
            "url": stampImageBase + "Clothes/Mizutama4.png"
          },
          {
            "name": "Producer1",
            "url": stampImageBase + "Clothes/Producer1.png"
          },
          {
            "name": "Producer2",
            "url": stampImageBase + "Clothes/Producer2.png"
          },
          {
            "name": "Producer3",
            "url": stampImageBase + "Clothes/Producer3.png"
          },
          {
            "name": "Producer4",
            "url": stampImageBase + "Clothes/Producer4.png"
          },
          {
            "name": "Ribonn1",
            "url": stampImageBase + "Clothes/Ribonn1.png"
          },
          {
            "name": "Ribonn2",
            "url": stampImageBase + "Clothes/Ribonn2.png"
          },
          {
            "name": "Ribonn3",
            "url": stampImageBase + "Clothes/Ribonn3.png"
          },
          {
            "name": "Ribonn4",
            "url": stampImageBase + "Clothes/Ribonn4.png"
          },
          {
            "name": "Sailorsuit1",
            "url": stampImageBase + "Clothes/Sailorsuit1.png"
          },
          {
            "name": "Sailorsuit2",
            "url": stampImageBase + "Clothes/Sailorsuit2.png"
          },
          {
            "name": "Sailorsuit3",
            "url": stampImageBase + "Clothes/Sailorsuit3.png"
          },
          {
            "name": "Sailorsuit4",
            "url": stampImageBase + "Clothes/Sailorsuit4.png"
          },
          {
            "name": "ShikibuT1",
            "url": stampImageBase + "Clothes/ShikibuT1.png"
          },
          {
            "name": "ShikibuT2",
            "url": stampImageBase + "Clothes/ShikibuT2.png"
          },
          {
            "name": "ShikibuT3",
            "url": stampImageBase + "Clothes/ShikibuT3.png"
          },
          {
            "name": "ShikibuT4",
            "url": stampImageBase + "Clothes/ShikibuT4.png"
          },
          {
            "name": "Tanktop",
            "url": stampImageBase + "Clothes/Tanktop.png"
          },
          {
            "name": "Uniform",
            "url": stampImageBase + "Clothes/Uniform.png"
          },
        ]
      },
      7 : {
        "layer": "07",
        "categoryName": "顔",
        "parts": [
          {"name": "standard", "url": stampImageBase + "Parts01/Face/Standard1.png"},
          {"name": "red", "url": stampImageBase + "Parts01/Face/Red1.png"},
          {"name": "brown", "url": stampImageBase + "Parts01/Face/Brown1.png"},
          {"name": "white", "url": stampImageBase + "Parts01/Face/White1.png"},
          {"name": "standard", "url": stampImageBase + "Parts02/Face/Standard2.png"},
          {"name": "red", "url": stampImageBase + "Parts02/Face/Red2.png"},
          {"name": "brown", "url": stampImageBase + "Parts02/Face/Brown2.png"},
          {"name": "white", "url": stampImageBase + "Parts02/Face/White2.png"},
          {"name": "standard", "url": stampImageBase + "Parts03/Face/Standard3.png"},
          {"name": "red", "url": stampImageBase + "Parts03/Face/Red3.png"},
          {"name": "brown", "url": stampImageBase + "Parts03/Face/Brown3.png"},
          {"name": "white", "url": stampImageBase + "Parts03/Face/White3.png"},
          {"name": "standard", "url": stampImageBase + "Parts04/Face/Standard4.png"},
          {"name": "red", "url": stampImageBase + "Parts04/Face/Red4.png"},
          {"name": "brown", "url": stampImageBase + "Parts04/Face/Brown4.png"},
          {"name": "white", "url": stampImageBase + "Parts04/Face/White4.png"},
          {"name": "standard", "url": stampImageBase + "Parts05/Face/Standard5.png"},
          {"name": "red", "url": stampImageBase + "Parts05/Face/Red5.png"},
          {"name": "brown", "url": stampImageBase + "Parts05/Face/Brown5.png"},
          {"name": "white", "url": stampImageBase + "Parts05/Face/White5.png"},
          {"name": "standard", "url": stampImageBase + "Parts06/Face/Standard6.png"},
          {"name": "red", "url": stampImageBase + "Parts06/Face/Red6.png"},
          {"name": "brown", "url": stampImageBase + "Parts06/Face/Brown6.png"},
          {"name": "white", "url": stampImageBase + "Parts06/Face/White6.png"},
          {"name": "standard", "url": stampImageBase + "Parts07/Face/Standard7.png"},
          {"name": "red", "url": stampImageBase + "Parts07/Face/Red7.png"},
          {"name": "brown", "url": stampImageBase + "Parts07/Face/Brown7.png"},
          {"name": "white", "url": stampImageBase + "Parts07/Face/White7.png"},
          {"name": "standard", "url": stampImageBase + "Parts08/Face/Standard8.png"},
          {"name": "red", "url": stampImageBase + "Parts08/Face/Red8.png"},
          {"name": "brown", "url": stampImageBase + "Parts08/Face/Brown8.png"},
          {"name": "white", "url": stampImageBase + "Parts08/Face/White8.png"},
          {"name": "standard", "url": stampImageBase + "Parts09/Face/Standard9.png"},
          {"name": "red", "url": stampImageBase + "Parts09/Face/Red9.png"},
          {"name": "brown", "url": stampImageBase + "Parts09/Face/Brown9.png"},
          {"name": "white", "url": stampImageBase + "Parts09/Face/White9.png"},
          {"name": "standard", "url": stampImageBase + "Parts10/Face/Standard10.png"},
          {"name": "red", "url": stampImageBase + "Parts10/Face/Red10.png"},
          {"name": "brown", "url": stampImageBase + "Parts10/Face/Brown10.png"},
          {"name": "white", "url": stampImageBase + "Parts10/Face/White10.png"},
        ]
      },
      8 : {
        "layer": "08",
        "categoryName": "目",
        "parts": [
          {"name": "スタンダード", "url": stampImageBase + "Parts01/Eyes/Standard1.png"},
          {"name": "ボケ", "url": stampImageBase + "Parts01/Eyes/Boke1.png"},
          {"name": "ギュッ", "url": stampImageBase + "Parts01/Eyes/Gyu1.png"},
          {"name": "眠そう", "url": stampImageBase + "Parts01/Eyes/Nemusou1.png"},
          {"name": "ぱっちり", "url": stampImageBase + "Parts01/Eyes/Pacchiri1.png"},
          {"name": "下まつげ", "url": stampImageBase + "Parts01/Eyes/Shitamatuge1.png"},
          {"name": "つぶる", "url": stampImageBase + "Parts01/Eyes/Tuburu1.png"},
          {"name": "上向き", "url": stampImageBase + "Parts01/Eyes/Uemuki1.png"},
          {"name": "ウィンク", "url": stampImageBase + "Parts01/Eyes/Uink1.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts02/Eyes/Standard2.png"},
          {"name": "ボケ", "url": stampImageBase + "Parts02/Eyes/Boke2.png"},
          {"name": "ギュッ", "url": stampImageBase + "Parts02/Eyes/Gyu2.png"},
          {"name": "眠そう", "url": stampImageBase + "Parts02/Eyes/Nemusou2.png"},
          {"name": "ぱっちり", "url": stampImageBase + "Parts02/Eyes/Pacchiri2.png"},
          {"name": "下まつげ", "url": stampImageBase + "Parts02/Eyes/Shitamatuge2.png"},
          {"name": "つぶる", "url": stampImageBase + "Parts02/Eyes/Tuburu2.png"},
          {"name": "上向き", "url": stampImageBase + "Parts02/Eyes/Uemuki2.png"},
          {"name": "ウィンク", "url": stampImageBase + "Parts02/Eyes/Uink2.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts03/Eyes/Standard3.png"},
          {"name": "ボケ", "url": stampImageBase + "Parts03/Eyes/Boke3.png"},
          {"name": "ギュッ", "url": stampImageBase + "Parts03/Eyes/Gyu3.png"},
          {"name": "眠そう", "url": stampImageBase + "Parts03/Eyes/Nemusou3.png"},
          {"name": "ぱっちり", "url": stampImageBase + "Parts03/Eyes/Pacchiri3.png"},
          {"name": "下まつげ", "url": stampImageBase + "Parts03/Eyes/Shitamatuge3.png"},
          {"name": "つぶる", "url": stampImageBase + "Parts03/Eyes/Tuburu3.png"},
          {"name": "上向き", "url": stampImageBase + "Parts03/Eyes/Uemuki3.png"},
          {"name": "ウィンク", "url": stampImageBase + "Parts03/Eyes/Uink3.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts04/Eyes/Standard4.png"},
          {"name": "ボケ", "url": stampImageBase + "Parts04/Eyes/Boke4.png"},
          {"name": "ギュッ", "url": stampImageBase + "Parts04/Eyes/Gyu4.png"},
          {"name": "眠そう", "url": stampImageBase + "Parts04/Eyes/Nemusou4.png"},
          {"name": "ぱっちり", "url": stampImageBase + "Parts04/Eyes/Pacchiri4.png"},
          {"name": "下まつげ", "url": stampImageBase + "Parts04/Eyes/Shitamatuge4.png"},
          {"name": "つぶる", "url": stampImageBase + "Parts04/Eyes/Tuburu4.png"},
          {"name": "上向き", "url": stampImageBase + "Parts04/Eyes/Uemuki4.png"},
          {"name": "ウィンク", "url": stampImageBase + "Parts04/Eyes/Uink4.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts05/Eyes/Standard5.png"},
          {"name": "ボケ", "url": stampImageBase + "Parts05/Eyes/Boke5.png"},
          {"name": "ギュッ", "url": stampImageBase + "Parts05/Eyes/Gyu5.png"},
          {"name": "眠そう", "url": stampImageBase + "Parts05/Eyes/Nemusou5.png"},
          {"name": "ぱっちり", "url": stampImageBase + "Parts05/Eyes/Pacchiri5.png"},
          {"name": "下まつげ", "url": stampImageBase + "Parts05/Eyes/Shitamatuge5.png"},
          {"name": "つぶる", "url": stampImageBase + "Parts05/Eyes/Tuburu5.png"},
          {"name": "上向き", "url": stampImageBase + "Parts05/Eyes/Uemuki5.png"},
          {"name": "ウィンク", "url": stampImageBase + "Parts05/Eyes/Uink5.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts06/Eyes/Standard6.png"},
          {"name": "ボケ", "url": stampImageBase + "Parts06/Eyes/Boke6.png"},
          {"name": "ギュッ", "url": stampImageBase + "Parts06/Eyes/Gyu6.png"},
          {"name": "眠そう", "url": stampImageBase + "Parts06/Eyes/Nemusou6.png"},
          {"name": "ぱっちり", "url": stampImageBase + "Parts06/Eyes/Pacchiri6.png"},
          {"name": "下まつげ", "url": stampImageBase + "Parts06/Eyes/Shitamatuge6.png"},
          {"name": "つぶる", "url": stampImageBase + "Parts06/Eyes/Tuburu6.png"},
          {"name": "上向き", "url": stampImageBase + "Parts06/Eyes/Uemuki6.png"},
          {"name": "ウィンク", "url": stampImageBase + "Parts06/Eyes/Uink6.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts07/Eyes/Standard7.png"},
          {"name": "ボケ", "url": stampImageBase + "Parts07/Eyes/Boke7.png"},
          {"name": "ギュッ", "url": stampImageBase + "Parts07/Eyes/Gyu7.png"},
          {"name": "眠そう", "url": stampImageBase + "Parts07/Eyes/Nemusou7.png"},
          {"name": "ぱっちり", "url": stampImageBase + "Parts07/Eyes/Pacchiri7.png"},
          {"name": "下まつげ", "url": stampImageBase + "Parts07/Eyes/Shitamatuge7.png"},
          {"name": "つぶる", "url": stampImageBase + "Parts07/Eyes/Tuburu7.png"},
          {"name": "上向き", "url": stampImageBase + "Parts07/Eyes/Uemuki7.png"},
          {"name": "ウィンク", "url": stampImageBase + "Parts07/Eyes/Uink7.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts08/Eyes/Standard8.png"},
          {"name": "ボケ", "url": stampImageBase + "Parts08/Eyes/Boke8.png"},
          {"name": "ギュッ", "url": stampImageBase + "Parts08/Eyes/Gyu8.png"},
          {"name": "眠そう", "url": stampImageBase + "Parts08/Eyes/Nemusou8.png"},
          {"name": "ぱっちり", "url": stampImageBase + "Parts08/Eyes/Pacchiri8.png"},
          {"name": "下まつげ", "url": stampImageBase + "Parts08/Eyes/Shitamatuge8.png"},
          {"name": "つぶる", "url": stampImageBase + "Parts08/Eyes/Tuburu8.png"},
          {"name": "上向き", "url": stampImageBase + "Parts08/Eyes/Uemuki8.png"},
          {"name": "ウィンク", "url": stampImageBase + "Parts08/Eyes/Uink8.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts09/Eyes/Standard9.png"},
          {"name": "ボケ", "url": stampImageBase + "Parts09/Eyes/Boke9.png"},
          {"name": "ギュッ", "url": stampImageBase + "Parts09/Eyes/Gyu9.png"},
          {"name": "眠そう", "url": stampImageBase + "Parts09/Eyes/Nemusou9.png"},
          {"name": "ぱっちり", "url": stampImageBase + "Parts09/Eyes/Pacchiri9.png"},
          {"name": "下まつげ", "url": stampImageBase + "Parts09/Eyes/Shitamatuge9.png"},
          {"name": "つぶる", "url": stampImageBase + "Parts09/Eyes/Tuburu9.png"},
          {"name": "上向き", "url": stampImageBase + "Parts09/Eyes/Uemuki9.png"},
          {"name": "ウィンク", "url": stampImageBase + "Parts09/Eyes/Uink9.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts10/Eyes/Standard10.png"},
          {"name": "ボケ", "url": stampImageBase + "Parts10/Eyes/Boke10.png"},
          {"name": "ギュッ", "url": stampImageBase + "Parts10/Eyes/Gyu10.png"},
          {"name": "眠そう", "url": stampImageBase + "Parts10/Eyes/Nemusou10.png"},
          {"name": "ぱっちり", "url": stampImageBase + "Parts10/Eyes/Pacchiri10.png"},
          {"name": "下まつげ", "url": stampImageBase + "Parts10/Eyes/Shitamatuge10.png"},
          {"name": "つぶる", "url": stampImageBase + "Parts10/Eyes/Tuburu10.png"},
          {"name": "上向き", "url": stampImageBase + "Parts10/Eyes/Uemuki10.png"},
          {"name": "ウィンク", "url": stampImageBase + "Parts10/Eyes/Uink10.png"},
        ]
      },
      9 : {
        "layer": "09",
        "categoryName": "鼻",
        "parts": [
          {"name": "スタンダード", "url": stampImageBase + "Parts01/Nose/Standard1.png"},
          {"name": "なし", "url": noneUrl},
          {"name": "絆創膏", "url": stampImageBase + "Parts01/Nose/Bannsoukou1.png"},
          {"name": "動物鼻", "url": stampImageBase + "Parts01/Nose/Doubutuhana1.png"},
          {"name": "鼻ピアス", "url": stampImageBase + "Parts01/Nose/Hanapiasu1.png"},
          {"name": "ピエロ", "url": stampImageBase + "Parts01/Nose/Piero1.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts02/Nose/Standard2.png"},
          {"name": "絆創膏", "url": stampImageBase + "Parts02/Nose/Bannsoukou2.png"},
          {"name": "動物鼻", "url": stampImageBase + "Parts02/Nose/Doubutuhana2.png"},
          {"name": "鼻ピアス", "url": stampImageBase + "Parts02/Nose/Hanapiasu2.png"},
          {"name": "ピエロ", "url": stampImageBase + "Parts02/Nose/Piero2.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts03/Nose/Standard3.png"},
          {"name": "絆創膏", "url": stampImageBase + "Parts03/Nose/Bannsoukou3.png"},
          {"name": "動物鼻", "url": stampImageBase + "Parts03/Nose/Doubutuhana3.png"},
          {"name": "鼻ピアス", "url": stampImageBase + "Parts03/Nose/Hanapiasu3.png"},
          {"name": "ピエロ", "url": stampImageBase + "Parts03/Nose/Piero3.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts04/Nose/Standard4.png"},
          {"name": "絆創膏", "url": stampImageBase + "Parts04/Nose/Bannsoukou4.png"},
          {"name": "動物鼻", "url": stampImageBase + "Parts04/Nose/Doubutuhana4.png"},
          {"name": "鼻ピアス", "url": stampImageBase + "Parts04/Nose/Hanapiasu4.png"},
          {"name": "ピエロ", "url": stampImageBase + "Parts04/Nose/Piero4.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts05/Nose/Standard5.png"},
          {"name": "絆創膏", "url": stampImageBase + "Parts05/Nose/Bannsoukou5.png"},
          {"name": "動物鼻", "url": stampImageBase + "Parts05/Nose/Doubutuhana5.png"},
          {"name": "鼻ピアス", "url": stampImageBase + "Parts05/Nose/Hanapiasu5.png"},
          {"name": "ピエロ", "url": stampImageBase + "Parts05/Nose/Piero5.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts06/Nose/Standard6.png"},
          {"name": "絆創膏", "url": stampImageBase + "Parts06/Nose/Bannsoukou6.png"},
          {"name": "動物鼻", "url": stampImageBase + "Parts06/Nose/Doubutuhana6.png"},
          {"name": "鼻ピアス", "url": stampImageBase + "Parts06/Nose/Hanapiasu6.png"},
          {"name": "ピエロ", "url": stampImageBase + "Parts06/Nose/Piero6.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts07/Nose/Standard7.png"},
          {"name": "絆創膏", "url": stampImageBase + "Parts07/Nose/Bannsoukou7.png"},
          {"name": "動物鼻", "url": stampImageBase + "Parts07/Nose/Doubutuhana7.png"},
          {"name": "鼻ピアス", "url": stampImageBase + "Parts07/Nose/Hanapiasu7.png"},
          {"name": "ピエロ", "url": stampImageBase + "Parts07/Nose/Piero7.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts08/Nose/Standard8.png"},
          {"name": "絆創膏", "url": stampImageBase + "Parts08/Nose/Bannsoukou8.png"},
          {"name": "動物鼻", "url": stampImageBase + "Parts08/Nose/Doubutuhana8.png"},
          {"name": "鼻ピアス", "url": stampImageBase + "Parts08/Nose/Hanapiasu8.png"},
          {"name": "ピエロ", "url": stampImageBase + "Parts08/Nose/Piero8.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts09/Nose/Standard9.png"},
          {"name": "絆創膏", "url": stampImageBase + "Parts09/Nose/Bannsoukou9.png"},
          {"name": "動物鼻", "url": stampImageBase + "Parts09/Nose/Doubutuhana9.png"},
          {"name": "鼻ピアス", "url": stampImageBase + "Parts09/Nose/Hanapiasu9.png"},
          {"name": "ピエロ", "url": stampImageBase + "Parts09/Nose/Piero9.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts10/Nose/Standard10.png"},
          {"name": "絆創膏", "url": stampImageBase + "Parts10/Nose/Bannsoukou10.png"},
          {"name": "動物鼻", "url": stampImageBase + "Parts10/Nose/Doubutuhana10.png"},
          {"name": "鼻ピアス", "url": stampImageBase + "Parts10/Nose/Hanapiasu10.png"},
          {"name": "ピエロ", "url": stampImageBase + "Parts10/Nose/Piero10.png"},
        ]
      },
      10 : {
        "layer": "10",
        "categoryName": "口",
        "parts": [
          {"name": "スタンダード", "url": stampImageBase + "Parts01/Mouth/Standard1.png"},
          {"name": "なし", "url": noneUrl},
          {"name": "口唇", "url": stampImageBase + "Parts01/Mouth/Kuchibiru1.png"},
          {"name": "前歯", "url": stampImageBase + "Parts01/Mouth/Maeba1.png"},
          {"name": "ニヒッ", "url": stampImageBase + "Parts01/Mouth/Nihi1.png"},
          {"name": "ニィー", "url": stampImageBase + "Parts01/Mouth/Nii1.png"},
          {"name": "ニッコリ", "url": stampImageBase + "Parts01/Mouth/Nikkori1.png"},
          {"name": "おちょぼ口", "url": stampImageBase + "Parts01/Mouth/Ochoboguchi1.png"},
          {"name": "ぷっくり", "url": stampImageBase + "Parts01/Mouth/Pukkuri1.png"},
          {"name": "テヘペロ", "url": stampImageBase + "Parts01/Mouth/Tehepero1.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts02/Mouth/Standard2.png"},
          {"name": "口唇", "url": stampImageBase + "Parts02/Mouth/Kuchibiru2.png"},
          {"name": "前歯", "url": stampImageBase + "Parts02/Mouth/Maeba2.png"},
          {"name": "ニヒッ", "url": stampImageBase + "Parts02/Mouth/Nihi2.png"},
          {"name": "ニィー", "url": stampImageBase + "Parts02/Mouth/Nii2.png"},
          {"name": "ニッコリ", "url": stampImageBase + "Parts02/Mouth/Nikkori2.png"},
          {"name": "おちょぼ口", "url": stampImageBase + "Parts02/Mouth/Ochoboguchi2.png"},
          {"name": "ぷっくり", "url": stampImageBase + "Parts02/Mouth/Pukkuri2.png"},
          {"name": "テヘペロ", "url": stampImageBase + "Parts02/Mouth/Tehepero2.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts03/Mouth/Standard3.png"},
          {"name": "口唇", "url": stampImageBase + "Parts03/Mouth/Kuchibiru3.png"},
          {"name": "前歯", "url": stampImageBase + "Parts03/Mouth/Maeba3.png"},
          {"name": "ニヒッ", "url": stampImageBase + "Parts03/Mouth/Nihi3.png"},
          {"name": "ニィー", "url": stampImageBase + "Parts03/Mouth/Nii3.png"},
          {"name": "ニッコリ", "url": stampImageBase + "Parts03/Mouth/Nikkori3.png"},
          {"name": "おちょぼ口", "url": stampImageBase + "Parts03/Mouth/Ochoboguchi3.png"},
          {"name": "ぷっくり", "url": stampImageBase + "Parts03/Mouth/Pukkuri3.png"},
          {"name": "テヘペロ", "url": stampImageBase + "Parts03/Mouth/Tehepero3.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts04/Mouth/Standard4.png"},
          {"name": "口唇", "url": stampImageBase + "Parts04/Mouth/Kuchibiru4.png"},
          {"name": "前歯", "url": stampImageBase + "Parts04/Mouth/Maeba4.png"},
          {"name": "ニヒッ", "url": stampImageBase + "Parts04/Mouth/Nihi4.png"},
          {"name": "ニィー", "url": stampImageBase + "Parts04/Mouth/Nii4.png"},
          {"name": "ニッコリ", "url": stampImageBase + "Parts04/Mouth/Nikkori4.png"},
          {"name": "おちょぼ口", "url": stampImageBase + "Parts04/Mouth/Ochoboguchi4.png"},
          {"name": "ぷっくり", "url": stampImageBase + "Parts04/Mouth/Pukkuri4.png"},
          {"name": "テヘペロ", "url": stampImageBase + "Parts04/Mouth/Tehepero4.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts05/Mouth/Standard5.png"},
          {"name": "口唇", "url": stampImageBase + "Parts05/Mouth/Kuchibiru5.png"},
          {"name": "前歯", "url": stampImageBase + "Parts05/Mouth/Maeba5.png"},
          {"name": "ニヒッ", "url": stampImageBase + "Parts05/Mouth/Nihi5.png"},
          {"name": "ニィー", "url": stampImageBase + "Parts05/Mouth/Nii5.png"},
          {"name": "ニッコリ", "url": stampImageBase + "Parts05/Mouth/Nikkori5.png"},
          {"name": "おちょぼ口", "url": stampImageBase + "Parts05/Mouth/Ochoboguchi5.png"},
          {"name": "ぷっくり", "url": stampImageBase + "Parts05/Mouth/Pukkuri5.png"},
          {"name": "テヘペロ", "url": stampImageBase + "Parts05/Mouth/Tehepero5.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts06/Mouth/Standard6.png"},
          {"name": "口唇", "url": stampImageBase + "Parts06/Mouth/Kuchibiru6.png"},
          {"name": "前歯", "url": stampImageBase + "Parts06/Mouth/Maeba6.png"},
          {"name": "ニヒッ", "url": stampImageBase + "Parts06/Mouth/Nihi6.png"},
          {"name": "ニィー", "url": stampImageBase + "Parts06/Mouth/Nii6.png"},
          {"name": "ニッコリ", "url": stampImageBase + "Parts06/Mouth/Nikkori6.png"},
          {"name": "おちょぼ口", "url": stampImageBase + "Parts06/Mouth/Ochoboguchi6.png"},
          {"name": "ぷっくり", "url": stampImageBase + "Parts06/Mouth/Pukkuri6.png"},
          {"name": "テヘペロ", "url": stampImageBase + "Parts06/Mouth/Tehepero6.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts07/Mouth/Standard7.png"},
          {"name": "口唇", "url": stampImageBase + "Parts07/Mouth/Kuchibiru7.png"},
          {"name": "前歯", "url": stampImageBase + "Parts07/Mouth/Maeba7.png"},
          {"name": "ニヒッ", "url": stampImageBase + "Parts07/Mouth/Nihi7.png"},
          {"name": "ニィー", "url": stampImageBase + "Parts07/Mouth/Nii7.png"},
          {"name": "ニッコリ", "url": stampImageBase + "Parts07/Mouth/Nikkori7.png"},
          {"name": "おちょぼ口", "url": stampImageBase + "Parts07/Mouth/Ochoboguchi7.png"},
          {"name": "ぷっくり", "url": stampImageBase + "Parts07/Mouth/Pukkuri7.png"},
          {"name": "テヘペロ", "url": stampImageBase + "Parts07/Mouth/Tehepero7.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts08/Mouth/Standard8.png"},
          {"name": "口唇", "url": stampImageBase + "Parts08/Mouth/Kuchibiru8.png"},
          {"name": "前歯", "url": stampImageBase + "Parts08/Mouth/Maeba8.png"},
          {"name": "ニヒッ", "url": stampImageBase + "Parts08/Mouth/Nihi8.png"},
          {"name": "ニィー", "url": stampImageBase + "Parts08/Mouth/Nii8.png"},
          {"name": "ニッコリ", "url": stampImageBase + "Parts08/Mouth/Nikkori8.png"},
          {"name": "おちょぼ口", "url": stampImageBase + "Parts08/Mouth/Ochoboguchi8.png"},
          {"name": "ぷっくり", "url": stampImageBase + "Parts08/Mouth/Pukkuri8.png"},
          {"name": "テヘペロ", "url": stampImageBase + "Parts08/Mouth/Tehepero8.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts09/Mouth/Standard9.png"},
          {"name": "口唇", "url": stampImageBase + "Parts09/Mouth/Kuchibiru9.png"},
          {"name": "前歯", "url": stampImageBase + "Parts09/Mouth/Maeba9.png"},
          {"name": "ニヒッ", "url": stampImageBase + "Parts09/Mouth/Nihi9.png"},
          {"name": "ニィー", "url": stampImageBase + "Parts09/Mouth/Nii9.png"},
          {"name": "ニッコリ", "url": stampImageBase + "Parts09/Mouth/Nikkori9.png"},
          {"name": "おちょぼ口", "url": stampImageBase + "Parts09/Mouth/Ochoboguchi9.png"},
          {"name": "ぷっくり", "url": stampImageBase + "Parts09/Mouth/Pukkuri9.png"},
          {"name": "テヘペロ", "url": stampImageBase + "Parts09/Mouth/Tehepero9.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts10/Mouth/Standard10.png"},
          {"name": "口唇", "url": stampImageBase + "Parts10/Mouth/Kuchibiru10.png"},
          {"name": "前歯", "url": stampImageBase + "Parts10/Mouth/Maeba10.png"},
          {"name": "ニヒッ", "url": stampImageBase + "Parts10/Mouth/Nihi10.png"},
          {"name": "ニィー", "url": stampImageBase + "Parts10/Mouth/Nii10.png"},
          {"name": "ニッコリ", "url": stampImageBase + "Parts10/Mouth/Nikkori10.png"},
          {"name": "おちょぼ口", "url": stampImageBase + "Parts10/Mouth/Ochoboguchi10.png"},
          {"name": "ぷっくり", "url": stampImageBase + "Parts10/Mouth/Pukkuri10.png"},
          {"name": "テヘペロ", "url": stampImageBase + "Parts10/Mouth/Tehepero10.png"},
        ]
      },
      11 : {
        "layer": "11",
        "categoryName": "眉毛",
        "parts": [
          {"name": "スタンダード", "url": stampImageBase + "Parts01/Eyebrows/Standard1.png"},
          {"name": "なし", "url": noneUrl},
          {"name": "困り眉", "url": stampImageBase + "Parts01/Eyebrows/Komarimayu1.png"},
          {"name": "怒り眉", "url": stampImageBase + "Parts01/Eyebrows/Okorimayu1.png"},
          {"name": "繋がり眉", "url": stampImageBase + "Parts01/Eyebrows/Tunagarimayu1.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts02/Eyebrows/Standard2.png"},
          {"name": "困り眉", "url": stampImageBase + "Parts02/Eyebrows/Komarimayu2.png"},
          {"name": "怒り眉", "url": stampImageBase + "Parts02/Eyebrows/Okorimayu2.png"},
          {"name": "繋がり眉", "url": stampImageBase + "Parts02/Eyebrows/Tunagarimayu2.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts03/Eyebrows/Standard3.png"},
          {"name": "困り眉", "url": stampImageBase + "Parts03/Eyebrows/Komarimayu3.png"},
          {"name": "怒り眉", "url": stampImageBase + "Parts03/Eyebrows/Okorimayu3.png"},
          {"name": "繋がり眉", "url": stampImageBase + "Parts03/Eyebrows/Tunagarimayu3.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts04/Eyebrows/Standard4.png"},
          {"name": "困り眉", "url": stampImageBase + "Parts04/Eyebrows/Komarimayu4.png"},
          {"name": "怒り眉", "url": stampImageBase + "Parts04/Eyebrows/Okorimayu4.png"},
          {"name": "繋がり眉", "url": stampImageBase + "Parts04/Eyebrows/Tunagarimayu4.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts05/Eyebrows/Standard5.png"},
          {"name": "困り眉", "url": stampImageBase + "Parts05/Eyebrows/Komarimayu5.png"},
          {"name": "怒り眉", "url": stampImageBase + "Parts05/Eyebrows/Okorimayu5.png"},
          {"name": "繋がり眉", "url": stampImageBase + "Parts05/Eyebrows/Tunagarimayu5.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts06/Eyebrows/Standard6.png"},
          {"name": "困り眉", "url": stampImageBase + "Parts06/Eyebrows/Komarimayu6.png"},
          {"name": "怒り眉", "url": stampImageBase + "Parts06/Eyebrows/Okorimayu6.png"},
          {"name": "繋がり眉", "url": stampImageBase + "Parts06/Eyebrows/Tunagarimayu6.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts07/Eyebrows/Standard7.png"},
          {"name": "困り眉", "url": stampImageBase + "Parts07/Eyebrows/Komarimayu7.png"},
          {"name": "怒り眉", "url": stampImageBase + "Parts07/Eyebrows/Okorimayu7.png"},
          {"name": "繋がり眉", "url": stampImageBase + "Parts07/Eyebrows/Tunagarimayu7.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts08/Eyebrows/Standard8.png"},
          {"name": "困り眉", "url": stampImageBase + "Parts08/Eyebrows/Komarimayu8.png"},
          {"name": "怒り眉", "url": stampImageBase + "Parts08/Eyebrows/Okorimayu8.png"},
          {"name": "繋がり眉", "url": stampImageBase + "Parts08/Eyebrows/Tunagarimayu8.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts09/Eyebrows/Standard9.png"},
          {"name": "困り眉", "url": stampImageBase + "Parts09/Eyebrows/Komarimayu9.png"},
          {"name": "怒り眉", "url": stampImageBase + "Parts09/Eyebrows/Okorimayu9.png"},
          {"name": "繋がり眉", "url": stampImageBase + "Parts09/Eyebrows/Tunagarimayu9.png"},
          {"name": "スタンダード", "url": stampImageBase + "Parts10/Eyebrows/Standard10.png"},
          {"name": "困り眉", "url": stampImageBase + "Parts10/Eyebrows/Komarimayu10.png"},
          {"name": "怒り眉", "url": stampImageBase + "Parts10/Eyebrows/Okorimayu10.png"},
          {"name": "繋がり眉", "url": stampImageBase + "Parts10/Eyebrows/Tunagarimayu10.png"},
        ]
      },
      12 : {
        "layer": "12",
        "categoryName": "ほっぺ",
        "parts": [
          {"name": "なし", "url": noneUrl},
          {"name": "カワイイ", "url": stampImageBase + "Parts01/Curse/Kawaii1.png"},
          {"name": "泣きぼくろ", "url": stampImageBase + "Parts01/Curse/Nakibokuro1.png"},
          {"name": "カワイイ", "url": stampImageBase + "Parts02/Curse/Kawaii2.png"},
          {"name": "泣きぼくろ", "url": stampImageBase + "Parts02/Curse/Nakibokuro2.png"},
          {"name": "カワイイ", "url": stampImageBase + "Parts03/Curse/Kawaii3.png"},
          {"name": "泣きぼくろ", "url": stampImageBase + "Parts03/Curse/Nakibokuro3.png"},
          {"name": "カワイイ", "url": stampImageBase + "Parts04/Curse/Kawaii4.png"},
          {"name": "泣きぼくろ", "url": stampImageBase + "Parts04/Curse/Nakibokuro4.png"},
          {"name": "カワイイ", "url": stampImageBase + "Parts05/Curse/Kawaii5.png"},
          {"name": "泣きぼくろ", "url": stampImageBase + "Parts05/Curse/Nakibokuro5.png"},
          {"name": "カワイイ", "url": stampImageBase + "Parts06/Curse/Kawaii6.png"},
          {"name": "泣きぼくろ", "url": stampImageBase + "Parts06/Curse/Nakibokuro6.png"},
          {"name": "カワイイ", "url": stampImageBase + "Parts07/Curse/Kawaii7.png"},
          {"name": "泣きぼくろ", "url": stampImageBase + "Parts07/Curse/Nakibokuro7.png"},
          {"name": "カワイイ", "url": stampImageBase + "Parts08/Curse/Kawaii8.png"},
          {"name": "泣きぼくろ", "url": stampImageBase + "Parts08/Curse/Nakibokuro8.png"},
          {"name": "カワイイ", "url": stampImageBase + "Parts09/Curse/Kawaii9.png"},
          {"name": "泣きぼくろ", "url": stampImageBase + "Parts09/Curse/Nakibokuro9.png"},
          {"name": "カワイイ", "url": stampImageBase + "Parts10/Curse/Kawaii10.png"},
          {"name": "泣きぼくろ", "url": stampImageBase + "Parts10/Curse/Nakibokuro10.png"},
        ]
      },
      13 : {
        "layer": "13",
        "categoryName": "髪",
        "parts": [
          {"name": "アフロ", "url": stampImageBase + "Parts01/Hair/Afuro1.png"},
          {"name": "なし", "url": noneUrl},
          {"name": "ちょんまげ", "url": stampImageBase + "Parts01/Hair/Chonmage1.png"},
          {"name": "フランク", "url": stampImageBase + "Parts01/Hair/Furannkuhiar1.png"},
          {"name": "イケてる風", "url": stampImageBase + "Parts01/Hair/Iketerufuu1.png"},
          {"name": "カジュアル", "url": stampImageBase + "Parts01/Hair/Kajuaru1.png"},
          {"name": "キューピー", "url": stampImageBase + "Parts01/Hair/Kyu-pi-fuu1.png"},
          {"name": "お団子", "url": stampImageBase + "Parts01/Hair/Odangohair1.png"},
          {"name": "おかっぱ", "url": stampImageBase + "Parts01/Hair/Okappa1.png"},
          {"name": "ぱっつんボブ", "url": stampImageBase + "Parts01/Hair/Pattunnbobu1.png"},
          {"name": "ぴしっと", "url": stampImageBase + "Parts01/Hair/Pishittohair1.png"},
          {"name": "リーゼント", "url": stampImageBase + "Parts01/Hair/Ri-zennto1.png"},
          {"name": "アフロ", "url": stampImageBase + "Parts02/Hair/Afuro2.png"},
          {"name": "ちょんまげ", "url": stampImageBase + "Parts02/Hair/Chonmage2.png"},
          {"name": "フランク", "url": stampImageBase + "Parts02/Hair/Furannkuhiar2.png"},
          {"name": "イケてる風", "url": stampImageBase + "Parts02/Hair/Iketerufuu2.png"},
          {"name": "カジュアル", "url": stampImageBase + "Parts02/Hair/Kajuaru2.png"},
          {"name": "キューピー", "url": stampImageBase + "Parts02/Hair/Kyu-pi-fuu2.png"},
          {"name": "お団子", "url": stampImageBase + "Parts02/Hair/Odangohair2.png"},
          {"name": "おかっぱ", "url": stampImageBase + "Parts02/Hair/Okappa2.png"},
          {"name": "ぱっつんボブ", "url": stampImageBase + "Parts02/Hair/Pattunnbobu2.png"},
          {"name": "ぴしっと", "url": stampImageBase + "Parts02/Hair/Pishittohair2.png"},
          {"name": "リーゼント", "url": stampImageBase + "Parts02/Hair/Ri-zennto2.png"},
          {"name": "アフロ", "url": stampImageBase + "Parts03/Hair/Afuro3.png"},
          {"name": "ちょんまげ", "url": stampImageBase + "Parts03/Hair/Chonmage3.png"},
          {"name": "フランク", "url": stampImageBase + "Parts03/Hair/Furannkuhiar3.png"},
          {"name": "イケてる風", "url": stampImageBase + "Parts03/Hair/Iketerufuu3.png"},
          {"name": "カジュアル", "url": stampImageBase + "Parts03/Hair/Kajuaru3.png"},
          {"name": "キューピー", "url": stampImageBase + "Parts03/Hair/Kyu-pi-fuu3.png"},
          {"name": "お団子", "url": stampImageBase + "Parts03/Hair/Odangohair3.png"},
          {"name": "おかっぱ", "url": stampImageBase + "Parts03/Hair/Okappa3.png"},
          {"name": "ぱっつんボブ", "url": stampImageBase + "Parts03/Hair/Pattunnbobu3.png"},
          {"name": "ぴしっと", "url": stampImageBase + "Parts03/Hair/Pishittohair3.png"},
          {"name": "リーゼント", "url": stampImageBase + "Parts03/Hair/Ri-zennto3.png"},
          {"name": "アフロ", "url": stampImageBase + "Parts04/Hair/Afuro4.png"},
          {"name": "ちょんまげ", "url": stampImageBase + "Parts04/Hair/Chonmage4.png"},
          {"name": "フランク", "url": stampImageBase + "Parts04/Hair/Furannkuhiar4.png"},
          {"name": "イケてる風", "url": stampImageBase + "Parts04/Hair/Iketerufuu4.png"},
          {"name": "カジュアル", "url": stampImageBase + "Parts04/Hair/Kajuaru4.png"},
          {"name": "キューピー", "url": stampImageBase + "Parts04/Hair/Kyu-pi-fuu4.png"},
          {"name": "お団子", "url": stampImageBase + "Parts04/Hair/Odangohair4.png"},
          {"name": "おかっぱ", "url": stampImageBase + "Parts04/Hair/Okappa4.png"},
          {"name": "ぱっつんボブ", "url": stampImageBase + "Parts04/Hair/Pattunnbobu4.png"},
          {"name": "ぴしっと", "url": stampImageBase + "Parts04/Hair/Pishittohair4.png"},
          {"name": "リーゼント", "url": stampImageBase + "Parts04/Hair/Ri-zennto4.png"},
          {"name": "アフロ", "url": stampImageBase + "Parts05/Hair/Afuro5.png"},
          {"name": "ちょんまげ", "url": stampImageBase + "Parts05/Hair/Chonmage5.png"},
          {"name": "フランク", "url": stampImageBase + "Parts05/Hair/Furannkuhiar5.png"},
          {"name": "イケてる風", "url": stampImageBase + "Parts05/Hair/Iketerufuu5.png"},
          {"name": "カジュアル", "url": stampImageBase + "Parts05/Hair/Kajuaru5.png"},
          {"name": "キューピー", "url": stampImageBase + "Parts05/Hair/Kyu-pi-fuu5.png"},
          {"name": "お団子", "url": stampImageBase + "Parts05/Hair/Odangohair5.png"},
          {"name": "おかっぱ", "url": stampImageBase + "Parts05/Hair/Okappa5.png"},
          {"name": "ぱっつんボブ", "url": stampImageBase + "Parts05/Hair/Pattunnbobu5.png"},
          {"name": "ぴしっと", "url": stampImageBase + "Parts05/Hair/Pishittohair5.png"},
          {"name": "リーゼント", "url": stampImageBase + "Parts05/Hair/Ri-zennto5.png"},
          {"name": "アフロ", "url": stampImageBase + "Parts06/Hair/Afuro6.png"},
          {"name": "ちょんまげ", "url": stampImageBase + "Parts06/Hair/Chonmage6.png"},
          {"name": "フランク", "url": stampImageBase + "Parts06/Hair/Furannkuhiar6.png"},
          {"name": "イケてる風", "url": stampImageBase + "Parts06/Hair/Iketerufuu6.png"},
          {"name": "カジュアル", "url": stampImageBase + "Parts06/Hair/Kajuaru6.png"},
          {"name": "キューピー", "url": stampImageBase + "Parts06/Hair/Kyu-pi-fuu6.png"},
          {"name": "お団子", "url": stampImageBase + "Parts06/Hair/Odangohair6.png"},
          {"name": "おかっぱ", "url": stampImageBase + "Parts06/Hair/Okappa6.png"},
          {"name": "ぱっつんボブ", "url": stampImageBase + "Parts06/Hair/Pattunnbobu6.png"},
          {"name": "ぴしっと", "url": stampImageBase + "Parts06/Hair/Pishittohair6.png"},
          {"name": "リーゼント", "url": stampImageBase + "Parts06/Hair/Ri-zennto6.png"},
          {"name": "アフロ", "url": stampImageBase + "Parts07/Hair/Afuro7.png"},
          {"name": "ちょんまげ", "url": stampImageBase + "Parts07/Hair/Chonmage7.png"},
          {"name": "フランク", "url": stampImageBase + "Parts07/Hair/Furannkuhiar7.png"},
          {"name": "イケてる風", "url": stampImageBase + "Parts07/Hair/Iketerufuu7.png"},
          {"name": "カジュアル", "url": stampImageBase + "Parts07/Hair/Kajuaru7.png"},
          {"name": "キューピー", "url": stampImageBase + "Parts07/Hair/Kyu-pi-fuu7.png"},
          {"name": "お団子", "url": stampImageBase + "Parts07/Hair/Odangohair7.png"},
          {"name": "おかっぱ", "url": stampImageBase + "Parts07/Hair/Okappa7.png"},
          {"name": "ぱっつんボブ", "url": stampImageBase + "Parts07/Hair/Pattunnbobu7.png"},
          {"name": "ぴしっと", "url": stampImageBase + "Parts07/Hair/Pishittohair7.png"},
          {"name": "リーゼント", "url": stampImageBase + "Parts07/Hair/Ri-zennto7.png"},
          {"name": "アフロ", "url": stampImageBase + "Parts08/Hair/Afuro8.png"},
          {"name": "ちょんまげ", "url": stampImageBase + "Parts08/Hair/Chonmage8.png"},
          {"name": "フランク", "url": stampImageBase + "Parts08/Hair/Furannkuhiar8.png"},
          {"name": "イケてる風", "url": stampImageBase + "Parts08/Hair/Iketerufuu8.png"},
          {"name": "カジュアル", "url": stampImageBase + "Parts08/Hair/Kajuaru8.png"},
          {"name": "キューピー", "url": stampImageBase + "Parts08/Hair/Kyu-pi-fuu8.png"},
          {"name": "お団子", "url": stampImageBase + "Parts08/Hair/Odangohair8.png"},
          {"name": "おかっぱ", "url": stampImageBase + "Parts08/Hair/Okappa8.png"},
          {"name": "ぱっつんボブ", "url": stampImageBase + "Parts08/Hair/Pattunnbobu8.png"},
          {"name": "ぴしっと", "url": stampImageBase + "Parts08/Hair/Pishittohair8.png"},
          {"name": "リーゼント", "url": stampImageBase + "Parts08/Hair/Ri-zennto8.png"},
          {"name": "アフロ", "url": stampImageBase + "Parts09/Hair/Afuro9.png"},
          {"name": "ちょんまげ", "url": stampImageBase + "Parts09/Hair/Chonmage9.png"},
          {"name": "フランク", "url": stampImageBase + "Parts09/Hair/Furannkuhiar9.png"},
          {"name": "イケてる風", "url": stampImageBase + "Parts09/Hair/Iketerufuu9.png"},
          {"name": "カジュアル", "url": stampImageBase + "Parts09/Hair/Kajuaru9.png"},
          {"name": "キューピー", "url": stampImageBase + "Parts09/Hair/Kyu-pi-fuu9.png"},
          {"name": "お団子", "url": stampImageBase + "Parts09/Hair/Odangohair9.png"},
          {"name": "おかっぱ", "url": stampImageBase + "Parts09/Hair/Okappa9.png"},
          {"name": "ぱっつんボブ", "url": stampImageBase + "Parts09/Hair/Pattunnbobu9.png"},
          {"name": "ぴしっと", "url": stampImageBase + "Parts09/Hair/Pishittohair9.png"},
          {"name": "リーゼント", "url": stampImageBase + "Parts09/Hair/Ri-zennto9.png"},
          {"name": "アフロ", "url": stampImageBase + "Parts10/Hair/Afuro10.png"},
          {"name": "ちょんまげ", "url": stampImageBase + "Parts10/Hair/Chonmage10.png"},
          {"name": "フランク", "url": stampImageBase + "Parts10/Hair/Furannkuhiar10.png"},
          {"name": "イケてる風", "url": stampImageBase + "Parts10/Hair/Iketerufuu10.png"},
          {"name": "カジュアル", "url": stampImageBase + "Parts10/Hair/Kajuaru10.png"},
          {"name": "キューピー", "url": stampImageBase + "Parts10/Hair/Kyu-pi-fuu10.png"},
          {"name": "お団子", "url": stampImageBase + "Parts10/Hair/Odangohair10.png"},
          {"name": "おかっぱ", "url": stampImageBase + "Parts10/Hair/Okappa10.png"},
          {"name": "ぱっつんボブ", "url": stampImageBase + "Parts10/Hair/Pattunnbobu10.png"},
          {"name": "ぴしっと", "url": stampImageBase + "Parts10/Hair/Pishittohair10.png"},
          {"name": "リーゼント", "url": stampImageBase + "Parts10/Hair/Ri-zennto10.png"},
        ]
      },
      14 : {
        "layer": "14",
        "categoryName": "メガネ",
        "parts": [
          {"name": "なし", "url": noneUrl},
          {"name": "仮面", "url": stampImageBase + "Parts01/Glasses/Kamen1.png"},
          {"name": "丸メガネ", "url": stampImageBase + "Parts01/Glasses/Marumegane1.png"},
          {"name": "メガネ", "url": stampImageBase + "Parts01/Glasses/Megane1.png"},
          {"name": "サングラス", "url": stampImageBase + "Parts01/Glasses/Sanngurasu1.png"},
          {"name": "仮面", "url": stampImageBase + "Parts02/Glasses/Kamen2.png"},
          {"name": "丸メガネ", "url": stampImageBase + "Parts02/Glasses/Marumegane2.png"},
          {"name": "メガネ", "url": stampImageBase + "Parts02/Glasses/Megane2.png"},
          {"name": "サングラス", "url": stampImageBase + "Parts02/Glasses/Sanngurasu2.png"},
          {"name": "仮面", "url": stampImageBase + "Parts03/Glasses/Kamen3.png"},
          {"name": "丸メガネ", "url": stampImageBase + "Parts03/Glasses/Marumegane3.png"},
          {"name": "メガネ", "url": stampImageBase + "Parts03/Glasses/Megane3.png"},
          {"name": "サングラス", "url": stampImageBase + "Parts03/Glasses/Sanngurasu3.png"},
          {"name": "仮面", "url": stampImageBase + "Parts04/Glasses/Kamen4.png"},
          {"name": "丸メガネ", "url": stampImageBase + "Parts04/Glasses/Marumegane4.png"},
          {"name": "メガネ", "url": stampImageBase + "Parts04/Glasses/Megane4.png"},
          {"name": "サングラス", "url": stampImageBase + "Parts04/Glasses/Sanngurasu4.png"},
          {"name": "仮面", "url": stampImageBase + "Parts05/Glasses/Kamen5.png"},
          {"name": "丸メガネ", "url": stampImageBase + "Parts05/Glasses/Marumegane5.png"},
          {"name": "メガネ", "url": stampImageBase + "Parts05/Glasses/Megane5.png"},
          {"name": "サングラス", "url": stampImageBase + "Parts05/Glasses/Sanngurasu5.png"},
          {"name": "仮面", "url": stampImageBase + "Parts06/Glasses/Kamen6.png"},
          {"name": "丸メガネ", "url": stampImageBase + "Parts06/Glasses/Marumegane6.png"},
          {"name": "メガネ", "url": stampImageBase + "Parts06/Glasses/Megane6.png"},
          {"name": "サングラス", "url": stampImageBase + "Parts06/Glasses/Sanngurasu6.png"},
          {"name": "仮面", "url": stampImageBase + "Parts07/Glasses/Kamen7.png"},
          {"name": "丸メガネ", "url": stampImageBase + "Parts07/Glasses/Marumegane7.png"},
          {"name": "メガネ", "url": stampImageBase + "Parts07/Glasses/Megane7.png"},
          {"name": "サングラス", "url": stampImageBase + "Parts07/Glasses/Sanngurasu7.png"},
          {"name": "仮面", "url": stampImageBase + "Parts08/Glasses/Kamen8.png"},
          {"name": "丸メガネ", "url": stampImageBase + "Parts08/Glasses/Marumegane8.png"},
          {"name": "メガネ", "url": stampImageBase + "Parts08/Glasses/Megane8.png"},
          {"name": "サングラス", "url": stampImageBase + "Parts08/Glasses/Sanngurasu8.png"},
          {"name": "仮面", "url": stampImageBase + "Parts09/Glasses/Kamen9.png"},
          {"name": "丸メガネ", "url": stampImageBase + "Parts09/Glasses/Marumegane9.png"},
          {"name": "メガネ", "url": stampImageBase + "Parts09/Glasses/Megane9.png"},
          {"name": "サングラス", "url": stampImageBase + "Parts09/Glasses/Sanngurasu9.png"},
          {"name": "仮面", "url": stampImageBase + "Parts10/Glasses/Kamen10.png"},
          {"name": "丸メガネ", "url": stampImageBase + "Parts10/Glasses/Marumegane10.png"},
          {"name": "メガネ", "url": stampImageBase + "Parts10/Glasses/Megane10.png"},
          {"name": "サングラス", "url": stampImageBase + "Parts10/Glasses/Sanngurasu10.png"},
        ]
      },
      15 : {
        "layer": "15",
        "categoryName": "左手（上レイヤー）",
        "parts": [
          {
            "name": "Good",
            "url": stampImageBase + "Left hand over/Good.png"
          },
          {
            "name": "Ok",
            "url": stampImageBase + "Left hand over/Ok.png"
          },
          {
            "name": "パー",
            "url": stampImageBase + "Left hand over/%E3%83%91%E3%83%BC.png"
          },
          {
            "name": "顔に手あてる",
            "url": stampImageBase + "Left hand over/%E9%A1%94%E3%81%AB%E6%89%8B%E3%81%82%E3%81%A6%E3%82%8B.png"
          },
        ]
      },
      16 : {
        "layer": "16",
        "categoryName": "右手（上レイヤー）",
        "parts": [
          {
            "name": "Good",
            "url": stampImageBase + "Right hand over/Good.png"
          },
          {
            "name": "Ok",
            "url": stampImageBase + "Right hand over/Ok.png"
          },
          {
            "name": "パー",
            "url": stampImageBase + "Right hand over/%E3%83%91%E3%83%BC.png"
          },
          {
            "name": "顔に手あてる",
            "url": stampImageBase + "Right hand over/%E9%A1%94%E3%81%AB%E6%89%8B%E3%81%82%E3%81%A6%E3%82%8B.png"
          },
        ]
      },
      17 : {
        "layer": "17",
        "categoryName": "ピノキオの鼻",
        "parts": [
          {"name": "なし", "url": noneUrl},
          {"name": "ピノキオ", "url": stampImageBase + "Parts01/Nose/Pinokio1.png"},
          {"name": "ピノキオ", "url": stampImageBase + "Parts02/Nose/Pinokio2.png"},
          {"name": "ピノキオ", "url": stampImageBase + "Parts03/Nose/Pinokio3.png"},
          {"name": "ピノキオ", "url": stampImageBase + "Parts04/Nose/Pinokio4.png"},
          {"name": "ピノキオ", "url": stampImageBase + "Parts05/Nose/Pinokio5.png"},
          {"name": "ピノキオ", "url": stampImageBase + "Parts06/Nose/Pinokio6.png"},
          {"name": "ピノキオ", "url": stampImageBase + "Parts07/Nose/Pinokio7.png"},
          {"name": "ピノキオ", "url": stampImageBase + "Parts08/Nose/Pinokio8.png"},
          {"name": "ピノキオ", "url": stampImageBase + "Parts09/Nose/Pinokio9.png"},
          {"name": "ピノキオ", "url": stampImageBase + "Parts10/Nose/Pinokio10.png"},
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
          // Body
          // setDressUpPic01Url(stampImageBase + "Body/%E4%BD%93.png");
          setDressUpPic01Url(dressUpPartsSetSKB[1].parts[0].url);
          // Clothes
          // setDressUpPic02Url(stampImageBase + "Clothes/%E6%9C%8D.png");
          setDressUpPic02Url(dressUpPartsSetSKB[2].parts[0].url);
          // Left foot
          // setDressUpPic03Url(stampImageBase + "Left+foot/%E5%B7%A6%E8%B6%B3%E7%AB%8B%E3%81%A4.png");
          setDressUpPic03Url(dressUpPartsSetSKB[3].parts[0].url);
          // Right hand
          // setDressUpPic04Url(stampImageBase + "Right+hand/%E5%8F%B3%E3%83%94%E3%83%BC%E3%82%B9.png");
          setDressUpPic04Url(dressUpPartsSetSKB[4].parts[0].url);
          // Left hand
          // setDressUpPic05Url(stampImageBase + "Left+hand/%E5%B7%A6%E3%83%94%E3%83%BC%E3%82%B9.png");
          setDressUpPic05Url(dressUpPartsSetSKB[5].parts[0].url);
          // Right foot
          // setDressUpPic06Url(stampImageBase + "Right+foot/%E5%8F%B3%E8%B6%B3%E7%AB%8B%E3%81%A4.png");
          setDressUpPic06Url(dressUpPartsSetSKB[6].parts[0].url);
          // Face
          // setDressUpPic07Url(stampImageBase + "Face/%E9%A1%94.png");
          setDressUpPic07Url(dressUpPartsSetSKB[7].parts[0].url);
          // Curse
          // setDressUpPic08Url(stampImageBase + "Curse/%E3%81%BB%E3%81%A3%E3%81%BA.png");
          setDressUpPic08Url(dressUpPartsSetSKB[8].parts[0].url);
          // Eyes
          // setDressUpPic09Url(stampImageBase + "Eyes/%E7%9B%AE.png");
          setDressUpPic09Url(dressUpPartsSetSKB[9].parts[0].url);
          // Eyebrows
          // setDressUpPic10Url(stampImageBase + "Eyebrows/%E3%81%A4%E3%81%AA%E3%81%8C%E3%82%8A%E3%81%BE%E3%82%86.png");
          setDressUpPic10Url(dressUpPartsSetSKB[10].parts[0].url);
          // Mouth
          // setDressUpPic11Url(stampImageBase + "Mouth/%E7%AC%91%E3%81%86%E3%83%AD.png");
          setDressUpPic11Url(dressUpPartsSetSKB[11].parts[0].url);
          // Nose
          // setDressUpPic12Url(stampImageBase + "Nose/%E9%BC%BB.png");
          setDressUpPic12Url(dressUpPartsSetSKB[12].parts[0].url);
          // Hair
          // setDressUpPic13Url(stampImageBase + "Hair/%E9%A0%AD%E3%83%94%E3%83%B3%E3%82%AF.png");
          setDressUpPic13Url(dressUpPartsSetSKB[13].parts[0].url);
          // 左手（上レイヤー）
          setDressUpPic15Url(dressUpPartsSetSKB[15].parts[0].url);
          // 右手（上レイヤー）
          setDressUpPic16Url(dressUpPartsSetSKB[16].parts[0].url);

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
      const nowDressUpPicAccessoryUrl = nowDressUpPicDataArray[2];

      if (nowDressUpPicAccessoryLayer === "01") {
        setDressUpPic01Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "02") {
        setDressUpPic02Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "03") {
        setDressUpPic03Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "04") {
        setDressUpPic04Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "05") {
        setDressUpPic05Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "06") {
        setDressUpPic06Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "07") {
        setDressUpPic07Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "08") {
        setDressUpPic08Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "09") {
        setDressUpPic09Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "10") {
        setDressUpPic10Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "11") {
        setDressUpPic11Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "12") {
        setDressUpPic12Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "13") {
        setDressUpPic13Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "14") {
        setDressUpPic14Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "15") {
        setDressUpPic15Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "16") {
        setDressUpPic16Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "17") {
        setDressUpPic17Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "18") {
        setDressUpPic18Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "19") {
        setDressUpPic19Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "20") {
        setDressUpPic20Url(nowDressUpPicAccessoryUrl);
      } else if(nowDressUpPicAccessoryLayer === "21") {
        setDressUpPic21Url(nowDressUpPicAccessoryUrl);
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
        const nowCategoryParts = nowPartsCategory.parts;

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
            <button onClick={onClickExport}>↓ Download (PC only)</button>
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
                    {createPartsArea()}
                  </dl>
                </>
              }

            </div>
          </div>
        </div>
      </>

    );
  }
