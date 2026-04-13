// import express from "express";
// import OpenAI from "openai";
// import dotenv from "dotenv";

// dotenv.config();
// const router = express.Router();



// console.log("AI Chat Route Loaded", process.env.OPENAI_API_KEY);
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// router.post("/chat", async (req, res) => {

//   try {

//     const { message } = req.body;

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "system",
//           content: `
//           You are a salon assistant.
//           Answer about:
//           - Haircut
//           - Beard
//           - Appointment booking
//           - Salon services
//           `
//         },
//         {
//           role: "user",
//           content: message
//         }
//       ]
//     });

//     res.json({
//       reply: response.choices[0].message.content
//     });

//   } catch (error) {

//     res.status(500).json({
//       error: error.message
//     });

//   }

// });

// export default router;