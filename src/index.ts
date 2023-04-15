import express , { Express , Request , Response } from "express";

const app: Express = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
  console.log(`listening on port http://localhost:${PORT}`);
});

app.get('/',(req: Request ,res: Response) => {
  res.send("Hello World!");
});
