export default (state = [], action) => {
  switch(action.type){
    case "ADD_QUOTE":
      return state.concat(action.quote)
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      let foundQuote = state.find(quote => quote.id === action.quoteId)
      if (foundQuote.votes) {
        foundQuote.votes = foundQuote.votes + 1
      } else {
        foundQuote.votes = 1
      }
      return state.map(quote => {
        if (quote.id === action.quoteId){
          return foundQuote
        } else {
          return quote
        }
      })
    case "DOWNVOTE_QUOTE":
      let updatedQuote = state.find(quote => quote.id === action.quoteId)
      if (updatedQuote.votes !== 0) {
        updatedQuote.votes = updatedQuote.votes - 1
      }
      return state.map(quote => {
        if (quote.id === action.quoteId){
          return updatedQuote
        } else {
          return quote
        }
      })
    default:
      return state;
  }
}
