import { Auth0Provider } from '@auth0/auth0-react'
import { ThemeProvider } from '@fluentui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './styling/scss/global.scss'
import budgetyTheme from './styling/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <ThemeProvider theme={budgetyTheme}>
            <Auth0Provider
                domain={process.env.REACT_APP_DOMAIN ?? ''}
                clientId={process.env.REACT_APP_CLIENT_ID ?? ''}
                redirectUri={window.location.origin}
            >
                <App />
            </Auth0Provider>
            ,
        </ThemeProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
