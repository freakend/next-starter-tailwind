import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Image
        src="/team-of-critters.svg"
        alt="Four one-eyed aliens playing"
        width={576}
        height={429.734}
        priority
      />

      <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
        Hi! Welcome to your first Next.js site.
      </h2>
      
      <div class="max-w-sm rounded-sm overflow-hidden shadow-lg m-16">
  
  <div class="h-64 bg-cover hover:bg-gray" style="background-image: url('https://user-images.githubusercontent.com/5419306/64431443-71823880-d088-11e9-9bd7-1b314f94dc1f.png')"></div>
  <div class="mx-6 my-4 border-b border-gray-light">
    <div class="font-medium text-base text-gray-darker mb-4">Item name goes here</div>
    <p class="font-normal text-gray-dark text-sm mb-2">
      Lorem ipsum dolor sit amet, consectetur
    </p>
    <p class="font-normal text-gray-dark text-sm mb-4">
      Lorem ipsum dolor sit amet, consectetur
    </p>
  </div>
  <div class="mx-6 my-4 flex">
    <div class="flex-grow">
      <span class="inline-block bg-red-light rounded-full p-1 pb-0 mr-2">
        <svg fill="white" width="16" height="16" viewBox="0 0 24 24"> 
        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
        </svg>
      </span>
      <span class="inline-block bg-red-light rounded-full p-1 pb-0 mr-2">
        <svg fill="white" width="16" height="16" viewBox="0 0 24 24"> 
        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
        </svg>
      </span>
    </div>
  );
}
