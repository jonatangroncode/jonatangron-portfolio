import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 bg-white text-[#111827] dark:bg-[#111827] dark:text-[#f9fafb]">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Hej! Jag är{" "}
        <span className="text-lime-400 dark:text-primary-light">
          Jonatan Grön
        </span>
      </h1>
      <p className="text-lg sm:text-xl max-w-xl mb-8">
        Frontendutvecklare med passion för moderna webbapplikationer,
        användarvänlighet och teknikens kraft. Mitt intresse för teknik speglas
        av min bakgrun med många år av studier inom IT och programmering. Jag är
        alltid nyfiken på att lära mig mer och att utvecklas inom mitt område.
        Jag strävar efter att skapa användarvänliga och responsiva
        webbapplikationer som gör skillnad. Jag är alltid öppen för nya
        utmaningar och möjligheter att växa som utvecklare. Jag tror på att dela
        kunskap och erfarenheter, och jag är alltid redo att hjälpa andra i
        deras utveckling.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          to="/projects"
          className="bg-lime-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-lime-300 transition"
        >
          Se mina projekt
        </Link>
        <Link
          to="/contact"
          className="border border-lime-400 px-6 py-3 rounded-lg font-semibold hover:bg-lime-400 hover:text-gray-900 transition"
        >
          Kontakta mig
        </Link>
      </div>
    </section>
  );
};

export default Home;
