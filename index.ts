import { initializeServer, mongooseConnect, routerConfig } from "./src/config";
const PORT = 5000;
mongooseConnect(() => {
  const app = initializeServer(PORT);
  app.use(routerConfig);
});
