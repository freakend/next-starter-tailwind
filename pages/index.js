import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-left justify-center space-y-12">
      
      {/* <Image
        src="/team-of-critters.svg"
        alt="Four one-eyed aliens playing"
        width={25}
        height={25}
        priority
      />  */}
      
      <h2 className="font-bold text-3xl -mb-10">
        Hi, I'm Ferdiansyah Rahman
      </h2>

      <p className="-mt-5">Former IT Tech, I'm a born problem solver, writer, and gamer. This is my personal website where i will mostly write and build things. Currently learning javascript and typescript.
      </p>

      <h2 className="font-bold text-3xl -mt-10">
        Selected Project
      </h2>

      
    </div>

    
  );
}
