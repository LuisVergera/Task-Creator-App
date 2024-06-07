import { taskApiUrl } from "@/config";

export const postTask = async (data) => {
  const response = await fetch(taskApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};
