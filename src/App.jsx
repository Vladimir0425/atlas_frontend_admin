import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Layout } from "./components";

import {
  Admissions,
  AcademicOptions,
  Events,
  Calendar,
  News,
  Contact,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<></>} />
          <Route path="/admission" element={<Admissions />} />
          <Route path="/academic-option" element={<AcademicOptions />} />
          <Route path="/events" element={<Events />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<>Not found!</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
