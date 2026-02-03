import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { BookingFilters } from "../../components/booking/booking-filters";
import { WorkspaceGallery } from "../../components/booking/workspace-gallery";

export default function BookingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
            Book Your Workspace
          </h1>
          <BookingFilters />
          <WorkspaceGallery />
        </div>
      </div>
      <Footer />
    </main>
  );
}
