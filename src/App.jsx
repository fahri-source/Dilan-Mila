import { useState, useEffect, useRef } from "react";
import dataUndangan from "./db.json";
import Hero from "./components/Hero";
import Mempelai from "./components/Mempelai";
import Acara from "./components/Acara";
import Galeri from "./components/Galeri";
import Gift from "./components/Gift";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tamu, setTamu] = useState("Tamu Undangan");
  const audioRef = useRef(null);

  // Ambil nama tamu kustom dari URL (?to=Nama+Tamu)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const namaTamu = params.get("to");
    if (namaTamu) setTamu(namaTamu);
  }, []);

const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true); // 1. Set status pemutar menjadi true
    
    // 2. Berikan jeda mikroskopi agar React selesai menggambar elemen <audio> di DOM
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            console.log("Musik berhasil autoplay setelah interaksi.");
          })
          .catch((err) => {
            console.log("Autoplay diblokir oleh browser:", err);
            // Jika gagal karena proteksi browser, kembalikan state ke false
            setIsPlaying(false);
          });
      }
    }, 100);

    // Pemicu animasi AOS yang kamu inginkan sebelumnya
    setTimeout(() => {
      AOS.init({ duration: 1000, once: false, mirror: true });
      AOS.refresh();
    }, 500);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log(err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* 1. SEKSI COVER / LOCKSCREEN */}
      {!isOpen && (
        <div className="cover-page" id="coverPage">
          <div className="cover-content text-center">
            <img src="public/assets/img/cover.webp" alt="Wedding Cover" className="cover-image" />
            <h4>The Wedding Of</h4>
            <h1 className="font-sacramento">
              {dataUndangan.wedding.mempelai.pria.nama} &amp; {dataUndangan.wedding.mempelai.wanita.nama}
            </h1>
            <p className="mt-4">Kepada Yth. Bapak/Ibu/Saudara/i</p>
            <h3 className="guest-name">{tamu}</h3>
            <button onClick={handleOpenInvitation} className="btn btn-outline-light mt-4">
              <i className="bi bi-envelope-open-heart" /> Buka Undangan
            </button>
          </div>
        </div>
      )}

      {/* 2. SEKSI ISI UTAMA (MUNCUL SETELAH DIKLIK) */}
      {isOpen && (
        <main className="main-content">
          {/* Audio Element */}
          <audio ref={audioRef} loop src="public/assets/audio/wedding.mp3" />

          {/* Fixed Bottom Navbar */}
          <nav className="navbar navbar-expand-lg fixed-bottom bg-dark-transparent">
            <div className="container-fluid">
              <ul className="navbar-nav mx-auto d-flex flex-row justify-content-around w-100">
                <li className="nav-item"><a className="nav-link text-white" href="#home"><i className="bi bi-house-door" /></a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#mempelai"><i className="bi bi-heart" /></a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#tanggal"><i className="bi bi-calendar-check" /></a></li>
                <li className="nav-item music-toggle-container">
                  <button onClick={toggleMusic} className="btn btn-music">
                    <i className={`bi ${isPlaying ? "bi-disc fa-spin" : "bi-disc-mute"}`} />
                  </button>
                </li>
                <li className="nav-item"><a className="nav-link text-white" href="#galeri"><i className="bi bi-images" /></a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#amplop"><i className="bi bi-gift" /></a></li>
              </ul>
            </div>
          </nav>

          {/* Render Komponen Bagian */}
          <Hero pria={dataUndangan.wedding.mempelai.pria.nama} wanita={dataUndangan.wedding.mempelai.wanita.nama} tamu={tamu} targetTanggal={dataUndangan.wedding.tanggal} />
          <Mempelai data={dataUndangan.wedding.mempelai} />
          <Acara akad={dataUndangan.wedding.akad} resepsi={dataUndangan.wedding.resepsi} />
          {/* Dibungkus section id agar navigasi menu bawah berfungsi */}
          <section id="galeri" className="p-0">
            <Galeri foto={dataUndangan.galeri} />
          </section>
          <Gift daftarGift={dataUndangan.gift} pria={dataUndangan.wedding.mempelai.pria.nama} wanita={dataUndangan.wedding.mempelai.wanita.nama} />

          {/* Footer Tetap */}
          <footer className="footer py-4 text-center">
            <div className="small footer-powered">
              <span>Powered by :</span>
              <div className="font-esthetic mb-2" style={{ fontSize: "1.5rem" }}>fdgalerry.id</div>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/fahridwis05/"><img src="assets/img/instagram-logo.png" alt="instagram" /></a>
              <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=6281287927192"><img src="assets/img/whatsapp-logo.png" alt="whatApps" /></a>
            </div>
            <p className="mb-0">© 2026 {dataUndangan.wedding.mempelai.pria.nama} &amp; {dataUndangan.wedding.mempelai.wanita.nama}. All rights reserved.</p>
          </footer>
        </main>
      )}
    </>
  );
}

export default App;