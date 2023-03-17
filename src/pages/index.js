import Head from 'next/head'
import Content from '../components/content'
import Navbar from '../components/navbar'
// import Todo from '../components/todo'
import { getTodoList, useGetTodoListQuery, usePhotosQuery } from "../services/todo_api";


export default function Home({ }) {

  const { data, error, isLoading } = getTodoList;
  console.log(`is fetch ${data}`)
  // return (
  //   <div>
  //     {data && data.map((theData, i) => (
  //       <h1 key={i}>{theData}</h1>
  //     ))}
  //     <h1>Hello</h1>
  //   </div>
  // );

  let content = null;

  if (isLoading) {
    content = <div className={styles.loading}> Please wait ............ </div>;
  }

  if (error) {
    content = (
      <div className={styles.error}>
        {" "}
        Something went wrong, Please retry after some time{" "}
      </div>
    );
  }

  if (data) {
    content = (
      <>
        <h1 className={styles.heading}>List of Photos</h1>
        <div className={styles.main}>
          <ol className={styles.listSection}>
            {data?.map((data, index) => (
              <li key={index} className={styles.itemSection}>
                {data.title}{" "}
                <img className={styles["image-section"]} src={data.url} />
              </li>
            ))}
          </ol>
        </div>
      </>
    );
  }

  return <>{content}</>;

  // return (
  //   <div  >
  //     <Head>
  //       <title>Knitto Todo App</title>
  //       <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
  //       <meta name="Todo App" content="Todo app" />
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <div>

  //       <Navbar />

  //       {/* <Content todo={data} /> */}

  //     </div>
  //     <div>
  //     </div>


  //   </div>
  // )

}

// export async function getStaticProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//   const data = await res.json()

//   return {
//     props: {
//       data,
//     },
//     revalidate: 10,
//   }
// }


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await res.json()
  // const todo = [];
  // Pass data to the page via props
  return {
    props: {
      data
    }
  }
}
