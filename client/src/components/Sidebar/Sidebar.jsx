import styles from './Sidebar.module.css'
import burgerMenuImg from '../../assets/sidebar/burger-menu.svg'
import aiIcon from '../../assets/sidebar/ai.svg'
import foldersData from './folders'

import { useEffect, useState } from 'react'

function Sidebar() {

    const [isActive, setIsActive] = useState(false);
    const [folders, setFolders] = useState(foldersData);

    const handleAddFolder = () => {
        setFolders([...folders, "New Folder"]);
    };
    
    return <div className={`${styles.sidebar} ${isActive ? styles.active : ''}`}>
        <img src={burgerMenuImg} className={styles.burgerMenu} onClick={() => setIsActive(i => i = !i)} alt="menu icon" />
        {   isActive &&
        <>
        <div className={styles.askAIContainer}>
            <img src={aiIcon} alt="AI icon" />
            <p>Ask AI</p>
        </div>
        <div className={styles.foldersContainer}>
            {
                folders.map((folder, index) => {
                    return <p>{folder}</p>
                })
            }
            <p className={styles.addFolder} onClick={handleAddFolder} >Add +</p>
        </div>
        </>
        }
    </div>
}

export default Sidebar;