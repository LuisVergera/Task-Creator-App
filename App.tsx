import { TaskProvider } from "@/context/task";
import Landing from "@/screens/Landing";

export default function App() {
  return (
    <TaskProvider>
      <Landing />
    </TaskProvider>
  );
}
