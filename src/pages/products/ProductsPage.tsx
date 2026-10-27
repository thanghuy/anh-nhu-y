import { CtaBand, PageHero } from '@/components/sections/Sections'
import { Icon } from '@/components/ui/Icon'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { IMAGES, img } from '@/lib/site'
import styles from '../pages.module.css'

interface Spec {
  label: string
  value: string
}

const DRAGON_FRUIT: Spec[] = [
  { label: 'Đặc điểm nổi bật', value: 'Hàng đẹp 100%, đạt chuẩn xuất khẩu' },
  { label: 'Size nhỏ', value: '350 đến 450g/quả' },
  { label: 'Size lớn', value: '450 đến 650g/quả' },
  { label: 'Quy cách đóng gói', value: 'Thùng carton 4kg, 9kg, 16kg, 16,5kg hoặc 18kg. Có thể điều chỉnh theo yêu cầu' },
  { label: 'Thời gian giao hàng', value: '7 đến 10 ngày làm việc' },
]

const COCONUT: Spec[] = [
  { label: 'Đặc điểm nổi bật', value: 'Hàng đẹp 100%, đạt chuẩn xuất khẩu' },
  {
    label: 'Quy cách đóng gói',
    value:
      'Thùng carton 5 hoặc 7 lớp; dừa nguyên trái cho vào túi đay hoặc bao tải trước khi đặt vào thùng, hoặc dừa non gọt “kim cương” đóng gói theo tiêu chuẩn vệ sinh nghiêm ngặt',
  },
  { label: 'Bảo quản', value: 'Container lạnh 0 đến 2°C, độ ẩm 50 đến 60%, có thông gió' },
  { label: 'Thời gian giao hàng', value: '7 đến 10 ngày làm việc' },
]

function SpecList({ specs }: { specs: Spec[] }) {
  return (
    <dl className={styles.specs} data-reveal="stagger">
      {specs.map((s) => (
        <div key={s.label} className={styles.spec}>
          <dt>{s.label}</dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function ProductsPage() {
  useDocumentTitle('Sản phẩm | Anh Như Ý')

  return (
    <>
      <PageHero eyebrow="Sản phẩm" title="Trái cây tươi chuẩn xuất khẩu">
        Thanh long Bình Thuận, niềm tự hào của “thủ phủ thanh long” Việt Nam, và dừa tươi, sản phẩm chiến lược tiếp
        theo.
      </PageHero>

      <div className={`container ${styles.tabsWrap}`}>
        <nav className={styles.tabs} aria-label="Danh mục sản phẩm">
          <a href="#thanh-long">Thanh long</a>
          <a href="#dua">Dừa tươi</a>
        </nav>
      </div>

      <section id="thanh-long" className="section">
        <div className={`container ${styles.product}`}>
          <div className={styles.gallery} data-reveal="stagger">
            <img
              data-tilt="8"
              className={styles.galleryMain}
              src={img(IMAGES.packingHall, 1200)}
              width="1200"
              height="900"
              alt="Thanh long đỏ xếp đầy nhà đóng gói"
            />
            <img data-tilt="8" src={img(IMAGES.cartons, 700)} width="700" height="933" loading="lazy" alt="Pallet thùng carton thanh long xếp cao trong kho" />
            <img data-tilt="8" src={img(IMAGES.farmer, 700)} width="700" height="486" loading="lazy" alt="Nông dân cầm chùm thanh long đỏ trên vườn" />
          </div>
          <div className={styles.stack} data-reveal="right">
            <span className={styles.label}>Sản phẩm chủ lực</span>
            <h2>Thanh long</h2>
            <p className={styles.body}>
              Nhắc đến Bình Thuận, người ta nghĩ ngay đến những vườn thanh long xanh mướt, trải dài bạt ngàn. Với diện
              tích và sản lượng hàng đầu cả nước, thanh long Bình Thuận góp phần quan trọng vào kinh tế nông nghiệp địa
              phương và là điểm đến hấp dẫn cho du khách.
            </p>
            <ul className={styles.chips}>
              <li>Ruột trắng</li>
              <li>Ruột đỏ</li>
              <li>Vỏ vàng</li>
            </ul>
            <SpecList specs={DRAGON_FRUIT} />
          </div>
        </div>
      </section>

      <section id="dua" className="section section--alt">
        <div className={`container ${styles.product} ${styles.productReverse}`}>
          <div className={styles.stack} data-reveal="left">
            <span className={styles.label}>
              <Icon name="leaf" size={16} />
              Sản phẩm mới, cơ hội mới
            </span>
            <h2>Dừa tươi</h2>
            <p className={styles.body}>
              Bên cạnh thế mạnh về thanh long, chúng tôi đang đẩy mạnh phát triển dừa tươi: loại nông sản giàu giá trị
              dinh dưỡng, có tiềm năng xuất khẩu lớn và được ưa chuộng tại nhiều thị trường quốc tế. Với kinh nghiệm
              quản lý chất lượng và hệ thống cung ứng sẵn có, dừa sẽ là sản phẩm chiến lược tiếp theo của Anh Như Ý.
            </p>
            <SpecList specs={COCONUT} />
          </div>
          <figure className={`${styles.photo} glare`} data-reveal="zoom" data-tilt="6">
            <img
              src={img(IMAGES.coconut, 1000)}
              width="1000"
              height="1000"
              loading="lazy"
              style={{ aspectRatio: '1' }}
              alt="Thùng carton dừa xuất khẩu cạnh trái dừa xanh"
            />
          </figure>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
