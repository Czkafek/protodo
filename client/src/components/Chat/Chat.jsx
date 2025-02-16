import styles from './Chat.module.css'

import { useState } from 'react';

import arrowIcon from '../../assets/arrow-up.svg'

function Chat() {

    const [textareaValue, setTextareaValue] = useState("");
    const [messages, setMessages] = useState([{
        userMessage: "Chcę stworzyć aplikację do analizy danych z giełdy. Podaj przejrzystą nazwę zadania",
        aiMessage: "Proponowana nazwa zadania: 'Stworzenie aplikacji do analizy giełdowej' Czy chcesz ją skrócić lub zmodyfikować?"
    },
    {
        userMessage: "Chcę zrobić trening całego ciała. Rozłóż to na subtaski",
        aiMessage: "Oto podział na subtaski: Rozgrzewka (skakanka, krążenia ramion) Ćwiczenia siłowe (przysiady, pompki, martwy ciąg) Ćwiczenia na rdzeń (plank, brzuszki) Schłodzenie i rozciąganie Proponowana nazwa zadania: 'Trening całego ciała' Czy coś dodać lub zmienić?"
    }]);

    const handleChange = (e) => {
        setTextareaValue(e.target.value);
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    const sendMessage = () => {
        if(textareaValue !== "") {
            setMessages([...messages, {
                userMessage: textareaValue,
                aiMessage: "Waiting for the response..."
            }]);
            setTextareaValue("");
        }
    }

    return <div className={styles.chatContainer}>
        <div className={styles.messagesContainer}>
            {
                messages.map((message, index) => {
                    return <div key={index}>
                        <div className={styles.userMessage}>
                            <p>{message.userMessage}</p>
                        </div>
                        <div className={styles.aiMessage}>
                            <p>{message.aiMessage}</p>
                        </div>
                    </div>
                })
            }
        </div>
        <div className={styles.inputContainer}>
            <textarea value={textareaValue} onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => handleChange(e)} placeholder='Propose great name and sub-tasks for...'/>
            <button>
                <img src={arrowIcon} onClick={sendMessage} alt="" />
            </button>
        </div>
    </div>
}

export default Chat;