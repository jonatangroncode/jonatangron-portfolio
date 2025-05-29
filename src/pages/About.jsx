import React from "react";
import { Link } from "react-router-dom";

const getAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
};

const About = () => {
  const age = getAge("1996-07-07");

  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 py-12 gap-8 bg-white text-[#111827] dark:bg-[#111827] dark:text-[#f9fafb]">
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">Om mig</h2>
        <p className="text-lg mb-6">
          Hej jag heter Jonatan och är {age} år. Jag är en nyfiken och
          målmedveten frontendutvecklare med rötter i Kalmar, och en bred
          akademisk grund inom IT och utveckling. Jag har en kandidatexamen som
          dataekonom, en examen som apputvecklare och går just nu en
          frontendutbildning med fokus på webbsäkerhet. Min passion ligger i att
          bygga moderna, användarvänliga och tillgängliga webbapplikationer med
          teknik som React, Next.js. Jag trivs i projekt där jag får kombinera
          design med funktion, och jag är alltid öppen för att lära mig nya
          tekniker, samarbeta med andra och ta ansvar för mitt arbete. Just nu
          letar jag efter LIA-praktik där jag kan växa som utvecklare och bidra
          med mitt driv, min nyfikenhet och min tekniska bredd. Utanför
          kodningen gillar jag att träna, lära mig nytt, och hitta smarta
          lösningar på vardagsproblem. Jag tror på att växa genom att dela med
          sig - och hjälper gärna andra där jag kan.
        </p>
        <a
          href="/Jonatan_Gron_CV_Frontend.pdf"
          download
          className=" text-lime-300 hover:text-lime-500 transition-colors bg-gray-800 px-6 py-3 rounded-lg font-semibold inline-block"
        >
          Ladda ner CV
        </a>
      </section>{" "}
      <section className="max-w-3xl mx-auto px-4 py-12">
        {" "}
        <div className="max-w-100 mx-auto px-4 py-12">
          <img
            src="/cvbild.jpg"
            alt="Porträtt på Jonatan"
            className="max-w-xs w-full rounded-lg shadow-lg"
          />{" "}
        </div>
      </section>
    </main>
  );
};

export default About;
