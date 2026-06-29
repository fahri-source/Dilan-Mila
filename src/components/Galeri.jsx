import { Box } from "@mui/material";

/**
 * Galeri 3D Rotating Carousel
 * Menerima array tautan foto langsung dari App.jsx
 * * @param {Object} props
 * @param {Array} props.foto
 * @returns React.ReactElement
 */
const Galeri = ({ foto }) => {
  // Antisipasi darurat jika data galeri di db.json kosong atau tidak terbaca sebagai array
  if (!foto || !Array.isArray(foto)) {
    return (
      <Box sx={{ color: "white", py: 5 }}>
        Gagal memuat galeri foto.
      </Box>
    );
  }

  return (
    <Box
      className="section-galeri-3d"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "text.primary",
        overflow: "hidden",
        py: {
          md: 30,
          xs: 15,
        },
      }}
    >
      {/* Box Silinder Utama Penampung Rotasi 3D */}
      <Box id="boxImage" className="box-image-3d">
        {foto.map((src, key) => (
          <Box 
            key={key} 
            component="span" 
            style={{ "--i": key + 1 }}
          >
            <Box 
              component="img" 
              src={src} 
              alt={`Galery Pernikahan ${key + 1}`} 
              loading="lazy" // Menghemat beban load gambar di HP tamu
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Galeri;