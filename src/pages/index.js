import Head from 'next/head'
import Content from '../components/content'
import Navbar from '../components/navbar'

export default function Home({ dataTodo }) {

  return (
    <div  >
      <Head>
        <title>Knitto Todo App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="Todo App" content="Todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Content dataTodo={dataTodo} />
    </div>
  )

}

// export async function getStaticProps() {
//   const store = makeStore;
//   const data = await store.dispatch(getTodoList.initiate({ _start: 0, _limit: 10 }));

//   return {
//     props: {
//       data
//     },
//     revalidate: 60,
//   }
// }


export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const dataTodo = await res.json()
  return {
    props: {
      dataTodo
    }
  }
}
