import reducer, { initialState } from 'redux/modules/Searh'

describe('(Redux) Search', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
