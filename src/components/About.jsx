import img1 from "../assets/about/img1.jpg";
import img2 from "../assets/about/img2.jpg";
import img3 from "../assets/about/img3.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="grid mt-20 place-items-center pb-10">
        <h2 className="text-4xl tracking-tight font-extrabold text-clrHeading sm:text-5xl md:text-6xl flex items-center">
          <div className="h-4 w-4 rounded-full bg-clrHeading"></div>
          <div>About Us</div>
        </h2>
        <hr className="w-20 h-3 border-none bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mt-2 mb-2" />
        <p className="text-clrText mt-10 container font-semibold">
          Adamjee Cantonment College has been operating a BNCC Platoon since
          2009. Adamjee Cantonment College BNCC Platoon (Army Wing) is currently
          under the Ramna Regiment ( 3rd Battalion), Delta Company. Adamjee
          Cantonment College Bncc Platoon is a club to inspire and empower
          students of Adamjee Cantonment College to be involved in in Bangladesh
          Army.The cadets of Adamjee Cantonment College platoon has been
          regularly participating in natonal and international flotillas and
          institutional programmes. Besides, The BNCC platoon of Dhaka Commerce
          College regularly participates in annual training camps, central
          training camps, flotilla training, exercise and various national
          programmes. Apart from these the BNCC platoon volunteers in
          maintaining discipline in annual sports, annual feast, annual prize
          giving ceremony, fresher’s reception, farewell of the examinees and
          other important programmes
        </p>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* <!--Card 1--> */}
        <div className="rounded overflow-hidden shadow">
          <img className="w-full h-96" src={img1} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2 text-green-500">Moderator </div>
            <p className="text-gray-700 text-base">
              Professor Mohammad Abdul Baten is the moderator of the Adamjee
              Cantonment College Bncc platoon. Mohammad Abdul Baten, Professor,
              Department of Accounting , Head of Department, Adamjee Cantonment
              College has been the Professor Under Officer ( PUO ) and the
              Platoon Commander of Adamjee Cantonment College BNCC Platoon since
              the inception of the platoon.
            </p>
          </div>
        </div>
        {/* <!--Card 2--> */}
        <div className="rounded overflow-hidden shadow-2xl">
          <img className="w-full h-96 shadow-2xl" src={img2} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-green-500">Co-Moderator</div>
            <p className="text-gray-700 text-base">
              Professor Razia Alam is the Co-moderator of the Adamjee Cantonment
              College Bncc platoon. Razia Alam, Professor, Department of
              Management, Adamjee Cantonment College has been the Professor
              Under Officer ( PUO ) and The Platoon Commander of Adamjee
              Cantonment College BNCC Platoon since the inception of the platoon
            </p>
          </div>
        </div>

        {/* <!--Card 3--> */}
        <div className="rounded overflow-hidden shadow">
          <img className="w-full h-96" src={img3} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-green-500">Co-Moderator</div>
            <p className="text-gray-700 text-base">
              Lecturer Ikbal Raju is the Co-moderator of the Adamjee Cantonment
              College Bncc platoon. Ikbal Raju , Lecturer , Department of ICT,
              Adamjee Cantonment College has been the Professor Under Officer (
              PUO ) and The Platoon Commander of Adamjee Cantonment College BNCC
              Platoon since the inception of the platoon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
