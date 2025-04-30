import React, { useState } from 'react';
import styles from './StarRating.module.css'; // Optional: Add your styles here

const StarRating = ({ totalStars = 5, initialRating = 0, onRatingChange, disabled = false }) => {
    const [hoveredStar, setHoveredStar] = useState(null);
    const [selectedRating, setSelectedRating] = useState(initialRating);

    const handleMouseEnter = (index) => {
        if (!disabled) {
            setHoveredStar(index);
        }
    };

    const handleMouseLeave = () => {
        if (!disabled) {
            setHoveredStar(null);
        }
    };

    const handleClick = (index) => {
        if (!disabled) {
            setSelectedRating(index);
            if (onRatingChange) {
                onRatingChange(index);
            }
        }
    };

    const renderStars = () => {
        return Array.from({ length: totalStars }, (_, index) => {
            const starIndex = index + 1;
            const isFilled = hoveredStar ? starIndex <= hoveredStar : starIndex <= selectedRating;

            return (
                <span
                    key={starIndex}
                    className={`${styles.star} ${isFilled ? styles.filled : ''} ${disabled ? styles.disabled : ''}`}
                    onMouseEnter={() => handleMouseEnter(starIndex)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(starIndex)}
                >
                    ★
                </span>
            );
        });
    };

    return <div className={styles['star-rating']}>{renderStars()}</div>;
};

export default StarRating;