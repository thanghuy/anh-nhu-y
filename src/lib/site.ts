// Content shared across pages. Images are served from the original site's CDN.
const CDN = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto'
const ASSET = 'mePgjXK7ZjFw9elg'

export const img = (file: string, w = 1200) => `${CDN},w=${w},fit=crop/${ASSET}/${file}`

export const IMAGES = {
  logo: 'img_7250-GWKpGpfUyB5VL3j1.jpeg',
  field: 'z6949932323929_729fa976bce760fc01b149972add1fa3-d95ZP41vqBf5G7Bv.jpg',
  storefront: 'img_2069-Aq2G8oZxzEc25L2v.jpeg',
  farmer: 'img_2115-mnl40WnNJWikD4n1.jpeg',
  cartons: 'photo_28_2025-08-21_19-25-17-YrD4ko37NwFbJE3p.jpg',
  packingHall: 'photo_36_2025-08-21_19-25-17-dOqZw6MVoPsQGnEk.jpg',
  coconut: '7d228480-dd34-46f4-a0c1-eb64a04e0732-YZ9EPzvZvMi4QgK7.png',
  achievements: 'baopsn-sao-ca-ssa-baopsn-sao-ca-ssa-proposal_aace2024-trang-web-8-mnl4EWV7JBHPVBWe.png',
} as const

export const CONTACT = {
  email: 'Any.binhthuan@gmail.com',
  phone: '+84 986 565 675',
  phoneHref: 'tel:+84986565675',
  hotlines: ['0913183797', '0365606897'],
  feedbackEmails: ['contact@anhnhuy.com', 'dtt220901@gmail.com'],
  address: 'Đường TL 715, xã Hàm Thuận, tỉnh Lâm Đồng',
  hours: '9h - 17h',
  facebook: 'https://www.facebook.com/lieu.oan.523024',
}

export const NAV = [
  { to: '/', label: 'Trang chủ' },
  { to: '/gioi-thieu', label: 'Giới thiệu' },
  { to: '/san-pham', label: 'Sản phẩm' },
  { to: '/lien-he', label: 'Liên hệ' },
]

export const STATS = [
  { value: '200+', label: 'Nhân sự có kinh nghiệm' },
  { value: '10+', label: 'Năm gia công thanh long' },
  { value: '15+', label: 'Đối tác lâu dài' },
  { value: '6', label: 'Khu vực thị trường xuất khẩu' },
]

export const MARKETS = ['Châu Âu', 'Mỹ', 'Nhật Bản', 'Trung Quốc', 'Trung Đông', 'Đông Nam Á']

export const TESTIMONIALS = [
  'Hợp tác nhiều lần, rất chuyên nghiệp, hàng đến đúng thời hạn.',
  'Gia công đóng gói kĩ, đơn hàng linh hoạt quanh năm.',
]
