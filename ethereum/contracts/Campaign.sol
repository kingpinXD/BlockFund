pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public deployedcampaigns;
    function createCampaign(uint min)public {
        address newcampaign=new Campaign(min,msg.sender);
        deployedcampaigns.push(newcampaign);
    }
    function getDeployedCampaigns()public view returns (address[]){
        return deployedcampaigns;
    }
    
}

contract Campaign {
    struct Request{
        string description;
        uint value;
        address recipients;
        bool iscomplete;
        uint approvalcount;
        mapping(address=>bool) list_approvals;
    }
    
    modifier only_manager(){
        require(msg.sender==manager);
        _;
    }
    modifier min_contribution(){
        require(msg.value>=minimum_contribution);
        _;
    }
    address public manager;
    uint public minimum_contribution;
    Request[] public  requests;
    mapping(address=>uint)public approvers;
    uint public approversCount;
    
    function Campaign (uint min,address creator) public {
        manager=creator;
        minimum_contribution=min;
    }
    function contribute()public payable min_contribution{
        
        if (approvers[msg.sender]==0) {
            approvers[msg.sender] = msg.value;
            approversCount++;    
        }
        else{
            approvers[msg.sender]+=msg.value;
        }
        
    }

    function createRequest(string description,uint value,address recipients)public only_manager
    {
        Request memory newrequest = Request({
            description:description,
            value:value,
            recipients:recipients,
            iscomplete:false,
            approvalcount:0
        }
        );
        requests.push(newrequest);
    }
    
    function approveRequest(uint req_index)public{
        Request storage active_request= requests[req_index];
        require(approvers[msg.sender]>0);
        require(!active_request.list_approvals[msg.sender]);
        active_request.list_approvals[msg.sender]=true;
        active_request.approvalcount++;
        
    }
    
    function finalzeRequest(uint req_index)public only_manager{
        Request storage active_request= requests[req_index];
        require(!active_request.iscomplete);
        require(active_request.approvalcount>=approversCount/2);
        active_request.iscomplete=true;
        active_request.recipients.transfer(active_request.value);
        
    }
    function getSummary() public view returns(uint,uint,uint,uint,address){
        return 
        (
        address(this).balance,
        minimum_contribution,
        requests.length,
        approversCount,
        manager
        );

    }
    function getRequestCount() public view returns(uint){
        return(requests.length);
    }
}