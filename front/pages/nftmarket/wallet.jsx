import Web3 from 'web3';
import React, {useState, useEffect} from 'react';
import erc721Abi from './erc721Abi';
// import TokenList from './component/TokenList.js';
const axios = require('axios')



function Wallet() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');
  const [newErc721addr, setNewErc721addr] = useState();
  const [erc721list, setErc721list] = useState([]);
  const [pressBtn, setPressBtn] = useState(false);
  const [pressStart, setPressStart] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    if(typeof window.ethereum != "undefined"){
      try{
        const web = new Web3(window.ethereum);
        setWeb3(web);
      }catch(err){
        console.log(err);
      }
    }
  },[]);

// 메타마스크로부터 계정을 연결 && 계정 주소를 상태로 저장
  const connectWallet = async () =>{ 
    const accounts = await window.ethereum.request({ // 메타마스크 지갑과 연결된 계정 정보를 받는 JSON-RPC Call API
      method: "eth_requestAccounts",
    })
    setAccount(accounts[0]);
  }
  
  useEffect(()=>{
    if(account != ''){
      try{
        async function fetchData() {
          const token = document.cookie
          const body = {wallet:account,token}
          const response = await axios.post('http://localhost:4001/api/user/wallet',body)
        }
        fetchData();
      }catch(err){
        console.log(err);
      }
    }
  },[account]);
  
  
  

  const addNewErc721Token = async() =>{
    setLoading(true);
    setPressBtn(true);
    const tokenContract = await new web3.eth.Contract(erc721Abi, newErc721addr); // 컨트랙트의 ABI와 주소로 *컨트랙트 객체 생성*
    console.log(tokenContract);
    console.log(erc721Abi);

    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

    let arr = [];
    for(let i = 1; i <= totalSupply; i++){
      arr.push(i);
    }

    for(let tokenId of arr){
      const tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();

      if(String(tokenOwner).toLowerCase() === account){
        const tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
        setErc721list((prev)=>{
          return [...prev, {name, symbol, tokenId, tokenURI}];
        })
      }
    }
    setLoading(false);
  }


  return (
    <div >
      <div style={{width:'100%',marginTop:'55px'}}>
        <button
          style={{background:'#FFFFFF', border:'1.5px solid lightgray',width:'100%',height:'80px',marginTop:'40px',borderRadius:'10px 10px 10px 10px'}}
          onClick={()=>{
            connectWallet();
            setPressStart(true);
            console.log('위치 확인')
          }}
        >
          {pressStart ? account : "Connect Wallet"}
        </button>
        </div>
    </div>
  );
}

export default Wallet;
