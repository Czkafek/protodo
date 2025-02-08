import styles from './AddSystem.module.css'

import Dropdown from './Dropdown';


function AddSystem() {

    return <div className={styles.addSystemContainer}>
        <input className={styles.taskInput} placeholder='Make groceries, cook dinner...' type="text" />
        <Dropdown />
        <button type="submit" className={styles.addTaskButton}>Add Task</button>
    </div>

}

export default AddSystem;