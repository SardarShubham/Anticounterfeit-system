// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract conV1 {    
    // transaction detail
    struct Transit{
        string int_name;
        string location;
        uint date;
    }
    // Product structure
    struct Product{
        bool isvalid;
        string name;
        string manufacturerName;
        string retailerName;
        address manufacturerAddress;
        address currentOwner;
        address retailerAddr;
        uint price;
        uint packof;
        uint loc_Size;
        mapping(uint => Transit) history;
    }

    // bare minimum product struct
    struct MinProduct{
        bytes32 id;
        bool isvalid;
        string name;
        string manufacturerName;
        address manufacturerAddress;
        address currentOwner;
    }

    uint totalProducts = 0;
    bytes32[] ProductIDs = new bytes32[](1000);
    // map of product ID to product struct.
    mapping(bytes32 => Product) public Products;

    // if the product with given id exists on blockchain
    modifier exists(bytes32 _id) {
        require ((Products[_id].price) != 0, "Invalid Id, Product with given ID does not exist on this blockchain!"); 
        _;
    }

    //events
    event created(bytes32 ret_id);
    event removed(bool ret_value);
    event added_next(bool ret_value);
    event verify(bool ret_value);
    event details(
        bool isvalid,
        string name,
        string manufacturerName,
        string retailerName,
        address manufacturerAddress,
        address currentOwner,
        address retailerAddr,
        uint price,
        uint packof,
        uint loc_Size,
        Transit[] history
    );
    event getall(MinProduct[] products);
    event invalidated(bool ret_value);

    // method to create new product onto blockchain
    function create(string memory _ProductName, string memory _manuName, string memory _retailerName, address _retailerAddr, uint _price, uint _packof, string memory _location) public{
        Transit memory newtransit = Transit(
            _manuName,
            _location,
            block.timestamp
        );
        // temp = [newtransit];
        bytes32 id = keccak256(abi.encodePacked(
            _ProductName, 
            _manuName,
            _retailerName,
            msg.sender,
            _retailerAddr,
            _price, 
            _packof
        ));

        Product storage newP = Products[id];
        newP.isvalid = true;
        newP.name = _ProductName;
        newP.manufacturerName = _manuName;
        newP.retailerName = _retailerName;
        newP.manufacturerAddress = msg.sender;
        newP.currentOwner = msg.sender;
        newP.retailerAddr = _retailerAddr;
        newP.price = _price;
        newP.packof = _packof; 
        newP.loc_Size = 1;
        newP.history[0] = newtransit;
        ProductIDs[totalProducts] = id;
        totalProducts++;
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
    function next_location(bytes32 _id, string memory _name, address _addr, string memory _loc) public exists(_id){
        Product storage P = Products[_id];
        if (P.currentOwner == msg.sender){
            Transit memory newtransit = Transit(
                _name,
                _loc,
                block.timestamp
            );
            P.currentOwner = _addr;
            P.history[P.loc_Size] = newtransit;
            P.loc_Size++;
            emit added_next(true);
        }
        else emit added_next(false);
    }

    // returns entire product from given product ID
    function get_details(bytes32 _id) public exists(_id){
        Product storage P = Products[_id];
        Transit[] memory ret_locs = new Transit[](P.loc_Size);
        for(uint i=0; i<P.loc_Size; i++){
            ret_locs[i] = P.history[i];
        }
        emit details(
            P.isvalid,
            P.name,
            P.manufacturerName,
            P.retailerName,
            P.manufacturerAddress,
            P.currentOwner,
            P.retailerAddr,
            P.price,
            P.packof,
            P.loc_Size,
            ret_locs
        );
    }

    // to invalidate the product
    function invaidate(bytes32 _id) public exists(_id){
        if (Products[_id].isvalid == true){
            Products[_id].isvalid = false;
            emit invalidated(true);
        }
        else emit invalidated(false);

    }

    function get_all() public {
        MinProduct[] memory prodArray = new MinProduct[](totalProducts);
        for(uint i=0; i<totalProducts; i++){
            prodArray[i] = MinProduct(
                ProductIDs[i],
                Products[ProductIDs[i]].isvalid,
                Products[ProductIDs[i]].name,
                Products[ProductIDs[i]].manufacturerName,
                Products[ProductIDs[i]].manufacturerAddress,
                Products[ProductIDs[i]].currentOwner
            );
        }
        emit getall(prodArray);
    }
}