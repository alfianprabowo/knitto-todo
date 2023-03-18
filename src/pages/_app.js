import '/styles/globals.css'
import { Provider } from 'react-redux'
import { makeStore } from '../store'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return <Provider store={makeStore}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
