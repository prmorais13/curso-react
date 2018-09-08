import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Ler livro',
    list: [
      {
        _id: 1,
        description: 'Pagar fatura cartão',
        done: true
      },
      {
        _id: 2,
        description: 'Reunião com equipe as 10:00',
        done: false
      },
      {
        _id: 3,
        description: 'Ir ao dentista as 09:00',
        done: false
      },
    ]
  })
})

export default rootReducer