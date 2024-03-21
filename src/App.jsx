import Navbar from "../src/components/Navbar"
import Hero from "../src/components/Hero"
import Highlights from "../src/components/Highlights"
import Model from "./components/Model"
import * as Sentry from "@sentry/react"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App)
