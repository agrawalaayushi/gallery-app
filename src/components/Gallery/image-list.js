
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { requestImageList } from '../../actions/action';
import ImageCardView from '../common/image-card-view';
import { Loader } from '../common/loader-view/loader-view';

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
    
  //-----------------------------------
  // Methods
  //-----------------------------------

  init() {
     this.getImages();
  }

  getImages() {
    this.props.getImages();
  }

  //-----------------------------------
  // View
  //-----------------------------------
  getImageCard(card, index) {
    return(
      <ImageCardView
        {...this.props}
        key={index}
        photo={card}
      />
    )
  }

  getPhotosView() {
    const { imageListResponse } = this.props;
    const photos = imageListResponse.photos.photo;
    return(
      <div className= "gallery-view">
        <div className="gallery-section position-relative">
          <h2 className="content-heading">Images</h2>
          { photos.length > 0 ?
            <div className={"image-masonry-container"}>
              { photos.map((item, index) =>( this.getImageCard(item, index) )) }
            </div> :
            <div className= "data-not-available-wrp">
              <p className="data-not-available">Data not available</p>
            </div>
          }
        </div>
      </div>
    )
  }

  //-----------------------------------
  // LifeCycle
  //-----------------------------------

  componentDidMount() {
    this.init();
  }

  render() {
    const { imageListResponse } = this.props;
    return (
      <div className="image-list-view">
        { imageListResponse ? this.getPhotosView() : <Loader/> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  imageListResponse: state.reducer.get('imageListResponse')
 })

const mapDispatchToProps = dispatch => ({
  getImages: () => dispatch(requestImageList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
