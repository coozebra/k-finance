import { ethers, upgrades } from "hardhat";
import {
  ContractTransaction,
} from "ethers";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  TEST_TIMEOUT,
  ZERO_ADDRESS,
} from "./../_helpers/constants";
import { AdaptersRegistry } from "../../typechain-types";

let deployer: SignerWithAddress;
let nonAuthorized: SignerWithAddress;
let owner: SignerWithAddress;

let deployerAddress: string;
let ownerAddress: string;

let adaptersRegistryContract: AdaptersRegistry;

const adapter1Address: string = "0xDB76DDbfe0640005aeeACe5449a301EdEa1dE360";

let txResult: ContractTransaction;

describe("AdaptersRegistry Tests", function() {
	this.timeout(TEST_TIMEOUT);

	before(async () => {
		[deployer, nonAuthorized] = await ethers.getSigners();
		[deployerAddress] = await deployer.getAddress();

		const AdaptersRegistryFactory = await ethers.getContractFactory(
			"AdaptersRegistry"
		);
		adaptersRegistryContract = (await upgrades.deployProxy(
			AdaptersRegistryFactory,
			[]
		)) as AdaptersRegistry;
		await adaptersRegistryContract.deployed();
	});

	describe("Adapters Registry tests: ", function() {
		before(async () => {
			owner = deployer;
			ownerAddress = deployerAddress;
		});

		describe("WHEN trying to add a new protocol and adapter", async () => {
			describe("WHEN calling with invalid caller or parameters", function() {
				describe("WHEN caller is not owner", function() {
					it("THEN it should fail", async () => {
						await expect(
							adaptersRegistryContract
								.connect(nonAuthorized)
								.addAdapterAddress(adapter1Address)
						).to.be.revertedWith("Ownable: caller is not the owner");
					});
				});
				describe("WHEN adapter address is zero address", function() {
					it("THEN it should fail", async () => {
						await expect(
							adaptersRegistryContract
								.addAdapterAddress(ZERO_ADDRESS)
						).to.be.revertedWithCustomError(
							adaptersRegistryContract,
							"ZeroAddress"
						).withArgs("_adapterAddress");
					});
				});
			});

			describe("WHEN calling with correct caller and address", function() {
				before(async () => {
					txResult = await adaptersRegistryContract
						.addAdapterAddress(adapter1Address);
				});
				it("THEN new address should be stored", async () => {
					const result = await adaptersRegistryContract.allValidProtocols()
					expect(
						result.length
					).to.equal(1);
					expect(
						result[0]
					).to.equal(1);					
				});
				it("THEN it should emit an Event", async () => {
					await expect(txResult)
						.to.emit(adaptersRegistryContract, "AdapterAdded")
						.withArgs(adapter1Address);
				});
			});
		});
	});
});