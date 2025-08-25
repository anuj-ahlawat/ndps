'use server';
/**
 * @fileOverview An AI agent that answers questions about NDPS.
 *
 * - answerNDPSQuestions - A function that handles answering questions about NDPS.
 * - AnswerNDPSQuestionsInput - The input type for the answerNDPSQuestions function.
 * - AnswerNDPSQuestionsOutput - The return type for the answerNDPSQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerNDPSQuestionsInputSchema = z.object({
  question: z.string().describe('The question about NDPS.'),
});
export type AnswerNDPSQuestionsInput = z.infer<typeof AnswerNDPSQuestionsInputSchema>;

const AnswerNDPSQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about NDPS.'),
  isFormal: z.boolean().describe('Whether the response should be formal (for parents) or informal (for students).'),
});
export type AnswerNDPSQuestionsOutput = z.infer<typeof AnswerNDPSQuestionsOutputSchema>;

export async function answerNDPSQuestions(input: AnswerNDPSQuestionsInput): Promise<AnswerNDPSQuestionsOutput> {
  return answerNDPSQuestionsFlow(input);
}

const decideFormalityTool = ai.defineTool({
  name: 'decideFormality',
  description: 'Decides whether the answer should be formal (for parents) or informal (for students).',
  inputSchema: z.object({
    question: z.string().describe('The question being asked.'),
  }),
  outputSchema: z.boolean().describe('True if the answer should be formal, false if informal.'),
},
async (input) => {
  // Implement the logic to determine formality based on the question.
  // This is a placeholder; replace with actual logic.
  const question = input.question.toLowerCase();
  return !question.includes('lol') && !question.includes('lmao') && !question.includes('wtf') && !question.includes('omg');
});

const answerNDPSQuestionsPrompt = ai.definePrompt({
  name: 'answerNDPSQuestionsPrompt',
  input: {schema: AnswerNDPSQuestionsInputSchema},
  output: {schema: AnswerNDPSQuestionsOutputSchema},
  tools: [decideFormalityTool],
  prompt: `You are an AI-powered virtual assistant for New Delhi Public School (NDPS). Answer the following question about NDPS:

Question: {{{question}}}

Decide if the answer should be formal, using the decideFormality tool.

Answer:`, 
});

const answerNDPSQuestionsFlow = ai.defineFlow(
  {
    name: 'answerNDPSQuestionsFlow',
    inputSchema: AnswerNDPSQuestionsInputSchema,
    outputSchema: AnswerNDPSQuestionsOutputSchema,
  },
  async input => {
    const {output} = await answerNDPSQuestionsPrompt(input);
    return output!;
  }
);
