// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const MERDA = 'MERDA'


// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

export function merdaAction (text = 'ohyeah') {
  return {
    type    : MERDA,
    payload : text
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  merdaAction,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS_2 = {
  [MERDA]    : (state, action) => state.exercise2.favetti = action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  favetti : 'Passa col mouse sul mattoncino per farlo ruotare, cliccaci sopra per crearne un altro'
}
export default function exercise1Reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS_2[action.type]

  return handler ? handler(state, action) : state
}
