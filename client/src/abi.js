export const sample_abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "ret_value",
        "type": "bool"
      }
    ],
    "name": "added_next",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "ret_id",
        "type": "bytes32"
      }
    ],
    "name": "created",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isvalid",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "manufacturerName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "retailerName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "manufacturerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "currentOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "retailerAddr",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "packof",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "loc_Size",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "status",
        "type": "string"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "int_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "date",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct conV1.Transit[]",
        "name": "history",
        "type": "tuple[]"
      }
    ],
    "name": "details",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "internalType": "bool",
            "name": "isvalid",
            "type": "bool"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "manufacturerName",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "manufacturerAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "currentOwner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "status",
            "type": "string"
          }
        ],
        "indexed": false,
        "internalType": "struct conV1.MinProduct[]",
        "name": "products",
        "type": "tuple[]"
      }
    ],
    "name": "getall",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "ret_value",
        "type": "bool"
      }
    ],
    "name": "invalidated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "ret_value",
        "type": "bool"
      }
    ],
    "name": "removed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "ret_value",
        "type": "bool"
      }
    ],
    "name": "verify",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "Products",
    "outputs": [
      {
        "internalType": "bool",
        "name": "isvalid",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "manufacturerName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "retailerName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "manufacturerAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "currentOwner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "retailerAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "packof",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "loc_Size",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "status",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_ProductName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_manuName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_retailerName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_retailerAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_packof",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_location",
        "type": "string"
      }
    ],
    "name": "create",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_id",
        "type": "bytes32"
      }
    ],
    "name": "remove",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_id",
        "type": "bytes32"
      }
    ],
    "name": "verify_user",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_id",
        "type": "bytes32"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_loc",
        "type": "string"
      }
    ],
    "name": "next_location",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_id",
        "type": "bytes32"
      }
    ],
    "name": "get_details",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_id",
        "type": "bytes32"
      }
    ],
    "name": "invaidate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get_all",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]