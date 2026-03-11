
export const config = { runtime: 'edge' };

const PROVIDER = process.env.PROVIDER || 'openrouter';
const API_KEY   = process.env.API_KEY || '';
const MODEL     = process.env.MODEL || 'qwen/qwen-2.5-32b-instruct';

const ENDPOINTS = {
  openai:     'https://api.openai.com/v1/chat/completions',
  groq:       'https://api.groq.com/openai/v1/chat/completions',
  mistral:    'https://api.mistral.ai/v1/chat/completions',
  openrouter: 'https://openrouter.ai/api/v1/chat/completions',
  together:   'https://api.together.xyz/v1/chat/completions'
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }
  try {
    const { prompt, tone } = await req.json();
    if (!API_KEY) return new Response('Falta API_KEY', { status: 400 });

    const system = `Sos un asistente de redacción corporativa. Objetivo: generar textos profesionales claros, concisos, con tono ${tone}.
- No inventes datos.
- Usá español neutro.
- Longitud objetivo: 120-220 palabras.`;

    const body = {
      model: MODEL,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: prompt }
      ],
      temperature: 0.5,
      max_tokens: 350
    };

    const r = await fetch(ENDPOINTS[PROVIDER], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(body)
    });
    if (!r.ok) {
      const t = await r.text();
      return new Response(`Error proveedor: ${t}`, { status: 500 });
    }
    const js = await r.json();
    const text = js?.choices?.[0]?.message?.content?.trim?.() || '';
    return new Response(JSON.stringify({ text }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(String(e), { status: 500 });
  }
}
