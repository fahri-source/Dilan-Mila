import { useState } from "react";

function Gift({ daftarGift, pria, wanita }) {
  const [salinIndex, setSalinIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setSalinIndex(index);
    setTimeout(() => setSalinIndex(null), 2000);
  };

  return (
    <section id="amplop" className="section-amplop py-5">
      <div className="container text-center">
        <h2 className="font-sacramento display-4 mb-4" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1200"
        data-aos-once="false">Amplop Digital</h2>
        <p className="mb-5" data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1200"
        data-aos-once="false">Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara digital.</p>
        
        <div className="row justify-content-center g-4" data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1200"
        data-aos-once="false" >
          {daftarGift.map((gift, idx) => (
            <div key={idx} className="col-md-5">
              <div className="gift-card-v2 p-4 border rounded shadow-sm bg-light">
                <div className="gift-header mb-3">
                  <img src={gift.logo} alt={gift.provider} className="gift-logo" style={{ maxHeight: "40px" }} />
                </div>
                <div className="gift-body">
                  <div className="gift-item mb-2">
                    <span className="text-muted d-block">a.n</span>
                    <strong>{gift.nama}</strong>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center" data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1200"
        data-aos-once="false" >
                    <div className="text-start">
                      <span className="text-muted small">Nomor Rekening / E-Wallet</span>
                      <h4 className="m-0" style={{ letterSpacing: "1px" }}>{gift.nomor}</h4>
                    </div>
                    <button onClick={() => copyToClipboard(gift.nomor, idx)} className="btn btn-dark btn-sm">
                      <i className="bi bi-copy me-1" /> {salinIndex === idx ? "Tersalin!" : "Salin"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gift;