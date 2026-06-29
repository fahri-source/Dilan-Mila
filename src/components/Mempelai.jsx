function Mempelai({ data }) {
  return (
    <>
      <section id="quran" className="section-quran py-5">
        <div className="container text-center">
          <p className="arabic-text" data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1200"
        data-aos-once="false">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
          </p>
          <p className="translation-text" data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1200"
        data-aos-once="false" >
            "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan hati..."
          </p>
          <p className="surah-text" >- Q.S. Ar-Rum: [30] 21 -</p>
        </div>
      </section>

      <section id="mempelai" className="section-mempelai py-5" data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1200"
        data-aos-once="false" >
        <div className="container text-center">
          <h2 className="font-sacramento display-4 mb-5">Pasangan Mempelai</h2>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-5 mb-md-0">
              <img src={data.pria.foto} alt="Groom" className="img-fluid rounded-circle profile-pic" />
              <h3 className="font-sacramento mt-3" data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1200"
        data-aos-once="false" >{data.pria.namaLengkap}</h3>
              <p>{data.pria.ortu}</p>
              <a href={data.pria.instagram} target="_blank" rel="noreferrer" className="text-dark">
                <i className="bi bi-instagram fs-4 me-1" />@{data.pria.nama.toLowerCase()}__
              </a>
            </div>
            <div className="col-md-5">
              <img src={data.wanita.foto} alt="Bride" className="img-fluid rounded-circle profile-pic" />
              <h3 className="font-sacramento mt-3" data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1200"
        data-aos-once="false" >{data.wanita.namaLengkap}</h3>
              <p>{data.wanita.ortu}</p>
              <a href={data.wanita.instagram} target="_blank" rel="noreferrer" className="text-dark">
                <i className="bi bi-instagram fs-4 me-1" />@{data.wanita.nama.toLowerCase()}__
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mempelai;