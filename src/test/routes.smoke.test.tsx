import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from '../App'

const renderAtPath = (path: string) => {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('route smoke tests', () => {
  it('renders home route', async () => {
    renderAtPath('/')

    expect(await screen.findByText("Building AI that's")).toBeInTheDocument()
  })

  it('renders projects route', async () => {
    renderAtPath('/projects')

    expect(await screen.findByText("Things I've Built")).toBeInTheDocument()
  })

  it('renders about route', async () => {
    renderAtPath('/about')

    expect(await screen.findByText('Sales-first Data Science')).toBeInTheDocument()
  })

  it('renders invalid case-study state', async () => {
    renderAtPath('/projects/not-real')

    expect(await screen.findByText('Project Not Found')).toBeInTheDocument()
  })
})

