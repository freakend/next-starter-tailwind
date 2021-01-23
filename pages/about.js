import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex-col items-left justify-center space-y-12">
        <div className="md:flex md:justify-center flex justify-center mb-6">
        <Image
        alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer"
        src="/portrait.png"
        width={200}
        height={200}
      />
      </div>
      <div>
        <section className="mb-6">
          {/* <h2 className="mb-3 text-xl font-bold">What is Tailwind?</h2> */}
          <p className="text-lg text-gray-800">
          My name is Ferdi. I'm a former IT technician who loves to code. I mostly used PHP and I'm currently learning Typescript, Javascript, and Nodejs.
          </p> <br />
          <p className="text-lg text-gray-800">
          Previously, i worked on Multinational Retail Company as an Senior IT Technician / Support. Operated all the retail hardware; POS, Digital Scales, Servers and their Softwares; Mysql, Php, SAP.
          </p>
        </section>

        <section>
        <h1 className="mb-3 text-3xl font-bold">Experience</h1>
        <hr />
        <h2 className="mb-3 text-2xl">Senior IT Support</h2>
        <h3 className="mb-3 text-l -my-4 font-bold">PT Lotte Shopping Indonesia | Bogor, West Java</h3>
        <h4 className="mb-3 text-m -my-4 font-italic">2019-2020</h4>
        <p className="text-lg text-gray-800">
          As I got promoted, I lead team of three managing and handling software
          and hardware issue. We believe things get easier when you have a great
          team.
        </p>

        <br />
        <h2 className="mb-3 text-2xl">IT Support</h2>
        <h3 className="mb-3 text-l -my-4 font-bold">PT Lotte Shopping Indonesia | Jakarta</h3>
        <h4 className="mb-3 text-m -my-4 font-italic">2016-2019</h4>
        <p className="text-lg text-gray-800">
          I was responsible for managing software and hardware issues; from POS to
          Digital Scales, Computers to Server rack. I also managed Daily, weekly
          and monthly reports, rapidly establish a good working relationship with
          other professionals, such as sales and finance departement.
        </p>
        </section>
      </div>

      
    </div>
  );
}
