import React, { useState } from 'react';
import styles from './ViewMorePanel.module.css'; // Assuming you have a CSS module for styling

const ViewMorePanel = ({ title, children, fetchContentFromBackend }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [visibleContent, setVisibleContent] = useState(children.slice(0, 100)); // Show first 100 characters by default
    const [isLoading, setIsLoading] = useState(false);

    const togglePanel = async () => {
        if (isExpanded) {
            // Collapse to initial content
            setVisibleContent(children.slice(0, 100));
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
                setVisibleContent(children);
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
            <button className="btn-primary btn-terciary" onClick={togglePanel} disabled={isLoading}>
                {isExpanded ? 'View Less' : 'View More'}
            </button>
        </div>
    );
};

export default ViewMorePanel;