import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useEthNFT, useEthNFTs } from '../api/evmnft';
import { ButtonGroup } from '@aws-amplify/ui-react';
import html2canvas from "html2canvas";
import {serverData} from '../data/serverData';
import { useCollectionInfo } from '../api/collectionInfo';

export default function Dressup() {

  console.log("Dressup start");

  const wait = async (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const {tokenChain, tokenAddress, tokenId} = useParams();
    console.log('tokenChain : ' + tokenChain);
    console.log('tokenAddress : ' + tokenAddress);
    console.log('tokenId : ' + tokenId);

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
    const selectedTokenId = tokenId.replace(/[^0-9a-z]/g, '');
    // console.log('selectedChain : ' + selectedChain);
    // console.log('selectedNftAddress : ' + selectedNftAddress);
    // console.log('selectedTokenId : ' + selectedTokenId);

    const selectedEthNFT = useEthNFT(targetChain, selectedNftAddress, selectedTokenId);
    console.log(selectedEthNFT);

    const collectionInfo = useCollectionInfo(tokenChain, selectedNftAddress);
    console.log('Dressup collectionInfo', collectionInfo);
    console.log("collectionInfo.name", collectionInfo.name);
    console.log("collectionInfo.parts", collectionInfo.parts);

    const [partsNFTInfo0, setPartsNFTInfo0] = useState({});
    const [partsNFTChain0, setPartsNFTChain0] = useState("");
    const [partsNFTAddress0, setPartsNFTAddress0] = useState("");

    useEffect(() => {
      if (collectionInfo !== undefined && collectionInfo.parts !== undefined && collectionInfo.parts[0] !== undefined) {
        setPartsNFTInfo0(collectionInfo.parts[0]);
        console.log("partsNFTInfo0", partsNFTInfo0);
        setPartsNFTChain0(collectionInfo.parts[0].chain);
        setPartsNFTAddress0(collectionInfo.parts[0].address);
      }
    }, [collectionInfo]);

    const [partsNFTs0, isPartsNFTsLoaded0] = useEthNFTs(partsNFTChain0, partsNFTAddress0, 100);
    console.log("partsNFTs0", partsNFTChain0, partsNFTAddress0, partsNFTs0, isPartsNFTsLoaded0);


    const [partsNFTInfo1, setPartsNFTInfo1] = useState({});
    const [partsNFTChain1, setPartsNFTChain1] = useState("");
    const [partsNFTAddress1, setPartsNFTAddress1] = useState("");

    useEffect(() => {
      if (collectionInfo !== undefined && collectionInfo.parts !== undefined && collectionInfo.parts[1] !== undefined) {
        setPartsNFTInfo1(collectionInfo.parts[1]);
        console.log("partsNFTInfo1", partsNFTInfo1);
        setPartsNFTChain1(collectionInfo.parts[1].chain);
        setPartsNFTAddress1(collectionInfo.parts[1].address);
      }
    }, [collectionInfo]);

    const [partsNFTs1, isPartsNFTsLoaded1] = useEthNFTs(partsNFTChain1, partsNFTAddress1, 100);
    console.log("partsNFTs1", partsNFTChain1, partsNFTAddress1, partsNFTs1, isPartsNFTsLoaded1);


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

        if (selectedEthNFT.symbol === "LAG") {
          setDressUpPic01Url(getImageFullUrl(getImageUrl(selectedEthNFT, "background", nowSelectedAttributes.background)));
          setDressUpPic02Url(getImageFullUrl(getImageUrl(selectedEthNFT, "effect", nowSelectedAttributes.effect)));
          setDressUpPic03Url(getImageFullUrl(getImageUrl(selectedEthNFT, "backhair", nowSelectedAttributes.hair)));
          setDressUpPic04Url(getImageFullUrl(getImageUrl(selectedEthNFT, "body", nowSelectedAttributes.body)));
          setDressUpPic05Url(getImageFullUrl(getImageUrl(selectedEthNFT, "face", nowSelectedAttributes.face)));
          setDressUpPic06Url(getImageFullUrl(getImageUrl(selectedEthNFT, "eye", nowSelectedAttributes.eye)));
          setDressUpPic07Url(getImageFullUrl(getImageUrl(selectedEthNFT, "eyebrow", nowSelectedAttributes.eyebrows)));
          setDressUpPic08Url(getImageFullUrl(getImageUrl(selectedEthNFT, "mouth", nowSelectedAttributes.mouth)));
          setDressUpPic09Url(getImageFullUrl(getImageUrl(selectedEthNFT, "fronthair", nowSelectedAttributes.hair)));
          setDressUpPic10Url(getImageFullUrl(getImageUrl(selectedEthNFT, "accessory", nowSelectedAttributes.Accessory)));

        } else if (selectedEthNFT.symbol === "LAGM") {
          setDressUpPic01Url(getImageFullUrl(getImageUrl(selectedEthNFT, "background", nowSelectedAttributes.Background)));
          setDressUpPic02Url(getImageFullUrl(getImageUrl(selectedEthNFT, "backhair", nowSelectedAttributes.Hair)));
          setDressUpPic03Url(getImageFullUrl(getImageUrl(selectedEthNFT, "body", nowSelectedAttributes.Body)));
          setDressUpPic04Url(getImageFullUrl(getImageUrl(selectedEthNFT, "face", nowSelectedAttributes.Face)));
          setDressUpPic05Url(getImageFullUrl(getImageUrl(selectedEthNFT, "fronthair", nowSelectedAttributes.Hair)));

        } else if (collectionInfo !== undefined && collectionInfo.layer !== undefined) {

          console.log("layer" , collectionInfo.layer);

          const layerMetadata = collectionInfo.layer.metadata;

          if (layerMetadata !== null && layerMetadata !== undefined) {

            for (let index = 0; index < layerMetadata.length; index++) {
              const nowLayerMetadata = layerMetadata[index];
              const layer = nowLayerMetadata.layer;
              const name = nowLayerMetadata.name;
              switch (layer) {
                case 1:
                  setDressUpPic01Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
                case 2:
                  setDressUpPic02Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
                case 3:
                  setDressUpPic03Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
                case 4:
                  setDressUpPic04Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
                case 5:
                  setDressUpPic05Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
                case 6:
                  setDressUpPic06Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
                case 7:
                  setDressUpPic07Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
                case 8:
                  setDressUpPic08Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
                case 9:
                  setDressUpPic09Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
                case 10:
                  setDressUpPic10Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
                case 11:
                  setDressUpPic11Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
                case 12:
                  setDressUpPic12Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
                case 13:
                  setDressUpPic13Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
                case 14:
                  setDressUpPic14Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
                case 15:
                  setDressUpPic15Url(getImageFullUrl(getImageUrl(selectedEthNFT, name, nowSelectedAttributes[name], collectionInfo)));
                  break;
              }
            }
          }

        } else {
          // 着せ替え対応NFTじゃない場合、元の画像をそのまま入れる
          setDressUpPic02Url(selectedEthNFT.moralisImageUri);
        }

        // copyrightの設定がある場合はCopyrightをセットする。copyrightはDownloadのときだけ表示する。
        if (collectionInfo !== undefined && collectionInfo.copyright !== undefined) {
          setDressUpPicCopyrightUrl(collectionInfo.copyright);
        }

        // パーツがパラパラ表示されるのを防ぐために灰色にしておいたヴェールを指定秒後に透明にする
        // パーツ画像が全部ロードされたのを検知してやりたかったが、難しかったので固定の秒数で暫定対応
        const timer = setTimeout(() => {
          //some action
          setDressUpPicVailStyle({backgroundColor: 'transparent'});
          setDressUpPicSpin("");
        }, 1.4 * 1000);
      }

    }, [selectedEthNFT, collectionInfo, isPartsNFTsLoaded0, isPartsNFTsLoaded1]);

    const getAllPartsButtonGroups = () => {

      const nowSelectedAttributes = {};

      if (selectedEthNFT != null) {

        if (selectedEthNFT.duMetadata !== null && selectedEthNFT.duMetadata !== undefined
              && selectedEthNFT.duMetadata.attributes !== null && selectedEthNFT.duMetadata.attributes !== undefined) {
          for (var i = 0; i < selectedEthNFT.duMetadata.attributes.length; i++) {
            const attribute = selectedEthNFT.duMetadata.attributes[i];
            nowSelectedAttributes[attribute.trait_type] = attribute.value;
          };
        }
      }

      const layerMetadata = collectionInfo.layer.metadata;

      let partsButtonGroups = [];

      for (let index = 0; index < layerMetadata.length; index++) {
        const nowLayerMetadata = layerMetadata[index];
        const layer = nowLayerMetadata.layer;
        const name = nowLayerMetadata.name;
        partsButtonGroups.push(createPartsButtonGroup(selectedEthNFT, nowLayerMetadata, nowSelectedAttributes[name], collectionInfo));

      }

      return partsButtonGroups;

    }

    const createPartsButtonGroup = (selectedEthNFT, nowLayerMetadata, nowSelectedAttribute, collectionInfo) => {

      let partsButton = getPartsButton(nowLayerMetadata.name, nowLayerMetadata.layer);

      // NFTに値が無くてNFTパーツもプリセット無い場合は何も表示しない
      if ((nowSelectedAttribute === undefined || nowSelectedAttribute === null || nowSelectedAttribute === "" || nowSelectedAttribute === "none" || nowSelectedAttribute === "None")
          && partsButton.length === 0 && nowLayerMetadata.preset === undefined) {
        return "";
      }

      // NFTに値があっても、パーツがオフに出来なくてNFTパーツもプリセットも無い場合は表示しない
      if ((nowSelectedAttribute !== undefined && nowSelectedAttribute !== null && nowSelectedAttribute !== "" && nowSelectedAttribute !== "none" && nowSelectedAttribute !== "None")
          && nowLayerMetadata.off === false && partsButton.length === 0 && nowLayerMetadata.preset === undefined) {
        return "";
      }

      // NFTに値があってパーツがオフに出来るか、NFTパーツかプリセットがある場合は表示する
      let nowAttributeButton = "";
      let noneButon = "";

      if (nowSelectedAttribute !== undefined && nowSelectedAttribute !== null && nowSelectedAttribute !== ""|| nowSelectedAttribute === "none" || nowSelectedAttribute === "None") {
        const nowAttributeImageUrl = getImageFullUrl(getImageUrl(selectedEthNFT, nowLayerMetadata.name, nowSelectedAttribute, collectionInfo))
        nowAttributeButton = <button data-attribute={nowSelectedAttribute} data-layer={nowLayerMetadata.layer} value={nowAttributeImageUrl}>{nowSelectedAttribute}</button>
      }

      if (nowLayerMetadata.off === true) {
        noneButon = <button data-attribute={nowSelectedAttribute} data-layer={nowLayerMetadata.layer} value={noneUrl}>none</button>
      }

      let presetButton = [];
      if (nowLayerMetadata.preset !== undefined) {
        for (let i = 0; i < nowLayerMetadata.preset.length; i++) {
          const nowPreset = nowLayerMetadata.preset[i];
          const nowPresetButton = <button data-attribute={nowSelectedAttribute} data-layer={nowLayerMetadata.layer} value={nowPreset.imageUrl}>{nowPreset.name}</button>
          presetButton.push(nowPresetButton);
        }
      }

      return (
        <dl>
          <dt>{nowLayerMetadata.name}</dt>
          <dd>
            <ButtonGroup aria-label="Word-btn" style={{flexWrap: 'wrap'}} onClick={onClickPartsButton}>
              {nowAttributeButton}
              {noneButon}
              {partsButton}
              {presetButton}
            </ButtonGroup>
          </dd>
        </dl>
      )
    }

    const getPartsButton = (position, layer) => {
      // console.log("partsNFT", partsNFTs);

      let partsButtons0 = [];
      if (partsNFTs0 !== undefined && isPartsNFTsLoaded0) {
        partsButtons0 = createPartsButton(partsNFTInfo0, position, partsNFTs0, layer);
      }

      let partsButtons1 = [];
      if (partsNFTs1 !== undefined && isPartsNFTsLoaded1) {
        partsButtons1 = createPartsButton(partsNFTInfo1, position, partsNFTs1, layer);
      }

      const partsButtons = [
        ...partsButtons0,
        ...partsButtons1,
      ]

      // console.log("getPartsButton", partsButtons);
      return partsButtons;
    }

    const createPartsButton = (partsNFTInfo, position, partsNFTs, layer = 0) => {
      let partsButtons = [];
      for (let i = 0; i < partsNFTs.length; i++) {
        const nowPartsNFT = partsNFTs[i];
        const nowPartsAttributes = nowPartsNFT.duMetadata.attributes;
        let nowPartsPosition = "";
        let nowPartsName = "";
        let nowPartsAbbreviation = "";
        nowPartsAttributes.forEach(element => {
          if (element.trait_type === "Position") {
            nowPartsPosition = element.value;
          } else if (element.trait_type === "Partsname") {
            nowPartsName = element.value;
          } else if (element.trait_type === "Abbreviation") {
            nowPartsAbbreviation = element.value;
          }
        });
        if (position.toUpperCase() == nowPartsPosition.toUpperCase()) {

          // const buttonValue = "collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/" + nowPartsPosition + "/" + nowPartsName+ ".png";
          const buttonValue = partsNFTInfo.baseURL + nowPartsPosition + "/" + nowPartsName+ ".png";

          partsButtons.push(<button data-attribute={nowPartsPosition} data-layer={layer} value={buttonValue}>{nowPartsAbbreviation}</button>);
        }
      }
      console.log("createPartsButton", partsButtons);
      return partsButtons;
    }

    const onClickPartsButton = (event) => {
      console.log("onClickPartsButton", event.target.dataset.attribute, event.target.dataset.layer, event.target.value);

      switch (event.target.dataset.layer) {
        case "1":
          setDressUpPic01Url(event.target.value);
          break;
        case "2":
          setDressUpPic02Url(event.target.value);
          break;
        case "3":
          setDressUpPic03Url(event.target.value);
          break;
        case "4":
          setDressUpPic04Url(event.target.value);
          break;
        case "5":
          setDressUpPic05Url(event.target.value);
          break;
        case "6":
          setDressUpPic06Url(event.target.value);
          break;
        case "7":
          setDressUpPic07Url(event.target.value);
          break;
        case "8":
          setDressUpPic08Url(event.target.value);
          break;
        case "9":
          setDressUpPic09Url(event.target.value);
          break;
        case "10":
          setDressUpPic10Url(event.target.value);
          break;
        case "11":
          setDressUpPic11Url(event.target.value);
          break;
        case "12":
          setDressUpPic12Url(event.target.value);
          break;
        case "13":
          setDressUpPic13Url(event.target.value);
          break;
        case "14":
          setDressUpPic14Url(event.target.value);
          break;
        case "15":
          setDressUpPic15Url(event.target.value);
          break;
        default:
          break;
      }
    }

    const onClickBackground = (event) => {

      console.log(event.target);
      // event.target.className = "select";

      if (event.target.value === null || event.target.value === undefined) {
        return;
      }

      const nowDressUpPicBackgroundUrl = getImageFullUrl(event.target.value);
      console.log(nowDressUpPicBackgroundUrl);
      setDressUpPic01Url(nowDressUpPicBackgroundUrl);
    }

    const onClickWord = (event) => {

      console.log(event.target);
      // event.target.className = "select";

      if (event.target.value === null || event.target.value === undefined) {
        return;
      }

      const nowDressUpPicWordUrl = getImageFullUrl(event.target.value);
      console.log(nowDressUpPicWordUrl);
      setDressUpPic16Url(nowDressUpPicWordUrl);
    }

    const onClickAccessory = (event) => {

      console.log(event.target);
      // event.target.className = "select";

      if (event.target.value === null || event.target.value === undefined) {
        return;
      }

      const nowDressUpPicAccessoryUrl = getImageFullUrl(event.target.value);
      console.log(nowDressUpPicAccessoryUrl);
      setDressUpPic10Url(nowDressUpPicAccessoryUrl);

    }

    const onClickBody = (event) => {

      console.log(event.target);
      // event.target.className = "select";

      if (event.target.value === null || event.target.value === undefined) {
        return;
      }

      const nowDressUpPicBodyUrl = getImageFullUrl(event.target.value);
      console.log(nowDressUpPicBodyUrl);
      setDressUpPic04Url(nowDressUpPicBodyUrl);

      var nowDressUpPicFaceUrl;
      if (nowDressUpPicBodyUrl.match("White")) {
        nowDressUpPicFaceUrl = serverRoot + "collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/parts/face/base_white.png";
      } else {
        nowDressUpPicFaceUrl = serverRoot + "collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/parts/face/baes_sun.png";
      }
      console.log(nowDressUpPicFaceUrl);
      setDressUpPic05Url(nowDressUpPicFaceUrl);

    }

    const getImageUrl = (selectedEthNFT, type, value, collectionInfo = null) => {

      console.log("getImageUrl");
      console.log(selectedEthNFT);

      if (value === null || value === "" || value === "none" || value === "None") {
        return "none";

      } else if (collectionInfo !== null && collectionInfo !== undefined
        && collectionInfo.partsdataHead !== null && collectionInfo.partsdataHead !== undefined) {
          
          const imageUrl = `${collectionInfo.partsdataHead}${type}/${value}${collectionInfo.partsdataTail}`;
          return imageUrl;

      } else {

        let colorPath = "";
        if (selectedEthNFT.symbol === "LAG" && (type === "body" || type === "eye" || type === "mouth")) {
          if (selectedEthNFT.attributes.face === "base_white") {
            colorPath = "normal/";
          } else {
            colorPath = "suntan/";
          }
        }
        // const imageUrl = `Polygon/LAGM_0x1a4041cce1aea5fff82e13780d1b1f522a047ef9/parts/background/Blue Pinstripe.png`;
        const imageUrl = `collection/${selectedChain}/${selectedEthNFT.symbol}_${selectedEthNFT.contract.address}/parts/${type}/${colorPath}${value}.png`;
        return imageUrl;
      }
    }

    const getImageFullUrl = (value) => {
      if (value === null || value === "" || value === "none") {
        return noneUrl;
      } else if(value.startsWith("http")) {
        return value;
      } else {
        return serverRoot + value;
      }
    }

    const saveAsImage = uri => {
      const downloadLink = document.createElement("a");

      if (typeof downloadLink.download === "string") {
        downloadLink.href = uri;

        // ファイル名
        downloadLink.download = "dressup.png";

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

    const createNaviLinks = () => {

      let organizationName = null;
      if (collectionInfo !== null && collectionInfo !== undefined && collectionInfo.organization !== null && collectionInfo.organization !== undefined && collectionInfo.organization !== "") {
        organizationName = collectionInfo.organization;
      }

      let collectionName = null;
      if (selectedEthNFT !== null && selectedEthNFT !== undefined && selectedEthNFT.name !== null && selectedEthNFT.name !== undefined && selectedEthNFT.name !== "") {
        collectionName = selectedEthNFT.name;
      }

      let tokenId = null;
      let itemName = null;
      if (selectedEthNFT !== null && selectedEthNFT !== undefined && selectedEthNFT.itemName !== null && selectedEthNFT.itemName !== undefined && selectedEthNFT.itemName !== "") {
        tokenId = selectedTokenId;
        itemName = selectedEthNFT.itemName;
      }

      return (
        <>
          <Link to={`/`} class="back-link">TOP </Link>
          {organizationName !== null &&
            <>
              > <Link to={`/organization/${organizationName}/`} class="back-link">{organizationName} </Link>
            </>
          }
          {collectionName !== null &&
            <>
              > <Link to={`/collection/${tokenChain}/${tokenAddress}/`} class="back-link">{collectionName} </Link>
            </>
          }
          {itemName !== null &&
            <>
              > <Link to={`/dressup/${tokenChain}/${tokenAddress}/${tokenId}`} class="back-link">{itemName} </Link>
            </>
          }
          
        </>
      );
    }

  return (
      <>
        <div style={{textAlign: 'left', padding: '1.5em'}}>
            {createNaviLinks()}
        </div>
        <div class="card card__dress-up">
          <div class="card__dress-up--header">
            <div>
              <h1 class="card__dress-up--title">Outfit Room</h1>
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

                  <p class="card__dress-up--pj">{`${selectedEthNFT.name}`}</p>
                  <p class="card__dress-up--no">{`${selectedEthNFT.itemName}`}</p>
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
              <dl>
                <dt>Word</dt>
                <dd>
                  <ButtonGroup aria-label="Word-btn" style={{flexWrap: 'wrap'}} onClick={onClickWord}>
                    <button value="none">none</button>
                    {getPartsButton("Word")}
                    <button value="original/parts/dialogue/dialogue_akeome.png">あけおめ</button>
                    <button value="original/parts/dialogue/dialogue_newyear.png">NewYear</button>
                    <button value="original/parts/dialogue/dialogue_kingashinen.png">謹賀新年</button>
                    <button value="original/parts/dialogue/dialogue_goodluck.png">GoodLuck</button>
                    <button value="original/parts/dialogue/dialogue_taiyoro.png">対よろ</button>
                    <button value="original/parts/dialogue/dialogue_taiari.png">対あり</button>
                    <button value="original/parts/dialogue/dialogue_gm.png">GM</button>
                    <button value="original/parts/dialogue/dialogue_gn.png">GN</button>
                    <button value="original/parts/dialogue/dialogue_congrats.png">Congrats</button>
                    <button value="original/parts/dialogue/dialogue_why.png">why?</button>
                    <button value="original/parts/dialogue/dialogue_biglove.png">BIG LOVE</button>
                    <button value="original/parts/dialogue/dialogue_arigatou.png">ありがとう</button>
                    <button value="original/parts/dialogue/dialogue_arigatougozaimasu.png">ありがとうございます</button>
                    <button value="original/parts/dialogue/dialogue_hello.png">Hello</button>
                    <button value="original/parts/dialogue/dialogue_lgtm.png">LGTM</button>
                    <button value="original/parts/dialogue/dialogue_otsukaresama.png">お疲れさま</button>
                    <button value="original/parts/dialogue/dialogue_yoroshikuonegaishimasu.png">よろしくお願いします</button>
                  </ButtonGroup>
                </dd>
              </dl>
              {selectedEthNFT !== null && selectedEthNFT.symbol === "DIVER" &&
                <dl>
                  <dt>Hat</dt>
                  <dd>
                    <ButtonGroup aria-label="Word-btn" style={{flexWrap: 'wrap'}} onClick={onClickAccessory}>
                      {getPartsButton("Hat")}
                      <button value="collection/Eth/DIVER_0x11C3e2C4329dF91F65a16612De90077498Cfa6CA/extraparts/hat/Halloween Pumpkin.png">Halloween Pumpkin</button>
                    </ButtonGroup>
                  </dd>
                </dl>
              }
              {selectedEthNFT !== null && selectedEthNFT.symbol === "LAG" &&
                <dl>
                  <dt>Accessory</dt>
                  <dd>
                    <ButtonGroup aria-label="Word-btn" style={{flexWrap: 'wrap'}} onClick={onClickAccessory}>
                      {getPartsButton("Accessory")}
                      <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/accessory/Cat Ears Hat.png">Cat Ears Hat</button>
                      <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/accessory/Vampire Crown.png">Vampire Crown</button>
                      <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/accessory/Wolf Ears.png">Wolf Ears</button>
                      <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/accessory/Bunny Blue.png">Bunny Blue</button>
                      <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/accessory/Bunny Red.png">Bunny Red</button>
                    </ButtonGroup>
                  </dd>
                </dl>
              }
              {selectedEthNFT !== null && selectedEthNFT.symbol === "LAG" &&
                <dl>
                  <dt>Body</dt>
                  <dd>
                    <ButtonGroup aria-label="Word-btn" style={{flexWrap: 'wrap'}} onClick={onClickBody}>
                      {getPartsButton("Body")}
                      <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/body/Santa Claus Sun.png">Santa Claus Sun</button>
                      <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/body/Santa Claus White.png">Santa Claus White</button>
                      <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/body/Star Witch Sun.png">Star Witch Sun</button>
                      <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/body/Star Witch White.png">Star Witch White</button>
                      <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/body/Wolf Sun.png">Wolf Sun</button>
                      <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/body/Wolf White.png">Wolf White</button>
                      <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/body/Reverse Bunny Sun.png">Reverse Bunny Sun</button>
                      <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/body/Reverse Bunny White.png">Reverse Bunny White</button>
                    </ButtonGroup>
                  </dd>
                </dl>
              }

              {/* have dress up Metadata */}
              {selectedEthNFT !== null && collectionInfo !== undefined && collectionInfo.layer !== undefined &&
                <>
                  {getAllPartsButtonGroups()}
                </>
              }

              {selectedEthNFT !== null && (selectedEthNFT.symbol === "LAG" || selectedEthNFT.symbol === "LAGM" || selectedEthNFT.symbol === "CNP" || selectedEthNFT.symbol === "VLCNP" || selectedEthNFT.symbol === "MDFN" || selectedEthNFT.symbol === "TAG" || selectedEthNFT.symbol === "OCSMD3") &&
                <dl>
                  <dt>Background</dt>
                  <dd>
                    <ButtonGroup aria-label="Background-btn" style={{flexWrap: 'wrap'}} onClick={onClickBackground}>
                      {selectedEthNFT !== null
                            && (selectedEthNFT.symbol === "LAG" || selectedEthNFT.symbol === "LAGM" || selectedEthNFT.symbol === "CNP" || selectedEthNFT.symbol === "VLCNP" || selectedEthNFT.symbol === "MDFN" || selectedEthNFT.symbol === "OCSMD3") &&
                          <>
                            <button value="none">none</button>
                          </>
                      }

                      {selectedEthNFT !== null && (selectedEthNFT.symbol === "LAG" || selectedEthNFT.symbol === "LAGM") &&
                        <>
                          <button value={"collection/"+selectedChain+"/"+selectedEthNFT.symbol+"_"+selectedNftAddress+"/parts/background/"+(selectedAttributes.Background? selectedAttributes.Background: selectedAttributes.background)+".png"}>{selectedAttributes.Background? selectedAttributes.Background: selectedAttributes.background? selectedAttributes.background.replace("_", " "): ""}</button>
                        </>
                      }

                      {getPartsButton("Background")}

                      {selectedEthNFT !== null
                          && (selectedEthNFT.symbol === "LAG" || selectedEthNFT.symbol === "LAGM" || selectedEthNFT.symbol === "CNP" || selectedEthNFT.symbol === "VLCNP" || selectedEthNFT.symbol === "MDFN" || selectedEthNFT.symbol === "TAG" || selectedEthNFT.symbol === "OCSMD3") &&
                        <>
                          <button value="collection/Eth/TAG_0xc067d3e859cbc2c4a8cf9be96bebfa24b0cba5a6/parts/background/TAG.png">TAG</button>
                          <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/background/Halloween Orange.png">Halloween Orange</button>
                          <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/background/Halloween Purple.png">Halloween Purple</button>
                          <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/background/Sparkling Snow Blue.png">Sparkling Snow Blue</button>
                          <button value="collection/Eth/LAG_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2/extraparts/background/Sparkling Snow Pink.png">Sparkling Snow Pink</button>
                          <button value="collection/Polygon/LAGM_0x1a4041cce1aea5fff82e13780d1b1f522a047ef9/parts/background/Blue Pinstripe.png">Blue Pinstripe</button>
                          <button value="collection/Polygon/LAGM_0x1a4041cce1aea5fff82e13780d1b1f522a047ef9/parts/background/Pink Pinstripe.png">Pink Pinstripe</button>
                          <button value="collection/Polygon/LAGM_0x1a4041cce1aea5fff82e13780d1b1f522a047ef9/parts/background/Violet Pinstripe.png">Violet Pinstripe</button>
                          <button value="collection/Polygon/LAGM_0x1a4041cce1aea5fff82e13780d1b1f522a047ef9/parts/background/AstarCats1139.png">AstarCats1139</button>
                          <button value="collection/Polygon/LAGM_0x1a4041cce1aea5fff82e13780d1b1f522a047ef9/parts/background/AstarCats2377.png">AstarCats2377</button>
                          <button value="collection/Polygon/LAGM_0x1a4041cce1aea5fff82e13780d1b1f522a047ef9/parts/background/AstarCats6730.png">AstarCats6730</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_01_001.png">Standard01</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_01_002.png">Standard02</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_01_003.png">Standard03</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_01_004.png">Standard04</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_01_005.png">Standard05</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_01_006.png">Standard06</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_01_007.png">Standard07</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_01_008.png">Standard08</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_01_009.png">Standard09</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_01_010.png">Standard10</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_02_001.png">Choppy sea01</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_02_002.png">Choppy sea02</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_02_003.png">Choppy sea03</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_02_004.png">Choppy sea04</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_02_005.png">Choppy sea05</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_02_006.png">Choppy sea06</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_02_007.png">Choppy sea07</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_02_008.png">Choppy sea08</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_02_009.png">Choppy sea09</button>
                          <button value="collection/Eth/CNP_0x845a007d9f283614f403a24e3eb3455f720559ca/parts/background/back_02_010.png">Choppy sea10</button>
                        </>
                      }
                    </ButtonGroup>
                  </dd>
                </dl>
              }
            </div>
          </div>
        </div>
      </>

    );
  }
