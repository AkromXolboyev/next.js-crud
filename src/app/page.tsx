// import { getData } from "@/service/query/get-todos";
// import { TodoCard } from "./_components/todo-card";
// import { TodoForm } from "./_components/todo-form";
// export default async function Home() {
//   const data = await getData();
//   console.log(data);

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-4xl text-center">TODOLIST</h1>
//       <TodoForm/>
//       {data.map((item) => (
//         <TodoCard key={item.id} {...item} />
//       ))}
//     </div>
//   );
// }
import { getData } from "@/service/query/get-todos";
import { TodoCard } from "./_components/todo-card";
import { TodoForm } from "./_components/todo-form";

// Define the type for Todo if it's not already defined elsewhere
interface Todo {
  id: number;
  title: string;
  description: string;
}

export default async function Home() {
  let data: Todo[] = []; 
  
  try {
    data = await getData(); 
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center">TODOLIST</h1>
      <TodoForm />
      {data.length > 0 ? (
        data.map((item) => (
          <TodoCard key={item.id} {...item} />
        ))
      ) : (
        <p className="text-center">No todos available</p> 
      )}
    </div>
  );
}
