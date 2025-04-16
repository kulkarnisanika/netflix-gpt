// import OpenAI from 'openai';
import {GoogleGenAI} from '@google/genai';

//***************open ai implementation based on open router interface***************** */
/*const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "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",
  dangerouslyAllowBrowser: true
});
export default openai;*/

//*******************************using google model************************************* */
const openai = new GoogleGenAI({apiKey: process.env.REACT_APP_GOOGLE_API_KEY});
export default openai;