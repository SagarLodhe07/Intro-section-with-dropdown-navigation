import React from "react";

const Content = () => {
  const clientImageSrc = [
    "/images/client-databiz.svg",
    "/images/client-audiophile.svg",
    "/images/client-maker.svg",
    "/images/client-meet.svg",
  ];

  return (
    <section className="md:max-w-6xl  md:h-[500px] h-full mx-auto grid md:grid-cols-2 grid-cols-1  gap-4 mt-16">
      <div className="md:py-10 md:px-2 relative order-2 md:order-1">
        <div className="md:space-y-14 text-center md:text-left space-y-6">
          <h1 className="font-bold md:text-6xl text-4xl">Make remote work</h1>
          <div className="md:max-w-sm max-w-md mx-auto md:m-0">
            <p className="text-[#696969] text-lg md:text-lg ">
              Get your team in sync. no matter your location. Streamline
              processes. create team rituals, and watch productivity soar.
            </p>
          </div>

          <button className="px-4 py-2 bg-black hover:bg-white hover:text-black text-white rounded-md border-2 border-gray-800">
            Learn more
          </button>
        </div>
        <div className="flex gap-6 items-center justify-center md:absolute md:bottom-6 mt-10">
          {clientImageSrc.map((imgSrc, i) => (
            <img
              key={i}
              src={imgSrc}
              alt="client image"
              className="w-20 md:w-48"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center md:justify-end  order-1">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/image-hero-desktop.png"
          />
          <img
            src="/images/image-hero-mobile.png"
            alt="Hero showing remote work illustration"
            className=" w-auto md:max-w-lg max-w-sm object-cover"
          />
        </picture>
      </div>
    </section>
  );
};

export default Content;
