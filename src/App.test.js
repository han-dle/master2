import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the 한들 마스터 2 title', () => {
  render(<App />)
  const title = screen.getByText(/한들 마스터 2/)
  expect(title).toBeInTheDocument()
})
