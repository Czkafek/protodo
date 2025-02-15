import styles from './Chat.module.css'

import { useState } from 'react';

import arrowIcon from '../../assets/arrow-up.svg'

function Chat() {

    const [textareaValue, setTextareaValue] = useState("");

    const handleChange = (e) => {
        setTextareaValue(e.target.value);
    }

    return <div className={styles.chatContainer}>
        <div className={styles.inputContainer}>
            <textarea value={textareaValue} onChange={(e) => handleChange(e)} placeholder='Propose great name and sub-tasks for...'/>
            <button>
                <img src={arrowIcon} alt="" />
            </button>
        </div>
    </div>
}

export default Chat;