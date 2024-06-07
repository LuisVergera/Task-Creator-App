import { taskApiUrl } from "@/config";
import { ITask } from "@/interfaces/task";

export const updateTask = async (id: number, data: ITask) => {
  const url = taskApiUrl + `/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};
