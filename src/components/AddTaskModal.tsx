import useTasks from "@/hooks/useTasks";
import { useState } from "react";
import { View, Text, Modal, Button, TextInput } from "react-native";

export default function AddTaskModal({ isModalVisible, onClose, action }) {
  const [title, setTitle] = useState();
  const { addTask, fetchAllTasks } = useTasks();

  const onSubmit = async () => {
    const newTask = {
      title: title,
      completed: false,
    };

    await addTask(newTask);
    fetchAllTasks();
    onClose();
  };
  return (
    <Modal visible={isModalVisible} transparent>
      <View className="bottom-0 absolute w-full h-[40%] bg-slate-300">
        <Text className="text-slate-600 font-semibold text-lg mb-4 self-center">
          Title
        </Text>
        <TextInput
          className="bg-white"
          value={title}
          onChangeText={(e) => setTitle(e)}
        />
        <View className="bottom-1 absolute w-full">
          <Button title="Submit" onPress={onSubmit} color="green" />
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}
