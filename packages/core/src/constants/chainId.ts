import { Mainnet, Ropsten, Rinkeby, Goerli, Kovan } from '../model/chain/ethereum'

export enum ChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  Kovan = 42,
  BSC = 56,
  BSCTestnet = 97,
  xDai = 100,
  Polygon = 137,
  Theta = 361,
  ThetaTestnet = 365,
  Moonriver = 1285,
  Mumbai = 80001,
  Harmony = 1666600000,
  Palm = 11297108109,
  Localhost = 1337,
  Hardhat = 31337,
  Fantom = 250,
  Avalanche = 43114,
  Songbird = 19,
  MoonbaseAlpha = 1287,
}

export const CHAIN_NAMES = {
  [Mainnet.chainId]: Mainnet.chainName,
  [Ropsten.chainId]: Ropsten.chainName,
  [Rinkeby.chainId]: Rinkeby.chainName,
  [Goerli.chainId]: Goerli.chainName,
  [Kovan.chainId]: Kovan.chainName,
  [ChainId.BSC]: 'BSC',
  [ChainId.BSCTestnet]: 'BSCTestnet',
  [ChainId.xDai]: 'xDai',
  [ChainId.Polygon]: 'Polygon',
  [ChainId.Theta]: 'Theta',
  [ChainId.ThetaTestnet]: 'ThetaTestnet',
  [ChainId.Moonriver]: 'Moonriver',
  [ChainId.Mumbai]: 'Mumbai',
  [ChainId.Harmony]: 'Harmony',
  [ChainId.Palm]: 'Palm',
  [ChainId.Localhost]: 'Localhost',
  [ChainId.Hardhat]: 'Hardhat',
  [ChainId.Fantom]: 'Fantom',
  [ChainId.Avalanche]: 'Avalanche',
  [ChainId.Songbird]: 'Songbird',
  [ChainId.MoonbaseAlpha]: 'Moonbase Alpha',
}

export const MULTICALL_ADDRESSES = {
  [Mainnet.chainId]: Mainnet.MULTICALL_ADDRESS,
  [Ropsten.chainId]: Ropsten.MULTICALL_ADDRESS,
  [Rinkeby.chainId]: Rinkeby.MULTICALL_ADDRESS,
  [Goerli.chainId]: Goerli.MULTICALL_ADDRESS,
  [Kovan.chainId]: Kovan.MULTICALL_ADDRESS,
  [ChainId.BSC]: '0x41263cba59eb80dc200f3e2544eda4ed6a90e76c',
  [ChainId.BSCTestnet]: '0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C',
  [ChainId.xDai]: '0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a',
  [ChainId.Polygon]: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
  [ChainId.Theta]: '0xe2ec58a54f3ab2714eddbae87533793011f1e14e',
  [ChainId.ThetaTestnet]: '0xf822bf2e728e264c58d7618022addd9cbc780350',
  [ChainId.Moonriver]: '0xa9177F8d98DAaB74C24715Ba0A81b73654710523',
  [ChainId.Mumbai]: '0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc',
  [ChainId.Harmony]: '0xFE4980f62D708c2A84D3929859Ea226340759320',
  [ChainId.Palm]: '0x99a73dfE34578348fb81BD078201C0BA84E9c840',
  [ChainId.Fantom]: '0xdc85396592f0F466224390771C861EE3957a3ff4',
  [ChainId.Avalanche]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.Songbird]: '0x60351436cf80A31EA6C3B261C784d3C127dBD6f1',
  [ChainId.MoonbaseAlpha]: '0x4E2cfca20580747AdBA58cd677A998f8B261Fc21',
}

export const TEST_CHAINS = [
  Ropsten.chainId,
  Rinkeby.chainId,
  Goerli.chainId,
  Kovan.chainId,
  ChainId.BSCTestnet,
  ChainId.Mumbai,
  ChainId.ThetaTestnet,
  ChainId.MoonbaseAlpha,
  ChainId.Localhost,
  ChainId.Hardhat,
]

export const LOCAL_CHAINS = [ChainId.Localhost, ChainId.Hardhat]
