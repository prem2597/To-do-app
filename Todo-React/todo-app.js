class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input : ""
        };
    }
    render() {
        const tasks = this.props.tasks.map((tasks, i) => {
            return (
                <tr key={i}>
                    <td style = {{textDecoration : tasks.complete ? "line-through" : ""}} key = {i}> {tasks.name} </td>
                    <td><button data-index = {i} onClick = {this.taskDone}>Done</button></td>
                    <td><button data-index = {i} onClick = {this.deleteTask}>Delete</button></td>
                </tr>
            );
        });
        return (
            <div>
                <br/>
                <table>
                    <tbody>
                        {tasks}
                    </tbody>
                </table>
                <br/>
                <hr/>
                <input onChange = {this.handleChange} name = "task" placeholder = "Add a Task" value = {this.state.input} />
                <button onClick = {this.addTask}> Add Task</button>
            </div>
        );
    };

    handleChange = (event) => {
        this.setState({
            input : event.target.value
        });
    }

    addTask = () => {
        this.props.addTask(this.state.input);
        this.setState({
            input : ""
        });
    }

    deleteTask = (event) => {
        this.props.deleteTask(event.target.dataset.index);
    }

    taskDone = (event) => {
        this.props.taskDone(event.target.dataset.index);
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : []
        }
    }
    render(){
        return(
            <Task 
                tasks = {this.state.tasks}
                addTask = {this.addTask}
                deleteTask = {this.deleteTask}
                taskDone = {this.taskDone}
            />
        );
    };
    addTask = (name) => {
        this.setState(state => ({
            tasks : [...state.tasks, {name}]
        }));
    }
    deleteTask = (index) => {
        this.setState(state => {
            const tasks = [...state.tasks];
            tasks.splice(index, 1);
            return { tasks };
        });
    }
    taskDone = (index) => {
        this.setState(state => {
            const tasks = [...state.tasks];
            tasks[index].complete = !tasks[index].complete
            return {tasks}
        });
    }
}

ReactDOM.render(<App />, document.getElementById("todo"));
