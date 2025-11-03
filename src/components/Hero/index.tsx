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
  {/* ✅ 在这里加半透明遮罩 */}
  <div className="absolute inset-0 bg-black/40"></div>
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


      </div>
    </section>
  );
};

export default Hero;
