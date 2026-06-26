import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import CoupleSection from '@/components/CoupleSection'
import EventsSection from '@/components/EventsSection'
import GallerySection from '@/components/GallerySection'
import RSVPSection from '@/components/RSVPSection'
import VenueSection from '@/components/VenueSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="bg-bg min-h-screen">
      <Navbar />
      <HeroSection />
      <CoupleSection />
      <EventsSection />
      <GallerySection />
      <RSVPSection />
      <VenueSection />
      <Footer />
    </main>
  )
}
