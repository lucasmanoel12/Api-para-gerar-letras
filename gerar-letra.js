
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { tema } = req.body;

  if (!tema) {
    return res.status(400).json({ error: "Tema é obrigatório." });
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Crie uma letra de Rap, Trap ou Drill com rimas fortes e estilo marcante, sobre o tema: ${tema}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const resposta = completion.choices[0].message.content;
    return res.status(200).json({ letra: resposta });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao gerar letra." });
  }
}
