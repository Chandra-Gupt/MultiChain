import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Status from "./Status";
import { useAccount, useDisconnect, useSwitchNetwork, useBalance } from "wagmi";
import Web3 from "web3";


function Swap(props) {
  const [statusModalShow, setStatusModalShow] = React.useState(false);
  const [txHash,setTxHash]=useState();
  const { address, isConnected, isConnecting, isDisconnected } = useAccount();
  const [toAddress,setToAddress]=useState();
  const [ progress,setProgress]= useState(0);
  const selectData=props?.selectData;
  const newData=props?.newData;
  const deschainId=props?.deschainId;
  const tokenvalue=props?.tokenvalue;
  const initialchainData=props?.initialchainData
  const destinationchainData=props?.destinationchainData
  const targettokenvalue=props?.targettokenvalue
  const toaddress=props?.toAddresss
  const setSwapModalShow=props?.setSwapModalShow

  const [isLoading,setIsLoading]=useState(false);
  // console.log("selectData",toAddress)
  useEffect(()=>{
    if(toaddress!=undefined){
      setToAddress(toaddress)
    }else{
      setToAddress(address)
    }
    

  },[toaddress,address])

  // console.log(txHash,"kkkkkkkk")
  
  
  async function swap() {
    setIsLoading(true);
    // setStatusModalShow(true);
    var abi = [
      {
      "inputs": [
      {
      "internalType": "address",
      "name": "token",
      "type": "address"
      },
      {
      "internalType": "address",
      "name": "to",
      "type": "address"
      },
      {
      "internalType": "uint256",
      "name": "toChainID",
      "type": "uint256"
      }
      ],
      "name": "anySwapOutNative",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
      },
      {
      "inputs": [
      {
      "internalType": "address",
      "name": "token",
      "type": "address"
      },
      {
      "internalType": "address",
      "name": "to",
      "type": "address"
      },
      {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
      },
      {
      "internalType": "uint256",
      "name": "toChainID",
      "type": "uint256"
      }
      ],
      "name": "anySwapOutUnderlying",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
      },
      {
      "inputs": [
      {
      "internalType": "address",
      "name": "token",
      "type": "address"
      },
      {
      "internalType": "address",
      "name": "to",
      "type": "address"
      },
      {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
      },
      {
      "internalType": "uint256",
      "name": "toChainID",
      "type": "uint256"
      }
      ],
      "name": "anySwapOut",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
      },
      {
      "constant": false,
      "inputs": [
      {
      "name": "amount",
      "type": "uint256"
      },
      {
      "name": "bindaddr",
      "type": "string"
      }
      ],
      "name": "Swapout",
      "outputs": [
      {
      "name": "",
      "type": "bool"
      }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
      },
      {
      "constant": false,
      "inputs": [
      {
      "name": "_to",
      "type": "address"
      },
      {
      "name": "_value",
      "type": "uint256"
      }
      ],
      "name": "transfer",
      "outputs": [
      {
      "name": "",
      "type": "bool"
      }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
      },
      {
      "constant": true,
      "inputs": [
      {
      "name": "_owner",
      "type": "address"
      },
      {
      "name": "_spender",
      "type": "address"
      }
      ],
      "name": "allowance",
      "outputs": [
      {
      "name": "",
      "type": "uint256"
      }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
      },
      {
      "anonymous": false,
      "inputs": [
      {
      "indexed": true,
      "name": "owner",
      "type": "address"
      },
      {
      "indexed": true,
      "name": "spender",
      "type": "address"
      },
      {
      "indexed": false,
      "name": "value",
      "type": "uint256"
      }
      ],
      "name": "Approval",
      "type": "event"
      }
      ]
    var abi1 = [
      {"constant":false,
      "inputs":[{"name":"spender","type":"address"},
      {"name":"amount","type":"uint256"}],
      "name":"approve",
      "outputs":[{"name":"","type":"bool"}],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"},
      {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },{
      "constant": true,
      "inputs": [
          {
              "name": "_owner",
              "type": "address"
          },
          {
              "name": "_spender",
              "type": "address"
          }
      ],
      "name": "allowance",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }
    ];
    if(deschainId){
      const obj = selectData?.destChains[deschainId]
      var Token = Object.values(obj);
     
      // console.log(Token,"ddddddddddestination");
    }
    const anyToken=Token[0]?.fromanytoken?.address;
    var contract_address = Token[0]?.router;
    var contract_abi=Token[0]?.routerABI;
    // console.log(anyToken,"dddd");
    const appRoveAnyToken = selectData?.address;
    const amount = tokenvalue * 10 ** selectData?.decimals;
    const toChainID = deschainId;

    // console.log(amount, "hhhhhhhAmount");
    const web3 = new Web3(Web3.givenProvider);
    const tokenContract=new web3.eth.Contract(abi1,appRoveAnyToken)
    if(anyToken?.length>15){
      var contract = new web3.eth.Contract(abi, contract_address);
      
    }else{
      alert("This token swaping is not permitted")
    }
   
    if(Token[0]?.isApprove==true){
      const allowance= await tokenContract.methods.allowance(address, contract_address).call()
     
      if(allowance<=amount){
          const isapprove = await tokenContract.methods.approve(contract_address,  `${amount}`).send({
         from: address
         })
        //  console.log(isapprove, "approve");
      }
    }
    
     
     if(contract_abi=="anySwapOutUnderlying(fromanytoken,toAddress,amount,toChainID)"){
     const tx = await contract.methods
      .anySwapOutUnderlying(anyToken, toAddress, `${amount}`, toChainID)
      .send({
        from: address,
        
       
        gasLimit: '270000',
      });
      setStatusModalShow(true);
      setInterval(function(){transactionHash(tx.transactionHash)}, 5000);

      setTxHash(tx)
      console.log(tx)
     }else if (contract_abi=="anySwapOut(fromanytoken,toAddress,amount,toChainID)"){
      const tx = await contract.methods
      .anySwapOut(anyToken, toAddress, `${amount}`, toChainID)
      .send({
        from: address,
        
       
        gasLimit: '270000',
      });
      setStatusModalShow(true);
      setInterval(function(){transactionHash(tx.transactionHash)}, 5000);

      setTxHash(tx)
      console.log(tx)

     }else if (contract_abi=="anySwapOutNative(fromanytoken,toAddress,toChainID,{value: amount})"){
      const tx = await contract.methods
      .anySwapOutNative(anyToken, toAddress,toChainID)
      .send({
        from: address,
        
        value:`${amount}`,
        gasLimit: '270000',
      });
     setTxHash(tx)
     setStatusModalShow(true);
     setInterval(function(){transactionHash(tx.transactionHash)}, 5000);

     console.log(tx)
    }else if (contract_abi=="Swapout(amount,toAddress)"){
      const tx = await contract.methods
      .Swapout(`${amount}`,toAddress)
      .send({
        from: address,
        
       
        gasLimit: '270000',
      });
      setTxHash(tx)
      console.log(tx)
     if(tx?.status==true){      
      console.log(tx)
      setStatusModalShow(true);
      setInterval(function(){transactionHash(tx.transactionHash)}, 5000);
      
      alert("transaction success")
     }else{
      alert("transaction failed")
     }
    }
     
  }

  async function transactionHash(hash){
    try{
    const response = await axios.get(`https://scanapi.multichain.org/v3/tx/${hash}`)
    let status = (response.data.info.status)    
    if(status==0){
            setProgress(33)
          }else if(status==8){
            setProgress(66)
          }else if(status==9){
            setProgress(66)
          }else if(status==10){
            setProgress(99)
          }else{
            setProgress(0)
          }
  }catch(err){
    console.log(err)
  }
   
  }

  
  return (
    <Modal className=" swap-multi"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton onClick={()=>{setIsLoading(false)}}>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
      
  {/* Button trigger modal */}
 
  {/* Modal */}
 
  {/* <div className="modal-body"> */}
          <div className="swap-body">
            <p className="swap-review">Please review and confirm the details</p>
            <div className="swap-from">
              <div className="box1form">
                <h3>From</h3>
                <ul>
                  <li>
                    <img src={initialchainData?.logoUrl} alt="" />
                    <span>{initialchainData?.name}</span>
                  </li>
                  <li>
                    <small>-{tokenvalue} {selectData?.symbol}</small>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>Address</span>
                  </li>
                  <li>
                    <small>{address?.slice(0, 7) + "..." + address?.slice(-7)}</small>
                  </li>
                </ul>
              </div>
              <div className="box1form">
                <h3>To</h3>
                <ul>
                  <li>
                    <img src={destinationchainData?.logoUrl} alt="" />
                    <span>{destinationchainData?.name}</span>
                  </li>
                  <li>
                    <small>+{targettokenvalue} {newData?.symbol}</small>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>Address</span>
                  </li>
                  {toAddress!=undefined?
                  <li>
                    <small>{toAddress?.slice(0, 7) + "..." + toAddress?.slice(-7)}</small>
                  </li>:<li>
                    <small>{address?.slice(0, 7) + "..." + address?.slice(-7)}</small>
                  </li>}
                </ul>
              </div>
              <div className="cross-chainfee">
                <div className="same">
                  <ul>
                    <li>
                      <p>Crosschain fee</p>
                    </li>
                    <li>
                      <p>{(tokenvalue-targettokenvalue).toFixed(4)} {selectData?.name}(0.1%)</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>Estimated time of arrival</p>
                    </li>
                    <li>
                      <p>3-30 min</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
  
        <Status
          newData={newData}
          initialchainData={initialchainData}
          destinationchainData={destinationchainData}
          targettokenvalue={targettokenvalue}
           selectData={selectData}
           deschainId={deschainId}
           progress={progress}
           tokenvalue={tokenvalue}
           txHash={txHash}
          show={statusModalShow}
          onHide={() => setStatusModalShow(false)}
        />

      </Modal.Body>
      <Modal.Footer id="swap-footer">
      
       {isLoading?
   <div class="spinner-border" role="status">
   <span class="visually-hidden">Loading...</span>
 </div>: <button type="button" class="btn btn-primary swap-submit" onClick={swap}>Confirm</button>}
      </Modal.Footer>
    </Modal>
  );
}
export default Swap;

