import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
//we need to do this query thing so that we can use the useQuery hook in App.jsx
//useQuery is a hook that is used to fetch data from the server
//we need to wrap our App component in the QueryClientProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
