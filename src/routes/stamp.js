import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useEthNFT, useEthNFTs } from '../api/evmnft';
import { ButtonGroup } from '@aws-amplify/ui-react';
import html2canvas from "html2canvas";
import {serverData} from '../data/serverData';
import {collectionData} from '../data/collectionData';


export default function Stamp() {

  console.log("Stamp start");

  const LAYER_MAX = 13;

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


    const stampImageBase = serverData.serverStampRoot + selectedChain + "/" + symbol + "_" + selectedNftAddress + "/parts/";


    const [selectedAttributes, setSelectedAttributes] = useState([]);

    const serverRoot = serverData.serverRoot;
    const noneUrl = "/none.png"

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
    const [dressUpPicSpin, setDressUpPicSpin] = useState("sk-cube-grid");

    const dressUpPartsSetSKB = {
      1 : {
        "layer": "01",
        "categoryName": "体",
        "parts": [
          {
            "name": "体",
            "url": stampImageBase + "Body/体.png"
          },
        ]
      },
      2 : {
        "layer": "02",
        "categoryName": "左足",
        "parts": [
          {
            "name": "立つ",
            "url": stampImageBase + "Left foot/左足立つ.png"
          },
          {
            "name": "まげる",
            "url": stampImageBase + "Left foot/左足まげる.png"
          },
          {
            "name": "座る",
            "url": stampImageBase + "Left foot/左足座る.png"
          },
        ]
      },
      3 : {
        "layer": "03",
        "categoryName": "右足",
        "parts": [
          {
            "name": "立つ",
            "url": stampImageBase + "Right foot/右足立つ.png"
          },
          {
            "name": "足",
            "url": stampImageBase + "Right foot/右足.png"
          },
          {
            "name": "座る",
            "url": stampImageBase + "Right foot/右足座る.png"
          },
        ]
      },
      4 : {
        "layer": "04",
        "categoryName": "左手",
        "parts": [
          {
            "name": "手",
            "url": stampImageBase + "Left hand/左手.png"
          },
          {
            "name": "ピース",
            "url": stampImageBase + "Left hand/左ピース.png"
          },
          {
            "name": "パー",
            "url": stampImageBase + "Left hand/左手パー.png"
          },
          {
            "name": "上上げ",
            "url": stampImageBase + "Left hand/左手上上げ.png"
          },
        ]
      },
      5 : {
        "layer": "05",
        "categoryName": "右手",
        "parts": [
          {
            "name": "手",
            "url": stampImageBase + "Right hand/右手.png"
          },
          {
            "name": "ピース",
            "url": stampImageBase + "Right hand/右ピース.png"
          },
          {
            "name": "パー",
            "url": stampImageBase + "Right hand/右手パー.png"
          },
          {
            "name": "上上げ",
            "url": stampImageBase + "Right hand/右手上上げ.png"
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
            "name": "顔",
            "url": stampImageBase + "Face/顔.png"
          },
        ]
      },
      8 : {
        "layer": "08",
        "categoryName": "目",
        "parts": [
          {
            "name": "目",
            "url": stampImageBase + "Eyes/目.png"
          },
          {
            "name": "一重",
            "url": stampImageBase + "Eyes/一重.png"
          },
          {
            "name": "正面",
            "url": stampImageBase + "Eyes/目正面.png"
          },
        ]
      },
      9 : {
        "layer": "09",
        "categoryName": "鼻",
        "parts": [
          {
            "name": "鼻",
            "url": stampImageBase + "Nose/鼻.png"
          },
          {
            "name": "ピュロ鼻",
            "url": stampImageBase + "Nose/ピュロ鼻.png"
          },
        ]
      },
      10 : {
        "layer": "10",
        "categoryName": "口",
        "parts": [
          {
            "name": "笑うロ",
            "url": stampImageBase + "Mouth/笑うロ.png"
          },
          {
            "name": "ぷっくり口",
            "url": stampImageBase + "Mouth/ぷっくり口.png"
          },
        ]
      },
      11 : {
        "layer": "11",
        "categoryName": "眉毛",
        "parts": [
          {
            "name": "まゆ毛",
            "url": stampImageBase + "Eyebrows/まゆ毛.png"
          },
          {
            "name": "つながりまゆ",
            "url": stampImageBase + "Eyebrows/つながりまゆ.png"
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
            "url": stampImageBase + "Curse/ほっぺ.png"
          },
        ]
      },
      13 : {
        "layer": "13",
        "categoryName": "髪",
        "parts": [
          {
            "name": "ピンク",
            "url": stampImageBase + "Hair/頭ピンク.png"
          },
          {
            "name": "殿様",
            "url": stampImageBase + "Hair/頭殿様.png"
          },
          {
            "name": "白髪",
            "url": stampImageBase + "Hair/白髪.png"
          },
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

      // 「_」区切りでLayerとCategoryを取得
      const nowDressUpPicDataArray = event.target.value.split("¥t");
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
        const nowPartsValue = layer + "¥t" + categoryName + "¥t" + nowPartsUrl;

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
      target.style.width = "1000px";
      target.style.height = "1000px";

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
                  <div id="dress-up-window" width="400" height="400">
                    <img className="dress-up-pic-base" src="/none.png"/>
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
                  <div id="dress-up-window" width="400" height="400">
                    <img className="dress-up-pic-background" src="/none.png"/>
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
