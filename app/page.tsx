import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import CoupleSection from '@/components/CoupleSection'
import EventsSection from '@/components/EventsSection'
import GallerySection from '@/components/GallerySection'
import VenueSection from '@/components/VenueSection'
import FamilySection from '@/components/FamilySection'
import InvitationNote from '@/components/InvitationNote'
import Footer from '@/components/Footer'
import DesignerCredit from '@/components/DesignerCredit'

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
      <DesignerCredit />
    </main>
  )
}
