import { useState, useEffect } from "react";

function Hero({ pria, wanita, tamu, targetTanggal }) {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const bedaWaktu = new Date(targetTanggal) - new Date();
      if (bedaWaktu <= 0) {
        setCountdown("Acara Telah Dimulai!");
        clearInterval(interval);
        return;
      }
      const hari = Math.floor(bedaWaktu / (1000 * 60 * 60 * 24));
      const jam = Math.floor((bedaWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const menit = Math.floor((bedaWaktu % (1000 * 60 * 60)) / (1000 * 60));
      const detik = Math.floor((bedaWaktu % (1000 * 60)) / 1000);

      setCountdown(`${hari} Hari : ${jam} Jam : ${menit} Menit : ${detik} Detik`);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTanggal]);

  return (
    <section id="home" className="section-home d-flex align-items-center justify-content-center text-center text-white">
      <div className="container">
        <div className="animate-up">
          <div className="photo-frame">
            <img src="/assets/img/cover.webp" alt="Foto Pasangan" />
          </div>
          <h4>The Wedding Of</h4>
          <h1 className="font-sacramento display-1">{pria} &amp; {wanita}</h1>
          <p>Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.</p>
          <h3 className="guest-name-home">{tamu}</h3>
        </div>
        <div className="countdown-container mt-4 animate-up" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          {countdown}
        </div>
      </div>
    </section>
  );
}

export default Hero;