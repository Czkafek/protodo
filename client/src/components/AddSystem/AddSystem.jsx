import styles from './AddSystem.module.css'

import moreArrowIcon from '../../assets/sidebar/more-arrow.svg'

function AddSystem() {

    return <div className={styles.addSystemContainer}>
        <input className={styles.taskInput} placeholder='Make groceries, cook dinner...' type="text" />
        <div className={styles.customSelect}>
            <p>Work</p>
            <img src={moreArrowIcon} alt="" />
        </div>
        <button type="submit" className={styles.addTaskButton}>Add Task</button>
    </div>

}

export default AddSystem;