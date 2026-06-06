import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import MenuSection from '@/components/MenuSection'
import GallerySection from '@/components/GallerySection'
import ReviewsSection from '@/components/ReviewsSection'
import BookingSection from '@/components/BookingSection'
import LocationSection from '@/components/LocationSection'
import InstagramSection from '@/components/InstagramSection'
import Footer from '@/components/Footer'
import TweaksPanel from '@/components/TweaksPanel'

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <MenuSection />
      <GallerySection />
      <ReviewsSection />
      <BookingSection />
      <LocationSection />
      <InstagramSection />
      <Footer />
      <TweaksPanel />
    </>
  )
}
