import OpenAI from 'openai';
//import {OPENAI_API_KEY} from './constants/'


const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

export default openai;