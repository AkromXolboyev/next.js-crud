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
    startTransition(async () => {
      try {
        await createTodo(data); 
      } catch (error) {
        console.error("Failed to create todo:", error);
      }
    });
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-slate-200 w-[300px] text-center h-[300px] mx-auto p-5 mb-[50px]">
          {/* Title Field */}
          <div className="pb-4">
            <input
              className="border border-black bg-green-200 p-3"
              {...register("title", { required: "Title is required" })} 
              type="text"
              placeholder="Title"
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}{" "}
            {/* Error message */}
          </div>

          {/* Description Field */}
          <div className="pb-4">
            <input
              className="border border-black bg-green-200 p-3"
              {...register("description", {
                required: "Description is required",
              })} // Validation rule
              type="text"
              placeholder="Description"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}{" "}
            {/* Error message */}
          </div>

          {/* Submit Button */}
          <button
            className="border-black border p-2 bg-yellow-300 mt-10"
            type="submit"
            disabled={loading} 
          >
            {loading ? "loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};
