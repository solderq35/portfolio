export default function Project() {
  return (
    (document.title = 'Portfolio | Jeff Huang'),
    (
      <center>
        <h1 className="text-8xl my-10">
          {' '}
          <b> Jeff Huang</b>{' '}
        </h1>

        <h2 className="text-6xl my-10">
          {' '}
          <b> Portfolio </b>{' '}
        </h2>

        <div className="container">
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img src="./osu-so.png" alt="new" />
              <div className="pr-6 py-4 bg-white pl-10">
                <div className="font-bold text-xl mb-2 pr-8">
                  <a href="https://github.com/OSU-Sustainability-Office" target="_blank" rel="noopener noreferrer">
                    OSU Sustainability Office (Paid Position)
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-outside">
                    <li>
                      Implemented a{' '}
                      <a
                        href="https://github.com/OSU-Sustainability-Office/automated-jobs/pull/3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        full stack solution
                      </a>{' '}
                      (frontend, backend, webscraper CRON job) to automate uploading and displaying solar panel data for{' '}
                      <a
                        href="https://dashboard.sustainability.oregonstate.edu/#/map"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Energy Dashboard
                      </a>
                      , a site tracking energy usage on campus
                    </li>
                    <li>
                      <a
                        href="https://github.com/OSU-Sustainability-Office/energy-dashboard/pull/216"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Fixed issue with our frontend data store logic
                      </a>{' '}
                      to better handle insufficent amounts of data, and display data better on our solar panel /
                      "Kilowatt Crackdown Campaign" graphs, for{' '}
                      <a
                        href="https://dashboard.sustainability.oregonstate.edu/#/map"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Energy Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/OSU-Sustainability-Office/osu_carbon_calculator_update_project/issues/39"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Debugged CORS errors
                      </a>{' '}
                      and added wait time to API requests to fix login / data upload issues with{' '}
                      <a
                        href="https://myco2.sustainability.oregonstate.edu/#/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Carbon Calculator
                      </a>
                      , a site for tracking user carbon emissions
                    </li>
                    <li>
                      Oversaw{' '}
                      <a
                        href="https://github.com/OSU-Sustainability-Office/osu_carbon_calculator_update_project/pull/34"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        transition of CI pipeline from TravisCI to Github Actions
                      </a>{' '}
                      due to limited resources / funding, saving an estimated 10% costs to OSU Sustainability Office
                      monthly
                    </li>
                    <li>
                      Implemented a{' '}
                      <a
                        href="https://github.com/OSU-Sustainability-Office/automated-jobs/pull/10"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Node.js script to ping all our API endpoints
                      </a>{' '}
                      to check our Energy Dashboard Database every 2 days, and send emails via AWS SNS if any meter API
                      endpoints are down.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img src="./talk-to-beavs.png" alt="new" />
              <div className="pr-6 py-4 bg-white pl-10">
                <div className="font-bold text-xl mb-2 pr-8">
                  <a href="https://github.com/Nyumat/TalkToBeavs" target="_blank" rel="noopener noreferrer">
                    TalkToBeavs
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-outside">
                    <li>
                      <b>
                        <a href="https://talktobeavs.onrender.com/" target="_blank" rel="noopener noreferrer">
                          Try it out yourself here!
                        </a>
                      </b>
                    </li>
                    <li>Social Media app for OSU Students, built on MERN stack</li>
                    <li>
                      Deployed a full stack Giphy API integration feature, allowing users to pick a GIF either a
                      "trending" GIF, or search for a specific GIF by topic. Proxied the Giphy API through our own API
                      to hide the Giphy API key
                    </li>
                    <li>
                      Implemented a WebSocket based text chat, sending user information between clients for an intuitive
                      experience
                    </li>
                    <li>
                      Improved UX by adding loading spinners where needed to account for asynchronous Redux / MongoDB
                      updates
                    </li>
                    <li>Nominated by professor for "Hall of Fame" in CS 494 Advanced Web Development course</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img src="./losslesscut.png" alt="new" />
              <div className="pr-6 py-4 bg-white pl-10">
                <div className="font-bold text-xl mb-2 pr-8">
                  <a href="https://github.com/mifi/lossless-cut" target="_blank" rel="noopener noreferrer">
                    LosslessCut
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-outside">
                    <li>
                      Implemented a{' '}
                      <a
                        href="https://github.com/mifi/lossless-cut/pull/1556"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        new feature
                      </a>{' '}
                      for LosslessCut, a lightweight cross-platform video editor
                    </li>
                    <li>
                      My new feature adds current timestamps as part of the output file names to ensure unique
                      identifiers and to prevent accidental file overwrites when editing the same video rapidly
                    </li>
                    <li>
                      Communicated with maintainer to ensure a good UX by creating helpful error messages if they use my
                      new feature incorrectly
                    </li>
                    <li>Documented and tested my code thoroughly; used video demos to demonstrate what my PR did</li>
                    <li>
                      PR was merged after a back-and-forth; my changes will eventually hit the production version of
                      LosslessCut, which has <b>16,000 Stars on Github</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img src="./fullgame.png" alt="new" />
              <div className="pr-6 py-4 bg-white pl-10">
                <div className="font-bold text-xl mb-2 pr-8">
                  <a href="https://github.com/solderq35/fg-time-calc" target="_blank" rel="noopener noreferrer">
                    Full Game Time Calculator
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-outside">
                    <li>
                      <b>
                        <a href="https://solderq35.github.io/fg-time-calc/" target="_blank" rel="noopener noreferrer">
                          Try it out yourself here!
                        </a>
                      </b>
                    </li>
                    <li>
                      Developed a tool that stores race splits as part of the website URL, thus avoiding database costs
                      (credits to the{' '}
                      <a
                        href="https://www.grun1.grunsports.com/utils/timeCalc.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        original Time Calculator
                      </a>{' '}
                      from Gordon Smith for inspiration)
                    </li>
                    <li>
                      Added integration with TinyURL API to shorten the links for better UI, improving stability and
                      convenience
                    </li>
                    <li>
                      Has been used in hundreds of Hitman full game speedruns, with a certified 100% approval rating
                      (check{' '}
                      <a href="https://www.speedrun.com/hitman_3/full_game" target="_blank" rel="noopener noreferrer">
                        here
                      </a>
                      )
                    </li>
                    <li>Reviewed Pull Requests from other developers as open source contributions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img src="./timmy.png" alt="new" />
              <div className="pr-6 py-4 bg-white pl-10">
                <div className="font-bold text-xl mb-2 pr-8">
                  <a href="https://github.com/solderq35/timmy-mk-3" target="_blank" rel="noopener noreferrer">
                    Timmy Time Bot
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-outside">
                    <li>
                      Discord bot created to calculate millisecond times from Hitman level completions (not normally
                      shown in-game){' '}
                    </li>
                    <li>
                      Derived a novel mathematical formula for this based on trial and error, and also implemented this
                      as a{' '}
                      <a
                        href="https://solderq35.github.io/time-calc-under-5/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        website
                      </a>{' '}
                      with additional options (e.g. to handle the case of runs from 5 to 15 minutes)
                    </li>
                    <li>
                      Calculated margin of error for the formula, and{' '}
                      <a
                        href="https://github.com/solderq35/time-calc-under-5#usage-quirks"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        documented this
                      </a>{' '}
                      so that users are well informed about the limitations of my software
                    </li>
                    <li>20 daily users, a majority of the active Hitman speedrun community playerbase </li>
                    <li>
                      Deployed on Railway.app with Node.js backend and communicating to Discord Developer API via
                      Discord.js framework, used in several Hitman speedrunning discord servers regularly
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img src="./hitruns-records-bot.png" alt="new" />
              <div className="pr-6 py-4 bg-white pl-10">
                <div className="font-bold text-xl mb-2 pr-8">
                  <a href="https://github.com/solderq35/hitruns-records-bot" target="_blank" rel="noopener noreferrer">
                    HitRuns Records Bot
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-outside">
                    <li>
                      Discord bot for tracking various Hitman 3 speedrunning statistics not tracked on speedrun.com
                    </li>
                    <li>
                      Example use cases: keeping up with the latest runs, finding long-standing tied world records to
                      topple, and theorizing about full game potential improvments based on sum-of-best calculations
                    </li>
                    <li>
                      To ensure good performance on queries that affect every level of the game (e.g. getting all
                      records and sorting by new), I set up a daily cron job on{' '}
                      <a href="https://railway.app/" target="_blank" rel="noopener noreferrer">
                        Railway
                      </a>{' '}
                      to do some data caching
                    </li>
                    <li>
                      {' '}
                      To be specific, the cron job collects data from every level / category endpoint from the
                      speedrun.com API, and then backs the data back up to the bot's own database in a simplified
                      schema, ensuring good performance on other bot commands later
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img src="./hitruns.png" alt="new" />
              <div className="pr-6 py-4 bg-white pl-10">
                <div className="font-bold text-xl mb-2 pr-8">
                  <a href="https://github.com/solderq35/hitruns" target="_blank" rel="noopener noreferrer">
                    Hitruns
                  </a>
                </div>

                <div className="text-gray-700 text-base text-left">
                  <hr className="opacity-0" />
                  <ul className="list-disc list-outside">
                    <li>
                      <b>
                        <a href="https://hitruns.vercel.app/" target="_blank" rel="noopener noreferrer">
                          Try it out yourself here!
                        </a>
                      </b>
                    </li>
                    <li>Developed a customized Hitman 3 leaderboard frontend, using data from the speedrun.com API</li>
                    <li>Designed mobile-friendly, responsive navbars, and dropdown menus using React Bootstrap</li>
                    <li>
                      Added a feature to use Regex to specifically extract Full Game Time Calc links (see above) from
                      run submission comments, making it easier for users to see run splits at a glance
                    </li>
                    <li>
                      Features 50% faster loading times and responsiveness than the official speedrun.com site due to
                      streamlining leaderboard features, and caching website requests periodically with{' '}
                      <a
                        href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GetStaticProps
                      </a>
                      , a Next.js feature
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img src="./hospital-website.png" alt="new" />
              <div className="pr-6 py-4 bg-white pl-10">
                <div className="font-bold text-xl mb-2 pr-8">
                  <a href="https://github.com/solderq35/hospital-website" target="_blank" rel="noopener noreferrer">
                    Hospital Website
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-outside">
                    <li>Built with NodeJS + SQL backend, Handlebars framework frontend</li>
                    <li>Users can create, update, read, and delete hospital database entries (CRUD functionality)</li>
                    <li>Simple input validation implemented (e.g. only allows numeric input for phone numbers)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img src="./chinglish.png" alt="new" />
              <div className="pr-6 py-4 bg-white pl-10">
                <div className="font-bold text-xl mb-2 pr-8">
                  <a href="https://github.com/solderq35/better-chinglish" target="_blank" rel="noopener noreferrer">
                    Better Chinglish
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-outside">
                    <li>
                      <b>
                        <a
                          href="https://solderq35.github.io/better-chinglish/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Try it out yourself here!
                        </a>
                      </b>
                    </li>
                    <li>
                      Used Iframes to combine what were otherwise 3 separate services (image embed,{' '}
                      <a href="https://www.qhanzi.com/" target="_blank" rel="noopener noreferrer">
                        qhanzi handwriting input
                      </a>
                      ,{' '}
                      <a
                        href="https://www.bing.com/translator?to=en&setlang=si"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bing translator
                      </a>
                      ) into one app
                    </li>
                    <li>
                      Combining 3 services on my own website ensures I don't have to tab in and out on my phone
                      constantly, greatly improving my workflow when ordering at local Chinese restaurants, as a Chinese
                      American with shaky Chinese literacy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img src="./wasteagram.png" alt="new" />
              <div className="pr-6 py-4 bg-white pl-10">
                <div className="font-bold text-xl mb-2 pr-8">
                  <a href="https://github.com/solderq35/wasteagram" target="_blank" rel="noopener noreferrer">
                    Wasteagram
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-outside">
                    <li>
                      Cross-platform mobile app built with Dart (Flutter Framework), user data hosted in the cloud on
                      Google Firebase
                    </li>
                    <li>
                      Users can create posts with information on wasted food items such as number of items wasted, photo
                      of the item, date, and location
                    </li>
                    <li>Implemented unit testing for good CI/CD, and simple error tracking with Sentry</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img src="./peacock.png" alt="new" />
              <div className="pr-6 py-4 bg-white pl-10">
                <div className="font-bold text-xl mb-2 pr-8">
                  <a href="https://github.com/thepeacockproject/Peacock" target="_blank" rel="noopener noreferrer">
                    The Peacock Project
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-outside">
                    <li>
                      <b>
                        <a href="https://thepeacockproject.org/" target="_blank" rel="noopener noreferrer">
                          Try it out yourself here!
                        </a>
                      </b>
                    </li>
                    <li>
                      As a key contributor to{' '}
                      <a href="https://github.com/thepeacockproject/Peacock" target="_blank" rel="noopener noreferrer">
                        The Peacock Project
                      </a>{' '}
                      (a Hitman server emulator), I submitted bug reports, provided tech support to users, and compiled
                      frequently asked questions onto a{' '}
                      <a href="https://thepeacockproject.org/wiki/" target="_blank" rel="noopener noreferrer">
                        wiki
                      </a>{' '}
                      via Docusaurus framework
                    </li>
                    <li>
                      By providing detailed instructions on how to debug common problems like{' '}
                      <a
                        href="https://thepeacockproject.org/wiki/intel/faq/#connection-troubleshooting"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        connection issues
                      </a>
                      , I saved the other Peacock devs countless hours that would have otherwise been spent answering
                      repetitive questions
                    </li>
                    <li>
                      Worked closely with the Hitman speedrun community to identify and coordinate new features with the
                      Peacock dev team, such as integrations with Livesplit and my{' '}
                      <a href="https://solderq35.github.io/fg-time-calc/" target="_blank" rel="noopener noreferrer">
                        Full Game Calculator
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img src="./osu-so-wiki.png" alt="new" />
              <div className="pr-6 py-4 bg-white pl-10">
                <div className="font-bold text-xl mb-2 pr-8">
                  <a
                    href="https://github.com/OSU-Sustainability-Office/osu-sustainability-office.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OSU Sustainability Office Wiki
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-outside">
                    <li>
                      <b>
                        <a
                          href="https://osu-sustainability-office.github.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Try it out yourself here!
                        </a>
                      </b>
                    </li>
                    <li>
                      I basically used my gaming wiki expertise to use it for my paid work (OSU Sustainability Office)
                    </li>
                    <li>
                      Combining several related Portfolio' worth of documentation into one wiki is more efficient /
                      better UX.
                    </li>
                    <li>
                      Includes more detailed guides on specific tasks like adding new meters or solar panel endpoints to
                      the energy dashboard.
                    </li>
                    <li>
                      Search function on wiki makes it worth over just hosting multiple Markdown files on Github only
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img src="./hitruns-wiki.png" alt="new" />
              <div className="pr-6 py-4 bg-white pl-10">
                <div className="font-bold text-xl mb-2 pr-8">
                  <a href="https://github.com/solderq35/hitruns-wiki" target="_blank" rel="noopener noreferrer">
                    Hitruns Wiki
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-outside">
                    <li>
                      <b>
                        <a href="https://hitruns-wiki.vercel.app/" target="_blank" rel="noopener noreferrer">
                          Try it out yourself here!
                        </a>
                      </b>
                    </li>
                    <li>
                      Compilation of Hitman 3 speedrunning guides, deployed as a Docusaurus static website with search
                      functionality
                    </li>
                    <li>
                      Worked closely with the Hitman 3 speedrun community to identify commonly asked questions and
                      answers, improving accessibility for new runners
                    </li>
                    <li>
                      Documented a novel way of downpatching the Epic Game Store version of Hitman 3, crowdsourcing
                      "manifest" files from the community for purposes of game preservation
                    </li>
                    <li>
                      In addition to Hitman speedrunning, the wiki covers a variety of topics like general information
                      on Hitman modding, common tech support issues, common questions on how to buy the game (DLC
                      issues)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img src="./osu-ssh.png" alt="new" />
              <div className="pr-6 py-4 bg-white pl-10">
                <div className="font-bold text-xl mb-2 pr-8">
                  <a
                    href="https://gitlab.com/osu-lug/Portfolio/documentation/-/blob/master/docs/OSU/engr-servers.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OSU SSH Tutorial
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-outside">
                    <li>
                      Wrote a comprehensive tutorial in Markdown for various SSH tips and tricks, to ensure OSU students
                      can safely and securely log into the ENGR servers via SSH{' '}
                    </li>
                    <li>
                      Topics covered in guide include: SSH Key generation, SSH Config files, Proxyjump, Mapping Network
                      drive, SCP CLI for file transfer, VSCode integration, Git SSH Keys{' '}
                    </li>
                    <li>
                      Popularized by word-of-mouth in various OSU CS classes, helped many students debug SSH issues
                    </li>
                    <li>
                      Merged into{' '}
                      <a href="https://gitlab.com/osu-lug" target="_blank" rel="noopener noreferrer">
                        OSU Linux User Group
                      </a>{' '}
                      as an open source contribution
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    )
  );
}
