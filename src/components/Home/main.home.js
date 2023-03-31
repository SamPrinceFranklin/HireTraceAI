import { NavLink } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="mt-10 md:pr-24 md:pl-24">
      <h1 className="font-medium text-2xl md:text-7xl text-dark">
        Trace Your Way to the Perfect Hire: HireTrace AI
      </h1>
      <p className="text-xs md:text-base text-gray-600 pt-3">
        HireTrace AI is a digital footprint analyzer for employment decisions.
        It analyzes a candidate's online presence, social media activity, and
        reputation to help companies make informed hiring decisions based on
        data.
      </p>
      <NavLink to="/chatgpt">
        <button
          type="button"
          className="mt-5 w-36 md:w-52 md:h-15 md:text-2xl font-medium rounded-lg px-5 py-2.5 border-2 border-black shadow-lg text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-dark"
          style={{ boxShadow: '0.4rem 0.4rem 0 #222' }}
        >
          Let's Go
        </button>
      </NavLink>
    </div>
  );
};

export default Home;
