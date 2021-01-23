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
      
      {/* <h2 className="font-bold text-3xl -mb-10">
        Hi, I'm Ferdiansyah Rahman
      </h2>

      <p className="-mt-5">Former IT Support, I'm a born problem solver, writer, and gamer. This is my personal website where i will mostly write and build things. Currently learning javascript and typescript.
      </p> */}

        <section class="text-gray-700 body-font">
            <div class="container px-2 pt-24 md:py-20 mx-auto lg:px-4">
                <div class="flex flex-col w-full mb-12 text-left lg:text-center">
                    <h2 class="mb-1 text-s font-semibold tracking-widest text-black-600 uppercase title-font">Hi!</h2>
                    <h1 class="mb-1 text-2xl font-semibold tracking-tighter text-black-800 sm:text-5xl title-font">
                        I'm Ferdiansyah Rahman
                    </h1>
                    <p class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3">
                    Former IT Support, I'm a born problem solver, writer, and gamer. This is my personal website where i will mostly write and build things.
                    </p>
                </div>
                
              </div>
        </section>

      <h2 className="mb-2 text-2xl font-semibold tracking-tighter text-gray-700 sm:text-4xl title-font mx-auto flex flex-col">
        Selected Project
      </h2>
      <hr/>
      <section class="text-gray-700 body-font">
            <div class="container px-1 mx-auto py-1 lg:px-4">
                <div class="flex flex-wrap text-left">
                    <div class="px-2 py-6 lg:w-1/3 md:w-full">
                        <img class="object-cover object-center w-full h-40 mb-6 rounded"
                            src="https://dummyimage.com/720x400/F3F4F7/8693ac" alt="content"></img>
                        <div class="flex items-center justify-between ">
                            <h2 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font"> Rumah Teknologi Air
                            </h2>
                            <span class="mb-1 text-xs font-medium tracking-widest text-blue-500 title-font">2017</span>
                        </div>
                        <p class="mb-4 text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat.
                            Distillery
                            hexagon disrupt edison bulbche.</p>
                    </div>
                    <div class="px-2 py-6 lg:w-1/3 md:w-full">
                        <img class="object-cover object-center w-full h-40 mb-6 rounded"
                            src="https://dummyimage.com/720x400/F3F4F7/8693ac" alt="content"></img>
                        <div class="flex items-center justify-between ">
                            <h2 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font"> Information 2
                            </h2>
                            <span class="mb-1 text-xs font-medium tracking-widest text-blue-500 title-font">Your
                                tagline</span>
                        </div>
                        <p class="mb-4 text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat.
                            Distillery
                            hexagon disrupt edison bulbche.</p>
                    </div>
                    <div class="px-2 py-6 lg:w-1/3 md:w-full">
                        <img class="object-cover object-center w-full h-40 mb-6 rounded"
                            src="https://dummyimage.com/720x400/F3F4F7/8693ac" alt="content"></img>
                        <div class="flex items-center justify-between ">
                            <h2 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font"> Information 3
                            </h2>
                            <span class="mb-1 text-xs font-medium tracking-widest text-blue-500 title-font">Your
                                tagline</span>
                        </div>
                        <p class="mb-4 text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat.
                            Distillery
                            hexagon disrupt edison bulbche.</p>
                    </div>
                </div>
            </div>
        </section>
                                    

      
    </div>

    
  );
}
