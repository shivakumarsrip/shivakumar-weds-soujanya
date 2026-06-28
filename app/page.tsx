import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import CoupleSection from '@/components/CoupleSection'
import EventsSection from '@/components/EventsSection'
import GallerySection from '@/components/GallerySection'
import VenueSection from '@/components/VenueSection'
import FamilySection from '@/components/FamilySection'
import InvitationNote from '@/components/InvitationNote'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="bg-bg min-h-screen">
      <Navbar />
      <HeroSection />
      <CoupleSection />
      <EventsSection />
      <GallerySection />
      <VenueSection />
      <FamilySection />
      <InvitationNote />
      <Footer />
    </main>
  )
}
