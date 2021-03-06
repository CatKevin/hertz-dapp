import { MenuEntry } from 'hertz-uikit'
import UrlConfig from './UrlConfig'

const chainId: string = process.env.REACT_APP_CHAIN_ID || '80001'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Assest Management',
    icon: 'VaultsIcon',
    href: '/assets',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: UrlConfig[chainId].exchange
      },
      {
        label: 'Liquidity',
        href: UrlConfig[chainId].pool
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'IDO',
    icon: 'IfoIcon',
    href: '/ido',
  },
  {
    label: 'Vote',
    icon: 'GroupsIcon',
    href: '/vote',
  },
  {
    label: 'Lucky Draw',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  // {
  //   label: 'AirDrop',
  //   icon: 'GooseIcon',
  //   href: '/airdrop',
  // },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/HertzFinance',
      },
      {
        label: 'Docs',
        href: '#',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
