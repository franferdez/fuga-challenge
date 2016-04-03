
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import { HomeView } from 'views/HomeView/HomeView'
import { mount } from 'enzyme'

describe('(Component) SearchInput', function () {
  let _component, _rendered, _props, _spies

  beforeEach(function () {
    _spies = {}
    _props = {
      counter: 0,
      ...bindActionCreators({
        doSearch: (_spies.doSearch = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }

    _component = shallowRenderWithProps(_props)
    _rendered = renderWithProps(_props)
  })

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div')
  })

  it('Should include an <input>', function () {
    const input = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'input')
    expect(input).to.exist
  })

  describe('An Serch button...', function () {
    let _btn

    beforeEach(() => {
      _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
    })

    it('should be rendered.', function () {
      expect(_btn).to.exist
    })

    it('should dispatch an action when clicked.', function () {
      _spies.dispatch.should.have.not.been.called
      TestUtils.Simulate.click(_btn)
      _spies.dispatch.should.have.been.called
    })
  })

})