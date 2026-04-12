import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import Home from '../pages/Home'

describe('a11y smoke', () => {
  it('home page has no major accessibility violations', async () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )

    const results = await axe(container)
    expect(results.violations).toHaveLength(0)
  })
})

