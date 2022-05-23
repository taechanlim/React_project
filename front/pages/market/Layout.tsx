import Link from 'next/link';
import React, { FC, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const marketLayout = () => {
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

  return(
    <>
      <ul>
        <li>
        <Link href='/user/market/my-animal'>
          <button>My Animal</button>
        </Link>
        </li>
        <li>
        <Link href='/user/update/sale-animal'>
          <button>Sale Animal</button>
        </Link>
        </li>
      </ul>    
    </>
  );
}
export default marketLayout;