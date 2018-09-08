import Axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changedDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

export const search = () => {
  const request = Axios.get(`${URL}?sort=-createAt`)
  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
}

export const add = (description) => {
  const request  = Axios.post(URL, { description })
  return [
    { type: 'TODO_ADDED', payload: request },
    search()
  ]
}