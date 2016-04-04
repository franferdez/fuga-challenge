
import React from 'react'
import SearchInput from 'components/SearchInput/SearchInput'
import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import { mount } from 'enzyme'


function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<SearchInput {...props} />)
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<SearchInput {...props} />)
}

describe('(Component) SearchInput', function () {
  let _component, _rendered, _props, _spies

  beforeEach(function () {
    _spies = {}
    _props = {
      //...bindActionCreators({
      //  doSearch: (_spies.doSearch = sinon.spy())
      //}, _spies.dispatch = sinon.spy())
  }
    _spies.handleSearch = sinon.spy(SearchInput.prototype, "handleSearch")
    _component = shallowRenderWithProps(_props)
    _rendered = renderWithProps(_props)
  });

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

    //it('should dispatch an action when clicked.', function () {
    //  _spies.handleSearch.should.have.not.been.called
    //  TestUtils.Simulate.click(_btn)
    //  _spies.handleSearch.should.have.been.called
    //})

  })

  afterEach(function () {
    _spies.handleSearch.restore()
  })

})