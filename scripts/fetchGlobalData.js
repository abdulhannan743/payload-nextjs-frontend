const { default: axios } = require("axios");
const fs = require("fs");
require("dotenv").config();
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

async function fetchGlobalData() {
  try {
    console.log("Running Initial Fetch");
    const [header, footer] = await Promise.all([
      axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/header`).then(
        (res) => res?.data
      ),
      axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/footer`).then(
        (res) => res?.data
      ),
      // axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listings?limit=12&sort=-exlusive,-price`).then(
      //     (res) => {
      //         return res.data.docs.map((listing)=>{
      //             return({
      //                 ...listing,
      //                 features:[],
      //                 agent:{},
      //                 description:{},
      //                 areaDescription: {},
      //                 excerpt:{},
      //                 images: listing.images.splice(0,1),

      //             })
      //         })
      //     }
      // ),
    ]);
    const globalData = {
      header,
      footer,
    };
    for (const [key, value] of Object.entries(globalData)) {
      if (value) {
        const jsonValue = JSON.stringify(value, null, 2);
        fs.writeFileSync(`src/globalData/${key}.json`, jsonValue);
      }
    }
  } catch (error) {
    console.error("Error Fetching global data:", error);
    process.exit(1);
  }
}

fetchGlobalData();
