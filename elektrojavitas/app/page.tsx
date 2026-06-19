import {
  Smartphone,
  Laptop,
  Monitor,
  Gamepad2,
  Watch,
  Wrench,
  ShieldCheck,
  Clock,
  PackageCheck,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { supabase } from "@/lib/supabase";

const services = [
  {
    title: "Telefon javítás",
    desc: "Kijelző, akkumulátor, csatlakozó és szoftveres hibák.",
    icon: Smartphone,
  },
  {
    title: "Laptop javítás",
    desc: "Hardveres és szoftveres problémák megoldása.",
    icon: Laptop,
  },
  {
    title: "PC javítás",
    desc: "Asztali számítógépek teljes körű javítása.",
    icon: Monitor,
  },
  {
    title: "Konzol javítás",
    desc: "PlayStation, Xbox és egyéb konzolok javítása.",
    icon: Gamepad2,
  },
  {
    title: "Okosóra javítás",
    desc: "Akkumulátor, kijelző és csatlakozási hibák.",
    icon: Watch,
  },
  {
    title: "Egyedi javítás",
    desc: "Drón, alaplap, forrasztás és egyéb eszközök.",
    icon: Wrench,
  },
];

export default function Home() {
  console.log(supabase);

  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-bold">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Wrench size={20} />
            </div>
            elektrojavitas.hu
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-300 md:flex">
            <a href="#" className="text-blue-600">
              Főoldal
            </a>
            <a href="#szolgaltatasok" className="hover:text-blue-600">
              Szolgáltatások
            </a>
            <a href="#hogyan" className="hover:text-blue-600">
              Hogyan működik?
            </a>
            <a href="#kapcsolat" className="hover:text-blue-600">
              Kapcsolat
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="#javitas"
              className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:inline-flex"
            >
              Javítás bejelentése
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Online elektronikai javítás
          </p>

          <h1 className="max-w-xl text-5xl font-bold tracking-tight md:text-6xl">
            Elektronikai eszköz meghibásodott?
            <span className="block text-blue-600">Mi segítünk.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Online hibabejelentés telefonokhoz, laptopokhoz, tabletekhez,
            konzolokhoz, drónokhoz és egyéb elektronikai eszközökhöz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#javitas"
              className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
            >
              Javítás bejelentése
            </a>

            <a
              href="#hogyan"
              className="rounded-xl border border-slate-200 px-6 py-4 font-semibold hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900"
            >
              Hogyan működik?
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Info icon={Clock} text="0–24 online bejelentés" />
            <Info icon={ShieldCheck} text="Garancia javításra" />
            <Info icon={PackageCheck} text="Magyar Postával is" />
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-blue-100 via-white to-slate-200 dark:from-blue-950 dark:via-slate-900 dark:to-slate-800">
            <div className="text-center">
              <Laptop className="mx-auto mb-4 text-blue-600" size={90} />
              <p className="text-lg font-semibold">
                Letisztult szervizplatform
              </p>
              <p className="text-slate-500 dark:text-slate-400">
                képfeltöltéssel és státuszkövetéssel
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="szolgaltatasok"
        className="border-t border-slate-200 bg-slate-50 px-6 py-20 dark:border-slate-800 dark:bg-slate-900/60"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold">Szolgáltatásaink</h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
              >
                <service.icon className="mb-5 text-blue-600" size={36} />
                <h3 className="font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hogyan" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold">Hogyan működik?</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <Step
              number="1"
              title="Hibabejelentés"
              text="Kitöltöd az online űrlapot."
            />
            <Step
              number="2"
              title="Beküldés"
              text="Személyesen vagy postával eljuttatod."
            />
            <Step
              number="3"
              title="Javítás"
              text="Hibafelmérés után javítjuk az eszközt."
            />
            <Step
              number="4"
              title="Visszakapod"
              text="Átveszed vagy visszaküldjük postán."
            />
          </div>
        </div>
      </section>

      <section
        id="javitas"
        className="bg-slate-950 px-6 py-20 text-white dark:bg-black"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">Kérj javítást online</h2>
          <p className="mt-4 text-slate-300">
            A következő lépésben ide építjük be a Supabase alapú javítási
            űrlapot képfeltöltéssel.
          </p>
        </div>
      </section>

      <footer
        id="kapcsolat"
        className="border-t border-slate-200 px-6 py-10 dark:border-slate-800"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 dark:text-slate-400 md:flex-row">
          <p>© 2026 elektrojavitas.hu</p>

          <div className="flex gap-5">
            <a href="/impresszum" className="hover:text-blue-600">
              Impresszum
            </a>
            <a href="/adatvedelem" className="hover:text-blue-600">
              Adatvédelem
            </a>
            <a href="/aszf" className="hover:text-blue-600">
              ÁSZF
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Info({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium dark:border-slate-800 dark:bg-slate-900">
      <Icon size={18} className="text-blue-600" />
      {text}
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
        {number}
      </div>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{text}</p>
    </div>
  );
}