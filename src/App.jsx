import React, { Component } from 'react'
import DownloadButton from './components/Button/DownloadButton'
import './styles/App.scss'
import 'antd/dist/antd.css'
import SizeForm from './components/SizeForm'
import FontEditor from './components/FontEditor'
import Palette from './components/Palette'
import Preview from './components/Preview'
import Input from './components/Input'
import { Header } from './components/Header'
import { PICKER_TYPE } from './common/Constant'
import { getContrastYIQ, getRandomHexColor } from './common/Utils'
import SideTab from './components/SideTab'
import BgImageSelectModal from './components/modal/BgImageSelectModal/BgImageSelectModal'
import { ContentsProvider } from './contexts/contents'

class App extends Component {
  constructor(props) {
    super(props)
    const initColor = getRandomHexColor()

    this.state = {
      pickerType: PICKER_TYPE.BACKGROUND,
      width: '700',
      height: '350',
      backgroundType: 'color',
      backgroundImage: null,
      backgroundColor: initColor,
      textColor: getContrastYIQ(initColor.slice(-6)),
      href: '',
      bgModalOpen: false,
    }
  }

  colorChange = ({ hex, hsl, pickerType }) => {
    this.setState({
      [`${pickerType}Color`]: hex,
      backgroundType: 'color',
    })
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleColorType = (colorType) => {
    this.setState({ colorType })
  }

  handleCanvasChange = (href) => {
    this.setState({ href })
  }

  handleBgModal = (open) => () => {
    this.setState({ bgModalOpen: open })
  }

  setBackgroundImage = (blob) => {
    this.setState({
      backgroundType: 'image',
      backgroundImage: blob,
      bgModalOpen: false,
    })
  }

  render() {
    const { textColor, backgroundColor, href, width, height } = this.state
    return (
      <ContentsProvider>
        <div className='App'>
          <Header />
          <div className='content'>
            <SizeForm
              width={width}
              height={height}
              onInputChange={this.handleInputChange}
            />
            <Preview {...this.state} updateCanvas={this.handleCanvasChange} />
            <Input color={textColor} />
            <FontEditor />
            <Palette
              backgroundColor={backgroundColor}
              textColor={textColor}
              onChange={this.colorChange}
            />
            <DownloadButton href={href} />
            <SideTab />
            <BgImageSelectModal
              open={this.state.bgModalOpen}
              close={this.handleBgModal(false)}
              setImage={this.setBackgroundImage}
            />
          </div>
        </div>
      </ContentsProvider>
    )
  }
}

export default App
