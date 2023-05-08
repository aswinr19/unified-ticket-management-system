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

app.get('/events',(req: Request , res: Response) => {
  //use query parameters to fetch user preferences.
});

app.post('book-event',(req: Request , res: Response) => {
  
  const {  
      eventName,
      eventDate,
      eventLocation,
      eventType,
      numTickets,
      ticketType,
      ticketPrice,
      seatingPreference,
      userName,
      userEmail,
      userPhone,
      paymentMethod
            } = req.body;


});






