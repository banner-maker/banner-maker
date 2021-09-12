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
import { ContentsProvider } from './contexts/contents'
import { getRandomImageUrl } from './common/Utils.js'

class App extends Component {
  constructor(props) {
    super(props)
    const initColor = getRandomHexColor()

    this.state = {
      pickerType: PICKER_TYPE.BACKGROUND,
      width: '700',
      height: '350',
      backgroundType: 'color',
      backgroundImage: getRandomImageUrl(700, 350),
      backgroundColor: initColor,
      textColor: getContrastYIQ(initColor.slice(-6)),
      href: '',
      bgModalOpen: false,
    }
  }

  colorChange = ({ hex, pickerType }) => {
    let params = {
      [`${pickerType}Color`]: hex,
      backgroundType: 'color',
    }
    if (pickerType === PICKER_TYPE.BACKGROUND) {
      params.backgroundImage = null
    }
    this.setState(params)
  }

  setBackground = (width, height) => {
    this.setState({
      backgroundType: 'image',
      backgroundImage: getRandomImageUrl(width, height),
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

  // handleBgModal = (open) => () => {
  //   this.setState({ bgModalOpen: open })
  // }
  //
  // setBackgroundImage = (image) => {
  //   this.setState({
  //     backgroundType: 'image',
  //     backgroundImage: image,
  //     bgModalOpen: false,
  //   })
  // }

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
              width={width}
              height={height}
              handleImage={() => this.setBackground(width, height)}
            />
            <DownloadButton href={href} />
            <SideTab />
          </div>
        </div>
      </ContentsProvider>
    )
  }
}

export default App
