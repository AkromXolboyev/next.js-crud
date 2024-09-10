"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { createTodo } from "@/service/mutation/delete-item";
interface dataType {
  title: string;
  description: string;
}

export const TodoForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<dataType>();
  const [loading, startTransition] = React.useTransition();
  const onSubmit = (data: dataType) => {
    startTransition(() => {
      createTodo(data);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="pb-4">
            <input
              className="border border-black bg-green-200"
              {...register("title")}
              type="text"
              name="title"
            />
          </div>
          <div className="pb-4">
            <input
              className="border border-black bg-green-200"
              {...register("description")}
              type="text"
              name="description"
            />
          </div>
          <button
            className="border-black border p-2 bg-yellow-300"
            type="submit"
          >
            {loading ? "loading.." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};
