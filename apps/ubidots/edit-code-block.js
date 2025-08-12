import React, { useState } from 'react';

function EditCodeBlock({ initialText }) {
  const [text, setText] = useState(initialText);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('Successfully copied to clipboard.');
  };

  return (
    <div style={{ position: 'relative', backgroundColor: '#f6f7f9', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
      <button
        onClick={handleCopy}
        title="Copy to clipboard"
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem',
          color: '#888',
        }}
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
        style={{
          width: '100%',
          minHeight: '150px',
          padding: '0.5rem',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          backgroundColor: 'transparent',
          border: 'none',
          resize: 'none',
          outline: 'none',
        }}
      />
    </div>
  );
}

export default EditCodeBlock;