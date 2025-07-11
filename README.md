
# Gerador de Letra com IA

API que gera letras de Rap, Trap ou Drill com base em um tema enviado, usando a OpenAI.

## Como usar

1. Faça o deploy na Vercel
2. Adicione a variável de ambiente `OPENAI_API_KEY`
3. Envie uma requisição POST para `/api/gerar-letra` com um JSON assim:

```json
{
  "tema": "superação"
}
```

## Exemplo de resposta

```json
{
  "letra": "Yeah, no corre pesado, mente afiada..."
}
```
