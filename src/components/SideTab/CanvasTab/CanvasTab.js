import React, { Component } from 'react'
import SizeForm from '../../SizeForm'

class CanvasTab extends Component {
  render() {
    return (
      <div>
        <SizeForm
          width={width}
          height={height}
          onInputChange={this.handleInputChange}
        />
      </div>
    )
  }
}

export default CanvasTab
