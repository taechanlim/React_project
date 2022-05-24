import React, { FC, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Main from './main'
import MyAnimal from './my-animal'
import SaleAnimal from './sale-animal'


const marketApp: FC = () => {
const [account, setAccount] = useState<string>(""); //메타마스크 주소를 담는 state

// 계정을 가져오는 코드
const getAccount = async () => {
try {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        setAccount(accounts[0]); // 객체를 불러움
    }
    } catch (error) {
        // 이더리움이 없는 경우
        console.error(error);
    }
};

useEffect(() => {
    getAccount();
}, [account]);


return (
    <Router>
        <Layout>
        <Routes>
            <Route path="/" element={<Main account={account}/>} />
            <Route path="my-animal" element={<MyAnimal account={account} />} />
            <Route path="sale-animal" element={<SaleAnimal account={account} />} />
        </Routes>
        </Layout>
    </Router>
    );
};

export default marketApp;