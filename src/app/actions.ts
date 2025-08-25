'use server';

import { answerNDPSQuestions } from '@/ai/flows/answer-ndps-questions';
import type { AnswerNDPSQuestionsInput, AnswerNDPSQuestionsOutput } from '@/ai/flows/answer-ndps-questions';

export async function askQuestion(
  input: AnswerNDPSQuestionsInput
): Promise<AnswerNDPSQuestionsOutput> {
  try {
    const result = await answerNDPSQuestions(input);
    return result;
  } catch (error) {
    console.error('Error in askQuestion server action:', error);
    return {
      answer: 'Sorry, I encountered an error while processing your question. Please try again later.',
      isFormal: true, // Default to formal on error
    };
  }
}
