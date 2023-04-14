import '../styles/globals.css'
//import LayoutLazy from './component/LayoutLazy'
import LayoutDynamic from './component/LayoutDynamic'

function MyApp({ Component, pageProps }) {
  return (
    <LayoutDynamic>
      <Component {...pageProps} />
    </LayoutDynamic>
  )
}

export default MyApp
