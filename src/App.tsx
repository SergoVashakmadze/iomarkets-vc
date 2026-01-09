import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import { TickerTape } from './components/TickerTape'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <TickerTape />
        <Header />
        {/* Spacer for fixed header + ticker */}
        <div className="h-[110px]" />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
