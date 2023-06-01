export default function index() {
  return (
    (document.title = 'Jeff Huang'),
    (
      <div className="mx-auto w-full max-w-6xl pb-10 lg:py-12 lg:px-8 text-center">
        <h1 className="text-8xl mt-20">
          {' '}
          <b>Contact Me</b>
        </h1>

        <p className="text-2xl pb-5 py-10">Contact me / follow my hobby projects in the links below!</p>
        <a href="https://github.com/solderq35" target="_blank" rel="noreferrer" className="a2">
          <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2.5 px-4 rounded my-6 text-2xl mx-5">
            Github
          </button>
        </a>

        <a href="mailto:huangjeff.cs@gmail.com" target="_blank" rel="noreferrer" className="a2">
          <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2.5 px-4 rounded my-6 text-2xl mx-5">
            Email
          </button>
        </a>

        <a href="https://www.youtube.com/@Solderq35" target="_blank" rel="noreferrer" className="a2">
          <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2.5 px-4 rounded my-6 text-2xl mx-5">
            Youtube
          </button>
        </a>

        <a href="https://space.bilibili.com/1174271590" target="_blank" rel="noreferrer" className="a2">
          <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2.5 px-4 rounded my-6 text-2xl mx-5">
            Bilibili
          </button>
        </a>
      </div>
    )
  );
}
