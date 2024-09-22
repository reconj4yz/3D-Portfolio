import Globe from "react-globe.gl";

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
        <div className="col-span-1 xl:col-span-2 xl:row-span-4">
            <div className="grid-container">
                <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                    <Globe 
                    height={326}
                    width={752}
                    backgroundColor="rgba(0,0,0,0)"
                    backgroundImageOpacity={0.5}
                    showAtmosphere={true}
                    showGraticules={true}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    labelsData={[{
                        lat:28.636103, lng:77.097004,
                        text:"I'm Here !",
                        color: "#fff",
                        font: "Arial",
                        size: 35
                    }]}
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
