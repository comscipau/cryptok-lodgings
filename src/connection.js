import Web3 from "web3";
import { raffleABI,bep20 } from "./abi";


var web3;
export var connectedAccount=null;
var raffle;
var USD;
export var prizePOOL;
export const getFactoryContract = async ()=>{
    web3 = new Web3(window.ethereum);
    raffle = await new web3.eth.Contract(raffleABI,"0x526C9b7B52C7Cc834Ec0B495Dc4D1060ff9a6c80");
    USD = await new web3.eth.Contract(bep20,'0x75e88D430880d4FD4C7ed99267d0ef27ac10aEa9');
    console.log(raffle._address);
    prizePOOL = await USD.methods.balanceOf(raffle._address).call()/1e18;
    console.log(prizePOOL);
}

export const connectToWeb3 = async ()=>{

    await window.ethereum.request({method:"eth_requestAccounts"});
    connectedAccount = await web3.eth.getAccounts();
    console.log(connectedAccount[0]);
    prizePOOL = await USD.methods.balanceOf(raffle._address).call()/1e18;
}

export const approveUSD=async ()=>{
    var tx = await USD.methods.approve("0x526C9b7B52C7Cc834Ec0B495Dc4D1060ff9a6c80",web3.utils.toWei("10")).send({from:connectedAccount[0]});
    prizePOOL = await USD.methods.balanceOf(raffle._address).call()/1e18;
    return [tx.blockHash];
}

export const participate = async()=>{
    var tx= await raffle.methods.takePart().send({from:connectedAccount[0]})
    prizePOOL = await USD.methods.balanceOf(raffle._address).call()/1e18;
    return [tx.blockHash];
}