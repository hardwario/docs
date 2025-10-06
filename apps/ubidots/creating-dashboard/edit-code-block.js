import React, { useState, useEffect } from 'react';

function EditCodeBlock({ initialText }) {
  const [text, setText] = useState(initialText);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleModeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleModeChange);

    return () => mediaQuery.removeEventListener('change', handleModeChange);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('Successfully copied to clipboard.');
  };
  
  const containerStyle = {
    position: 'relative',
    backgroundColor: isDarkMode ? '#2d2d2d' : '#f6f7f9',
    padding: '1rem',
    borderRadius: '8px',
    overflow: 'auto',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '0.5rem',
    right: '2.5rem',
    backgroundColor: isDarkMode ? '#3a3a3a' : '#ffffff',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '0.25rem',
    color: isDarkMode ? '#ccc' : '#555',
    boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
    transition: 'background-color 0.2s',
  };

  const textareaStyle = {
    width: '100%',
    minHeight: '150px',
    padding: '0.5rem',
    paddingRight: '3rem',
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    backgroundColor: 'transparent',
    border: 'none',
    resize: 'none',
    outline: 'none',
    color: isDarkMode ? '#e0e0e0' : '#333',
  };

  return (
    <div style={containerStyle}>
      <button
        onClick={handleCopy}
        title="Copy to clipboard"
        style={buttonStyle}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      </button>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="10"
        cols="50"
        style={textareaStyle}
      />
    </div>
  );
}

export default EditCodeBlock;
