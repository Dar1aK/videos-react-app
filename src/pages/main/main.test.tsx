import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../app/store'
import Main from './main'

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Main />
    </Provider>,
  )

  expect(getByText(/Videos 🌻/i)).toBeInTheDocument()
})
