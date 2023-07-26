import './App.css';
import Task from './components/task/Task';
import { useState } from 'react';

const InputField = ({val,handleChange}) => {
  return(
    <input type="text" className="form-control" id="task-input" value={val} onChange={handleChange} />
  );
}

function App() {
  const [inputVal, setInputVal] = useState("");
	const inputChange = (e) => {
		setInputVal(e.target.value)
	}

  const [tasks, setTasks] = useState([]);
  const addTask = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {id:"task"+tasks.length,title:inputVal}]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>A React JS To-Do-List App</h1>
      </header>

      <div className='wrapper'>
        <div className="form-wrap">
          <h4>Add new task</h4>
          <form className="w-full" onSubmit={(e)=>addTask(e)}>
            <div className="flex">
              <div className="form-group grow">
                <InputField handleChange={(e)=>inputChange(e)} val={inputVal} />
              </div>
              <button className="btn-submit shrink-0" type="submit">Add Task</button>
            </div>
          </form>
        </div>

        {tasks.length>0 &&
          tasks.map((el)=>{
            return(
              <Task key={el.id} data={el} />
            )
          })
        }
        {tasks.length===0 &&
          <div className='text-center no-task-msg'>No task added</div>
        }
      </div>
    </div>
  );
}

export default App;
