import React, { useEffect, useState } from 'react';
import Task from '../components/task';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [statusSelect, setStatusSelect] = useState('Pendente');
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:5000/tasks')
      .then((response) => response.json())
      .then((arrayTasks) => {
        setIsLoading(false);
        setTasks(arrayTasks);
      });
  }, []);

  const onChange = (element, setState) => {
    setState(element.target.value);
  };

  const sendTask = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: taskInput, status: statusSelect }),
    };
    fetch('http://localhost:5000/tasks', requestOptions)
      .then((response) => console.log(response.json()))
      .then(() => {
        setStatusSelect('Pendente');
        setTaskInput('');
      });
    window.location.reload(false);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <form id="new-task">
        <label htmlFor="status">
          Nova Tarefa:
          <input
            type="text"
            id="task"
            placeholder="Digite nova tarefa"
            onChange={ (e) => onChange(e, setTaskInput) }
          />
        </label>
        <label htmlFor="status">
          Status:
          <select
            id="status"
            onChange={ (e) => onChange(e, setStatusSelect) }
          >
            <option>Pendente</option>
            <option>Em Andamento</option>
            <option>Pronta</option>
          </select>
        </label>
        <button type="button" onClick={ () => sendTask() }>Cadastrar</button>
      </form>
      <h3>Tarefas:</h3>
      {isLoading ? (<p>Carregando...</p>) : (
        <ul>
          {tasks.map(({ tarefa, status, _id }) => (<Task
            tarefa={ tarefa }
            status={ status }
            key={ _id }
          />))}
        </ul>
      )}
    </div>
  );
}

export default Home;
