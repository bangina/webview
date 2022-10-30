import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import styled from 'styled-components'
import './App.css'
import Home from './Home'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default App
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`
