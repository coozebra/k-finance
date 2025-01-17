import { BigNumber } from "ethers";
// import { tokens } from "../../tests/_helpers/arbitrumAddresses";

// arbitrum
export const USD_FEEDS = {
  wbtc: "0xd0C7101eACbB49F3deCcCc166d238410D6D46d57",
  weth: "0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612",
  link: "0x86E53CF1B870786351Da77A57575e79CB55812CB",
  usdc: "0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3",
  uni: "0x9C917083fDb403ab5ADbEC26Ee294f6EcAda2720",
  arb: "0xb2A824043730FE05F3DA2efaFa1CBbe83fa548D6",
  gmx: "0xDB98056FecFff59D032aB628337A4887110df3dB",
  ldo: "0xA43A34030088E6510FecCFb77E88ee5e7ed0fE64",
  stg: "0xe74d69E233faB0d8F48921f2D93aDfDe44cEb3B7",
};

// goerli eth
// export const USD_FEEDS = {
//   usdc: "0xAb5c49580294Aff77670F839ea425f5b78ab3Ae7",
//   dai: "0x0d79df66BE487753B02D015Fb622DED7f0E9798d",
//   weth: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e", // ETH/USD
//   wbtc: "0xA39434A63A52E749F02807ae27335515BA4b07F7", // BTC/USD
//   link: "0x48731cF7e84dc94C5f84577882c14Be11a5B7456",
// };

export const HEARTBEAT = {
  wbtc: 86400,
  weth: 86400,
  link: 3600,
  usdc: 86400,
  uni: 86400,
  arb: 86400,
  gmx: 86400,
  ldo: 86400,
  stg: 86400,
};

export const TOKENS = {
  wbtc: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
  weth: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  link: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
  usdc: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  uni: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
  arb: "0x912CE59144191C1204E64559FE8253a0e49E6548",
  gmx: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
  ldo: "0x13Ad51ed4F1B7e9Dc168d8a00cB3f4dDD85EfA60",
  stg: "0x6694340fc020c5E6B96567843da2df01b2CE1eb6",
};

export const LENS_ADDRESS = "0x6C1800A0c3E74B9bEf9c823083F87BA2CDAd915F";
export const GMX_LIBRARY_ADDRESS = "0x31A6DDb552B54819F51562F51eDC9806F3CAF1A4";
export const UNISWAP_ADAPTER_ADDRESS =
  "0xd2f50E98CB569A59bc5dCD715dbD403AB0F2A206";
export const ADAPTER_REGISTRY_ADDRESS =
  "0x0E4f0e741Beac1e25d97088eaaF29968D076cA52";
export const WALLET_IMPLEMENTATION_ADDRESS =
  "0xc0BFa27C0Ff6b11A900a5f33d41Ad2D785dfD9B1";
export const VAULT_IMPLEMENTATION_ADDRESS =
  "0x69b8f4b25575ca0214aB26DFC4aD5D363da5e1Ec";
export const FACTORY_ADDRESS = "0x10459D450917D93078c8f753e13c80d60Ab7006C";
export const GMX_OBSERVER_ADDRESS =
  "0x82E4357B9063D96A52a07c9761640473AC700D6F";
export const TRADER_WALLET_INSTANCE_ADDRESS =
  "0x5acF02b371e3DF1cbC88e321BaE8D6d3ab819265";
export const USERS_VAULT_INSTANCE_ADDRESS =
  "0xcCb35FD614E36323aa83eF45b5544822eF48130e";
export const DYNAMIC_VALUATION_ADDRESS =
  "0x25117d2df54685035454a862f137d58B7393052C";

export const WHITELISTED_TRADERS = [
  "0x27FB72101CB0481213af9104238E3813ec52A47b",
  "0x684c0FAa5dCA895e42C9D14DE7EDC91F3464Afd1",
  "0xfE74f148E2e329F4b982794cA5A625278b96200b",
  "0x40947715F596973d4cB037725a12694E77EDB00C",
  "0xc65b34186D8af9c48EF3a6C1aE4079841EE62a72",
  "0x8850F319334a0A7219402B82Fb99F62bAF2B6738",
  "0x53f98Ecf031CAaEEfe3165bbFc38E9764567bEC0",
  "0x27877bCc963D192b0AF446889Ec154b449eF7769",
  "0xf0eb714cC19775052f20CCb017a2BEe740d0F2e9",
  "0xCaF3c3B3c08d3311a230dd4ae5c3cd429d0cb6FD",
  "0x78BdeFf0d8d4598FE6cC8d874aFEFaBb75599cc9",
  "0x1Cf267B5ff3EA416F166404dCA2e1A4F423901Fe",
  "0x6518A7EBDc5944555E4Ac5E79159cFB011E93dd8",
  "0xDCC7B49A983430ab148a6E2fFC90b535C522ce79",
  "0xF59D4A9258C834e1deC6a728535303413d529E0B",
  "0x0d26efe1748e1C6e222888E35B2aDA1999Dc931A",
];

export const UNDERLYING_TOKEN_ADDRESS = TOKENS.usdc;
export const SHARES_NAME = "UsersVaultShares";
export const SHARES_SYMBOL = "UVS";
export const SEQUENCER_UPTIME = "0xFdB631F5EE196F0ed6FAa767959853A9F217697D";
export const FEE_RATE: BigNumber = BigNumber.from("25000000000000000");
