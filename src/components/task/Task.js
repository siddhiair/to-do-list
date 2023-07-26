import './Task.css';

const Task = ({data}) => {
  return(
    <div className="task-item">
			<p className="task-title">{data.title}</p>
			<div className="btn-group flex">
				<button type="button" className="btn btn-done">Done</button>
				<button type="button" className="btn btn-delete">Delete</button>
			</div>
		</div>
  );
}

export default Task;
