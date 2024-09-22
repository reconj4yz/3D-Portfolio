const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-4 ">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
          <div>
            <p className="grid-headtext">Hi, I'm Jai Chawla</p>
            <p className="grid-subtext">
              I'm a full-stack developer, passionate about creating innovative
              solutions. I have a background in computer science and a strong
              foundation in web development.
            </p>
          </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
            <div className="grid-container">
                <img src="/assets/grid2.png" alt="grid-2" className="m:h-[276px] h-fit object-contain" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
