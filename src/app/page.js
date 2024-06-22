import Amenities from "@/Components/Amenities"
import Features from "@/Components/Features"
import Footer from "@/Components/Footer"
import Hero from "@/Components/Hero"
import Navbar from "@/Components/Navbar.js"

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Amenities />
      <Footer />
    </div>
  )
}

export default page