import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OnlinePage from './pages/OnlinePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<OnlinePage />} />
      </Routes>
    </BrowserRouter>
  )
}
