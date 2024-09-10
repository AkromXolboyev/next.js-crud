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
        await createTodo(data); // Await for async operation
      } catch (error) {
        console.error("Failed to create todo:", error);
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* Title Field */}
          <div className="pb-4">
            <input
              className="border border-black bg-green-200"
              {...register("title", { required: "Title is required" })} // Validation rule
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
              className="border border-black bg-green-200"
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
            className="border-black border p-2 bg-yellow-300"
            type="submit"
            disabled={loading} // Disable button when loading
          >
            {loading ? "loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};
