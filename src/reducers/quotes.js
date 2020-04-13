export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "UPVOTE_QUOTE":
      return [...state.map(quote => {
        if (quote.id === action.quoteId) {
          return {...quote, votes: ++quote.votes};
        } else {
          return quote;
        }
      })];
    case "DOWNVOTE_QUOTE":
      return [...state.map(quote => {
        if (quote.id === action.quoteId) {
          return {...quote, votes: (quote.votes > 0) ? --quote.votes: 0};
        }
        return quote;
      })];
    case "REMOVE_QUOTE":
        return [...state.filter(quote => {
          if (quote.id !== action.quoteId) {
            return quote;
          } else {
            return null;
          }
        })]
    default:
      return state;
  }
}
