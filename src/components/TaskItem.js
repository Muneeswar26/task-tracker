// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.description || 'N/A'}</td>
      <td>{task.dueDate}</td>
      <td>{task.status}</td>
      <td>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskItem;
