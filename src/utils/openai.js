import OpenAI from 'openai';
//import {OPENAI_API_KEY} from './constants/'


const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

export default openai;