import styles from './Home.module.css'
import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import AddSystem from '../../components/AddSystem/AddSystem';


function Home() {

    const [isSidebarActive, setIsSidebarActive] = useState(false);

    return <div className={styles.homeBody}>
        <Sidebar isActive={isSidebarActive} setIsActive={setIsSidebarActive}/>
        <div className={`${styles.content} ${isSidebarActive ? styles.shifted : ""}`}>
            <h1>Today</h1> 
            <AddSystem />
        </div>
    </div>
}

export default Home;