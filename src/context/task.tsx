import { ITask } from "@/interfaces/task";
import { deleteTask } from "@/services/deleteTask";
import { getAllTasks } from "@/services/getAllTasks";
import { postTask } from "@/services/postTask";

import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState();

  const fetchAllTasks = async () => {
    const fetchedTasks = await getAllTasks();
    console.log(fetchedTasks);
    setTasks(fetchedTasks);
  };

  const addTask = async (data: ITask) => {
    return await postTask(data);
  };

  const eraseTask = async (id: number) => {
    return await deleteTask(id);
  };

  useEffect(() => {
    const initialize = async () => {
      fetchAllTasks();
    };
    initialize();
  }, []);
  return (
    <TaskContext.Provider value={{ tasks, fetchAllTasks, addTask, eraseTask }}>
      {children}
    </TaskContext.Provider>
  );
};
