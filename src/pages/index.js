import AppAppBar from '../modules/views/AppAppBar'
import ProductHero from '../modules/views/ProductHero'
import ProductValues from '../modules/views/ProductValues'
import ProductCategories from '../modules/views/ProductCategories'
import ProductHowItWorks from '../modules/views/ProductHowItWorks'
import ProductCTA from '../modules/views/ProductCTA'
import ProductSmokingHero from '../modules/views/ProductSmokingHero'
import AppFooter from '../modules/views/AppFooter'
import { Inter } from '@next/font/google'
import withRoot from '../modules/withRoot'
import ScrollToTop from 'react-scroll-to-top'
import Head from 'next/head'
import logo from 'public/static/images/ML.jpg'


const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <div>
      <Head>
        <title>Miami Laser Tech</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <ScrollToTop smooth color='#0e92d6'/>
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

export default withRoot(Home)