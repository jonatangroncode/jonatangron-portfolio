const CV = () => {
  return (
    <main className="min-h-screen px-6 py-12 bg-white text-[#111827] dark:bg-[#111827] dark:text-[#f9fafb]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Profil */}
        <section>
          <h2 className="text-3xl font-bold mb-4">👤 Profil</h2>
          <p className="text-lg leading-relaxed">
            Nyfiken och målmedveten frontendutvecklare med akademisk bakgrund i
            informatik och programmering. Jag har en kandidatexamen som
            dataekonom, examen som apputvecklare och går nu en
            frontendutbildning med inriktning webbsäkerhet. Jag strävar efter
            att skapa moderna, användarvänliga och responsiva webbapplikationer
            med teknik som React och Next.js.
          </p>
        </section>

        {/* Erfarenhet */}
        <section>
          <h2 className="text-3xl font-bold mb-4">💼 Erfarenhet</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">
                Teamledare Webbutveckling – Carelyo (2024)
              </h3>
              <ul className="list-disc list-inside text-base ml-4">
                <li>Projektledning, planering och utveckling av tre appar</li>
                <li>Kodgranskning, dokumentering, testing</li>
                <li>Stack: Next.js, Tailwind, Vercel, CMS, autentisering</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Frontendutvecklare – Swedcon18 (2023)
              </h3>
              <ul className="list-disc list-inside text-base ml-4">
                <li>Agilt arbete med Git, Figma, GitHub Projects</li>
                <li>Stack: React, Next.js, Tailwind CSS, Typescript</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Utbildning */}
        <section>
          <h2 className="text-3xl font-bold mb-4">🎓 Utbildning</h2>
          <ul className="space-y-2">
            <li>
              <strong>Jensen YH (2024–)</strong>: Frontend, webbsäkerhet
            </li>

            <li>
              <strong>ITHS (Examen 2024)</strong>: Applikationsutvecklare
            </li>
            <li>
              <strong>Högskolan i Borås (Examen 2024)</strong>: Dataekonom –
              Informatik & marknadsföring
            </li>
          </ul>
        </section>

        {/* Teknik */}
        <section>
          <h2 className="text-3xl font-bold mb-4">🛠️ Teknik</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="badge">HTML5</span>
            <span className="badge">CSS3</span>
            <span className="badge">JavaScript</span>
            <span className="badge">React</span>
            <span className="badge">Next.js</span>
            <span className="badge">Tailwind</span>
            <span className="badge">SQL</span>
            <span className="badge">NoSQL</span>
            <span className="badge">Firebase</span>
            <span className="badge">Git</span>
            <span className="badge">Figma</span>
            <span className="badge">VS Code</span>
          </div>
        </section>

        {/* Ladda ner PDF */}
        <section className="pt-6 border-t border-neutral-700">
          <a
            href="/Jonatan_Gron_CV_Frontend.pdf"
            download
            className="inline-block mt-4 text-lime-300 hover:text-lime-500 transition-colors bg-gray-800 px-6 py-3 rounded-lg font-semibold"
          >
            📄 Ladda ner CV som PDF
          </a>
        </section>
      </div>
    </main>
  );
};

export default CV;
