import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BookmarkContextProvider from './context/BookmarkContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookmarkContextProvider>

    <App />
    </BookmarkContextProvider>
  </StrictMode>,
)
