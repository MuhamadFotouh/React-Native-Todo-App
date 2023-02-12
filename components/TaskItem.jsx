import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default TaskItem = (props) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={[styles.taskItem, isChecked ? styles.taskItemChecked : {}]}>
      <TouchableOpacity onPress={handleCheck}>
        <MaterialIcons
          name={isChecked ? "check-box" : "check-box-outline-blank"}
          size={40}
          color="#a3a3a3"
        />
      </TouchableOpacity>
      <Text
        style={[styles.taskTitle, isChecked ? styles.taskTitleChecked : {}]}
      >
        {props.index}: {props.task}
      </Text>
      <TouchableOpacity onPress={props.deleteTask}>
        <MaterialIcons name="delete" size={40} color="#a3a3a3" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#b2b9ba",
    borderRadius: 10,
  },
  taskTitle: {
    flex: 1,
    fontSize: 20,
    color: "#bec0c3",
  },

  taskItemChecked: {
    borderWidth: 1,
    borderColor: "green",
    color: "green",
  },
  taskTitleChecked: {
    color: "green",
    textDecorationLine: "line-through",
  },
});
