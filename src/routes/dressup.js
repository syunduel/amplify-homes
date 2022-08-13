import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useEthNFT } from '../api/evmnft';
import { ButtonGroup } from '@aws-amplify/ui-react';
import html2canvas from "html2canvas";

export default function Dressup() {

  console.log("Dressup start");

    const {tokenChain, tokenAddress, tokenId} = useParams();
    console.log('tokenChain : ' + tokenChain);
    console.log('tokenAddress : ' + tokenAddress);
    console.log('tokenId : ' + tokenId);

    let selectedChain = tokenChain
    if (tokenChain === "ethereum") {
      selectedChain = "Eth";
    } else if (selectedChain === "matic") {
      selectedChain = "Polygon"
    }
    const selectedNftAddress = tokenAddress;
    const selectedTokenId = tokenId;
    console.log('selectedChain : ' + selectedChain);
    console.log('selectedNftAddress : ' + selectedNftAddress);
    console.log('selectedTokenId : ' + selectedTokenId);

    const selectedEthNFT = useEthNFT(selectedChain, selectedNftAddress, selectedTokenId);
    console.log(selectedEthNFT);

    const [selectedAttributes, setSelectedAttributes] = useState([]);

    const partsBaseUrl = "https://dress-up-nft-ap-northeast-1.s3.ap-northeast-1.amazonaws.com/v1/";
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
    const [dressUpPicVailStyle, setDressUpPicVailStyle] = useState({backgroundColor: 'lightgray'});
    const [dressUpPicSpin, setDressUpPicSpin] = useState("sk-cube-grid");

    useEffect(() => {
      window.scrollTo(0, 0)

      const nowSelectedAttributes = {};

      if (selectedEthNFT != null) {
        for (var i = 0; i < selectedEthNFT.metadata.attributes.length; i++) {
          const attribute = selectedEthNFT.metadata.attributes[i];
          nowSelectedAttributes[attribute.trait_type] = attribute.value;
        };

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
        } else {
          // LAGとLAGM以外の場合、元の画像をそのまま入れる
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

    const onClickSamp = (event) => {

      console.log(event.target);
      // event.target.className = "select";

      if (event.target.value === null || event.target.value === undefined) {
        return;
      }

      const nowDressUpPicStampUrl = getImageFullUrl(event.target.value);
      console.log(nowDressUpPicStampUrl);
      setDressUpPic12Url(nowDressUpPicStampUrl);
    }

    const getImageUrl = (selectedEthNFT, type, value) => {

      console.log("getImageUrl");
      console.log(selectedEthNFT);

      if (value === null || value === "" || value === "none" || value === "None") {
        return "none";
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
        const imageUrl = `collection/${selectedEthNFT.chain}/${selectedEthNFT.symbol}_${selectedEthNFT.token_address}/parts/${type}/${colorPath}${value}.png`;
        return imageUrl;
      }
    }

    const getImageFullUrl = (value) => {
      if (value === null || value === "" || value === "none") {
        return noneUrl;
      } else {
        console.log(value);
        return partsBaseUrl + value;
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
    
    const onClickExport = () => {
      // 画像に変換する component の id を指定
      const target = document.getElementById("dress-up-window");
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
    }
    
  return (
      <>
        <div class="card card__dress-up">
          <div class="card__dress-up--header">
            <div>
              <Link to={`/`} class="back-link">←Change NFT</Link>
              <h1 class="card__dress-up--title">Outfit Room</h1>
            </div>
            <button onClick={onClickExport}>↓ Download</button>
          </div>
          <div class="card__dress-up--change">
            <div class="card__dress-up--image">
              {selectedEthNFT != null &&
                <>
                  <div id="dress-up-window" width="400" height="400">
                    {/* <img className="dress-up-pic" src={`${selectedEthNFT.moralisImageUri}`} /> */}
                    <img className="dress-up-pic-base" src="/none.png"/>
                    {/* <img className="dress-up-pic" src="https://love-addicted-girls-test.s3.ap-northeast-3.amazonaws.com/gen-res/LAG/parts/background/%5BR%5DBlue+Pinstripe2.png" /> */}
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
                    <div id="dress-up-pic-vail" width="400" height="400" className='dress-up-pic' style={dressUpPicVailStyle} />
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
                <dt>Stamp</dt>
                <dd>
                  <ButtonGroup aria-label="Stamp-btn" style={{flexWrap: 'wrap'}} onClick={onClickSamp}>
                    <button value="none">none</button>
                    <button value="original/parts/dialogue/dialogue_gm.png">GM</button>
                    <button value="original/parts/dialogue/dialogue_gn.png">GN</button>
                    <button value="original/parts/dialogue/dialogue_congrats.png">Congrats</button>
                    <button value="original/parts/dialogue/dialogue_why.png">why?</button>
                    <button value="original/parts/dialogue/dialogue_biglove.png">BIG LOVE</button>
                  </ButtonGroup>
                </dd>
              </dl>
              <dl>
                <dt>Background</dt>
                <dd>
                  <ButtonGroup aria-label="Background-btn" style={{flexWrap: 'wrap'}} onClick={onClickBackground}>
                    <button value="none">none</button>
                    {selectedEthNFT !== null && (selectedEthNFT.symbol === "LAG" || selectedEthNFT.symbol === "LAGM") &&
                      <>
                        <button value={selectedChain+"/"+selectedEthNFT.symbol+"_"+selectedNftAddress+"/parts/background/"+(selectedAttributes.Background? selectedAttributes.Background: selectedAttributes.background)+".png"}>{selectedAttributes.Background? selectedAttributes.Background: selectedAttributes.background? selectedAttributes.background.replace("_", " "): ""}</button>
                      </>
                    }
                    {selectedEthNFT !== null
                        && (selectedEthNFT.symbol === "LAG" || selectedEthNFT.symbol === "LAGM" || selectedEthNFT.symbol === "CNP" || selectedEthNFT.symbol === "VLCNP" || selectedEthNFT.symbol === "MDFN") &&
                      <>
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
              {/* <dl>
                <dt>Body</dt>
                <dd>
                  <button>Casual Brown</button>
                  <button class="select">Casual Brown</button>
                  <button>Autumn Kimono</button>
                  <button>Festival Kimono</button>
                </dd>
              </dl>
              <dl>
                <dt>Face</dt>
                <dd>
                  <button class="select">Puple Gal</button>
                </dd>
              </dl>
              <dl>
                <dt>Hair</dt>
                <dd>
                  <button>Straight</button>
                  <button class="select">Blue Pigtails</button>
                  <button>Bun</button>
                  <button>Wavy</button>
                  <button>[R]Black Pigtails</button>
                  <button>[R]Cafe Girl2</button>
                  <button>Foo</button>
                </dd>
              </dl> */}
            </div>
          </div>
        </div>
      </>

    );
  }
