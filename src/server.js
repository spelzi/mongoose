const http = require("http");
const app = require("./app");
const connectDb = require("./utils/dbconnect");

const httpServer = http.createServer(app);

const PORT = 3000;

const startServer = async () => {
  await connectDb();

  httpServer.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`);
  });
};

startServer();
