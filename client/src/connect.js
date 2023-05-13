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


// get individual item details from QR id.
export const getItem = async (_id, _callback) => {
  // _id = "0x8b85578df4f8ccad6d617eea0907c7bba879b1dda139df26c351b8f432a32604";
  console.log(_id);
  // _id = "0xd0431b44d3911afee99f5fe6774d8e5ab50d24030cb04d45a60597cbf09f9696"
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


// creating new product by the manufacturer
export const createItem = async (name, manuName, retailerName, retailerAddr, mrp, packOf, location, _callback) => {
  // dummy data
  // let _name, _retailerName, _retialerAddress, _expiry, _price, _packof, _location;
  // _name = "Oppo Mobile";
  // _retailerName = "Dhankawadi Electronics";
  // _retialerAddress = "0x583031D1113aD414F02576BD6afaBfb302140225";
  // _expiry = 0;
  // _price = 4999;
  // _packof = 1;
  // _location = "Banglore";

  console.log(name, manuName, retailerName, retailerAddr, mrp, packOf, location);
  const wallet = await isWalletExist();
  if (wallet) {
    const accs = await window.ethereum.enable();
    const acc = accs[0];
    sampleContract.methods
      .create(name, manuName, retailerName, retailerAddr, mrp, packOf, location)
      .estimateGas()
      .then(gas => {
        return sampleContract.methods
          .create(name, manuName, retailerName, retailerAddr, mrp, packOf, location)
          .send({
            from: acc,
            gas,
          })
          .then(res => {
            console.log(res.events.details.returnValues);
            _callback(res.events.details.returnValues);
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

// export const remove = async (id) => {
//   const wallet = await isWalletExist();
//   if (wallet) {
//     const accs = await window.ethereum.enable();
//     const acc = accs[0];
//     let gas = await sampleContract.methods.remove(id).estimateGas();
//     console.log("gas", gas);

//     return sampleContract.methods.remove(id).send({
//       from: acc,
//       gas,
//     });
//   }
// };

// for intermediate, make next transaction
export const verifyAndNext = async (prodID, int_name, nextAddr, loc, _callback) => {
  const wallet = await isWalletExist();
  if (wallet) {
    const accs = await window.ethereum.enable();
    const acc = accs[0];
    sampleContract.methods
      .next_location(prodID, int_name, nextAddr, loc)
      .estimateGas()
      .then(gas => {
        return sampleContract.methods
          .next_location(prodID, int_name, nextAddr, loc)
          .send({
            from: acc,
            gas,
          })
          .then(res => {
            console.log(res.events.details.returnValues);
            _callback(res.events.details.returnValues);
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

// to fetch all the products in the blockchain
export const getAllItems = async(_callback) => {
  const wallet = await isWalletExist();
  if (wallet) {
    const accs = await window.ethereum.enable();
    const acc = accs[0];
    sampleContract.methods
      .get_all()
      .estimateGas()
      .then(gas => {
        return sampleContract.methods
          .get_all()
          .send({
            from: acc,
            gas,
          })
          .then(res => {
            console.log(res.events.details.returnValues);
            _callback(res.events.details.returnValues);
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
}

export const sellItem = async(_id, _callback) => {
  const wallet = await isWalletExist();
  if (wallet) {
    const accs = await window.ethereum.enable();
    const acc = accs[0];
    sampleContract.methods
      .invalidate(_id)
      .estimateGas()
      .then(gas => {
        return sampleContract.methods
          .invalidate(_id)
          .send({
            from: acc,
            gas,
          })
          .then(res => {
            console.log(res.events.details.returnValues);
            _callback(res.events.details.returnValues);
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
}

