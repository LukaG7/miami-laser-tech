import AppAppBar from '@/views/AppAppBar'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <AppAppBar />
    </div>
  )
}
