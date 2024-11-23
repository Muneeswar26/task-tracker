// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onEdit={onEditTask}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
