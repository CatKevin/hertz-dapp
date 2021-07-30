import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const chainId = process.env.REACT_APP_CHAIN_ID
let sliceNumber;
if (chainId === "80001") {
  sliceNumber = 3;
} else {
  sliceNumber = 7;
}

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'HERTZ-MATIC LP',
    lpAddresses: {
      80001: '0x0c532aec168ec6b00c5cdf64d074563db46aa85c',
      137: '0x422F43A620E795E139183947851Fd914a11dD023',
    },
    tokenSymbol: 'HERTZ',
    tokenAddresses: {
      80001: '0xc657EFDb41eaBA15Cea84d34a2A60b18686FA929',
      137: '0x67A32987a8EAA0644702C362B53B8EeBd126C20b',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'HERTZ-USDC LP',
    lpAddresses: {
      80001: '0x8cfd7f8fa7c824b8619fa2d0af5a01315537192c',
      137: '0x6f447ba529007943E05fc678FB04A777816C81c0',
    },
    tokenSymbol: 'HERTZ',
    tokenAddresses: {
      80001: '0xc657EFDb41eaBA15Cea84d34a2A60b18686FA929',
      137: '0x67A32987a8EAA0644702C362B53B8EeBd126C20b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: chainId === "80001" ? 'MATIC-USDC LP' : 'MATIC-USDC SLP',
    lpAddresses: {
      80001: '0xa35f833d37a6d44c15ebea2c7eceb0808e1ffdc3',
      137: '0xcd353F79d9FADe311fC3119B841e1f456b54e858',
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      80001: '0x5B67676a984807a212b1c59eBFc9B3568a474F0a',
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'MATIC-USDT SLP',
    lpAddresses: {
      80001: '',
      137: '0x55FF76BFFC3Cdd9D5FdbBC2ece4528ECcE45047e',
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      80001: '',
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'WETH-MATIC SLP',
    lpAddresses: {
      80001: '',
      137: '0xc4e595acDD7d12feC385E5dA5D43160e8A0bAC0E',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      80001: '',
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 3,
    lpSymbol: 'WETH-USDC SLP',
    lpAddresses: {
      80001: '',
      137: '0x34965ba0ac2451A34a0471F04CCa3F990b8dea27',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      80001: '',
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
].slice(0, sliceNumber)

export default farms
