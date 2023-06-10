import globalVal from '../globalResumeVar.js';
var resumeLink = globalVal.value;

export default function index() {
  return (
    (document.title = 'Jeff Huang'),
    (
      <div className="mx-auto w-full max-w-6xl pb-10 lg:py-12 lg:px-8 text-center">
        <h1 className="text-8xl mt-20">
          {' '}
          <b>Jeff Huang </b>
        </h1>

        <p className="text-2xl pb-5 py-10">
          Hi, I'm a computer science student at Oregon State University, graduating June 2024. I'm interested in
          fullstack webdev, DevOps, and cybersecurity. Check out my work below!
        </p>
        <a href="#/projects" target="_self" rel="noreferrer" className="a2">
          <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2.5 px-4 rounded my-6 text-2xl mx-5">
            Projects
          </button>
        </a>

        <a href={resumeLink} target="_blank" rel="noreferrer" className="a2">
          <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2.5 px-4 rounded my-6 text-2xl mx-5">
            Resume
          </button>
        </a>

        <a href="#/contact" target="_self" rel="noreferrer" className="a2">
          <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2.5 px-4 rounded my-6 text-2xl mx-5">
            Contact Me
          </button>
        </a>
      </div>
    )
  );
}
