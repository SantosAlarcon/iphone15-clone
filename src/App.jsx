import Navbar from "../src/components/Navbar"
import Hero from "../src/components/Hero"
import Highlights from "../src/components/Highlights"
import Model from "./components/Model"

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  )
}

export default App
