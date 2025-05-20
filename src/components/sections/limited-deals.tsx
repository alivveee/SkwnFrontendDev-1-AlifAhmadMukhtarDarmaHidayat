import { CgMail } from "react-icons/cg";

export default function LimitedDeals() {
  return (
    <section className="flex flex-col justify-center gap-[40px] px-section py-8 md:py-20 bg-background text-secondary">
      <h1 className="text-sm md:text-2xl">LIMITED DEALS</h1>
      <h1 className="text-[18px] md:text-[64px] font-bold">
        We care about details and the quality of our products
      </h1>
      <div className="flex items-center rounded-lg overflow-hidden h-[60px] md:h-[80px] bg-white max-w-[583px]">
        <input
          type="email"
          placeholder="Enter your email here"
          className="flex-1 px-4 text-brown-800 text-base placeholder:text-brown-700 focus:outline-none h-full"
        />
        <button className="w-[60px] md:w-[80px] flex items-center justify-center bg-primary h-full">
          <CgMail className="text-brown-800 w-6 md:w-8 h-6 md:h-8" />
        </button>
      </div>
    </section>
  );
}
