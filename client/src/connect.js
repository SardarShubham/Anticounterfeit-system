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
    let con_addr = "0x4dA95Dc5A8bcf36bEaEe693b2e3E9aFF82768A32";
    sampleContract = new web3.eth.Contract(sample_abi, con_addr);
    return true;
  }
  return false;
};

  export const fetchDetails = async (_id, _callback) => {
    // _id = "0x8b85578df4f8ccad6d617eea0907c7bba879b1dda139df26c351b8f432a32604";
    console.log(_id);
    _id = "0xd0431b44d3911afee99f5fe6774d8e5ab50d24030cb04d45a60597cbf09f9696"
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
  // dummy data
  let _name, _retailerName, _retialerAddress, _expiry, _price, _packof, _location;
  _name = "Oppo Mobile";
  _retailerName = "Dhankawadi Electronics";
  _retialerAddress = "0x583031D1113aD414F02576BD6afaBfb302140225";
  _expiry = 0;
  _price = 4999;
  _packof = 1;
  _location = "Banglore";

  console.log(name, accAddress, exp_date, mrp, packOf, location);
  const wallet = await isWalletExist();
  if (wallet) {
    const accs = await window.ethereum.enable();
    let acc = accs[0];
    console.log(typeof accAddress, accAddress);

    // let _gas = await sampleContract.methods
    //   .create(_name, _retailerName, _retialerAddress, _expiry, _price, _packof, _location)
    //   .estimateGas();
    // console.log("gas", _gas);
    // let _gas = 99999;

    return sampleContract.methods
      .create(_name, _retailerName, _retialerAddress, _expiry, _price, _packof, _location)
      .send({
        from: acc,
        gas:'1000000',
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
  // prodID = "0x8b85578df4f8ccad6d617eea0907c7bba879b1dda139df26c351b8f432a32604";
  // nextAddr = "0x9573c561cae253dAb2cf64f0F993252Ea66300F3";
  // loc = "D";
  const wallet = await isWalletExist();
  if (wallet) {
    const accs = await window.ethereum.enable();
    const acc = accs[0];
    owner = acc;
    console.log(prodID, nextAddr, loc)
    // let gas = await sampleContract.methods.next_location(prodID, nextAddr, loc).estimateGas();
    let gas = 99999;
    console.log("gas", gas);
    console.log("ow", owner)

    console.log(prodID, nextAddr, loc)
    console.log(typeof(prodID));
    console.log(typeof(nextAddr));
    console.log(typeof(loc));
    // let gas = await sampleContract.methods.next_location(
    //   prodID,
    //   nextAddr, 
    //   loc
    //    ).estimateGas();
    // let gas = 99999;
    console.log("gas", gas);
    return sampleContract.methods.next_location(
      prodID,
      nextAddr, 
      loc
      ).send({
      from: acc,
      gas,
    });

    // let g = await sampleContract.methods.verify_user(prodID)
    // .estimateGas();
    // console.log(g);
    // return sampleContract.methods.verify_user(prodID)
    // .send({
    //   from : acc,
    //   g
    // });
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
