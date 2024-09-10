"use client";
import React from "react";
import { dataType } from "@/service/query/get-todos";
import { deleteItem } from "@/service/mutation/delete-item";
export const TodoCard: React.FC<dataType> = ({ description, id, title }) => {
  const [loading, startTransition] = React.useTransition();
  const deleteTodo = () => {
    startTransition(() => {
      deleteItem(id);
    });
  };
  return (
    <div className="border border-black">
      <h1 className="text-3xl">{title}</h1>
      <p>{description}</p>
      <button onClick={deleteTodo}>{loading ? "loading..." : "delete"}</button>
    </div>
  );
};
