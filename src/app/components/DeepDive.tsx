import { Link } from "react-router";
import { BookOpen } from "lucide-react";

export function DeepDive() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 className="text-[14px] mb-6 text-[var(--navy-deep)] tracking-wide uppercase" style={{ fontWeight: '600' }}>
          Featured Analysis
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Analysis Article */}
          <div className="lg:col-span-9">
            <div className="relative h-[280px] overflow-hidden bg-[var(--navy-deep)] border-2 border-[var(--electric-blue)]/20 group hover:border-[var(--electric-blue)]/40 transition-all duration-300">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1400&h=800&fit=crop"
                  alt="Cooling infrastructure in a critical facility"
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="text-white text-[28px] leading-[1.2] mb-2" style={{ fontWeight: '700' }}>
                  The operator's guide to<br />
                  liquid cooling deployment
                </h3>
                <p className="text-white/90 text-[14px] mb-6 max-w-xl leading-[1.5]">
                  From facility water systems to rack interfaces, this guide maps the decisions that turn a cooling concept into a maintainable production environment.
                </p>
                <Link
                  to="/analysis/liquid-cooling-deployment-guide"
                  className="bg-[var(--electric-blue)] hover:bg-blue-500 text-white px-6 py-3 flex items-center gap-2 text-[14px] transition-all self-start hover:shadow-lg hover:scale-105"
                  style={{ fontWeight: '600' }}
                >
                  <span className="flex items-center gap-2">
                    <BookOpen size={16} strokeWidth={2.5} />
                    Explore the analysis
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* MPU Ad */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-center">
            <div className="bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center" style={{ width: '300px', height: '250px' }}>
              <div className="text-center">
                <p className="text-gray-400 text-[12px]">
                  Advertisement<br />300 × 250
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
