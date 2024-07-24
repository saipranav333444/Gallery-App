import './index.css'

const ThumbnailItem = props => {
  const {photosData, selectedImageId, onClickUpdateId} = props

  return (
    <div className="thumbnail-container">
      <h1 className="heading">Nature Photography</h1>
      <p className="description">Nature Photography by Rahul</p>
      <ul className="thumbnails-list-container">
        {photosData.map(eachImage => {
          const {id} = eachImage

          const buttonName =
            id === selectedImageId ? 'selected-list-item' : 'list-item'

          console.log(buttonName)
          const onClickThumbnail = () => {
            onClickUpdateId(id)
          }
          return (
            <li className={buttonName} onClick={onClickThumbnail}>
              <img
                src={eachImage.thumbnailUrl}
                alt={eachImage.thumbnailAltText}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ThumbnailItem
