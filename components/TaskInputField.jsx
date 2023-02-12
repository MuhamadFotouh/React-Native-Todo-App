import { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default TaskInputField = (props) => {
  const [task, setTask] = useState();
  const handleAddTask = (value) => {
    props.addTask(value);
    setTask(null);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder="Take a Note... "
        placeholderTextColor="#b2b9ba"
        onChangeText={(txt) => {
          setTask(txt);
        }}
        value={task}
      />

      <TouchableOpacity
        onPress={() => {
          handleAddTask(task);
        }}
      >
        <View style={styles.btn}>
          <MaterialIcons name="add" color="white" size={22} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    color: "#b2b9ba",
    backgroundColor: "#202124",
  },
  inputField: {
    width: "80%",
    borderWidth: 2,
    marginVertical: 20,
    marginLeft: 8,
    padding: 8,
    borderRadius: 18,
    color: "#b2b9ba",
    borderColor: "#525356",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fbbc04",
    width: 50,
    height: 50,
    borderRadius: 20,
    margin: 6,
  },
});
