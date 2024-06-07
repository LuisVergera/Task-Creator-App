import { taskApiUrl } from "@/config";

export const getAllTasks = async () => {
  const response = await fetch(taskApiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};
