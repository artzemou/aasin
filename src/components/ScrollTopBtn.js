import React, {Fragment, Component} from 'react'
import {KeyboardArrowUp} from '@material-ui/icons'
import styles from '@/assets/css/styles'


class ScrollTopBtn extends Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this)
  }

  scrollTo(element, to, duration) {
      if (duration <= 0) return;
      var difference = to - element.scrollTop;
      var perTick = difference / duration * 10;

      let timer = setInterval(function() {
          element.scrollTop = element.scrollTop + perTick;
          if (element.scrollTop === to) {
            clearInterval(timer);
            return
          }
          scrollTo(element, to, duration - 10);
      }, 10);
  }

  render() {
    const {visible} = this.props
    return(
      <Fragment>
        <div
          className={ visible ? "scroll-top-btn visible": "scroll-top-btn"}
          onClick={() => this.scrollTo(document.querySelector('#view-container'), 0, 500)}
          >
          <KeyboardArrowUp/>
        </div>
        <style jsx>{`
            .scroll-top-btn{
              opacity: 0;
              position: fixed;
              right: 2rem;
              bottom: 1rem;
              cursor: pointer;
              border-radius: 50%;
              height: 50px;
              width: 50px;
              border: 1px solid rgba(0,0,0,.1);
              display: flex;
              align-items: center;
              justify-content: center;
              transition: margin 0 linear;
              &.visible{
                opacity: 1;
              }
            }
        `}</style>
      </Fragment>
    )
  }
}
//              margin-left: ${width < window.innerWidth - document.querySelector('#side-bar').offsetWidth ?  document.querySelector('#side-bar').offsetWidth/2 : 0}px;

export default ScrollTopBtn;
