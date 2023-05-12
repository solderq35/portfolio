export default function Project() {
  return (
    (document.title = 'Projects | Jeff Huang'),
    (
      <center>
        <h1 className="text-7xl my-10">
          {' '}
          <b> Projects </b>{' '}
        </h1>

        <div class="container">
          <div class="item">
            {' '}
            <div class="max-w-lg rounded overflow-hidden shadow-lg mt-5 h-256">
              <img
                src="https://media.discordapp.net/attachments/1090136863962058793/1103926413322625114/image.png"
                alt="new"
              />
              <div class="px-6 py-4 bg-white">
                <div class="font-bold text-xl mb-2">
                  <a href="https://github.com/OSU-Sustainability-Office" target="_blank" rel="noopener noreferrer">
                    OSU Sustainability Office (Paid Position)
                  </a>
                </div>
                <p class="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
                    <li>
                      Implemented a full-stack solution (frontend, backend, webscraper CRON job) for{' '}
                      <a
                        href="https://dashboard.sustainability.oregonstate.edu/#/map"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Energy Dashboard
                      </a>
                      , a site tracking energy usage on campus, to automate uploading and displaying solar panel data
                    </li>
                    <li>
                      Fixed issue with our frontend data store logic to better handle insuffient amounts of data, and
                      display data better on our solar panel / "Kilowatt Crackdown Campaign" graphs, for{' '}
                      <a
                        href="https://dashboard.sustainability.oregonstate.edu/#/map"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Energy Dashboard
                      </a>
                    </li>
                    <li>
                      Debugged CORS errors and added wait time to API requests to fix login / data upload issues with{' '}
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
                      Oversaw transition of CI pipeline from TravisCI to Github Actions due to limited resources /
                      funding, saving an estimated 10% costs to OSU Sustainability Office monthly
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            {' '}
            <div class="max-w-lg rounded overflow-hidden shadow-lg mt-5 h-256">
              <img
                src="https://media.discordapp.net/attachments/1018323831468851202/1101311012537376889/image.png"
                alt="new"
              />
              <div class="px-6 py-4 bg-white">
                <div class="font-bold text-xl mb-2">
                  <a href="https://github.com/Nyumat/TalkToBeavs" target="_blank" rel="noopener noreferrer">
                    TalkToBeavs
                  </a>
                </div>
                <p class="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
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
                </p>
              </div>
            </div>
          </div>

          <div class="item">
            {' '}
            <div class="max-w-lg rounded overflow-hidden shadow-lg mt-5 h-256">
              <img
                src="https://media.discordapp.net/attachments/1018323831468851202/1101316955002118204/image.png"
                alt="new"
              />
              <div class="px-6 py-4 bg-white">
                <div class="font-bold text-xl mb-2">
                  <a
                    href="https://gitlab.com/osu-lug/projects/documentation/-/blob/master/docs/OSU/engr-servers.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OSU SSH Tutorial
                  </a>
                </div>
                <p class="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
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
                </p>
              </div>
            </div>
          </div>

          <div class="item">
            {' '}
            <div class="max-w-lg rounded overflow-hidden shadow-lg mt-5 h-256">
              <img
                src="https://user-images.githubusercontent.com/82061589/230786333-be52d168-0450-4e9f-8262-22cd8e478d4b.png"
                alt="new"
              />
              <div class="px-6 py-4 bg-white">
                <div class="font-bold text-xl mb-2">
                  <a href="https://github.com/mifi/lossless-cut" target="_blank" rel="noopener noreferrer">
                    LosslessCut
                  </a>
                </div>
                <p class="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
                    <li>
                      Implemented a{' '}
                      <a
                        href="https://github.com/mifi/lossless-cut/pull/1556"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        new feature
                      </a>{' '}
                      for LosslessCut, a lightweight ross-platform video editor.
                    </li>
                    <li>
                      My new feature adds current timestamps as part of the output file names to ensure unique
                      identifieres and to prevent accidental file overwrites when editing the same video rapidly.
                    </li>
                    <li>
                      Communicated with maintainer to ensure a good UX by creating helpful error messages if they use my
                      new feature incorrectly.
                    </li>
                    <li>Documented and tested my code thoroughly; used video demos to demonstrate what my PR did.</li>
                    <li>
                      PR was merged after a back-and-forth; my changes will eventually hit the production version of
                      LosslessCut, which has <b>16,000 Stars on Github</b>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div class="item">
            {' '}
            <div class="max-w-lg rounded overflow-hidden shadow-lg mt-5 h-256">
              <img
                src="https://media.discordapp.net/attachments/1090136863962058793/1103935736241201162/image.png"
                alt="new"
              />
              <div class="px-6 py-4 bg-white">
                <div class="font-bold text-xl mb-2">
                  <a href="https://github.com/thepeacockproject/Peacock" target="_blank" rel="noopener noreferrer">
                    The Peacock Project
                  </a>
                </div>
                <p class="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
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
                </p>
              </div>
            </div>
          </div>

          <div class="item">
            {' '}
            <div class="max-w-lg rounded overflow-hidden shadow-lg mt-5 h-256">
              <img
                src="https://media.discordapp.net/attachments/1018323831468851202/1101312355905831102/image.png"
                alt="new"
              />
              <div class="px-6 py-4 bg-white">
                <div class="font-bold text-xl mb-2">
                  <a href="https://github.com/solderq35/fg-time-calc" target="_blank" rel="noopener noreferrer">
                    Full Game Time Calculator
                  </a>
                </div>
                <p class="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
                    <li>
                      Developed a tool that stores race splits as part of the website URL, thus avoiding database costs
                      (credits to the{' '}
                      <a href="http://www.grun1.com/utils/timeCalc.html" target="_blank" rel="noopener noreferrer">
                        original Time Calculator
                      </a>{' '}
                      from Gordon Smith for inspiration)
                    </li>
                    <li>
                      Deployed a full stack Giphy API integration feature, allowing users to pick a GIF either a
                      "trending" GIF, or search for a specific GIF by topic. Proxied the Giphy API through our own API
                      to hide the Giphy API key
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
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            {' '}
            <div class="max-w-lg rounded overflow-hidden shadow-lg mt-5 h-256">
              <img
                src="https://camo.githubusercontent.com/3ceeb65fd84169f479e699352c455851c10d28083c2b8435593bcb5479f9031d/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3833333530353133363239303239393933352f3939333934393631373736303737323230362f756e6b6e6f776e2e706e673f77696474683d31313534266865696768743d363730"
                alt="new"
              />
              <div class="px-6 py-4 bg-white">
                <div class="font-bold text-xl mb-2">
                  <a href="https://github.com/solderq35/hitruns" target="_blank" rel="noopener noreferrer">
                    Hitruns
                  </a>
                </div>

                <p class="text-gray-700 text-base text-left">
                  Mirror site of Hitman 3 leaderboard on Speedrun.com. <hr className="opacity-0" />{' '}
                  <hr className="opacity-0" />
                  <ul className="list-disc list-inside">
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
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            {' '}
            <div class="max-w-lg rounded overflow-hidden shadow-lg mt-5 h-256">
              <img
                src="https://camo.githubusercontent.com/e8e8d7f263770c29bc5ba09c4a8cca50af4585b2d60590a7d91373a9fd489c12/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313031383332333833313436383835313230322f313034313138363835353831363830363438312f696d6167652e706e67"
                alt="new"
              />
              <div class="px-6 py-4 bg-white">
                <div class="font-bold text-xl mb-2">
                  <a href="https://github.com/solderq35/timmy-mk-3" target="_blank" rel="noopener noreferrer">
                    Timmy Time Bot
                  </a>
                </div>
                <p class="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
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
                      so that users are well informed about the limitations of my software.
                    </li>
                    <li>20 daily users, a majority of the active Hitman speedrun community playerbase </li>
                    <li>
                      Deployed on Railway.app with Node.js backend and communicating to Discord Developer API via
                      Discord.js framework, used in several Hitman speedrunning discord servers regularly
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div class="item">
            {' '}
            <div class="max-w-lg rounded overflow-hidden shadow-lg mt-5 h-256">
              <img
                src="https://media.discordapp.net/attachments/1090136863962058793/1103934392000327760/image.png"
                alt="new"
              />
              <div class="px-6 py-4 bg-white">
                <div class="font-bold text-xl mb-2">
                  <a href="https://github.com/solderq35/hitruns-wiki" target="_blank" rel="noopener noreferrer">
                    Hitruns Wiki
                  </a>
                </div>
                <p class="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
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
                </p>
              </div>
            </div>
          </div>

          <div class="item">
            {' '}
            <div class="max-w-lg rounded overflow-hidden shadow-lg mt-5 h-256">
              <img
                src="https://camo.githubusercontent.com/6e288253dd83c9c9ad0117800f14d3ed7fbe74f99353585f2a7c01df0ac5ac9c/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3833333530353133363239303239393933352f3939333937313837333130323731323935322f756e6b6e6f776e2e706e673f77696474683d373135266865696768743d363730"
                alt="new"
              />
              <div class="px-6 py-4 bg-white">
                <div class="font-bold text-xl mb-2">
                  <a href="https://github.com/solderq35/hospital-website" target="_blank" rel="noopener noreferrer">
                    Hospital Website
                  </a>
                </div>
                <p class="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
                    <li>Built with NodeJS + SQL backend, Handlebars framework frontend</li>
                    <li>Users can create, update, read, and delete hospital database entries (CRUD functionality)</li>
                    <li>Simple input validation implemented (e.g. only allows numeric input for phone numbers)</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            {' '}
            <div class="max-w-lg rounded overflow-hidden shadow-lg mt-5 h-256">
              <img
                src="https://cdn.discordapp.com/attachments/833505136290299935/1013155601100066908/unknown.png"
                alt="new"
              />
              <div class="px-6 py-4 bg-white">
                <div class="font-bold text-xl mb-2">
                  <a href="https://github.com/solderq35/wasteagram" target="_blank" rel="noopener noreferrer">
                    Wasteagram
                  </a>
                </div>
                <p class="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
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
                </p>
              </div>
            </div>
          </div>
        </div>
      </center>
    )
  );
}