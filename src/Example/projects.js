export default function Example() {
  return (
    (document.title = 'Projects | Jeff Huang'),
    (
      <center>
        <h1 className="text-7xl my-10">
          {' '}
          <b> Projects </b>{' '}
        </h1>
        <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5">
          <img
            src="https://camo.githubusercontent.com/6e288253dd83c9c9ad0117800f14d3ed7fbe74f99353585f2a7c01df0ac5ac9c/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3833333530353133363239303239393933352f3939333937313837333130323731323935322f756e6b6e6f776e2e706e673f77696474683d373135266865696768743d363730"
            alt="new"
          />
          <div class="px-6 py-4 bg-white">
            <div class="font-bold text-xl mb-2">
              <a href="https://github.com/solderq35/hospital-website">Hospital Website</a>
            </div>
            <p class="text-gray-700 text-base text-left">
              <ul className="list-disc list-inside">
                <li>Built with NodeJS + SQL backend, Handlebars framework frontend</li>
                <li>Users can create, update, read, and delete hospital database entries (CRUD functionality)</li>
              </ul>
            </p>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5">
          <img
            src="https://cdn.discordapp.com/attachments/833505136290299935/1013155601100066908/unknown.png"
            alt="new"
          />
          <div class="px-6 py-4 bg-white">
            <div class="font-bold text-xl mb-2">
              <a href="https://github.com/solderq35/wasteagram">Wasteagram</a>
            </div>
            <p class="text-gray-700 text-base text-left">
              <ul className="list-disc list-inside">
                <li>
                  Cross-platform mobile app built with Dart (Flutter Framework), user data hosted in the cloud on Google
                  Firebase
                </li>
                <li>
                  Users can create posts with information on wasted food items such as number of items wasted, photo of
                  the item, date, and location
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg my-10">
          <img
            src="https://camo.githubusercontent.com/3ceeb65fd84169f479e699352c455851c10d28083c2b8435593bcb5479f9031d/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3833333530353133363239303239393933352f3939333934393631373736303737323230362f756e6b6e6f776e2e706e673f77696474683d31313534266865696768743d363730"
            alt="new"
          />
          <div class="px-6 py-4 bg-white">
            <div class="font-bold text-xl mb-2">
              <a href="https://github.com/solderq35/hitruns">Hitruns</a>
            </div>

            <p class="text-gray-700 text-base text-left">
              Mirror site of Hitman 3 leaderboard on Speedrun.com. <hr className="opacity-0" />{' '}
              <hr className="opacity-0" />
              <ul className="list-disc list-inside">
                <li>
                  Built with{' '}
                  <a href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props">
                    NextJS serverless functions for backend
                  </a>
                  , React Bootstrap and NextJS for frontend
                </li>
                <li>
                  Updates itself regularly to match the original leaderboard, with help from speedrun.com's RESTFUL API
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg my-10">
          <img
            src="https://media.discordapp.net/attachments/1018323831468851202/1041082105511293008/image.png"
            alt="new"
          />
          <div class="px-6 py-4 bg-white">
            <div class="font-bold text-xl mb-2">
              <a href="https://github.com/solderq35/timmy_mk_2">HITMAN Milliseconds Discord Bot</a>
            </div>
            <p class="text-gray-700 text-base text-left">
              Tool that calculates the exact completion time of a HITMAN level with milliseconds accuracy, based on the
              player's score (level completion times are only shown to the nearest second in-game).
              <ul className="list-disc list-inside">
                <li>Built with Discord.JS (Node.JS framework), hosted on AWS Lambda to decrease server costs</li>
                <li>Up to 20 regular users in HITMAN speedrun community.</li>
                <li>
                  Used to break leaderboard ties and for pacing. Improved efficiency compared to doing the math by hand
                </li>
              </ul>
            </p>
          </div>
        </div>
      </center>
    )
  );
}
