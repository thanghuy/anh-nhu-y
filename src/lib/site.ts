// Shared, language-independent data (text lives in `src/i18n`). Images are served from the original site's CDN.
const CDN = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto'
const ASSET = 'mePgjXK7ZjFw9elg'

export const img = (file: string, w = 1200) => `${CDN},w=${w},fit=crop/${ASSET}/${file}`

export const IMAGES = {
  logo: 'img_7250-GWKpGpfUyB5VL3j1.jpeg',
  storefront: 'img_2069-Aq2G8oZxzEc25L2v.jpeg',
  farmer: 'img_2115-mnl40WnNJWikD4n1.jpeg',
  cartons: 'photo_28_2025-08-21_19-25-17-YrD4ko37NwFbJE3p.jpg',
  packingHall: 'photo_36_2025-08-21_19-25-17-dOqZw6MVoPsQGnEk.jpg',
  coconut: '7d228480-dd34-46f4-a0c1-eb64a04e0732-YZ9EPzvZvMi4QgK7.png',
  achievements: 'baopsn-sao-ca-ssa-baopsn-sao-ca-ssa-proposal_aace2024-trang-web-8-mnl4EWV7JBHPVBWe.png',
} as const

export const CONTACT = {
  email: 'contact@anhnhuy.com',
  phone: '+84 986 565 675',
  phoneHref: 'tel:+84986565675',
  // International format so the numbers dial from abroad too.
  hotlines: [
    { text: '+84 913 183 797', href: 'tel:+84913183797' },
    { text: '+84 365 606 897', href: 'tel:+84365606897' },
  ],
  zalo: 'https://zalo.me/0986565675',
  facebook: 'https://www.facebook.com/lieu.oan.523024',
}

// Query values for /lien-he?product=… so a product page can preselect it in the quote form.
export const QUOTE_PRODUCTS = { 'dragon-fruit': 3, coconut: 4 } as const
export type QuoteProduct = keyof typeof QUOTE_PRODUCTS

export const NAV = [
  { to: '/', key: 'home' },
  { to: '/gioi-thieu', key: 'about' },
  { to: '/san-pham', key: 'products' },
  { to: '/lien-he', key: 'contact' },
] as const
