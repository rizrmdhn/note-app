/* eslint-disable no-console */
import dotenv from "dotenv";
dotenv.config();

import createServer from "./Infrastructures/http/createServer";
import container from "./Infrastructures/container";

const start = async () => {
  const server = await createServer(container);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

start();
