const {ethers} = require("hardhat");
require("dotenv").config({path:".env"});
async function main() {

  const NGOCroudFundingContract = await ethers.getContractFactory("crowdfunding");

  const deployNGOContract = await NGOCroudFundingContract.deploy(  );

  console.log("NGO Croud Contract Address",deployNGOContract.address);
}


main()
.then(() => process.exit(0))
.catch((error) => { console.error(error);
process.exit(1); });
