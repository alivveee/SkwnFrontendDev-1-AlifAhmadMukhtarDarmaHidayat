import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white px-section py-16 text-sm text-secondary w-full flex flex-col md:flex-row justify-between gap-12">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center md:items-start md:max-w-[400px]">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={98} height={48} />
        </Link>
        <p className="text-muted leading-relaxed mt-8 text-center md:text-left">
          Dekoor is a furniture company created to fulfill the needs of family
          with aesthetic feeling in their furniture. Always pay attention to
          details and give clear communication for the customers. Priority of
          our design is comfortability.
        </p>
        <p className="mt-6 text-xs text-muted">©Copyright 2022 Dekoor</p>
      </div>

      {/* Right Sections */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Support */}
        <div>
          <h4 className="text-secondary font-semibold mb-6">Support</h4>
          <ul className="space-y-6 text-muted">
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Shipping & Returns</Link>
            </li>
            <li>
              <Link href="#">Care guide</Link>
            </li>
            <li>
              <Link href="#">Redeem warranty</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-neutral-900 font-semibold mb-6">Social Media</h4>
          <ul className="space-y-6 text-muted">
            <li>
              <Link href="#">Instagram</Link>
            </li>
            <li>
              <Link href="#">Facebook</Link>
            </li>
            <li>
              <Link href="#">Twitter</Link>
            </li>
            <li>
              <Link href="#">TikTok</Link>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div className="col-span-2 md:col-span-1 justify-self-center md:justify-self-start">
          <h4 className="text-neutral-900 font-semibold mb-6">About Us</h4>
          <ul className="space-y-6 text-muted">
            <li>
              <Link href="#">Our story</Link>
            </li>
            <li>
              <Link href="#">Designer</Link>
            </li>
            <li>
              <Link href="#">Craftmanship</Link>
            </li>
            <li>
              <Link href="#">Sustainability</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
