import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

const API_URL = 'https://docs-chatbot-beta.vercel.app/api/chat';

type Message = {
  role: 'user' | 'assistant';
  content: string;
  sources?: string[];
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function send() {
    const query = input.trim();
    if (!query || loading) return;

    setMessages(m => [...m, { role: 'user', content: query }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setMessages(m => [...m, {
        role: 'assistant',
        content: data.answer || 'Nastala chyba, zkuste to znovu.',
        sources: data.sources,
      }]);
    } catch {
      setMessages(m => [...m, {
        role: 'assistant',
        content: 'Nepodařilo se připojit k serveru. Zkuste to znovu.',
      }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className={styles.wrapper}>
      {open && (
        <div className={styles.panel}>
          <div className={styles.header}>
            <span>HARDWARIO Docs Asistent</span>
            <button className={styles.close} onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className={styles.messages}>
            {messages.length === 0 && (
              <div className={styles.empty}>
                Zeptejte se na cokoliv z dokumentace HARDWARIO.
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? styles.userMsg : styles.botMsg}>
                <p>{m.content}</p>
                {m.sources && m.sources.length > 0 && (
                  <div className={styles.sources}>
                    <span>Zdroje:</span>
                    <ul>
                      {m.sources.map(s => (
                        <li key={s}>
                          <a href={s} target="_blank" rel="noopener noreferrer">
                            {s.replace('https://docs.hardwario.com/', '')}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className={styles.botMsg}>
                <span className={styles.typing}>Hledám v dokumentaci…</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className={styles.inputRow}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Zadejte dotaz…"
              disabled={loading}
              maxLength={500}
            />
            <button onClick={send} disabled={loading || !input.trim()}>
              ➤
            </button>
          </div>
        </div>
      )}

      <button
        className={styles.fab}
        onClick={() => setOpen(o => !o)}
        title="Zeptejte se na dokumentaci"
      >
        {open ? '✕' : '💬'}
      </button>
    </div>
  );
}
