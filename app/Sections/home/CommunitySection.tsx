import Image from "next/image";

export default function CommunitySection() {
  return (
    <section className="w-full py-28 bg-[#F5F4EF]">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-20 px-6">
        {/* Title image */}
        <Image
          src="/Adventure Is Better Together.png"
          alt="Adventure Is Better Together"
          width={1175}
          height={174}
          priority
          className="w-auto h-auto"
        />

        {/* Description */}
        <p className="max-w-[929px] mt-6 mb-8 text-[28px] leading-[42px] tracking-[0.02em] text-[rgba(25,23,23,0.6)]">
          Connect with hikers, travelers, guides, and local experts.
          Share experiences, discover new adventures, and explore together.
        </p>
      </div>

      {/* Main Community Card */}
      <div className="flex justify-center">
        <div className="relative w-[1680px] h-[543px] rounded-[63px] overflow-hidden">
          
          {/* Background */}
          <Image
            src="/community-bg.svg"
            alt="bg"
            width={1680}
            height={543}
            priority
            className="w-full h-full object-cover"
          />

          {/* Left content image */}
          <div className="absolute top-0 left-0 z-20">
            <Image
              src="/join.png"
              alt="join"
              width={502}
              height={407}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}