// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract conV1 {
    string[] temp;
    // Product structure
    struct Product{
        bool isvalid;
        string name;
        string retailerName;
        address currentOwner;
        address retailerAddr;
        uint manufacturingDate;
        uint expiry;
        uint price;
        uint packof;
        string[] locations;
    }

    // map of product ID to product struct.
    mapping(bytes32 => Product) public Products;

    // if the product with given id exists on blockchain
    modifier exists(bytes32 _id) {
        require ((Products[_id].manufacturingDate) != 0, "Invalid Id, Product with given ID does not exist on this blockchain!"); 
        _;
    }

    //events
    event created(bytes32 ret_id);
    event removed(bool ret_value);
    event added_next(bool ret_value);
    event verify(bool ret_value);
    event details(Product ret_data);
    event invalidated(bool ret_value);

    // method to create new product onto blockchain
    function create(string memory _name, string memory _retailerName, address _retailerAddr, uint _expiry, uint _price, uint _packof, string memory _location) public{
        temp = [_location];
        Product memory newProduct = Product(
            true, 
            _name, 
            _retailerName,
            msg.sender,
            _retailerAddr,
            block.timestamp, 
            _expiry,
            _price, 
            _packof, 
            temp 
        );
        bytes32 id = keccak256(abi.encodePacked(
            _name, 
            _retailerName,
            msg.sender,
            _retailerAddr,
            block.timestamp, 
            _expiry,
            _price, 
            _packof
        ));
        Products[id] = newProduct;
        emit created(id);
    }

    function remove(bytes32 _id) public exists(_id){
        delete Products[_id];
        emit removed(true);
    }

    // returns true if the user current owner of product
    function verify_user(bytes32 _id) public exists(_id) returns(bool){
        bool val = (Products[_id].currentOwner == msg.sender) ? true : false;
        emit verify(val);
        return val;
    }

    // updates current location of product
    function next_location(bytes32 _id, address _addr, string memory _loc) public exists(_id){
        if (Products[_id].currentOwner == msg.sender){
            Products[_id].currentOwner = _addr;
            Products[_id].locations.push(_loc);
            emit added_next(true);
        }
        else emit added_next(false);
    }

    // returns entire product from given product ID
    function get_details(bytes32 _id) public exists(_id){
        emit details(Products[_id]);
    }

    // to invalidate the product
    function invaidate(bytes32 _id) public exists(_id){
        if (Products[_id].isvalid == true){
            Products[_id].isvalid = false;
            emit invalidated(true);
        }
        else emit invalidated(false);

    }
}