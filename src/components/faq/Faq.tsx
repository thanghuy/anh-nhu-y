import { Link } from 'react-router-dom'
import styles from './Faq.module.css'

const ITEMS = [
  {
    q: 'Anh Như Ý cung cấp sản phẩm gì?',
    a: 'Chúng tôi chuyên xuất khẩu trái cây tươi chất lượng cao, đặc biệt là thanh long Bình Thuận, sản phẩm nổi tiếng của Việt Nam. Ngoài ra, chúng tôi đang mở rộng thêm các mặt hàng nông sản khác như dừa tươi, sầu riêng, đáp ứng nhu cầu đa dạng của khách hàng quốc tế.',
  },
  {
    q: 'Thời gian giao hàng là bao lâu?',
    a: 'Thời gian giao hàng thường từ 5 đến 10 ngày làm việc, tùy theo địa điểm nhận hàng và số lượng đơn đặt. Với những đơn hàng gấp, chúng tôi có thể sắp xếp linh hoạt để đảm bảo tiến độ.',
  },
  {
    q: 'Có chính sách đổi trả không?',
    a: 'Nếu sản phẩm không đạt tiêu chuẩn chất lượng như cam kết, khách hàng có thể yêu cầu đổi trả trong vòng 7 ngày kể từ khi nhận hàng.',
  },
  {
    q: 'Sản phẩm có nguồn gốc từ đâu?',
    a: 'Toàn bộ sản phẩm của chúng tôi được thu hoạch trực tiếp từ các vùng nông sản nổi tiếng tại Việt Nam, được canh tác theo các tiêu chuẩn như VietGAP, GlobalGAP, đảm bảo chất lượng và an toàn vệ sinh thực phẩm.',
  },
  {
    q: 'Có hỗ trợ giao hàng không?',
    a: 'Chúng tôi hỗ trợ giao hàng tận nơi cho khách hàng tại khu vực nội địa. Đối với khách quốc tế, hàng được vận chuyển theo các điều kiện thương mại quốc tế (Incoterms) bằng đường hàng không hoặc đường biển, tùy theo yêu cầu.',
  },
  {
    q: 'Có thể đặt hàng trực tuyến không?',
    a: 'Khách hàng có thể đặt hàng trực tuyến qua website chính thức hoặc liên hệ trực tiếp với đội ngũ kinh doanh của chúng tôi để được hỗ trợ nhanh chóng, thuận tiện.',
  },
]

export function Faq() {
  return (
    <section className="section">
      <div className={`container ${styles.faq}`}>
        <div className={styles.intro} data-reveal="left">
          <span className="eyebrow">FAQ</span>
          <h2>Câu hỏi thường gặp</h2>
          <p className="lead">
            Chưa thấy câu trả lời bạn cần? <Link to="/lien-he">Liên hệ với chúng tôi</Link> để được tư vấn trực tiếp.
          </p>
        </div>
        <div className={styles.list} data-reveal="stagger">
          {ITEMS.map((item, i) => (
            <details key={item.q} className={styles.item} open={i === 0}>
              <summary>
                {item.q}
                <span className={styles.toggle} aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
