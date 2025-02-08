import { useState } from 'react';

import styles from './Dropdown.module.css'

import moreArrowIcon from '../../assets/more-arrow.svg'
import binIcon from '../../assets/bin.svg'

function Dropdown() {

    const [categories, setCategories] = useState(["Work", "Very important", "School", "Important", "Personal"]);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [isActive, setIsActive] = useState(false);


    const handleSelect = (category) => {
        setActiveCategory(category);
    }

    const handleDelete = (category, targetIndex) => {
        const newCategories = categories.filter((category, index) => index !== targetIndex);
        if(activeCategory === category)
            setActiveCategory(newCategories[0]);
        setCategories(newCategories);
    }

    const handleDropdown = () => {
        setIsActive(!isActive);
    }



    return <div className={styles.dropdownContainer}>
        <div className={styles.current} onClick={handleDropdown}>
            <p>{activeCategory}</p>
            <img src={moreArrowIcon} alt="" />
        </div>
        {
            isActive &&
            <div className={styles.dropdown}>
                {   
                    categories.map((category, index) => {
                            return <div key={index} className={styles.optionContainer} onClick={() => handleSelect(category, index)}>
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
                    <p>Add +</p>
                </div>
            </div>
        }
    </div>

}

export default Dropdown;