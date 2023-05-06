import express , { Express , Request , Response } from "express";

const app: Express = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
  console.log(`listening on port http://localhost:${PORT}`);
});

app.get('/',(req: Request , res: Response) => {
  res.send("UTMS is live!");
});


app.post('/signup',(req: Request , res: Response) => {
  const { fName ,lName, email , phoneNumber , password } = req.body;
});

app.post('/signin',(req: Request , res: Response) => {
  const { email , password } = req.body;
});

app.post('/destinations', (req: Request , res: Response) => {
  
});
