import express, { json, urlencoded } from "express";

const initializeServer = (port: number) => {
  const app = express();
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });
  return app;
};

export default initializeServer;
