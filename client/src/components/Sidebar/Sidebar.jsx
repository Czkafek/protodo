import styles from './Sidebar.module.css'
import burgerMenuImg from '../../assets/sidebar/burger-menu.svg'
import aiIcon from '../../assets/sidebar/ai.svg'
import settingsIcon from '../../assets/sidebar/settings.svg'
import foldersData from './folders'

import { useEffect, useState } from 'react'

function Sidebar({ isActive, setIsActive}) {

    const [folders, setFolders] = useState(foldersData);

    const handleAddFolder = () => {
        setFolders([...folders, "New Folder"]);
    };
    
    return <div className={`${styles.sidebar} ${isActive ? styles.active : ''}`}>
        <img src={burgerMenuImg} className={styles.burgerMenu} onClick={() => setIsActive(!isActive)} alt="menu icon" />
        {   isActive &&
        <>
            <div className={styles.iconOptionContainer}>
                <img src={aiIcon} alt="AI icon" />
                <p>Ask AI</p>
            </div>
            <div className={styles.foldersContainer}>
                {
                    folders.map((folder, index) => {
                        return <p key={folder}>{folder}</p>
                    })
                }
                <p className={styles.addFolder} onClick={handleAddFolder} >Add +</p>
            </div>
            <div className={styles.iconOptionContainer} id={styles.settings}>
                <img src={settingsIcon} />
                <p>Settings</p>
            </div>
        </>
        }
    </div>
}

export default Sidebar;