import { QUOTES } from '../shared/quotes.js';
import { DATA } from '../shared/data.js';

const filters = {
  projects: [],
  certificates: [],
  issuer: []
}

export const initialState = {
  certificates: DATA.certificates,
  contacts: DATA.contacts,
  projects: DATA.projects,
  education: DATA.education,
  quotes: QUOTES.quotes,
  filters: filters
};

// export function filtersReducer(filters, action) {}

export const Reducer = (state = initialState, action) => {
  // return {
  //   ...state,
  //   filters: filtersReducer(filters, action)
  // };
  return state
};