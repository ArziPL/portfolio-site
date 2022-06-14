import type { AppProps } from 'next/app'
import Navbar from '../components/organisms/Navbar'
import "../styles/css/output.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
