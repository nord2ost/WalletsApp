import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/FeedHeaderStyle'
import {Images, Colors} from '../Themes'
import Icon from 'react-native-vector-icons/Entypo'

export default class FeedHeader extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <View style = {styles.leftContainer}>
            <Text style={styles.text}>Sorted by higher %</Text>
        </View>
        <View style={styles.rightContainer}>
            <Text style={styles.text}>24h</Text>
            <Icon name = 'chevron-down' size={15} color={Colors.lightGray} />
        </View>
    </View>
    )
  }
}
