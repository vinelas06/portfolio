import { InfoCard } from "../components/InfoCards/Index";

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white lg:text-4xl">Sobre Mim</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          Desenvolvedor focado em performance e experiência do usuário.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <InfoCard title="Minha Jornada">
          <p>
            Comecei a programar com o objetivo de resolver problemas reais.
            Hoje, domino tecnologias como React, Node.js e TypeScript, focando
            sempre em Clean Code e arquitetura escalável.
          </p>
        </InfoCard>

        <InfoCard title="Stack Tecnológica">
          <ul className="space-y-2">
            <li>• React & Next.js</li>
            <li>• TypeScript & Node.js</li>
            <li>• TailwindCSS</li>
            <li>• Docker & CI/CD</li>
          </ul>
        </InfoCard>
      </div>
    </section>
  );
}
