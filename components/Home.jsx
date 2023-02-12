import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import TaskInputField from "./TaskInputField.jsx";
import TaskItem from "./TaskItem.jsx";
import { StyleSheet, View, Keyboard, ScrollView } from "react-native";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const [checked, setChecked] = useState(false);

  const addTask = (task) => {
    if (task != null) {
      setTasks([...tasks, task]);
      Keyboard.dismiss();
    } else {
      alert("Task body is required");
    }
  };
  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((val, idx) => idx != deleteIndex));
  };
  const finishTask = (Index) => {
    setChecked(true);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#202124" />
      <ScrollView style={styles.taskContainer}>
        {tasks.map((task, idx) => {
          return (
            <View key={idx}>
              <TaskItem
                index={idx + 1}
                task={task}
                deleteTask={() => deleteTask(idx)}
                finishTask={() => finishTask(idx)}
              />
            </View>
          );
        })}
      </ScrollView>
      <TaskInputField addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202124",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  taskContainer: {
    width: "100%",
    marginTop: 40,
  },
});
