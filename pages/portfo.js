import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex-col items-left justify-center space-y-12 md:px-28">
      <div>
      <h1 className="mb-12 text-4xl text-center font-bold text-black">Portfolio</h1>

      <section class="text-gray-800 body-font">
      <h1 className="mb-3 text-3xl font-bold text-black">Web Developing Project</h1>
        <hr />
            <div class="container px-1 mx-auto py-1 lg:px-4">
                <div class="flex flex-wrap text-left">
                    <div class="px-4 py-6 lg:w-1/3 md:w-full">
                        <img class="object-cover object-center w-full h-40 mb-6 rounded"
                            src="/rumahtek.png" alt="content"></img>
                        <div class="flex items-center justify-between ">
                            <h2 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font"> Rumah Teknologi Air
                            </h2>
                            <span class="mb-1 text-xs font-medium tracking-widest text-blue-500 title-font">2017</span>
                        </div>
                        <p class="mb-4 text-base leading-relaxed">I lead team of three, our main idea was simple; creating a product where everyone, especially they who are in needs, can discuss about their problem with experts at Direktorat Jenderal Sumber Daya Air. </p>
                    </div>
                    <div class="px-4 py-6 lg:w-1/3 md:w-full">
                        <img class="object-cover object-center w-full h-40 mb-6 rounded"
                            src="/orari.png" alt="content"></img>
                        <div class="flex items-center justify-between ">
                            <h2 class="mb-3 text-lg md:text-lg font-semibold text-gray-700 lg:text-lg title-font"> Orari Lokal Jakarta Pusat
                            </h2>
                            <span class="mb-1 text-xs font-medium tracking-widest text-blue-500 title-font">2018</span>
                        </div>
                        <p class="mb-4 text-base leading-relaxed">The Organisasi Amatir Radio Indonesia (ORARI) is a national non-profit organization for amateur radio enthusiasts in Indonesia. A key membership benefit of the ORARI is a QSL bureau for those Indonesian amateur radio operators in regular communications.</p>
                    </div>
                    <div class="px-4 py-6 lg:w-1/3 md:w-full">
                        <img class="object-cover object-center w-full h-40 mb-6 rounded"
                            src="/udzahra.png" alt="content"></img>
                        <div class="flex items-center justify-between ">
                            <h2 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">UD Zahra Construction
                            </h2>
                            <span class="mb-1 text-xs font-medium tracking-widest text-blue-500 title-font">2021</span>
                        </div>
                        <p class="mb-4 text-base leading-relaxed">UD Zahra is a trading businesses engaged in construction.</p>
                    </div>
                </div>
                
            </div>
            
            
        </section>

        <section class="text-gray-800 body-font">
      <h1 className="mb-3 text-3xl font-bold text-black">Design Project</h1>
        <hr />
            <div>
                <p>Under development.</p>
            </div>
            
            
        </section>
      </div>
      
    </div>
  );
}