import React, { Component } from 'react'
import DownloadButton from './components/Button/DownloadButton.jsx'
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
import SideTab from './components/SideTab/SideTab'
import BgImageSelectModal from './components/modal/BgImageSelectModal/BgImageSelectModal'

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
      text: 'Sample Text',
      href: '',
      fontFamily: 'SF Pro',
      fontFamilyList: ['SF Pro', 'Times New Roman', 'Helvetica', 'Courier'],
      fontSizeList: [20, 30, 40, 50, 60, 70, 80, 90, 100, 120],
      fontSize: '40',
      lineHeight: 1.4,
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

  handleFontSize = (fontSize) => {
    this.setState({ fontSize })
  }

  handleFontFamily = (fontFamily) => {
    this.setState({ fontFamily })
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
    const {
      textColor,
      backgroundColor,
      href,
      text,
      fontFamilyList,
      fontSizeList,
      width,
      height,
    } = this.state
    return (
      <div className='App'>
        <Header />
        <div className='content'>
          <SizeForm
            width={width}
            height={height}
            onInputChange={this.handleInputChange}
          />
          <Preview {...this.state} updateCanvas={this.handleCanvasChange} />
          <Input color={textColor} onChange={this.handleInputChange} />
          <FontEditor
            fontFamilyList={fontFamilyList}
            fontSizeList={fontSizeList}
            onFontSizeChange={this.handleFontSize}
            onFontFamilyChange={this.handleFontFamily}
          />
          <Palette
            backgroundColor={backgroundColor}
            textColor={textColor}
            onChange={this.colorChange}
          />
          <DownloadButton href={href} text={text} />
          <SideTab />
          <BgImageSelectModal
            open={this.state.bgModalOpen}
            close={this.handleBgModal(false)}
            setImage={this.setBackgroundImage}
          />
        </div>
      </div>
    )
  }
}

export default App
