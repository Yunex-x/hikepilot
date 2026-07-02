export default function Footer() {
  return (
    <footer className="bg-[#131A29] text-white pt-20">
      <div className="max-w-[1920px] mx-auto px-[121px]">
        {/* Desktop */}
        <div className="hidden lg:flex pb-14 border-b border-white/10">
          {/* Column 1 */}
          <div className="w-[447px]">
            <img
              src="/logo.png"
              alt="Hikepilot"
              className="w-[185px] h-auto mb-6"
            />

            <p className="text-white/80 text-[16px] leading-[24px] mb-8">
              Discover and book amazing outdoor experiences from trusted
              providers. From camping to guided tours, find your perfect
              adventure.
            </p>

            <div className="flex items-center gap-6">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/footer/facebook.png"
      alt="Facebook"
      className="w-8 h-8 hover:scale-110 transition"
    />
  </a>

  <a
    href="https://tiktok.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/footer/tiktok.png"
      alt="TikTok"
      className="w-8 h-8 hover:scale-110 transition"
    />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/footer/instagram.png"
      alt="Instagram"
      className="w-8 h-8 hover:scale-110 transition"
    />
  </a>

  <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/footer/youtube.png"
      alt="YouTube"
      className="w-8 h-8 hover:scale-110 transition"
    />
  </a>
</div>
          </div>

          {/* Gap 108 */}
          <div className="w-[108px]" />

          {/* Column 2 */}
          <div className="w-[550px]">
            <h3 className="text-[32px] font-medium leading-[24px] mb-4">
              Stay Update
            </h3>

            <p className="text-white/80 text-[16px] mb-6">
              Subscribe to get special offers and updates.
            </p>

            <div className="flex gap-2 mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-[400px] h-[56px] rounded-[10px] bg-white/5 px-6 placeholder:text-white/50"
              />

              <button className="w-[142px] h-[56px] rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] font-semibold">
                Send
              </button>
            </div>

            <div className="flex gap-6 text-[12px] text-white">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookies</a>
            </div>
          </div>

          {/* Gap 140 */}
          <div className="w-[140px]" />

          {/* Column 3 */}
          <div className="w-[205px]">
            <h3 className="text-[24px] mb-6">Platform</h3>

            <ul className="space-y-4 text-white/80 text-[16px]">
              <li><a href="#">Home</a></li>
              <li><a href="#">Activities</a></li>
              <li><a href="#">Tours</a></li>
              <li><a href="#">Camping</a></li>
              <li><a href="#">Hiking</a></li>
            </ul>
          </div>

          {/* Gap 20 */}
          <div className="w-[20px]" />

          {/* Column 4 */}
          <div className="w-[205px]">
            <h3 className="text-[24px] mb-6">Company</h3>

            <ul className="space-y-4 text-white/80 text-[16px]">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col gap-12 pb-14 border-b border-white/10">
          <div>
            <img
              src="/logo.png"
              alt="Hikepilot"
              className="w-[160px] h-auto mb-6"
            />

            <p className="text-white/80 text-sm leading-6 mb-6">
              Discover and book amazing outdoor experiences from trusted
              providers. From camping to guided tours, find your perfect
              adventure.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-4">Stay Update</h3>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-14 rounded-xl bg-white/5 px-5"
              />

              <button className="h-14 rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] font-semibold">
                Send
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-4">Platform</h3>
            <ul className="space-y-3 text-white/80">
              <li>Home</li>
              <li>Activities</li>
              <li>Tours</li>
              <li>Camping</li>
              <li>Hiking</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4">Company</h3>
            <ul className="space-y-3 text-white/80">
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="h-[53px] flex items-center justify-center text-[14px] text-white">
          © 2026 Hikepilot Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}