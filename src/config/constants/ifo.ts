import { Ifo } from './types'

const ifos: Ifo[] = [
  {
    id: 'leek',
    tokenAddress: {
      80001: '0xc657EFDb41eaBA15Cea84d34a2A60b18686FA929',
      137: '0x67A32987a8EAA0644702C362B53B8EeBd126C20b',
    },
    idoAddress: {
      80001: '0x8AaE8746bCFaAC6AC2927C1C9099943B4de5d7f3',
      137: '0x0E9B41A5D64de6B4BF6e086417E813Df21707748',
    },
    isActive: false,
    name: 'LEEK',
    mainToken: 'MATIC',
    subTitle: 'A community driven crypto and knowledge sharing DAO powered by $LEEK Social Token',
    startTime: 1625625327,
    endTime: 1626625327,
    salesAmount: 500000,
    projectSiteUrl: 'https://www.leekdao.xyz',
    tokenDecimals: 18,
  },

  {
    id: 'hertz',
    tokenAddress: {
      80001: '0xee18357454FD18AA69E03574177254c718E7C289',
      137: '0x67A32987a8EAA0644702C362B53B8EeBd126C20b',
    },
    idoAddress: {
      80001: '0x12efae1C7bA03258B9A75A1249EBA514A67eD2aC',
      137: '0x0E9B41A5D64de6B4BF6e086417E813Df21707748',
    },
    isActive: true,
    name: 'HERTZ',
    mainToken: 'MATIC',
    subTitle: 'Hertz One Stop Defi Asset Management Solution',
    startTime: 1625625327,
    endTime: 1626625327,
    salesAmount: 1000000,
    projectSiteUrl: '#',
    tokenDecimals: 18,
  },
]

export default ifos
