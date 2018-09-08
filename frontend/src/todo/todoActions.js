export const changedDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})