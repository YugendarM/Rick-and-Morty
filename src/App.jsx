import React from 'react'
import HomePageComponent from './Components/HomePageComponent/HomePageComponent'
import { QueryClient, QueryClientProvider } from 'react-query'

const App = () => {
  const queryClient = new QueryClient();
  return (
    <React.Fragment>
      <QueryClientProvider client= {queryClient}>
        <HomePageComponent />
      </QueryClientProvider>
    </React.Fragment>
  )
}

export default App
