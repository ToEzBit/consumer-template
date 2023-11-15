require("dotenv").config();

const consumer = require("./utils/kafka-consumer");
const { insertData } = require("./services/database-service");

async function run() {
  try {
    await consumer.connect();

    await consumer.subscribe({
      topic: process.env.KAFKA_TOPIC,
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({ message }) => {
        console.log("-------------------------------------");
        const { data } = JSON.parse(message.value);
        console.log(data);
        console.log("-------------------------------------");

        const res = await insertData({
          rankQtyBm1: 3,
          rankBath: 3,
          rankGpBath: 3,
          rankQtybm2: 3,
          prodCd: 3,
          sumMonthSaleAmt: 3,
          sumMonthSaleQty: 3,
          face: 3,
          gpBath: 3,
          ttlPrice: 3,
          gpPercent: 3,
          ttlGpBath: 3,
          ttlPercent: 3,
        });
        console.log("---------------------------------");
        console.log(res);
        console.log("---------------------------------");
      },
    });
  } catch (error) {
    console.log(error);
  }
}

run();
