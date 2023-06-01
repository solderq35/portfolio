export default function Project() {
  return (
    (document.title = 'Projects | Jeff Huang'),
    (
      <center>
        <h1 className="text-7xl my-10">
          {' '}
          <b> Projects </b>{' '}
        </h1>

        <h2 className="text-5xl my-10">
          {' '}
          <b> Software Development </b>{' '}
        </h2>

        <div className="container">
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img
                src="https://media.discordapp.net/attachments/1090136863962058793/1103926413322625114/image.png"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a href="https://github.com/OSU-Sustainability-Office" target="_blank" rel="noopener noreferrer">
                    OSU Sustainability Office (Paid Position)
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
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
                      to better handle insuffient amounts of data, and display data better on our solar panel /
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
              <img
                src="https://media.discordapp.net/attachments/1018323831468851202/1101311012537376889/image.png"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a href="https://github.com/Nyumat/TalkToBeavs" target="_blank" rel="noopener noreferrer">
                    TalkToBeavs
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
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
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img
                src="https://user-images.githubusercontent.com/82061589/230786333-be52d168-0450-4e9f-8262-22cd8e478d4b.png"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a href="https://github.com/mifi/lossless-cut" target="_blank" rel="noopener noreferrer">
                    LosslessCut
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
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
              <img
                src="https://media.discordapp.net/attachments/1018323831468851202/1101312355905831102/image.png"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a href="https://github.com/solderq35/fg-time-calc" target="_blank" rel="noopener noreferrer">
                    Full Game Time Calculator
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
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
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img
                src="https://camo.githubusercontent.com/3ceeb65fd84169f479e699352c455851c10d28083c2b8435593bcb5479f9031d/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3833333530353133363239303239393933352f3939333934393631373736303737323230362f756e6b6e6f776e2e706e673f77696474683d31313534266865696768743d363730"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a href="https://github.com/solderq35/hitruns" target="_blank" rel="noopener noreferrer">
                    Hitruns
                  </a>
                </div>

                <div className="text-gray-700 text-base text-left">
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
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img
                src="https://camo.githubusercontent.com/e8e8d7f263770c29bc5ba09c4a8cca50af4585b2d60590a7d91373a9fd489c12/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313031383332333833313436383835313230322f313034313138363835353831363830363438312f696d6167652e706e67"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a href="https://github.com/solderq35/timmy-mk-3" target="_blank" rel="noopener noreferrer">
                    Timmy Time Bot
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
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
              <img
                src="https://camo.githubusercontent.com/6e288253dd83c9c9ad0117800f14d3ed7fbe74f99353585f2a7c01df0ac5ac9c/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3833333530353133363239303239393933352f3939333937313837333130323731323935322f756e6b6e6f776e2e706e673f77696474683d373135266865696768743d363730"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a href="https://github.com/solderq35/hospital-website" target="_blank" rel="noopener noreferrer">
                    Hospital Website
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
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
              <img
                src="https://cdn.discordapp.com/attachments/833505136290299935/1013155601100066908/unknown.png"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a href="https://github.com/solderq35/wasteagram" target="_blank" rel="noopener noreferrer">
                    Wasteagram
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-5xl my-10">
          {' '}
          <b> Technical Writing </b>{' '}
        </h2>
        <div className="container">
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img
                src="https://media.discordapp.net/attachments/1090136863962058793/1103935736241201162/image.png"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a href="https://github.com/thepeacockproject/Peacock" target="_blank" rel="noopener noreferrer">
                    The Peacock Project
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
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
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img
                src="https://media.discordapp.net/attachments/1090136799696916602/1108920690985422918/image.png"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a
                    href="https://github.com/OSU-Sustainability-Office/osu-sustainability-office.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OSU Sustainability Office Wiki
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
                    <li>
                      I basically used my gaming wiki expertise to use it for my paid work (OSU Sustainability Office)
                    </li>
                    <li>
                      Combining several related projects' worth of documentation into one wiki is more efficient /
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
              <img
                src="https://media.discordapp.net/attachments/1090136863962058793/1103934392000327760/image.png"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a href="https://github.com/solderq35/hitruns-wiki" target="_blank" rel="noopener noreferrer">
                    Hitruns Wiki
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
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
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img
                src="https://media.discordapp.net/attachments/1018323831468851202/1101316955002118204/image.png"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a
                    href="https://gitlab.com/osu-lug/projects/documentation/-/blob/master/docs/OSU/engr-servers.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OSU SSH Tutorial
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-5xl my-10">
          {' '}
          <b> Miscellaneous </b>{' '}
        </h2>
        <div className="container">
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img
                src="https://media.discordapp.net/attachments/1018323831468851202/1113955318779613375/image.png"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a href="https://www.speedrun.com/hitman_3" target="_blank" rel="noopener noreferrer">
                    Hitman Speedrunning
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
                    <li>
                      {' '}
                      <a href="https://www.speedrun.com/user/Solderq35" target="_blank" rel="noopener noreferrer">
                        Lead Moderator
                      </a>{' '}
                      of the Hitman WoA Speedrunning Community since 2020. Led community discussions and polls for rule
                      changes, verified runs to prevent cheating, promoted the growth of Hitman speedrunning worldwide
                    </li>
                    <li>
                      Discovered and / or popularized (non exhaustive):{' '}
                      <a
                        href="https://www.youtube.com/watch?v=ie1Zu2r27Ic&t=17s"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        This panic technique for the Romania level
                      </a>{' '}
                      |{' '}
                      <a href="https://youtu.be/GMM85dJpTQ8?t=128" target="_blank" rel="noopener noreferrer">
                        this technique for shooting just one bullet out of a window with an automatic weapon
                      </a>{' '}
                      |{' '}
                      <a
                        href="https://hitruns-wiki.vercel.app/docs/downpatching#epic-legendary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        this technique for downpatching the game version on Epic
                      </a>
                      . These discoveries are still used by many runners to this day
                    </li>
                    <li>
                      Popularized and was the first runner to make a serious attempt at beating the Hitman WoA trilogy
                      in one sitting as fast as possible (Hitman Trilogy SA/SO Speedrun), on both{' '}
                      <a
                        href="https://www.speedrun.com/hitman_3/run/yd9wq9xz"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Professional
                      </a>{' '}
                      and{' '}
                      <a
                        href="https://www.speedrun.com/hitman_3/run/ylo8303y"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Master
                      </a>{' '}
                      difficulties
                    </li>
                    <li>
                      I personally coached popular streamers and content creators like{' '}
                      <a href="https://www.twitch.tv/atrioc" target="_blank" rel="noopener noreferrer">
                        Atrioc
                      </a>
                      ,{' '}
                      <a href="https://www.twitch.tv/elajjaz" target="_blank" rel="noopener noreferrer">
                        Elajjaz
                      </a>
                      ,{' '}
                      <a href="https://www.twitch.tv/linkus7" target="_blank" rel="noopener noreferrer">
                        Linkus7
                      </a>
                      ,{' '}
                      <a href="https://www.twitch.tv/aspecticor" target="_blank" rel="noopener noreferrer">
                        Aspecticor
                      </a>
                      , and{' '}
                      <a href="https://www.twitch.tv/karmikkoala" target="_blank" rel="noopener noreferrer">
                        KarmikKoala{' '}
                      </a>
                      (Russian speaking fanbase), helping them grow their brand and skill as Hitman speedrunners
                    </li>
                    <li>
                      Acted as ambassador to the Chinese speedrunning community by{' '}
                      <a href="https://space.bilibili.com/1174271590" target="_blank" rel="noopener noreferrer">
                        uploading speedrunning tutorials and runs{' '}
                      </a>{' '}
                      to Bilibili, helping a lot of up-and-coming Chinese Hitman speedrunners
                    </li>
                    <li>
                      Leveraged Mandarin Chinese skills learned in childhood to act as liaison between English speaking
                      and Chinese speaking parts of Hitman speedrunning community, resolving any translation issues in
                      communication
                    </li>
                    <li>
                      Successfully created, marketed, popularized, and maintained a variety of open source software for
                      the Hitman speedrun community - refer to previous tiles on this portfolio
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img
                src="https://media.discordapp.net/attachments/1018323831468851202/1113955676163678308/image.png"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a
                    href="https://github.com/OSU-Sustainability-Office/osu-sustainability-office.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
                    <li>
                      This is tangential to Hitman Speedrunning, but I did get about 850 subscribers on Youtube (as of
                      June 2023)
                    </li>
                    <li>
                      I learned about simple video editing (I started to use LosslessCut, which is funny as I later
                      contributed to LosslesCut as open source, see above), simple Photoshop for thumbnails, and a
                      little about how to SEO / getting as many views as possible
                    </li>
                    <li>
                      I later learned I don't really have the discipline to upload videos too regularly (running out of
                      ideas, have to start focusing on school / work), but I still do upload some Hitman videos as a
                      hobby now and then
                    </li>
                    <li>
                      Since a lot of the Hitman speedrunning creators had big followings, if I ever did want to
                      seriously consider Youtube as a career, I'm sure they would give me a leg up. I don't think I'm
                      outgoing enough though
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img
                src="https://media.discordapp.net/attachments/1018323831468851202/1113955948583719034/image.png"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a href="https://github.com/solderq35/hitruns-wiki" target="_blank" rel="noopener noreferrer">
                    Bilibili
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
                    <li>
                      I think someone uploaded my video to Bilibili without my permission and I happened to see it. I
                      started uploading my own videos to Bilibili after that. Also got about 700 subscribers on Bilibili
                    </li>
                    <li>
                      As mentioned earlier, I translated my video's speedrunning tutorial instructions to Chinese
                      myself.
                    </li>
                    <li>
                      I thus have a proven track record of practical English to Chinese translation, as many Chinese
                      Hitman speedrunners credited my content as an inspiration / guide early on for them.
                    </li>
                    <li>
                      Continued to act as Chinese-English community liaison after that. I translated confusing Hitman
                      speedrunning rules to Chinese on request, translated esoteric speedrunning techniques to Chinese
                      when machine translation was not sufficient
                    </li>
                    <li>
                      Continued to upload new speedrunning techniques to Bilibili for Chinese speedrunners who could not
                      access Youtube due to firewall
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {' '}
            <div className="max-w-lg rounded overflow-hidden mt-5 h-256">
              <img
                src="https://www.clipartmax.com/png/middle/24-241724_violin-clipart-free-clipartfest-transparent-background-violin-clipart.png"
                alt="new"
              />
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  <a
                    href="https://gitlab.com/osu-lug/projects/documentation/-/blob/master/docs/OSU/engr-servers.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Music
                  </a>
                </div>
                <div className="text-gray-700 text-base text-left">
                  <ul className="list-disc list-inside">
                    <li>
                      I have{' '}
                      <a
                        href="https://news.uchicago.edu/explainer/what-is-perfect-pitch"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        perfect pitch{' '}
                      </a>{' '}
                      (1/10,000 person trait). It doesn't make me a better musician per se, but I can sing any song /
                      tune my violin without any reference pitch needed
                    </li>
                    <li>
                      Haven't played in a few years but thinking of getting back into it this summer during my
                      internship next week (June to August). Talked to{' '}
                      <a href="https://cosusymphony.org/" target="_blank" rel="noopener noreferrer">
                        OSU Symphony orchestra{' '}
                      </a>{' '}
                      conductor, they're really friendly
                    </li>
                    <li>
                      I played for 5 years with the Metropolitan Youth Symphony, a Portland-based youth orchestra.{' '}
                      <a href="https://youtu.be/odnEFBNQWA8" target="_blank" rel="noopener noreferrer">
                        Here is one of my Metropolitan Youth Symphony Concerts{' '}
                      </a>{' '}
                      (I am in the front row second from the left)
                    </li>
                    <li>
                      Played for more than 10 years as well as a solo performer.{' '}
                      <a href="https://youtu.be/Ad1T7yfL3bg" target="_blank" rel="noopener noreferrer">
                        Here's one of my solo performances{' '}
                      </a>
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
