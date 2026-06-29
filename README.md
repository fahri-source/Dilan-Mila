# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
------------------------------------------------------------------
🔥 Catatan Penting 
untuk Jumlah Foto:Pada bagian CSS transform: rotateY(calc(var(--i) * 90deg)), angka 90deg digunakan dengan asumsi isi array galeri di dalam file db.json kamu berjumlah tepat 4 foto ($360^\circ / 4 = 90^\circ$).Jika nanti jumlah fotomu di db.json bertambah atau berkurang, ubah angka pembagiannya di CSS agar lingkarannya menutup dengan sempurna:5 Foto $\rightarrow$ Ganti 90deg menjadi 72deg ($360^\circ / 5$)6 Foto $\rightarrow$ Ganti 90deg menjadi 60deg ($360^\circ / 6$)