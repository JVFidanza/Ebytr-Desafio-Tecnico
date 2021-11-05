import React from 'react';
import PropTypes from 'prop-types';

function Task({ tarefa, status }) {
  return (
    <li>
      {`${tarefa} - Status: ${status}`}
    </li>
  );
}

Task.propTypes = {
  tarefa: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Task;
