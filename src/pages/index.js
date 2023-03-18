import Head from 'next/head'
import Content from '../components/content'
import Navbar from '../components/navbar'
import { useState, useEffect } from "react"
import { getTodoList, useGetTodoListQuery } from "../services/todo_api"

import AddButton from "../components/buttons/add_button";
import Pagination from "../components/pagination";
import TodoList from "../components/todo_list";
import TodoCard from '../components/cards/todo_card'
import { makeStore } from '../store'
import AddTodo from '../components/forms/add_todo'

export default function Home({ dataTodo }) {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);
  const [todosPerPage] = useState(10);
  const todoLength = dataTodo.length;

  console.log(dataTodo.length);
  const queryParams = {
    _start: start,
    _limit: limit,
  }

  const { data, error, isLoading } = useGetTodoListQuery(queryParams);


  // const { data, error, isLoading } = useGetTodoListQuery();

  // Get current posts
  const indexOfLastTodo = currentPage * limit;
  const indexOfFirstTodo = indexOfLastTodo - limit;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  // Change Page 
  const paginateFront = () => {
    if (currentPage < todos.length / limit) {
      setCurrentPage(currentPage + 1);
      setStart(start + limit)
    }
  }

  const paginateBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log(currentPage)
      setStart(start - limit);
    }
  }

  let content = null;

  // // if (isLoading) {
  // //   content = <div > Please wait ............ </div>;
  // // }
  // if (!data) {
  //   return <div>No posts :(</div>
  // }

  // // if (error) {
  // //   content = (
  // //     <div >
  // //       {" "}
  // //       Something went wrong, Please retry after some time{" "}
  // //     </div>
  // //   );
  // // }

  // if (data) {

  //   content = (
  //     <>
  //       <h1>List of Todo</h1>
  //       <div>
  //         {data.map((data, index) => (
  //           <ul>
  //             <li key={data.id}>
  //               <TodoCard title={data.title} completed={data.completed} />
  //             </li>
  //           </ul>

  //         ))} </div>

  //     </>
  //   );
  // }

  // return <>
  //   <AddTodo />
  //   {content}
  //   <Pagination
  //     todoPerPage={todosPerPage}
  //     totalTodos={todoLength}
  //     paginateBack={paginateBack}
  //     paginateFront={paginateFront}
  //     currentPage={currentPage} />
  // </>;

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


      {/* <div className="flex flex-col items-center px-4 ">

        <div className="container xs:p-4 sm:p-8 bg-gray-100 rounded-lg flex flex-col h-full max-w-screen-lg mx-auto my-6 ">
          <div className="pb-6 flex flex-row w-full justify-between items-center">
            <p className="text-primary text-lg font-semibold">Todo List</p>
            <AddButton text={'Add Todo'} />
          </div>

          <TodoList todos={todos} loading={loading} />

          <div>
            <Pagination
              todoPerPage={todosPerPage}
              totalTodos={todoLength}
              paginateBack={paginateBack}
              paginateFront={paginateFront}
              currentPage={currentPage} />
          </div>

        </div>
      </div> */}


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
