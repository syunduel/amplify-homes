import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useEthNFT, useEthNFTs } from '../api/evmnft';
import { ButtonGroup } from '@aws-amplify/ui-react';
import html2canvas from "html2canvas";
import {serverData} from '../data/serverData';
import {collectionData} from '../data/collectionData';


export default function Stamp() {

  console.log("Stamp start");

  const LAYER_MAX = 16;

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


    const stampImageBase = serverData.serverStampRoot + selectedChain + "/" + symbol + "_" + selectedNftAddress + "/parts_v3/";


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
            "name": "brown",
            "url": stampImageBase + "Body/57F37D56-BBDD-4716-9735D32A2A00F378.png"
          },
          {
            "name": "standard",
            "url": stampImageBase + "Body/A12EA0FECAF0-46D5-8DDC-0510B3E5BCDA.png"
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
        ]
      },
      6 : {
        "layer": "06",
        "categoryName": "服",
        "parts": [
          {
            "name": "服",
            "url": stampImageBase + "Clothes/服.png"
          },
          {
            "name": "手上向き用服",
            "url": stampImageBase + "Clothes/手上向き用服.png"
          },
        ]
      },
      7 : {
        "layer": "07",
        "categoryName": "顔",
        "parts": [
          {
            "name": "red",
            "url": stampImageBase + "Face01/DABBFBA8-88EB-4C87-BAFA-7B5D501203A3.png"
          },
          {
            "name": "brown",
            "url": stampImageBase + "Face01/4FF23A41-958A-49B1-AF6A-473D8276F917.png"
          },
          {
            "name": "standard",
            "url": stampImageBase + "Face01/D3F38817-EE7B-4619-B1AB-CCAF7B1318DE.png"
          },
          {
            "name": "white",
            "url": stampImageBase + "Face01/2833760A-0314-4C84-9160-80716264AFC0.png"
          },
        ]
      },
      8 : {
        "layer": "08",
        "categoryName": "目",
        "parts": [
          {
            "name": "ウィンク",
            "url": stampImageBase + "Eyes01/%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%AF.png"
          },
          {
            "name": "ギュッ",
            "url": stampImageBase + "Eyes01/%E3%82%AE%E3%83%A5%E3%83%83.png"
          },
          {
            "name": "スタンダード",
            "url": stampImageBase + "Eyes01/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%80%E3%83%BC%E3%83%89.png"
          },
          {
            "name": "つぶる",
            "url": stampImageBase + "Eyes01/%E3%81%A4%E3%81%B6%E3%82%8B.png"
          },
          {
            "name": "パッチリ",
            "url": stampImageBase + "Eyes01/%E3%83%91%E3%83%83%E3%83%81%E3%83%AA.png"
          },
          {
            "name": "ボケー",
            "url": stampImageBase + "Eyes01/%E3%83%9C%E3%82%B1%E3%83%BC.png"
          },
          {
            "name": "下まつ毛のみ",
            "url": stampImageBase + "Eyes01/%E4%B8%8B%E3%81%BE%E3%81%A4%E6%AF%9B%E3%81%AE%E3%81%BF.png"
          },
          {
            "name": "上向き",
            "url": stampImageBase + "Eyes01/%E4%B8%8A%E5%90%91%E3%81%8D.png"
          },
          {
            "name": "眠そう",
            "url": stampImageBase + "Eyes01/%E7%9C%A0%E3%81%9D%E3%81%86.png"
          },
        ]
      },
      9 : {
        "layer": "09",
        "categoryName": "鼻",
        "parts": [
          {
            "name": "スタンダード",
            "url": stampImageBase + "Nose01/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%80%E3%83%BC%E3%83%89.png"
          },
          {
            "name": "なし",
            "url": noneUrl
          },
          {
            "name": "ピエロ",
            "url": stampImageBase + "Nose01/%E3%83%94%E3%82%A8%E3%83%AD.png"
          },
          {
            "name": "ピノキオ",
            "url": stampImageBase + "Nose01/%E3%83%94%E3%83%8E%E3%82%AD%E3%82%AA.png"
          },
          {
            "name": "動物鼻",
            "url": stampImageBase + "Nose01/%E5%8B%95%E7%89%A9%E9%BC%BB.png"
          },
          {
            "name": "鼻ピアス",
            "url": stampImageBase + "Nose01/%E9%BC%BB%E3%83%94%E3%82%A2%E3%82%B9.png"
          },
          {
            "name": "絆創膏",
            "url": stampImageBase + "Nose01/%E7%B5%86%E5%89%B5%E8%86%8F.png"
          },
        ]
      },
      10 : {
        "layer": "10",
        "categoryName": "口",
        "parts": [
          {
            "name": "おちょぼ口",
            "url": stampImageBase + "Mouth01/%E3%81%8A%E3%81%A1%E3%82%87%E3%81%BC%E5%8F%A3.png"
          },
          {
            "name": "なし",
            "url": noneUrl
          },
          {
            "name": "スンダード",
            "url": stampImageBase + "Mouth01/%E3%82%B9%E3%83%B3%E3%83%80%E3%83%BC%E3%83%89.png"
          },
          {
            "name": "テヘペロ",
            "url": stampImageBase + "Mouth01/%E3%83%86%E3%83%98%E3%83%9A%E3%83%AD.png"
          },
          {
            "name": "にぃー",
            "url": stampImageBase + "Mouth01/%E3%81%AB%E3%81%83%E3%83%BC.png"
          },
          {
            "name": "ニッコリ",
            "url": stampImageBase + "Mouth01/%E3%83%8B%E3%83%83%E3%82%B3%E3%83%AA.png"
          },
          {
            "name": "ニヒッ",
            "url": stampImageBase + "Mouth01/%E3%83%8B%E3%83%92%E3%83%83.png"
          },
          {
            "name": "口唇",
            "url": stampImageBase + "Mouth01/%E5%8F%A3%E5%94%87.png"
          },
          {
            "name": "前歯",
            "url": stampImageBase + "Mouth01/%E5%89%8D%E6%AD%AF.png"
          },
        ]
      },
      11 : {
        "layer": "11",
        "categoryName": "眉毛",
        "parts": [
          {
            "name": "スタンダード",
            "url": stampImageBase + "Eyebrows01/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%80%E3%83%BC%E3%83%89.png"
          },
          {
            "name": "なし",
            "url": noneUrl
          },
          {
            "name": "つながり眉",
            "url": stampImageBase + "Eyebrows01/%E3%81%A4%E3%81%AA%E3%81%8C%E3%82%8A%E7%9C%89.png"
          },
          {
            "name": "困り眉毛",
            "url": stampImageBase + "Eyebrows01/%E5%9B%B0%E3%82%8A%E7%9C%89%E6%AF%9B.png"
          },
          {
            "name": "怒り眉毛",
            "url": stampImageBase + "Eyebrows01/%E6%80%92%E3%82%8A%E7%9C%89%E6%AF%9B.png"
          },
        ]
      },
      12 : {
        "layer": "12",
        "categoryName": "ほっぺ",
        "parts": [
          {
            "name": "なし",
            "url": noneUrl
          },
          {
            "name": "ほっぺ",
            "url": stampImageBase + "Curse01/%E3%81%BB%E3%81%A3%E3%81%BA.png"
          },
        ]
      },
      13 : {
        "layer": "13",
        "categoryName": "髪",
        "parts": [
          {
            "name": "0FBD0922-055D-4AF0-BE1A-85637CAA6DB6",
            "url": stampImageBase + "Hair01/0FBD0922-055D-4AF0-BE1A-85637CAA6DB6.png"
          },
          {
            "name": "5D79641E-4E1F-4061-B138-2F7E39521633",
            "url": stampImageBase + "Hair01/5D79641E-4E1F-4061-B138-2F7E39521633.png"
          },
          {
            "name": "5DD07541-BA0A-4BFF-96D1-1B2552922158",
            "url": stampImageBase + "Hair01/5DD07541-BA0A-4BFF-96D1-1B2552922158.png"
          },
          {
            "name": "6AD42123-4B18-4814-9495-EFFCB9235839",
            "url": stampImageBase + "Hair01/6AD42123-4B18-4814-9495-EFFCB9235839.png"
          },
          {
            "name": "6D32CBB3-C7B5-4E41-A008-5F3AE581FBF6",
            "url": stampImageBase + "Hair01/6D32CBB3-C7B5-4E41-A008-5F3AE581FBF6.png"
          },
          {
            "name": "8A3385C0-7D22-4654-AC59-4D1CC755BA11",
            "url": stampImageBase + "Hair01/8A3385C0-7D22-4654-AC59-4D1CC755BA11.png"
          },
          {
            "name": "27F773CF-A59B-462B-95A9-BE6106183E66",
            "url": stampImageBase + "Hair01/27F773CF-A59B-462B-95A9-BE6106183E66.png"
          },
          {
            "name": "60801BC8-E8E0-4B49-82CD-A773880C3206",
            "url": stampImageBase + "Hair01/60801BC8-E8E0-4B49-82CD-A773880C3206.png"
          },
          {
            "name": "01678568-D057-46A0-88A5-0C82895EDBC3",
            "url": stampImageBase + "Hair01/01678568-D057-46A0-88A5-0C82895EDBC3.png"
          },
          {
            "name": "D84DB33E-BC6A-48C1-9CB7-7891260B17C0",
            "url": stampImageBase + "Hair01/D84DB33E-BC6A-48C1-9CB7-7891260B17C0.png"
          },
          {
            "name": "DB18F1BD-DCD5-4231-8C8D-683166475B27",
            "url": stampImageBase + "Hair01/DB18F1BD-DCD5-4231-8C8D-683166475B27.png"
          },
        ]
      },
      14 : {
        "layer": "14",
        "categoryName": "メガネ",
        "parts": [
          {
            "name": "なし",
            "url": noneUrl
          },
          {
            "name": "メガネ",
            "url": stampImageBase + "Glasses01/%E3%83%A1%E3%82%AC%E3%83%8D.png"
          },
          {
            "name": "メガネ-2",
            "url": stampImageBase + "Glasses01/%E3%83%A1%E3%82%AC%E3%83%8D-2.png"
          },
          {
            "name": "メガネ-3",
            "url": stampImageBase + "Glasses01/%E3%83%A1%E3%82%AC%E3%83%8D-3.png"
          },
          {
            "name": "メガネ-4",
            "url": stampImageBase + "Glasses01/%E3%83%A1%E3%82%AC%E3%83%8D-4.png"
          },
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
      },    };

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
