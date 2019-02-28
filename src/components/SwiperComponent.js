import React from 'react';
import Swiper from 'react-id-swiper/lib/custom';
import styles from '@/assets/css/styles'

class SwiperComponent extends React.Component {

  render() {
    const {params} = this.props
    console.log(params)
    return(
      <Swiper {...params}>
        {this.props.children}
      </Swiper>

    )
  }
}

export default SwiperComponent;
