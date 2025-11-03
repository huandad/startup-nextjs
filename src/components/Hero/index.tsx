import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      {/* 背景图片 */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-sleepwear.jpg"
          alt="HUCYZONY Sleepwear"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* 内容区域 */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 sm:py-48 lg:py-56">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
          HUCYZONY
          <span className="block text-indigo-300">Sleep in Luxury</span>
        </h1>

        <p className="max-w-2xl text-lg sm:text-xl text-gray-300 mb-10">
          Discover refined comfort through premium craftsmanship.
          HUCYZONY redefines sleepwear — elegant, soft, and effortless.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="rounded-md bg-indigo-500 px-8 py-3 text-lg font-semibold text-white hover:bg-indigo-400 transition"
          >
            Explore Collection
          </Link>
          <Link
            href="/about"
            className="rounded-md border border-white/40 px-8 py-3 text-lg font-semibold text-white hover:bg-white/10 transition"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
