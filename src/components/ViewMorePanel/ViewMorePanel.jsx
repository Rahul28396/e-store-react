import React, { useState } from 'react';
import styles from './ViewMorePanel.module.css'; // Assuming you have a CSS module for styling

const ViewMorePanel = ({ title, children, fetchContentFromBackend }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [visibleContent, setVisibleContent] = useState(typeof children === 'string' ? children.slice(0, 100) : children); // Handle string slicing
    const [isLoading, setIsLoading] = useState(false);

    const togglePanel = async () => {
        if (isExpanded) {
            // Collapse to initial content
            setVisibleContent(typeof children === 'string' ? children.slice(0, 100) : children);
        } else {
            if (fetchContentFromBackend) {
                // Fetch content from backend
                setIsLoading(true);
                try {
                    const fullContent = await fetchContentFromBackend();
                    setVisibleContent(fullContent);
                } catch (error) {
                    console.error("Failed to fetch content from backend:", error);
                } finally {
                    setIsLoading(false);
                }
            } else {
                // Expand to full content from frontend
                setVisibleContent(typeof children === 'string' ? children : children);
            }
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles["view-more-panel"]}>
            <h2 className={styles["panel-title"]}>{title}</h2>
            <div className={styles["panel-content"]}>
                {isLoading ? 'Loading...' : visibleContent}
            </div>
            <div className={styles["panel-footer"]}>
                <button className="btn-primary btn-terciary" onClick={togglePanel} disabled={isLoading}>
                    {isExpanded ? 'View Less' : 'View More'}
                </button>
            </div>            
        </div>
    );
};

export default ViewMorePanel;