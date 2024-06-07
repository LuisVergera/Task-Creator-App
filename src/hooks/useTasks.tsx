import { TaskContext } from "@/context/task";
import { useContext } from "react";

export default function useTasks() {
  const context = useContext(TaskContext);

  if (context === undefined) {
    throw new Error("Context should be used inside the Provider");
  }

  return context;
}
