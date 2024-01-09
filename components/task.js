// Task.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

const Task = ({ task, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setEditing(false);
    onEdit(editedTask);
  };

  return (
    <View style={styles.item3}>
      <View style={styles.taskDetails}>
        {isEditing ? (
          <View>
            <TextInput
              style={styles.editInput}
              value={editedTask.title}
              onChangeText={(text) => setEditedTask({ ...editedTask, title: text })}
            />
            <TextInput
              style={styles.editInput}
              value={editedTask.description}
              onChangeText={(text) => setEditedTask({ ...editedTask, description: text })}
            />
            <TextInput
              style={styles.editInput}
              value={editedTask.dueDate}
              onChangeText={(text) => setEditedTask({ ...editedTask, dueDate: text })}
            />
            <TextInput
              style={styles.editInput}
              value={editedTask.category}
              onChangeText={(text) => setEditedTask({ ...editedTask, category: text })}
            />
            <View style={styles.radioContainer}>
              <Text>Status:</Text>
              <View style={styles.radioButtons}>
                <RadioButton
                  value="New"
                  status={editedTask.status === 'New' ? 'checked' : 'unchecked'}
                  onPress={() => setEditedTask({ ...editedTask, status: 'New' })}
                />
                <Text>New</Text>
              </View>
              <View style={styles.radioButtons}>
                <RadioButton
                  value="In Progress"
                  status={editedTask.status === 'In Progress' ? 'checked' : 'unchecked'}
                  onPress={() => setEditedTask({ ...editedTask, status: 'In Progress' })}
                />
                <Text>In Progress</Text>
              </View>
              <View style={styles.radioButtons}>
                <RadioButton
                  value="Completed"
                  status={editedTask.status === 'Completed' ? 'checked' : 'unchecked'}
                  onPress={() => setEditedTask({ ...editedTask, status: 'Completed' })}
                />
                <Text>Completed</Text>
              </View>
            </View>
            <View style={styles.radioContainer}>
            <Text style={styles.labelText}>Priority:</Text>
              <View style={styles.radioButtons1}>
                <RadioButton
                  value="Low"
                  status={editedTask.priority === 'Low' ? 'checked' : 'unchecked'}
                  onPress={() => setEditedTask({ ...editedTask, priority: 'Low' })}
                />
                <Text>Low</Text>
              </View>
              <View style={styles.radioButtons1}>
                <RadioButton
                  value="Medium"
                  status={editedTask.priority === 'Medium' ? 'checked' : 'unchecked'}
                  onPress={() => setEditedTask({ ...editedTask, priority: 'Medium' })}
                />
                <Text>Medium</Text>
              </View>
              <View style={styles.radioButtons1}>
                <RadioButton
                  value="High"
                  status={editedTask.priority === 'High' ? 'checked' : 'unchecked'}
                  onPress={() => setEditedTask({ ...editedTask, priority: 'High' })}
                />
                <Text>High</Text>
              </View>
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.itemText}>Title: {task.title}</Text>
            <Text style={styles.itemText}>Description: {task.description}</Text>
            <Text style={styles.itemText}>Due Date: {task.dueDate}</Text>
            <Text style={styles.itemText}>Category: {task.category}</Text>
            <Text style={styles.itemText}>Status: {task.status}</Text>
            <Text style={styles.itemText}>Priority: {task.priority}</Text>
          </View>
        )}
      </View>
      <View style={styles.buttonsContainer}>
        {isEditing ? (
          <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
            <AntDesign name="checkcircleo" size={24} color="green" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setEditing(true)} style={styles.editButton}>
            <AntDesign name="edit" size={24} color="blue" />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item3: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,  // Adjusted marginBottom
    padding: 10,
    
  },
  
  
  taskDetails: {
    maxWidth: '70%',
  },
  itemText: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    padding: 10,
    marginRight: 10,
    bottom:65,
  },
    labelText: {
    marginRight: 10,
    left:200,
    bottom:150,
  },
  deleteButton: {
    padding: 10,
    bottom:65,
  },
  editInput: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginBottom: 7,
  },
  radioContainer: {
    marginTop: 10,

  },
  radioButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    
  },
  radioButtons1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    left:200,
    bottom:155,
  },
});

export default Task;