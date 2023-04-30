import React, { useState, useEffect } from 'react';
import { ConsoleLogger } from '@aws-amplify/core';
import axios from "axios";
import {collectionData} from '../data/collectionData';

export function useCollectionInfo(targetChain, targetAddress) {

    console.log("useCollectionInfo start", targetChain, targetAddress);

    const [collectionInfo, setCollectionInfo] = useState([]);

    useEffect(() => {
        const getCollectionInfo = async () => {

            let nowCollectionInfo = {};

            if (targetChain === undefined || targetChain === null || targetChain === "" || targetAddress === undefined || targetAddress === null || targetAddress === "") {
                setCollectionInfo(nowCollectionInfo);
                return nowCollectionInfo;
            }

            // 設定ファイルから取得する
            const collectionInfoFromProps = collectionData[targetChain.replace(/[^0-9a-z]/g, '') + "_" + targetAddress];
            console.log("collectionInfo", targetChain.replace(/[^0-9a-z]/g, '') + "_" + targetAddress, collectionInfoFromProps);

            // 設定がなければ終了
            if (collectionInfoFromProps === undefined || collectionInfoFromProps === null) {
                setCollectionInfo(nowCollectionInfo);
                return nowCollectionInfo;
            }

            // 外部URLがなければ設定ファイルの内容を返して終了
            if (collectionInfoFromProps !== undefined && collectionInfoFromProps !== null
                    && (collectionInfoFromProps.collectionInfoUrl === undefined || collectionInfoFromProps.collectionInfoUrl === null || collectionInfoFromProps.collectionInfoUrl === "")) {
                nowCollectionInfo = collectionInfoFromProps;
                setCollectionInfo(nowCollectionInfo);
                return nowCollectionInfo;
            }

            // 外部URLがある場合はURLから取得する
            const collectionInfoURL = collectionInfoFromProps.collectionInfoUrl;
            const res = await axios.get(collectionInfoURL);
            console.log("axios.get", res.data);

            try {
                nowCollectionInfo = JSON.parse(res.data);
            } catch (error) {
                nowCollectionInfo = JSON.parse(JSON.stringify(res.data));
            }

            setCollectionInfo(nowCollectionInfo);

            return nowCollectionInfo;
        }

        getCollectionInfo();

    }, [targetChain, targetAddress])

    console.log("useCollectionInfo return", collectionInfo);
    return collectionInfo;

}
