import Image from "next/image";

const JoinAs = () => {
  return (
    <section className="w-full h-[867px] overflow-hidden">
      <div className="flex w-full h-full">
        
        {/* Left Image */}
        <div className="relative w-1/2 h-full">
          <Image
            src="/left.png"
            alt="Left image"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Right Image */}
        <div className="relative w-1/2 h-full">
          <Image
            src="/right.svg"
            alt="Right image"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default JoinAs;