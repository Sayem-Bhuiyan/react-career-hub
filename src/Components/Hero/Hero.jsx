import sayem from "../../assets/sayem-removebg-preview.png";

const Hero = () => {
  return (
    <div className=" flex flex-col md:flex-row-reverse justify-between items-center">
        <img
          src={sayem}
          className="max-w-sm rounded-lg shadow-2xl bg-base-200"
        />
        <div className="w-1/2">
          <h1 className="text-7xl font-extrabold leading-[80px] tracking-normal text-[#1A1919]">
             One Step
             <br /> Closer To Your <br /> <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">Dream Job</span>
          </h1>
          <p className="py-6 max-w-fit">
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-extrabold text-xl ">Get Started</button>
        </div>
      </div>
  );
};

export default Hero;
