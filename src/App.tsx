import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/home/HomePage'
import { AboutPage } from '@/pages/about/AboutPage'
import { ProductsPage } from '@/pages/products/ProductsPage'
import { ContactPage } from '@/pages/contact/ContactPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="/san-pham" element={<ProductsPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  )
}
