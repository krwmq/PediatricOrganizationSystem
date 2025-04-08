import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container-fluid">
      <h1 className="fs-3">Pediatri Organizasyon Sistemi</h1>
      <nav>
        <ul className="nav">
          <li><Link to="/">Anasayfa</Link></li>
          <li><Link to="/acil">Acil Durum</Link></li>
          <li><Link to="/asistan">Asistanlar</Link></li>
          <li><Link to="/bolum">Bölümler</Link></li>
          <li><Link to="/duyuru">Duyurular</Link></li>
          <li><Link to="/ogretim">Öğretim Üyeleri</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/takvim">Takvim</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
