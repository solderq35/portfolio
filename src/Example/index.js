import globalVal from '../globalResumeVar.js';
var resumeLink = globalVal.value;

export default function index() {
  return (
    document.title = "Jeff Huang",
    <div className="mx-auto w-full max-w-6xl pb-10 lg:py-12 lg:px-8 text-center">
      <h1 className="text-8xl mt-20">
        {' '}
        <b>Jeff Huang </b>
      </h1>

      <p className="text-2xl pb-5 py-10">
        Hi, I'm a third year student at Oregon State University, pursuing a computer science degree with a focus on web
        development.
      </p>

      <button class="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2.5 px-4 rounded my-6 text-2xl mx-5">
        <a href="/projects" class="a2">
          Projects
        </a>
      </button>

      <button class="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2.5 px-4 rounded my-6 text-2xl mx-5">
        <a href={resumeLink} target="_blank" rel="noreferrer" class="a2">
          Resume
        </a>
      </button>
    </div>
  );
}
//little comment test
