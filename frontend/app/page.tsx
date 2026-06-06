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
import LoadingGate from '@/components/LoadingGate'
import MenuSkeleton from '@/components/skeletons/MenuSkeleton'
import GallerySkeleton from '@/components/skeletons/GallerySkeleton'
import ReviewsSkeleton from '@/components/skeletons/ReviewsSkeleton'
import InstagramSkeleton from '@/components/skeletons/InstagramSkeleton'

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <LoadingGate skeleton={<MenuSkeleton />}><MenuSection /></LoadingGate>
      <LoadingGate skeleton={<GallerySkeleton />}><GallerySection /></LoadingGate>
      <LoadingGate skeleton={<ReviewsSkeleton />}><ReviewsSection /></LoadingGate>
      <BookingSection />
      <LocationSection />
      <LoadingGate skeleton={<InstagramSkeleton />}><InstagramSection /></LoadingGate>
      <Footer />
      <TweaksPanel />
    </>
  )
}
