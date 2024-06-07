import { ITask } from "@/interfaces/task";
import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { CheckBox } from "react-native-btr";
import useTasks from "@/hooks/useTasks";
import { updateTask } from "@/services/updateTask";

export default function TaskItem({ task }: { task: ITask }) {
  const { eraseTask, fetchAllTasks } = useTasks();

  const toggleCheckBox = async () => {
    if (task.completed) {
      await updateTask(task.id, { ...task, completed: false });
    } else {
      await updateTask(task.id, { ...task, completed: true });
    }
    fetchAllTasks();
  };

  const onDelete = async () => {
    await eraseTask(task.id);
    fetchAllTasks();
  };
  return (
    <View className="p-8 my-4 flex-row items-center justify-between space-x-4 bg-white ">
      <Text className="font-bold text-lg self-start">{task.title}</Text>
      <View className="space-y-2 items-center">
        <View className="">
          <CheckBox
            disabled={false}
            checked={task.completed}
            onPress={toggleCheckBox}
          />
        </View>
        <View>
          <TouchableOpacity onPress={onDelete}>
            <Text className="text-red-600 font-bold text-lg">X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
