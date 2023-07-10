import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import './PublockSearch.css'

//might have to use the polygon chain 
import { configureChains, mainnet, WagmiConfig, createClient } from 'wagmi'
import { publicProvider } from "wagmi/providers/public";

const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const client = createClient({
  autoConnect:true,
  provider,
  webSocketProvider,
});

//possibly provide Moralis provider here but not yet 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </WagmiConfig>
  </React.StrictMode>,
)
