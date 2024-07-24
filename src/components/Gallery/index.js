// Write your code here.
import './index.css'
import {Component} from 'react'

import ThumbnailItem from '../ThumbnailItem'

class Gallery extends Component {
  state = {
    selectedImageId: 0,
  }

  updateSelectedImageId = id => {
    this.setState({selectedImageId: id})
  }

  renderSelectedImage = () => {
    const {photosData} = this.props
    const {selectedImageId} = this.state
    const {imageUrl, imageAltText} = photosData[selectedImageId]
    return <img src={imageUrl} className="image" alt={imageAltText} />
  }

  render() {
    const {photosData} = this.props
    const {selectedImageId} = this.state
    return (
      <div className="app-container">
        <div className="container">{this.renderSelectedImage()}</div>
        <ThumbnailItem
          photosData={photosData}
          selectedImageId={selectedImageId}
          onClickUpdateId={this.updateSelectedImageId}
        />
      </div>
    )
  }
}

export default Gallery
