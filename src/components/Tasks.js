import Task from './Task';
import AddTask from './AddTask'
import { useState } from 'react'

const Tasks = ({ onPrivate, tasks, onDelete, onToggle, onUp, onDown, onComplete, onAdd }) => {


    return (
        <div className="bodyplaninner">
            <div className="addbtn">
                <AddTask onAdd={onAdd} />
            </div>
            {tasks.length > 0 ?
                <>
                    {tasks.filter((task) => task.Completion === false).map((task, index) => (
                        <Task key={index} task={task} onPrivate={onPrivate} onDelete={onDelete} onToggle={onToggle} onUp={onUp} onDown={onDown} onComplete={onComplete} />))
                    }
                </>
                : ('No Tasks To Show')
            }
        </div>
    )
}

export default Tasks


