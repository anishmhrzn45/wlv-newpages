import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20">
        <div className="container px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4 sm:mb-6">
                About WebLiveView
              </h1>
            </div>

            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
              {/* From Showroom to Screen */}
              <section className="mb-8 sm:mb-10 lg:mb-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-navy mb-3 sm:mb-4">From Showroom to Screen</h2>
                <p className="text-base sm:text-lg text-foreground mb-3 sm:mb-4">
                  Online shopping is quick. But it's not always personal. Shoppers click, scroll, and abandon because no one is there to guide them.
                </p>
                <p className="text-base sm:text-lg text-foreground mb-3 sm:mb-4">
                  Our founder, <strong>Barry McKenna</strong>, saw this first-hand while researching with retailers in Dublin. The same frustration came up again and again: <em>"We can't bring the showroom experience to the screen."</em>
                </p>
                <p className="text-base sm:text-lg text-foreground">
                  So Barry built WebLiveView — blending years in <strong>retail and software development</strong> to solve that exact problem.
                </p>
              </section>

              {/* Bringing Back the Human Touch */}
              <section className="mb-8 sm:mb-10 lg:mb-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-navy mb-3 sm:mb-4">Bringing Back the Human Touch</h2>
                <p className="text-base sm:text-lg text-foreground mb-3 sm:mb-4">
                  Our mission is simple: make online shopping feel as personal as walking into a store. With WebLiveView, sales teams can:
                </p>
                <ul className="text-base sm:text-lg text-foreground mb-3 sm:mb-4 space-y-2">
                  <li>• Meet customers face-to-face</li>
                  <li>• Show products in real time</li>
                  <li>• Answer questions instantly</li>
                  <li>• Help buyers choose with confidence</li>
                </ul>
              </section>

              {/* What Drives Us */}
              <section className="mb-8 sm:mb-10 lg:mb-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-navy mb-3 sm:mb-4">What Drives Us</h2>
                <ul className="text-base sm:text-lg text-foreground space-y-2 sm:space-y-3">
                  <li><strong>People First</strong> – Real conversations build real trust.</li>
                  <li><strong>Confidence Matters</strong> – Seeing live beats guessing every time.</li>
                  <li><strong>Innovation with Purpose</strong> – Tools that make selling easier, not harder.</li>
                  <li><strong>Growing Together</strong> – When you win, we win.</li>
                </ul>
              </section>

              {/* Why Choose WebLiveView */}
              <section className="mb-8 sm:mb-10 lg:mb-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-navy mb-3 sm:mb-4">Why Choose WebLiveView</h2>
                <ul className="text-base sm:text-lg text-foreground space-y-2 sm:space-y-3">
                  <li><strong>Built by Retailers, for Retailers</strong> – We've been on the shop floor. We know the pressure.</li>
                  <li><strong>Backed by Experience</strong> – 7 years of development and trusted by eCommerce brands.</li>
                  <li><strong>Solving Real Problems</strong> – Abandoned carts, hesitant buyers, complex sales. We fix them.</li>
                  <li><strong>Proven Across Sectors</strong> – Furniture, electrical, pharmacy, and motor retail.</li>
                </ul>
              </section>

              {/* What's Next */}
              <section className="mb-8 sm:mb-10 lg:mb-12 text-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-navy mb-3 sm:mb-4">What's Next</h2>
                <p className="text-base sm:text-lg text-foreground mb-3 sm:mb-4">
                  This is only the beginning. We're building smarter tools, deeper insights, and better ways for sales teams to connect.
                </p>
                <p className="text-lg sm:text-xl font-semibold text-brand-navy mb-2">
                  Because shopping shouldn't feel like guesswork.
                </p>
                <p className="text-lg sm:text-xl font-semibold text-brand-navy mb-4 sm:mb-6">
                  It should feel human.
                </p>
                <p className="text-base sm:text-lg text-foreground font-medium">
                  — The WebLiveView Team
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;