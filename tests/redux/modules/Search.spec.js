import reducer, {
  initialState,
  SEND_SEARCH,
  RECEIVE_SEARCH,
  sendSearch,
  receiveSearch,
  doSearch,
  default as searchReducer
} from 'redux/modules/Search'

describe('(Redux) Search', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })

    it('Should export a constant SEND_SEARCH.', function () {
      expect(SEND_SEARCH).to.equal('SEND_SEARCH')
    })

    it('Should export a constant RECEIVE_SEARCH.', function () {
      expect(RECEIVE_SEARCH).to.equal('RECEIVE_SEARCH')
    })

    describe('(Action Creator) doSearch', function () {
      let _globalState
      let _dispatchSpy
      let _getStateSpy

      beforeEach(function () {
        _globalState = {
          state: searchReducer(undefined, {})
        }
        _dispatchSpy = sinon.spy((action) => {
          _globalState = {
            state: searchReducer(_globalState.state, action)
          }
        })
        _getStateSpy = sinon.spy(() => {
          return _globalState
        })
      })

      it('Should be exported as a function.', function () {
        expect(doSearch).to.be.a('function')
      })

      it('Should return a function (is a thunk).', function () {
        expect(doSearch()).to.be.a('function')
      })

      it('Should return a promise from that thunk that gets fulfilled.', function () {
        return doSearch()(_dispatchSpy, _getStateSpy).should.eventually.be.fulfilled
      })

      it('Should call dispatch and getState exactly once.', function () {
        return doSearch()(_dispatchSpy, _getStateSpy)
          .then(() => {
            _dispatchSpy.should.have.been.calledTwice
            _getStateSpy.should.have.not.been.called
          })
      })

      it('Should produce a state that is a mocked result.', function () {
        _globalState = { state: '' }

        return doSearch()(_dispatchSpy, _getStateSpy)
          .then(() => {
            _dispatchSpy.should.have.been.calledTwice
            _getStateSpy.should.have.not.been.called
            expect(_globalState.state.query).to.equal("cats")
            return doSearch()(_dispatchSpy, _getStateSpy)
          })

      })
    })
  })
})
