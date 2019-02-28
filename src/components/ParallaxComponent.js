import React, { Component } from 'react'
import Parallax from 'parallax-js' // Now published on NPM
import styles from '@/assets/css/styles'

export default class ParallaxComponent extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene)
  }
  componentWillUnmount() {
    this.parallax.disable()
  }
  render() {
    return (
      <ul ref={el => this.scene = el} >
        <pre className="layer" data-depth="0.20">{`
          Ici ou là
          Luciole
          Lê't `}<sup>{`( t )`}</sup>{`re
          Terrê là
          L'à taire Aï `}<sup>{`( àï )`}</sup>
        </pre>
        <pre className="layer" data-depth-x="0.80" data-depth-y="-0.80">{`
          Ici ou là
          Luciole
          Lê't `}<sup>{`( t )`}</sup>{`re
          Terrê là
          L'à taire Aï `}<sup>{`( àï )`}</sup>
        </pre>
        <pre className="layer" data-depth="1.00">{`
          Ici ou là
          Luciole
          Lê't `}<sup>{`( t )`}</sup>{`re
          Terrê là
          L'à taire Aï `}<sup>{`( àï )`}</sup>
        </pre>
        <pre className="layer" data-depth="-0.20">{`
          Ici ou là
          Luciole
          Lê't `}<sup>{`( t )`}</sup>{`re
          Terrê là
          L'à taire Aï `}<sup>{`( àï )`}</sup>
        </pre>
        <pre className="layer" data-depth-x="0.50" data-depth-y="0.80">{`
          Ici ou là
          Luciole
          Lê't `}<sup>{`( t )`}</sup>{`re
          Terrê là
          L'à taire Aï `}<sup>{`( àï )`}</sup>
        </pre>
        <pre className="layer" data-depth="0.01">{`
          Ici ou là
          Luciole
          Lê't `}<sup>{`( t )`}</sup>{`re
          Terrê là
          L'à taire Aï `}<sup>{`( àï )`}</sup>
        </pre>

        <style jsx>{`
          ul{
            height: 300px;
            vertical-align: middle;
          }
        `}</style>
      </ul>
    )
  }
}
