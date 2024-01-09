// App.js
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Task from './components/task'; // Ensure the correct path

const App = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    category: '',
    status: 'New',
  });
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Low',
      category: '',
      status: 'New',
    });
  };

  const handleEditTask = (editedTask, index) => {
    let itemsCopy = [...taskItems];
    itemsCopy[index] = editedTask;
    setTaskItems(itemsCopy);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Project tasks</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => (
              <Task
                key={index}
                task={item}
                onDelete={() => completeTask(index)}
                onEdit={(editedTask) => handleEditTask(editedTask, index)}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={'Title'}
          value={task.title}
          onChangeText={(text) => setTask({ ...task, title: text })}
        />
        <TextInput
          style={styles.input}
          placeholder={'Description'}
          value={task.description}
          onChangeText={(text) => setTask({ ...task, description: text })}
        />
        <TextInput
          style={styles.input}
          placeholder={'Due Date'}
          value={task.dueDate}
          onChangeText={(text) => setTask({ ...task, dueDate: text })}
        />
        <TextInput
          style={styles.input}
          placeholder={'Category'}
          value={task.category}
          onChangeText={(text) => setTask({ ...task, category: text })}
        />
        <Picker
          selectedValue={task.priority}
          onValueChange={(itemValue) => setTask({ ...task, priority: itemValue })}
        >
          <Picker.Item label='Low' value='Low' />
          <Picker.Item label='Medium' value='Medium' />
          <Picker.Item label='High' value='High' />
        </Picker>

        <Picker
          selectedValue={task.status}
          onValueChange={(itemValue) => setTask({ ...task, status: itemValue })}
        >
          <Picker.Item label='New' value='New' />
          <Picker.Item label='In Progress' value='In Progress' />
          <Picker.Item label='Completed' value='Completed' />
        </Picker>

        <TouchableOpacity onPress={() => handleAddTask()} style={styles.addButton}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  items: {
    marginTop: 10,
  },
  items1: {
    marginTop: 100,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  input: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginBottom: 7,
    width: 250,
    top:90,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 300,
    top: 155,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#55BCF6',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 24,
    color: '#FFF',
  },
});

export default App;