export default function quotes(state = [], action) {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return [...state.filter(quote => quote.id !== action.quoteId)]
    case 'UPVOTE_QUOTE':
      const quoteUpvote = state.find(quote => quote.id === action.quoteId)
      quoteUpvote.votes += 1
      return state.map(quote => {
        if (quote === quoteUpvote) {
          return quoteUpvote
        } else {
          return quote
        }
      })
    case 'DOWNVOTE_QUOTE':
      const quoteDownvote = state.find(quote => quote.id === action.quoteId)
      if (quoteDownvote.votes > 0) {
        quoteDownvote.votes -= 1
      }
      return state.map(quote => {
        if (quote === quoteDownvote) {
          return quoteDownvote
        } else {
          return quote
        }
      })
    default:
      return state;
  }
}
