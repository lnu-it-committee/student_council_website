'use client';

import Link from 'next/link';
import { useEffect } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Головна' },
  { href: '/#about', label: 'Про нас' },
  { href: '/#structure', label: 'Структура' },
  { href: '/#events', label: 'Події' },
  { href: '/#store', label: 'Амістор' },
  { href: '/#faq', label: 'Питання' },
] as const;

function closeMenu() {
  const toggle = document.getElementById('nav-toggle') as HTMLInputElement | null;
  if (toggle) toggle.checked = false;
}

export default function Header() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeMenu();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="hdr">
      <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-label="Відкрити меню" />

      <div className="hdr-bar">
        <Link href="/" className="logo" aria-label="Студрада ФПМІ — на головну" onClick={closeMenu}>
          ∑ Студрада ФПМІ
        </Link>

        <nav className="nav-d" aria-label="Основна навігація">
          <ul>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <label htmlFor="nav-toggle" className="burger" aria-hidden="true">
          <span />
          <span />
          <span />
        </label>
      </div>

      <nav id="mobile-menu" className="mnav" aria-label="Мобільна навігація">
        <ul>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={closeMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}