import Image from "next/image";

export default function JoinAs() {
  return (
    <section className="relative block w-full overflow-hidden">
      <div className="flex w-full">
        <Image
          src="/left.png"
          alt="Left"
          width={955}
          height={864}
          className="block"
          priority
        />

        <Image
          src="/right.png"
          alt="Right"
          width={968}
          height={863}
          className="block"
          priority
        />
      </div>
    </section>
  );
}