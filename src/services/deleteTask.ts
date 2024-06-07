import { taskApiUrl } from "@/config";

export const deleteTask = async (id: number) => {
  const url = taskApiUrl + `/${id.toString()}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);

  return await response.json();
};
