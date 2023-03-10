import Web3 from "web3";
import { sample_abi } from "./abi";

let sampleContract;
let isRemoved, fetchId;
let owner = "";

// to validate if metamask exist
export const isWalletExist = async () => {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);
    let web3 = new Web3(Web3.givenProvider);
    let con_addr = "0xc8fBAf6Fc9331a4a97FB93FB743f97677CaF2627";
    sampleContract = new web3.eth.Contract(sample_abi, con_addr);
    return true;
  }
  return false;
};

  export const fetchDetails = async (_id, _callback) => {
    console.log(_id);
    const wallet = await isWalletExist();
    if (wallet) {
      const accs = await window.ethereum.enable();
      const acc = accs[0];
      sampleContract.methods
        .get_details(_id)
        .estimateGas()
        .then(gas => {
          return sampleContract.methods
          .get_details(_id)
          .send({
              from: acc,
              gas,
            })
            .then(res => {
              console.log(res.events.details.returnValues.ret_data);
              _callback(res.events.details.returnValues.ret_data);
            })
            .catch((err) => {
              console.log(err);
              alert("Something went wrong", err);
            });
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong", err);
        });
    }
  };
export const create = async (name, accAddress, exp_date, mrp, packOf, location) => {
  console.log(name, accAddress, exp_date, mrp, packOf, location);
  const wallet = await isWalletExist();
  if (wallet) {
    const accs = await window.ethereum.enable();
    let acc = accs[0];
    console.log(typeof accAddress, accAddress);

    let gas = await sampleContract.methods
      .create(name, accAddress, exp_date, mrp, packOf,location)
      .estimateGas();
    console.log("gas", gas);

    return sampleContract.methods
      .create(name, accAddress, exp_date, mrp, packOf, location)
      .send({
        from: acc,
        gas,
      });
  }
};

export const remove = async (id) => {
  const wallet = await isWalletExist();
  if (wallet) {
    const accs = await window.ethereum.enable();
    const acc = accs[0];
    let gas = await sampleContract.methods.remove(id).estimateGas();
    console.log("gas", gas);

    return sampleContract.methods.remove(id).send({
      from: acc,
      gas,
    });
  }
};

export const verifyAndNext = async(prodID, nextAddr ,loc)=>{
  const wallet = await isWalletExist();
  if (wallet) {
    const accs = await window.ethereum.enable();
    const acc = accs[0];
    owner = acc;
    console.log(prodID, nextAddr, loc)
    let gas = await sampleContract.methods.next_location(prodID, nextAddr, loc).estimateGas();
    console.log("gas", gas);
    console.log("ow", owner)
    return sampleContract.methods.next_location(prodID, nextAddr, loc).send({
      from: acc,
      gas,
    });
  }
};





// export const addNext = async(prodID, next_addr)=>{

//   const wallet = await isWalletExist();
//   if (wallet) {
//     const accs = await window.ethereum.enable();
//     const acc = accs[0];
//     owner = acc;
//     let gas = await sampleContract.methods.verify_user(prodID, next_addr).estimateGas();
//     console.log("gas", gas);
//     console.log("ow", owner)
//     sampleContract.methods.verify_user(prodID, next_addr).send({
//       from: acc,
//       gas,
//     })
//     .then((res)=>{
//      console.log(res)
//     }).catch((err)=>{
//       console.log(err)
//     })
//   }
// };
