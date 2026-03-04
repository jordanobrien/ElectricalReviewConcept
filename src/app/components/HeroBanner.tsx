export function HeroBanner() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6 flex justify-center">
        <div className="bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center w-full md:w-[728px] h-[90px]">
          <div className="text-center">
            <p className="text-gray-400 text-[12px]">
              Advertisement <span className="hidden md:inline">728 × 90</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}