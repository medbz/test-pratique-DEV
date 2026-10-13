import React from 'react'
import ReactDOM from 'react-dom/client'

import { TrilogyProvider } from '@trilogy-ds/react'
import '@trilogy-ds/styles/dist/default/trilogy.css'

import '@assets/style.css'

import App from './app'

async function enableMocking() {
  try {
    const { worker } = await import('./mocks/browser')
    await worker.start({ onUnhandledRequest: 'bypass' })
  } catch (error) {
    console.warn('MSW unavailable, falling back to local data.', error)
  }
}

enableMocking().finally(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <TrilogyProvider>
        <App />
      </TrilogyProvider>
    </React.StrictMode>,
  )
})
