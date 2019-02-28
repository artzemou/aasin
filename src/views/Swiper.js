import React, {Fragment} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as ResultsActions from '@/store/actions/results'
import * as LoadingActions from '@/store/actions/isLoading';

import SwiperComponent from '@/components/SwiperComponent'
import TinyEditor from '@/views/admin/components/TinyEditor'
import { AccessAlarm, ThreeDRotation, Refresh } from '@material-ui/icons';

class Swiper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        initDone: false,
        results: []
      }
      this.update = this.update.bind(this)
      this.updateInput = this.updateInput.bind(this)
    }

    componentDidMount() {
      console.log(this.props.history)
      this.props.loadResults()
      this.setState({initDone: true})


    }

    componentWillReceiveProps(nextProps) {
      console.log(nextProps)
      this.setState(prevState => ({
        results: [
          ...prevState.results,
          ...nextProps.results
        ]
      }))
    }

    update(e) {
      e.preventDefault();
      this.props.setIsLoading(true)
      this.props.update(this.state.results)
    }

    updateInput(index, name, content) {
      console.log(content, index, name)
      let results = [...this.state.results];
      results[index][name] = content
      this.setState({ results: results })
      console.log(this.state.results)
    }

    render() {
      const {results} = this.props
      const params = {
        noSwiping: true,
        shouldSwiperUpdate : true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next.swiper-button-white',
          prevEl: '.swiper-button-prev.swiper-button-white'
        },
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      }
      const styles = {
      root: {
        '&$disabled': {
          color: 'white',
        },
      },
      disabled: {},
    };

    return (
      this.state.initDone &&
        <Fragment>
          <header className="header-grid-layout-container">
          </header>
          <header className="header-viewer"></header>
            <SwiperComponent params={params}>
              {results.map((result, index) =>
                <div key={index}>
                  <form method="post">
                    <div className="refresh">
                      <Refresh style={styles} onClick={(e) => this.update(e)}/>
                    </div>
                    <TinyEditor index={index} name="title" updateInput={this.updateInput} content={result.title}/>
                  </form>
                </div>

              )}
            </SwiperComponent>
            <style jsx>{`
              div{
                min-height: 300px;
                background: #9966e0;
              }
              form{
                position: relative;
                .refresh{
                  position: absolute;
                  right: .5rem;
                  top:.5rem;
                  cursor: pointer;
                  color: rgba(0, 0, 0, 0.26);
                  z-index: 1;
                }

              }
            `}</style>
          </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({results: state.results});
const mapActionCreatorsToProps = (dispatch) => bindActionCreators({...ResultsActions, ...LoadingActions}, dispatch);

export default connect(mapStateToProps, mapActionCreatorsToProps)(Swiper);
