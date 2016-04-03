import reducer, { initialState } from 'redux/modules/PlayLists'

describe('(Redux) PlayLists', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
