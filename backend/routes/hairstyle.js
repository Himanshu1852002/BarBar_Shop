// import express from "express";
// import OpenAI from "openai";

// const router = express.Router();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// router.post("/suggest-hairstyle", async (req, res) => {

//   const { faceShape } = req.body;

//   const prompt = `
//   Suggest best hairstyle for ${faceShape} face shape.
//   Include:
//   - haircut name
//   - description
//   `;

//   const response = await openai.chat.completions.create({

//     model: "gpt-4o-mini",

//     messages: [
//       {
//         role: "user",
//         content: prompt
//       }
//     ]

//   });

//   res.json({

//     suggestion: response.choices[0].message.content

//   });

// });

// export default router;