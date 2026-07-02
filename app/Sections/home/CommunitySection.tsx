import Image from "next/image";

export default function CommunitySection() {
  return (
    <section className="w-full py-24 bg-[radial-gradient(circle_at_top_left,_#F7F8FA_0%,_#ECEEF1_55%,_#FFFFFF_100%)]">
      <div className="max-w-[1920px] mx-auto px-[121px] flex justify-center">
        <Image
          src="/joinas.png"
          alt="Join Community"
          width={2600}
          height={916}
          className="w-auto h-auto"
          priority
        />
      </div>
    </section>
  );
}