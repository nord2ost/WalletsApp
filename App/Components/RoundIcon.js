//
//this component renders round icon
//

import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Image } from 'react-native'
//import styles from './Styles/IconStyle'
import { Fonts, Colors, Images} from '../Themes/'

export class RoundIcon extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  static defaultProps = {
    color: Colors.lightGray,
    image: Images.BTC
   }

  render () {
    const color = this.props.color ? this.props.color : RoundIcon.defaultProps.color
    const image = this.props.image ? this.props.image : RoundIcon.defaultProps.image
    return (
      <View style={{
    height: 40,
    width:40,
    borderRadius: 40,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center' }
    }>
        <Image style={{flex:1, resizeMode:'contain', width:15}} source={image}/>
      </View>
    )
  }
}
