const STUFF = process.env.NAME;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log('${STUFF}');
    await sleep(5000);
  }
}

main();
