// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import ContactHeader from './ContactHeader'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  if (document.body != null) {
    document.body.appendChild(container)
  } else {
    expect(document.body).not.toEqual(null)
  }
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  if (container != null) {
    container.remove()
  } else {
    expect(container).not.toEqual(null)
  }
  container = null
})

it('<ContactHeader> Renders correctly', () => {
  act(() => {
    render(<ContactHeader />, container)
  })
})

it('<ContactHeader> Scrolls to Info', () => {
  act(() => {
    render(<ContactHeader />, container)
  })
  const scroll_button = document.querySelector('[test-id="scroll-info-button"]')
  if (scroll_button != null) {
    window.scrollBy = jest.fn()
    window.innerHeight = 100
    window.scrollY = 2
    const expected_scroll = 50 // innerHeight - 48 - scrollY

    fireEvent(scroll_button, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    expect(window.scrollBy).toBeCalledWith(0, expected_scroll)
  } else {
    expect(scroll_button).not.toEqual(null)
  }
})
