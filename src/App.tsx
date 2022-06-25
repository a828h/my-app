import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

import Routes from './Routes'
const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme('light')}>
                <Routes />
                <ReactQueryDevtools initialIsOpen={false} />
                <ToastContainer />
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App
