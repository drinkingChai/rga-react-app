const TOGGLE_MODAL = 'TOGGLE_MODAL'

export const toggleModal = (url) => ({ type: TOGGLE_MODAL, url })

const initialState = { state: false, embedUrl: '' }

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case TOGGLE_MODAL:
      if (action.url) return { state: true, embedUrl: action.url }
      return { state: false, embedUrl: '' }
    default:
      return state
  }
}