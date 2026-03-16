import React, { useContext } from 'react';
import { DataContext } from '../../App';
import { useTheme } from '../../contexts/ThemeContext';

export default function Contact() {
  const contactsData = useContext(DataContext).contacts;
  const { darkMode } = useTheme();

  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
      {contactsData.map((item) => {
        const color = darkMode && item.darkColor ? item.darkColor : item.color;

        return (
          <a
            key={item.contId.toString()}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: color,
              textDecoration: 'none',
              border: `1px solid ${color}`,
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            className="contact-chip"
          >
            <i className={`${item.icon}`} style={{ fontSize: '18px' }}></i>
            <span>
              {item.displayName ||
                item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </span>
          </a>
        );
      })}
    </div>
  );
}
