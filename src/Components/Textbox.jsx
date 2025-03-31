import React, { useState, useEffect } from "react"
import '../App.css';

function Textbox(props) {
    const [text, setText] = useState("");
    const [theme, setTheme] = useState('light');
    const [copySuccess, setCopySuccess] = useState(false);
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    const Upper = () => {
        setText(text.toUpperCase());
    }
    
    const Lower = () => {
        setText(text.toLowerCase());
    }
    
    const Clear = () => {
        setText("");
    }

    const CopyText = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    const RemoveExtraSpaces = () => {
        setText(text.replace(/\s+/g, ' ').trim());
    }

    const CapitalizeFirst = () => {
        setText(text.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' '));
    }

    const AlternatingCase = () => {
        setText(text.split('').map((char, index) => 
            index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
        ).join(''));
    }

    const ReverseText = () => {
        setText(text.split('').reverse().join(''));
    }
    
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const calculateReadingTime = (text) => {
        if (!text.trim()) return 0;
        
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;
        
        // Average reading speed is 200-250 words per minute
        // Using 225 as a middle ground
        const readingSpeed = 225;
        const minutes = wordCount / readingSpeed;
        
        // Round to nearest minute, minimum 1 minute for non-empty text
        return wordCount > 0 ? Math.max(1, Math.round(minutes)) : 0;
    };

    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const charCount = text.length;
    const readingTime = calculateReadingTime(text);

    return (
        <div className="app-container">
            <div className="theme-toggle">
                <button className="theme-toggle-btn" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
            
            <div className="text-editor-container">
                <h1 className="heading">{props.value}</h1>
                <div className="textarea-container">
                    <textarea 
                        className="text-input"
                        onChange={handleOnChange} 
                        value={text} 
                        placeholder="Enter your text here..."
                    />
                </div>
                <div className="button-container">
                    <button className="btn primary" onClick={Upper}>Uppercase</button>
                    <button className="btn primary" onClick={Lower}>Lowercase</button>
                    <button className="btn primary" onClick={CapitalizeFirst}>Capitalize First</button>
                    <button className="btn primary" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn primary" onClick={AlternatingCase}>Alternating Case</button>
                    <button className="btn primary" onClick={ReverseText}>Reverse Text</button>
                    <button className="btn primary" onClick={CopyText}>
                        {copySuccess ? 'Copied!' : 'Copy Text'}
                    </button>
                    <button className="btn secondary" onClick={Clear}>Clear</button>
                </div>
            </div>
            
            <div className="stats-container">
                <h2 className="stats-heading">Text Statistics</h2>
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-label">Words</span>
                        <span className="stat-value">{wordCount}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Characters</span>
                        <span className="stat-value">{charCount}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Reading Time</span>
                        <span className="stat-value">{readingTime} min</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Textbox;