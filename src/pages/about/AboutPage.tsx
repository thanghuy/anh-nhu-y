import { Faq } from '@/components/faq/Faq'
import { CtaBand, PageHero, StatsBar, Testimonials } from '@/components/sections/Sections'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { IMAGES, MARKETS, img } from '@/lib/site'
import styles from '../pages.module.css'

export function AboutPage() {
  useDocumentTitle('Giới thiệu | Anh Như Ý')

  return (
    <>
      <PageHero eyebrow="Giới thiệu" title="Chào bạn đến với Anh Như Ý">
        Doanh nghiệp uy tín trong lĩnh vực xuất khẩu trái cây tươi, đặc biệt là thanh long Việt Nam.
      </PageHero>

      <section className="section">
        <div className={`container ${styles.split}`}>
          <div className={styles.stack} data-reveal="left">
            <span className="eyebrow">Về chúng tôi</span>
            <h2>Từ vườn thanh long Bình Thuận đến thị trường quốc tế</h2>
            <p className={styles.body}>
              Chúng tôi chuyên cung cấp và đóng gói <strong>thanh long ruột trắng, ruột đỏ và thanh long vỏ vàng</strong>{' '}
              đạt tiêu chuẩn <strong>GlobalGAP, VietGAP</strong> để phục vụ các thị trường khó tính.
            </p>
            <p className={styles.body}>
              Với hệ thống <strong>chuỗi cung ứng ổn định</strong>, <strong>kiểm soát chất lượng nghiêm ngặt</strong> và{' '}
              <strong>quy trình bảo quản hiện đại</strong>, chúng tôi cam kết mang đến cho khách hàng sản phẩm tươi
              ngon, an toàn và đạt chuẩn quốc tế.
            </p>
            <ul className={styles.chips}>
              {MARKETS.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <figure className={`${styles.photo} glare`} data-reveal="right" data-tilt="6">
            <img
              src={img(IMAGES.storefront, 1000)}
              width="1000"
              height="750"
              alt="Cửa hàng Anh Như Ý về đêm, biển hiệu sáng đèn"
            />
          </figure>
        </div>
        <div className={`container ${styles.statsGap}`}>
          <StatsBar />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="sectionHead sectionHead--center" data-reveal>
            <span className="eyebrow">Định hướng</span>
            <h2>Sứ mệnh và tầm nhìn</h2>
          </div>
          <div className={styles.two} data-reveal="stagger">
            <Card title="Sứ mệnh" icon={<Icon name="leaf" size={24} />}>
              <p>
                Mang nông sản Việt Nam chất lượng cao, tươi ngon và an toàn đến với khách hàng toàn cầu, đồng thời{' '}
                <strong>thúc đẩy phát triển bền vững</strong> cho nông dân và cộng đồng địa phương.
              </p>
            </Card>
            <Card title="Tầm nhìn" icon={<Icon name="globe" size={24} />} highlight>
              <ul className={styles.ticks}>
                <li>
                  <Icon name="check" size={18} />
                  Trở thành đối tác tin cậy, mang nông sản Việt ra thế giới.
                </li>
                <li>
                  <Icon name="check" size={18} />
                  Không ngừng đổi mới để nâng cao chất lượng và giá trị bền vững.
                </li>
                <li>
                  <Icon name="check" size={18} />
                  Xây dựng thương hiệu xanh, gắn kết cộng đồng và phát triển lâu dài.
                </li>
              </ul>
            </Card>
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
