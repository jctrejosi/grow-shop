import { BrowserRouter, Routes, Route } from 'react-router-dom';

// -----------------------------------------------------------------------------

export const AppRouter = () => {

  return (
    <BrowserRouter basename="/growShop">
      <Routes>
        <Route path="/" element={<div>Path base (Página inicial)</div>} />
        <Route
          path="/*"
          element={
            <section className="router-inner-container">
              <header></header>
              <Routes>
                <Route path="innerExample" element={<div>Página interna de ejemplo</div>} />
              </Routes>
              <footer></footer>
            </section>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
