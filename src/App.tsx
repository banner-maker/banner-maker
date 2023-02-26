import React from 'react'
import { ContentsContext, ContentsProvider } from 'contexts/contents'
import './styles/App.scss'
import 'antd/dist/antd.min.css'
import SizeForm from './components/Tools/SizeForm'
import FontEditor from './components/Tools/FontEditor'
import { Header } from './components/Header'
import EditorViewer from 'components/EditorViewer/EditorViewer'
import BGEditor from 'components/Tools/BGEditor'
import { Divider } from 'antd'

const App: React.FC = () => {
  const { state } = React.useContext(ContentsContext)

  return (
    <ContentsProvider>
      <div className='App'>
        <Header />
        <div className='content'>
          <div className='toolWrapper'>
            <SizeForm />
            <div className='paletteWrapper'>
              <FontEditor />
              <Divider type='vertical' style={{ backgroundColor: 'white' }} />
              <BGEditor />
            </div>
          </div>
          <EditorViewer width={state.width} height={state.height} />
        </div>
      </div>
    </ContentsProvider>
  )
}

export default App
