import { useState, useRef, useEffect } from 'react';

import styles from './Dropdown.module.css'

import moreArrowIcon from '../../assets/more-arrow.svg'
import binIcon from '../../assets/bin.svg'

function Dropdown({activeCategory, setActiveCategory, categories, setCategories}) {

    const [isActive, setIsActive] = useState(false);
    const [isInputActive, setIsInputActive] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                handleInputBlur();
                setIsActive(false);
                setInputValue("");
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);

    }, []);


    const handleSelect = (category) => {
        setActiveCategory(category);
    }

    const handleDelete = (category, targetIndex) => {
        const newCategories = categories.filter((category, index) => index !== targetIndex);

        if(!newCategories.length)
            setActiveCategory("Insert new category");
        else if(activeCategory === category && newCategories.length > 0)
            setActiveCategory(newCategories[0]);

        setCategories(newCategories);
    }

    const handleDropdown = () => {
        setIsActive(!isActive);
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleInputBlur = () => {
        const trimmedValue = inputValue.trim();
        if(trimmedValue && !categories.includes(trimmedValue))
            setCategories([...categories, trimmedValue]);
        
        setInputValue("");
        setIsInputActive(false);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter')
            handleInputBlur();
    }



    return <div ref={dropdownRef} className={styles.dropdownContainer}>
        <div className={styles.current} onClick={handleDropdown}>
            <p>{activeCategory}</p>
            <img src={moreArrowIcon} alt="" />
        </div>
        {
            isActive &&
            <div className={styles.dropdown} >
                {   
                    categories.map((category, index) => {
                            return <div key={category} className={styles.optionContainer} onClick={() => handleSelect(category, index)}>
                                <p>{category}</p>
                                <img src={binIcon}
                                    onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(category, index);}}
                                    alt='bin'/>
                            </div>
                    })
                }
                <div className={styles.addContainer}>
                    {
                        !isInputActive &&
                        <p onClick={() => setIsInputActive(true)}>Add +</p>
                    }
                    {
                        isInputActive &&
                        <input type="text" autoFocus placeholder={"Type and press Enter"} value={inputValue} onKeyDown={handleKeyDown} onChange={handleInputChange} onBlur={handleInputBlur}/>
                    }
                </div>
            </div>
        }
    </div>

}

export default Dropdown;