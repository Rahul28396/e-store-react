import React, {
    useState,
    createContext,
    useContext,
    useRef,
    useEffect,
} from "react";
import "./Overlay.css";

const OverlayContext = createContext();

const Overlay = ({ children, className = "" }) => {
    const [open, setOpen] = useState(false);

    return (
        <OverlayContext.Provider value={{ open, setOpen }}>
            <div className={`overlay-container ${className}`}>
                {children}
            </div>
        </OverlayContext.Provider>
    );
};

const OverlayTrigger = ({ children }) => {
    const { setOpen } = useContext(OverlayContext);
    return (
        <div
            className="overlay-trigger"
            onMouseEnter={() => setOpen(true)}
        >
            {children}
        </div>
    );
};

const OverlayContent = ({ children, className = "" }) => {
    const { open, setOpen } = useContext(OverlayContext);
    const contentRef = useRef(null);

    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event) => {
            if (
                contentRef.current &&
                !contentRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, setOpen]);

    if (!open) return null;
    return (
        <div
            ref={contentRef}
            className={`${className} overlay-content`}
        >
            {children}
        </div>
    );
};

Overlay.Trigger = OverlayTrigger;
Overlay.Content = OverlayContent;

export default Overlay;
