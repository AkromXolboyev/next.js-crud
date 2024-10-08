"use client";
import React from "react";
import { dataType } from "@/service/query/get-todos";
import { deleteItem } from "@/service/mutation/delete-item";

export const TodoCard: React.FC<dataType> = ({ description, id, title }) => {
  const [loading, startTransition] = React.useTransition();

  const deleteTodo = async () => {
    startTransition(async () => {
      try {
        await deleteItem(id);
      } catch (error) {
        console.error("Failed to delete the item:", error);
      }
    });
  };

  return (
    <div className="border border-black p-4 flex justify-between">
      <div>
        <h1 className="text-3xl ">{title}</h1>
        <p className="">{description}</p>
      </div>
      <button className="p-2 w-[100px] bg-green-400" onClick={deleteTodo} disabled={loading}>
        {loading ? "loading..." : "delete"}
      </button>
    </div>
  );
};
