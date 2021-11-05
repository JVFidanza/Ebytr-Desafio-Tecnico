import React from 'react';
import PropTypes from 'prop-types';

function Task({ tarefa, status }) {
  const removeTask = () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: tarefa }),
    };

    fetch('http://localhost:5000/tasks', requestOptions)
      .then((response) => console.log(response.json()));

    window.location.reload(false);
  };
  return (
    <div>
      <li>
        {`${tarefa} - Status: ${status}`}
      </li>
      <button type="button" onClick={ () => removeTask() }>Deletar</button>
    </div>
  );
}

Task.propTypes = {
  tarefa: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Task;
