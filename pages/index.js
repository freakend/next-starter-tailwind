import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-left justify-center space-y-12">
      
        <div className="md:flex md:justify-center md:pt-1 flex pt-20 justify-center">
            <Image
            alt="welcome"
            src="/undrawhelo.svg"
            width={250}
            height={250}
        />
        </div>

        <section class="text-gray-700 body-font">
            <div class="container px-2 pt-0 md:py-2 mx-auto lg:px-4">
                <div class="flex flex-col w-full mb-12 text-left lg:text-center">
                    <h2 class="mb-1 text-s font-semibold tracking-widest text-black-600 italic title-font">Welcome!</h2>
                    <h1 class="mb-1 text-2xl font-semibold tracking-tighter text-black-800 sm:text-5xl title-font">
                        I'm Ferdiansyah Rahman
                    </h1>
                    <p class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3">
                    Former IT Support, I'm a born problem solver, writer, and gamer. This is my personal website where i will mostly write and build things.
                    </p>
                </div>
                
              </div>
        </section>
                                    

      
    </div>

    
  );
}
