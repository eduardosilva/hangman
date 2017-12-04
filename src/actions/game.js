export const types = {
  REQUEST_WORD: 'REQUEST_WORD',
  RECEIVED_WORD: 'RECEIVED_WORD',
  ERROR_RECEIVING_WORD: 'ERROR_RECEIVING_WORD',
}

export const requestWord = () => ({
  type: types.REQUEST_WORD,
})

export const receivedWord = (word) => ({
  payload: {
    word,
  },
  type: types.RECEIVED_WORD,
})

export const errorReceivingWord = (error) => ({
  payload: {
    error,
  },
  type: types.ERROR_RECEIVING_WORD,
})