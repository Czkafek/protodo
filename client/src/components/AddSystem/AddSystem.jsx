import styles from './AddSystem.module.css'

import Dropdown from './Dropdown';


function AddSystem({tasks, setTasks, inputValue, setInputValue, activeCategory, setActiveCategory, categories, setCategories}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask();
        setInputValue("");
    }

    const addTask = () => {
        const newTask = inputValue.trim();
        if(newTask)
            setTasks([...tasks, {name: newTask, isDone: false, category: activeCategory}]);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }


    return <form onSubmit={handleSubmit} className={styles.addSystemContainer}>
            <input className={styles.taskInput} value={inputValue} onChange={handleChange} placeholder='Make groceries, cook dinner...' type="text" />
            <Dropdown activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} setCategories={setCategories} />
            <button type="submit" className={styles.addTaskButton}>Add Task</button>
        </form>


}

export default AddSystem;