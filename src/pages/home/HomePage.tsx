import { Link } from 'react-router-dom'
import { Faq } from '@/components/faq/Faq'
import { CtaBand, StatsBar, Testimonials } from '@/components/sections/Sections'
import { ButtonLink } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { SplitWords } from '@/components/ui/SplitWords'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { IMAGES, MARKETS, img } from '@/lib/site'
import styles from './HomePage.module.css'

const REASONS = [
  {
    icon: 'truck',
    title: 'Nguồn cung ổn định',
    points: [
      'Nguyên liệu từ các vùng trồng đạt chuẩn, sản lượng ổn định quanh năm.',
      'Kho lạnh và logistics chuyên nghiệp giữ chất lượng suốt quá trình vận chuyển.',
      'Giao hàng đúng lịch cam kết.',
    ],
  },
  {
    icon: 'tag',
    title: 'Cạnh tranh về giá',
    points: [
      'Chính sách đặc biệt cho các đơn hàng số lượng lớn.',
      'Giá cả ổn định, minh bạch, không phát sinh chi phí ẩn.',
      'Chi phí nhập khẩu hợp lý hơn, tăng biên lợi nhuận cho đối tác.',
    ],
  },
  {
    icon: 'leaf',
    title: 'Thanh long chất lượng cao',
    points: [
      'Thu hoạch trực tiếp từ nông trại, chọn lọc theo tiêu chuẩn xuất khẩu.',
      'Đảm bảo độ tươi, ngọt, màu sắc đẹp, không dập nát.',
      'Sản phẩm đạt chứng nhận GlobalGAP.',
    ],
  },
] as const

const PRODUCTS = [
  {
    name: 'Thanh long',
    tag: 'Sản phẩm chủ lực',
    image: IMAGES.packingHall,
    alt: 'Thanh long đỏ xếp đầy nhà đóng gói',
    text: 'Ruột trắng, ruột đỏ và vỏ vàng. Size 350 đến 650g/quả, đóng thùng carton 4 đến 18kg theo yêu cầu.',
  },
  {
    name: 'Dừa tươi',
    tag: 'Sản phẩm mới',
    image: IMAGES.coconut,
    alt: 'Thùng carton dừa xuất khẩu cạnh trái dừa xanh',
    text: 'Dừa nguyên trái và dừa non gọt “kim cương”, bảo quản lạnh 0 đến 2°C trong container.',
  },
]

// Each crop is one photo inside the original "Thành tựu tiêu biểu" collage.
const ACHIEVEMENTS = [
  { x: '8.9%', text: '1 trong 100 gương mặt nhà nông tiêu biểu cả nước, nhận danh hiệu Nông dân Việt Nam xuất sắc 2023' },
  { x: '50.1%', text: 'Vinh dự được Quyền Chủ tịch nước Nguyễn Thị Ánh Xuân ghé thăm' },
  { x: '91.3%', text: 'Tiếp đón nhiều đoàn khách du lịch tham quan vườn và cơ sở sản xuất' },
]

export function HomePage() {
  useDocumentTitle('Xuất khẩu trái cây tươi Việt Nam | Anh Như Ý')

  return (
    <>
      <section className={styles.hero} data-parallax>
        <span className={styles.heroBlob} aria-hidden="true" />
        <div className={styles.orbs} aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroText} data-reveal="stagger">
            <span className="eyebrow">Xuất khẩu trái cây tươi Việt Nam</span>
            <h1>
              <SplitWords text="Thanh long tươi" />{' '}
              <SplitWords text="chuẩn xuất khẩu" start={3} className="shimmer-text" />{' '}
              <SplitWords text="từ Bình Thuận" start={6} />
            </h1>
            <p className="lead">
              Nguồn cung dồi dào, luôn sẵn sàng và cam kết chất lượng ổn định, đáp ứng mọi nhu cầu hợp tác B2B.
            </p>
            <div className={styles.heroActions}>
              <ButtonLink to="/lien-he">
                Nhận báo giá
                <Icon name="arrowRight" size={18} />
              </ButtonLink>
              <ButtonLink to="/san-pham" variant="ghost">
                Xem sản phẩm
              </ButtonLink>
            </div>
            <ul className={styles.badges}>
              {['GlobalGAP', 'VietGAP', 'Đóng gói theo yêu cầu'].map((b) => (
                <li key={b}>
                  <Icon name="check" size={16} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.heroMedia} data-reveal="right">
            <div className={`${styles.heroStage} glare`} data-tilt="9">
              <span className={styles.ring} aria-hidden="true" />
              <span className={`${styles.ring} ${styles.ringAlt}`} aria-hidden="true" />
              <div className={styles.heroFrame}>
                <img
                  src={img(IMAGES.field, 1000)}
                  width="1000"
                  height="1000"
                  alt="Nông dân thu hoạch thanh long trên vườn"
                  fetchPriority="high"
                />
              </div>
              <div className={styles.floatCard}>
                <span className={styles.floatIcon}>
                  <Icon name="globe" size={22} />
                </span>
                <div>
                  <strong>6 khu vực thị trường</strong>
                  <span>Châu Âu, Mỹ, Nhật Bản…</span>
                </div>
              </div>
              <div className={`${styles.floatCard} ${styles.floatBadge}`}>
                <span className={styles.floatIcon}>
                  <Icon name="shield" size={22} />
                </span>
                <div>
                  <strong>GlobalGAP</strong>
                  <span>Chuẩn xuất khẩu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <StatsBar />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead sectionHead--center" data-reveal>
            <span className="eyebrow">Giá trị cốt lõi</span>
            <h2>Vì sao nên chọn chúng tôi</h2>
            <p className="lead">
              Chuỗi cung ứng ổn định, kiểm soát chất lượng nghiêm ngặt và quy trình bảo quản hiện đại.
            </p>
          </div>
          <div className={styles.reasons} data-reveal="stagger">
            {REASONS.map((r, i) => (
              <Card key={r.title} title={r.title} icon={<Icon name={r.icon} size={24} />} highlight={i === 1}>
                <ul className={styles.points}>
                  {r.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" size={18} />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.headRow} data-reveal>
            <div className="sectionHead" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Sản phẩm</span>
              <h2>Sản phẩm của chúng tôi</h2>
              <p className="lead">
                Thanh long ruột trắng, ruột đỏ và vỏ vàng đạt chứng nhận GlobalGAP, VietGAP, cùng dòng sản phẩm dừa
                tươi đang mở rộng.
              </p>
            </div>
            <ButtonLink to="/san-pham" variant="ghost">
              Xem chi tiết sản phẩm
              <Icon name="arrowRight" size={18} />
            </ButtonLink>
          </div>
          <div className={styles.products} data-reveal="stagger">
            {PRODUCTS.map((p) => (
              <Link key={p.name} to="/san-pham" className={`${styles.product} glare`} data-tilt="6">
                <div className={styles.productMedia}>
                  <img
                    className="parallax-img"
                    src={img(p.image, 900)}
                    width="900"
                    height="675"
                    loading="lazy"
                    alt={p.alt}
                  />
                  <span className={styles.productTag}>{p.tag}</span>
                </div>
                <div className={styles.productBody}>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                  <span className={styles.productLink}>
                    Tìm hiểu thêm <Icon name="arrowRight" size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.commit}`}>
          <figure className={styles.commitMedia} data-reveal="left">
            <img
              className="parallax-img"
              src={img(IMAGES.storefront, 1000)}
              width="1000"
              height="750"
              loading="lazy"
              alt="Cửa hàng Anh Như Ý về đêm, biển hiệu sáng đèn"
            />
          </figure>
          <div className={styles.commitText} data-reveal="right">
            <span className="eyebrow">Cam kết</span>
            <h2>Tươi ngon, an toàn và đạt chuẩn quốc tế</h2>
            <p className="lead">
              Với hệ thống chuỗi cung ứng ổn định, kiểm soát chất lượng nghiêm ngặt và quy trình bảo quản hiện đại,
              chúng tôi cam kết mang đến sản phẩm tươi ngon, an toàn cho các thị trường khó tính nhất.
            </p>
            <div>
              <p className={styles.marketsLabel}>Thị trường xuất khẩu</p>
              <ul className={styles.markets} data-reveal="stagger">
                {MARKETS.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="sectionHead sectionHead--center" data-reveal>
            <span className="eyebrow">Thành tựu</span>
            <h2>Thành tựu tiêu biểu</h2>
          </div>
          <div className={styles.achievements} data-reveal="stagger">
            {ACHIEVEMENTS.map((a) => (
              <Card key={a.x} className={styles.achievement}>
                <div
                  className={styles.achievementPhoto}
                  role="img"
                  aria-label={a.text}
                  style={{
                    backgroundImage: `url(${img(IMAGES.achievements, 1920)})`,
                    backgroundPositionX: a.x,
                  }}
                />
                <p>{a.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <div className="section--alt">
        <Faq />
      </div>
      <CtaBand />
    </>
  )
}
