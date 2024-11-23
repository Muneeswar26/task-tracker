// src/App.js
import React, { useEffect, useState } from 'react';
import TaskEditModal from './components/TaskEditModal';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { loadFromLocalStorage, saveToLocalStorage } from './utils/localStorage';

const App = () => {
  const [tasks, setTasks] = useState(loadFromLocalStorage('tasks'));
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    saveToLocalStorage('tasks', tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const openEditModal = (task) => {
    setTaskToEdit(task);
    setIsEditModalOpen(true);
  };

  const saveEditedTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setTaskToEdit(null);
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onEditTask={openEditModal} />
      <TaskEditModal
        isOpen={isEditModalOpen}
        taskToEdit={taskToEdit}
        onSave={saveEditedTask}
        onClose={() => setIsEditModalOpen(false)}
      />
    </div>
  );
};

export default App;
