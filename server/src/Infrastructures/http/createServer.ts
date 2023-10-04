import { Server, ResponseToolkit, Request } from "@hapi/hapi";
import Jwt from "@hapi/jwt";
import inert from "@hapi/inert";

// Importing domains
import ClientError from "@/Commons/Exceptions/ClientError";
import DomainErrorTranslator from "@/Commons/Exceptions/DomainErrorTranslator";
import { TContainer } from "@/types/container";
import { TArtifacts } from "@/types/artifacts";

// Importing interfaces - HTTP

const createServer = async (container: TContainer) => {
  const server = new Server({
    host: process.env.HOST,
    port: process.env.PORT,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  await server.register([
    {
      plugin: Jwt,
    },
    {
      plugin: inert,
    },
  ]);

  server.auth.strategy("note_app_jwt", "jwt", {
    keys: process.env.ACCESS_TOKEN_KEY,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      maxAgeSec: process.env.ACCESS_TOKEN_AGE,
    },
    validate: (artifacts: TArtifacts) => ({
      isValid: true,
      credentials: {
        id: artifacts.decoded.payload.id,
      },
    }),
  });

  await server.register([]);

  server.ext("onPreResponse", (request: Request, h: ResponseToolkit) => {
    // mendapatkan konteks response dari request
    const { response } = request;

    if (response instanceof Error) {
      // cek jika error berasal dari ClientError
      if (response instanceof ClientError) {
        // membuat response baru dari response toolkit sesuai kebutuhan error handling
        const newResponse = h.response({
          status: "fail",
          message: response.message,
        });
        newResponse.code(response.statusCode);
        return newResponse;
      }

      // jika bukan ClientError, lanjutkan dengan response sebelumnya (tanpa terintervensi)
      const newResponse = h.response({
        status: "error",
        message: response.message,
      });
      newResponse.code(500);
      console.error(response);
      return newResponse;
    }

    return h.continue;
  });

  return server;
};

export default createServer;
