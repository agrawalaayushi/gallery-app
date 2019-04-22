import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { IMG_URL } from '../../constants/misc';
import '../../styles/common.css';

class ImageCardView extends Component {

    onSelectImage(imageId){
      const { history } = this.props;
    //  history.push(`/${imageId}`);
    }

    render() {
      const { photo } = this.props;
      return (
        <div className="masonry-pattern">
          <img className="image" src={`${IMG_URL}/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="Image" onClick={this.onSelectImage(photo.id)}/>
        </div>
      );
    }
  }
  
  
  export default connect(null)(ImageCardView);
  