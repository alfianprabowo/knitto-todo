import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/content'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div  >
      <Head>
        <title>Knitto Todo App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="Todo App" content="Todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>

        <Navbar />

        <Content />

      </div>
      <div>
      </div>


    </div>
  )
}
