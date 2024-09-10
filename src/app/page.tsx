import { getData } from "@/service/query/get-todos";
import { TodoCard } from "./_components/todo-card";
import { TodoForm } from "./_components/todo-form";
export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center">TODOLIST</h1>
      <TodoForm/>
      {data.map((item) => (
        <TodoCard key={item.id} {...item} />
      ))}
    </div>
  );
}
