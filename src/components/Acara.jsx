function Acara({ akad, resepsi }) {
  return (
    <section id="tanggal" className="section-tanggal py-5 text-center" data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1200"
        data-aos-once="false">
      <div className="container">
        <h2 className="font-sacramento display-4 mb-5" >Save The Date</h2>
        <div className="row justify-content-center g-4">
          <div className="col-md-5">
            <div className="card event-card h-100">
              <div className="card-body" data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1200"
        data-aos-once="false">
                <h3 className="card-title">Akad Nikah</h3>
                <p><i className="bi bi-calendar-heart me-2" />{akad.tanggal}</p>
                <p><i className="bi bi-clock me-2" />{akad.jam}</p>
                <p><i className="bi bi-geo-alt me-2" />{akad.lokasi}</p>
                <small className="text-muted d-block">{akad.alamat}</small>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card event-card h-100">
              <div className="card-body" data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1200"
        data-aos-once="false" >
                <h3 className="card-title">Resepsi</h3>
                <p><i className="bi bi-calendar-heart me-2" />{resepsi.tanggal}</p>
                <p><i className="bi bi-clock me-2" />{resepsi.jam}</p>
                <p><i className="bi bi-geo-alt me-2" />{resepsi.lokasi}</p>
                <small className="text-muted d-block">{resepsi.alamat}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Acara;