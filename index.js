require("dotenv").config();

const consumer = require("./utils/kafka-consumer");
const databaseService = require("./services/database-service");

async function run() {
  try {
    await consumer.connect();

    await consumer.subscribe({
      topic: process.env.KAFKA_TOPIC,
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({ message }) => {
        const { data } = JSON.parse(message.value);
        await databaseService.insertData(data.dataList);
      },
    });
  } catch (error) {
    console.log(error);
  }
}

run();
