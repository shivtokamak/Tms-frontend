import { type Chain } from 'viem'

export const sepolia_titan = {
  id: 55007,
  name: 'Sepolia Titan',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.titan-sepolia.tokamak.network'] },
  },
  blockExplorers: {
    default: { name: 'Etherscan', url: 'https://explorer.titan-sepolia.tokamak.network/' },
  }

} as const satisfies Chain