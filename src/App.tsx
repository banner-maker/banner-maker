import React from 'react'
import { ContentsContext, ContentsProvider } from 'contexts/contents'
import './styles/App.scss'
import 'antd/dist/antd.min.css'
import SizeForm from './components/SizeForm'
import FontEditor from './components/FontEditor'
import { Header } from './components/Header'
import EditorViewer from 'components/EditorViewer/EditorViewer'
import NewPalette from 'components/Palette/NewPalette'

const App: React.FC = () => {
  const { state } = React.useContext(ContentsContext)

  return (
    <ContentsProvider>
      <div className='App'>
        <Header />
        <div className='content'>
          <div className='toolWrapper'>
            <SizeForm />
            <FontEditor />
            <NewPalette />
          </div>
          <EditorViewer width={state.width} height={state.height} />
        </div>
      </div>
    </ContentsProvider>
  )
}

export default App
