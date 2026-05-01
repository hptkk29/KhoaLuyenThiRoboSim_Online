/* Header sticky — top:0 khi countdown bar ẩn (scroll >150px), top:bar-height khi hiện */
import { useState } from 'react';
import useScrollPosition from '../hooks/useScrollPosition';
import { trackAndRedirect } from '../utils/tracking';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 60;
  const isBarHidden = scrollY > 150; // sync với TopCountdownBar threshold

  return (
    <header
      className={[
        'lp-header',
        isScrolled ? 'lp-header--scrolled' : '',
        isBarHidden ? 'lp-header--bar-hidden' : '',
      ].filter(Boolean).join(' ')}
      role="banner"
    >
      <div className="container lp-header__inner">
        {/* Logo */}
        <a href="/" className="lp-header__logo" aria-label="Sata Robo — Trang chủ">
          <img src="/image/LogoSataROBO.png" alt="Logo Sata Robo" width="52" height="52" />
        </a>

        {/* Desktop nav */}
        <nav className="lp-header__nav" aria-label="Điều hướng chính">
          <a href="#pain" className="lp-header__link">Vấn đề</a>
          <a href="#courses" className="lp-header__link">Khoá học</a>
          <a href="#roadmap" className="lp-header__link">Lộ trình</a>
          <a href="#faq" className="lp-header__link">FAQ</a>
          <button
            onClick={() => trackAndRedirect('R1', 'header_R1')}
            className="btn btn-r1 btn-sm"
            aria-label="Đăng ký Khoá R1 cho Tiểu học"
          >
            Đăng Ký R1
          </button>
          <button
            onClick={() => trackAndRedirect('R2', 'header_R2')}
            className="btn btn-r2 btn-sm"
            aria-label="Đăng ký Khoá R2 cho THCS"
          >
            Đăng Ký R2
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="lp-header__mobile-nav" aria-label="Điều hướng mobile">
          <a href="#pain" className="lp-header__mobile-link" onClick={() => setMenuOpen(false)}>Vấn đề</a>
          <a href="#courses" className="lp-header__mobile-link" onClick={() => setMenuOpen(false)}>Khoá học</a>
          <a href="#roadmap" className="lp-header__mobile-link" onClick={() => setMenuOpen(false)}>Lộ trình</a>
          <a href="#faq" className="lp-header__mobile-link" onClick={() => setMenuOpen(false)}>FAQ</a>
          <button
            onClick={() => { trackAndRedirect('R1', 'header_R1'); setMenuOpen(false); }}
            className="btn btn-r1"
          >🟦 Đăng ký BẢNG R1 — 490k</button>
          <button
            onClick={() => { trackAndRedirect('R2', 'header_R2'); setMenuOpen(false); }}
            className="btn btn-r2"
          >🟪 Đăng ký BẢNG R2 — 490k</button>
        </nav>
      )}
    </header>
  );
}
