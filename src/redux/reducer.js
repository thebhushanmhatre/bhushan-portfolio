import { QUOTES } from '../shared/quotes.js';
import { DATA } from '../shared/data.js';

export const initialState = {
  certificates: DATA.certificates,
  contacts: DATA.contacts,
  projects: DATA.projects,
  education: DATA.education,
  quotes: QUOTES.quotes
};

export const Reducer = (state = initialState, action) => {
  return state;
};