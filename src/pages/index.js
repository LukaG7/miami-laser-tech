import AppAppBar from '../modules/views/AppAppBar'
import ProductHero from '../modules/views/ProductHero'
import ProductValues from '../modules/views/ProductValues'
import ProductCategories from '../modules/views/ProductCategories'
import ProductHowItWorks from '../modules/views/ProductHowItWorks'
import ProductCTA from '../modules/views/ProductCTA'
import ProductSmokingHero from '../modules/views/ProductSmokingHero'
import AppFooter from '../modules/views/AppFooter'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </div>
  )
}
