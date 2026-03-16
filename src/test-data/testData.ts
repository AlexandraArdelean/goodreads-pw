import * as dotenv from 'dotenv';
dotenv.config();

const requiredVars = [
  'USER_NAME',
  'USER_EMAIL',
  'USER_PASSWORD',
  'INVALID_EMAIL',
  'INVALID_PASSWORD',
  'BOOK_SEARCH_QUERY',
  'BOOK_TITLE',
  'REVIEW_TEXT',
];

for (const key of requiredVars) {
  if (!process.env[key]) {
    throw new Error(`The ${key} variable is missing!`);
  }
}

export const testData = {
  user: {
    name: process.env.USER_NAME!,
    email:    process.env.USER_EMAIL!,
    password: process.env.USER_PASSWORD!,
    invalidEmail: process.env.INVALID_EMAIL!,
    invalidPassword: process.env.INVALID_PASSWORD!
  },
  book: {
    searchQuery: process.env.BOOK_SEARCH_QUERY!,
    title:       process.env.BOOK_TITLE!,
  },
  review: {
    text: process.env.REVIEW_TEXT!,
  },
};