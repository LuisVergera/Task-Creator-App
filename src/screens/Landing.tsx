import {
  View,
  Text,
  SafeAreaView,
  Platform,
  FlatList,
  Button,
} from "react-native";
import { useState } from "react";

import useTasks from "@/hooks/useTasks";

import TaskItem from "@/components/TaskItem";
import AddTaskModal from "@/components/AddTaskModal";
import { ITask } from "@/interfaces/task";

export default function Landing() {
  const { tasks } = useTasks();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const renderItem = ({ item }: { item: ITask }) => {
    return <TaskItem task={item} />;
  };
  return (
    <SafeAreaView
      className={`flex-1 bg-slate-100 items-center ${
        Platform.OS === "android" && "pt-10"
      }`}
    >
      <Text className="text-2xl">Task Manager</Text>
      <FlatList data={tasks} renderItem={renderItem} />
      <View className="bottom-0 absolute">
        <Button title="Add Task" onPress={toggleModal} />
      </View>
      <AddTaskModal
        isModalVisible={isModalVisible}
        onClose={toggleModal}
        action=""
      />
    </SafeAreaView>
  );
}
