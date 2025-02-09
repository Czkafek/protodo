import { useState } from 'react';

import { motion } from "motion/react"
import { useDragControls } from "motion/react"
import { Reorder } from 'motion/react';

import styles from './Home.module.css'

import binIcon from '../../assets/bin.svg'
import checkboxOnIcon from '../../assets/checkbox-on.svg'
import checkboxOffIcon from '../../assets/checkbox-off.svg'
import downArrowIcon from '../../assets/more-arrow.svg'

import Sidebar from '../../components/Sidebar/Sidebar';
import AddSystem from '../../components/AddSystem/AddSystem';


function Home() {

    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const [tasks, setTasks] = useState([
        { name: "Zrobić zakupy", isDone: false },
        { name: "Napisać raport", isDone: true },
        { name: "Posprzątać pokój", isDone: false },
        { name: "Odpowiedzieć na e-maile", isDone: false },
        { name: "Uczyć się do testu", isDone: true },
        { name: "Zadzwonić do rodziców", isDone: true },
        { name: "Przygotować prezentację", isDone: false },
        { name: "Pójść na siłownię", isDone: false }
      ]);

    const [categories, setCategories] = useState(["Work", "Very important", "School", "Important", "Personal"]);
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const [inputValue, setInputValue] = useState("");

    const controls = useDragControls();



    const handleCheck = (targetIndex) => {
        const newTasks = tasks.map(
            (task, index) => index === targetIndex ? { ...task, isDone: !task.isDone } : task 
        );
        setTasks(newTasks);
    }

    const handleDelete = (targetTask, targetIndex) => {
        const newTasks = tasks.filter(
            (task, index) => index !== targetIndex
        );
        setTasks(newTasks);
    }

    return <div className={styles.homeBody}>
        <Sidebar isActive={isSidebarActive} setIsActive={setIsSidebarActive}/>
        <div className={`${styles.content} ${isSidebarActive ? styles.shifted : ""}`}>
            <h1>Today</h1> 
            <AddSystem activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} setCategories={setCategories} tasks={tasks} setTasks={setTasks} inputValue={inputValue} setInputValue={setInputValue} />
            <Reorder.Group values={tasks} onReorder={setTasks} className={styles.tasksContainer}>
                {
                    tasks.map((task, index) => {
                        const {name, isDone} = task;

                        return <Reorder.Item 
                                    value={task} 
                                    className={styles.task} 
                                    key={name}
                                >
                            <div className={styles.taskContent} >
                                <img src={isDone ? checkboxOnIcon : checkboxOffIcon}
                                    onClick={() => handleCheck(index)}
                                    alt="checkbox" />
                                <p className={isDone ? styles.checked : ""}>{name}</p>
                                <img src={downArrowIcon} alt="" />
                            </div>
                            <img src={binIcon} alt="bin" 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(task, index);}}
                            />
                        </Reorder.Item>
                    })
                }
            </Reorder.Group>
        </div>
    </div>
}

export default Home;