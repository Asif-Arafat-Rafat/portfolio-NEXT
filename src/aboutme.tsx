import { BackgroundGradientAnimation } from "./components/ui/gradient-bg";

function AboutMe() {
  return (
    <> 
      <div className="mx-5 p-5 rounded-2xl shadow-lg mt-5 text-3xl text-[var(--text-color)] bg-[var(--color-primary)] font-bold overflow-hidden">
        <h1 className="font-normal">About Me</h1>
        <div className="h-1 w-full bg-[var(--text-color)] my-2"></div> {/* Better separator */}
        <div className="flex ">
          <div>
            <p className="text-xl text-[var(--text-color)] font-thin">
              Hi, I'm Asif — a professional web developer with strong expertise in building robust and scalable web applications.
              I specialize in both frontend and backend development, and I'm highly skilled in a variety of frameworks and programming languages, including:
            </p>
            <ul className="list-disc list-inside text-xl text-[var(--text-color)] mt-2 space-y-1 leading-loose">
              <li className="font-thin"><strong>Frontend:</strong> React.js, Next.js, Tailwind CSS, and modern JavaScript (ES6+)</li>
              <li className="font-thin"><strong>Backend:</strong> Flask, Django (Python), PHP, Laravel</li>
              <li className="font-thin"><strong>Database:</strong> MySQL, PostgreSQL, MongoDB</li>
              <li className="font-thin"><strong>Other Tools:</strong> Git, REST APIs, JWT, OAuth, and deployment on platforms like Vercel, Heroku, and cPanel</li>
            </ul>
            <p className="text-xl text-[var(--text-color)] font-thin mt-4">
              I’m passionate about clean code, performance optimization, and creating seamless user experiences. Whether it's building a sleek frontend, designing powerful APIs, or optimizing backend logic — I bring full-stack solutions to the table.
            </p>
          </div>
            <div className="  w-[30%] border-5 mx-10 border-[var(--color-background)] rounded-2xl ">
              <BackgroundGradientAnimation containerClassName="w-full h-full rounded-2xl flex items-center">
                <div className="flex items-center justify-center w-[100%] ">
                  <p>hello</p>
                </div>
              </BackgroundGradientAnimation>
              </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;