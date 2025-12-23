import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto p-6">
        <Home />
      </main>

      <Footer />
    </div>
  )
}

export default App
