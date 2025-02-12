/* This example requires Tailwind CSS v2.0+ */
import { Link } from "react-router-dom";
import counseling from "./counseling.jpg";
import logo from "./logo1.png";
import lock from "./lock.png";
import abhishek from "./Abhishek.jpg";
import shrinivas from "./shrinivas.jpg";
import sandip from "./Sandip.jpg";
import shivprasad from "./shivprasad.jpg";
import yash from "./yash.jpg";
import Shailesh from "./Shailesh.jpg";
import pande from "./pande.jpg";
import trained from "./trained.jpg";

const features = [
  { name: "Relationships", description: "Sandip" },
  { name: "Stress ,Anxiety & Work", description: "Yash" },
  { name: "Depression", description: "Abhishek" },
  { name: "Family Conflict", description: "Shivprasad" },
  { name: "Love", description: "Yash,Sandip, Shivprasad, Shrinivas, Abhishek" },
  { name: "Confidence Building & more...", description: "Shrinivas" },
];

export default function Counselor() {
  return (  
    <>
    
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block xl:inline">
                Heal and Thrive with <br />
              </span>{" "}
              <span className="block text-green-600 xl:inline">
                Top Rated Therapists
              </span>
            </h2>
            {/* <p className="mt-4 text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
              steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>
        */}
            <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-5 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
            <Link to="/counselor">
              <button className=" flex item-center bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold py-4 px-4 mt-10 rounded-full">
                Start Healing Today
              </button>
            </Link>
          </div>
          <div className=" gap-4 sm:gap-6 lg:gap-8">
            <img
              src={counseling}
              alt="#"
              className="rounded-lg h-100 bg-gray-100"
            />
          </div>
        </div>
      </div>
      <p class="text-center text-2xl text-sm mt-2 mb-4">
        Our online counselors are Masters in Psychology and go through extensive
        rounds of assessment before coming onboard. We map their efficacy with
        the help of constant feedback from the clients, peers, and domain
        experts. This keeps the quality of BetterLyf sessions thriving. Your
        counsellor spends hours reflecting and researching methods and tools in
        addition to your sessions in order to assist you with the best possible
        tactics to deal with complex situations. Rest assured that you’re on
        their mind before, during and after your session. The mind requires
        specialist care just like the body. We make it accessible to you.
      </p>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img src={sandip}/>
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg> */}
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    Sandip Kalekar
                  </h2>
                  <div class="w-12 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">B tech Mechanical Engineering</p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <blockquote class="text-xl italic font-semibold ">
                  I am inclined towards an eclectic approach, wherein
                  interventions are designed to suit the needs of the
                  individual. I borrow ideas and techniques from various schools
                  of thought, and my main...
                </blockquote>
                <Link
                  to="/Sandip"
                  class="text-red-500 inline-flex items-center mt-10"
                >
                  Know More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img src={shrinivas} />
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg> */}
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    Shrinivas Gore
                  </h2>
                  <div class="w-12 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                    B tech Computer Science and Engineering
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <blockquote class="text-xl italic font-semibold ">
                  My approach to therapy is humanistic as I believe every client
                  is a unique person. I borrow my counselling practices from
                  Solution-Focussed Brief Therapy (SFBT) and Cognitive...
                </blockquote>
                <Link
                  to="/Shrinivas"
                  class="text-red-500 inline-flex items-center mt-10"
                >
                  Know More
                  
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img src={yash} />
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg> */}
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    Yash Bhalerao
                  </h2>
                  <div class="w-12 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                    B tech Computer Science and Engineering
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <blockquote class="text-xl italic font-semibold ">
                  My approach to therapy is humanistic as I believe every client
                  is a unique person. I borrow my counselling practices from
                  Solution-Focussed Brief Therapy (SFBT) and Cognitive...
                </blockquote>
                <Link
                  to="/Yash"
                  class="text-red-500 inline-flex items-center mt-10"
                >
                  Know More
                  
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img src={Shailesh} />
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg> */}
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    Shailesh Kadge
                  </h2>
                  <div class="w-12 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                    B tech Computer Science and Engineering
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <blockquote class="text-xl italic font-semibold ">
                  My approach to therapy is humanistic as I believe every client
                  is a unique person. I borrow my counselling practices from
                  Solution-Focussed Brief Therapy (SFBT) and Cognitive...
                </blockquote>
                <Link
                  to="/Shailesh"
                  class="text-red-500 inline-flex items-center mt-10"
                >
                  Know More
                  
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img src={pande} />
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg> */}
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    Raju Pande
                  </h2>
                  <div class="w-12 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                    B tech Mechanical Engineering
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <blockquote class="text-xl italic font-semibold ">
                  My approach to therapy is humanistic as I believe every client
                  is a unique person. I borrow my counselling practices from
                  Solution-Focussed Brief Therapy (SFBT) and Cognitive...
                </blockquote>
                <Link
                  to="/Raju"
                  class="text-red-500 inline-flex items-center mt-10"
                >
                  Know More
                  
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img src={abhishek} />
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg> */}
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    Abhishek Jadhav
                  </h2>
                  <div class="w-12 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                    B tech Electrical and Instrumentation Engineering
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <blockquote class="text-xl italic font-semibold ">
                  My approach to therapy is humanistic as I believe every client
                  is a unique person. I borrow my counselling practices from
                  Solution-Focussed Brief Therapy (SFBT) and Cognitive...
                </blockquote>
                <Link
                  to="/Abhishek"
                  class="text-red-500 inline-flex items-center mt-10"
                >
                  Know More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img src={shivprasad} />
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg> */}
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    Shivprasad Nagargoje
                  </h2>
                  <div class="w-12 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                    B tech Electronics and telecommunication Engineering
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <blockquote class="text-xl italic font-semibold ">
                  I blend counselling techniques like I would blend colours to
                  create a well-suited therapeutic journey for the client,
                  dwelling deeper to reach the unconscious for a holistic
                  understanding. I...
                </blockquote>
                <Link
                  to="/Shivprasad"
                  class="text-red-500 inline-flex items-center mt-10"
                >
                  Know More
                  
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-full h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={lock}
                />
              </div>
              <h2 class="text-xl text-center font-medium title-font text-gray-900 mt-5">
                100% Confidential
              </h2>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-full h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={trained}
                />
              </div>
              <h2 class="text-xl text-center font-medium title-font text-gray-900 mt-5">
                Trained Therapists
              </h2>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-full h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="#"
                />
              </div>
              <h2 class="text-xl text-center font-medium title-font text-gray-900 mt-5">
                Selfcare Essentials
              </h2>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                alt="Your Company"
                className="h-8 w-auto sm:h-20"
                src={logo}
              />
            </a>
            <p className="mt-2 text-sm text-gray-500">Online Counseling</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Online Counseling For Self Confidence
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Self Image Counseling
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    21 days program
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Inferiority Complex Counseling
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Relationships Impact Counseling
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Online Counseling For Work Stress
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Deal With Tough Boss
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Lack Of Job Satisfaction
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Appraisal & Promotion Stress
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Deal With Feeling Lonely
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Online Counseling For Depression
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Depression Counselling{" "}
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Tackle Peer Pressure
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Anxiety Counselling
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Counseling For Sleep
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Online Counseling for Relationships
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Marriage Counselling
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Counseling for Family Problem
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    How to Stop Comparing Your Partner
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Get Over a Breakup
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2022 LIFE
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @Ashish
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
