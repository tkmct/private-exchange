const FONT_SIZE = {
  XS: '10px',
  S: '14px',
  M: '16px',
  L: '20px',
  XL: '24px',
  XXL: '32px'
} as const

const SPACE = {
  XS: '4px',
  S: '8px',
  M: '16px',
  L: '20px',
  XL: '24px',
  XXL: '32px'
} as const

const RADIUS = {
  S: '4px',
  M: '8px',
  L: '12px',
  ROUND: '50%'
} as const

enum SupportedChainId {
  GOERLI = 5,
  LOCAL = 1337
}

const peerConfig = {
  host: '0.peerjs.com',
  port: 443,
  secure: true,
  path: '/'
}

const Tokens: { [key: string]: { address: string; decimals: number } } = {
  ETH: { address: '0x0000000000000000000000000000000000000000', decimals: 18 },
  TT: { address: '0x2471942920adf662c140f612dbd4ca343805499d', decimals: 4 }
}

export { FONT_SIZE, SPACE, RADIUS, SupportedChainId, peerConfig, Tokens }
