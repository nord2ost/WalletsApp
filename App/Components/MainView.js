//this component is composed of all child components to be displayed

import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/MainViewStyle'

import FeedScroll from './FeedScroll'
import BalanceScroll from './BalanceScroll'

export class MainView extends Component {
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
//<BalanceScroll/>
    const feed = this.props.balance
    const total = this.props.total
    return (
      <View style={styles.container}>
      <View style={{flex:.4}}>
        <BalanceScroll total = {total}/>
        </View>
        <View style={{flex:.6}}>
        <FeedScroll feed ={feed}/>
         </View>
      </View>
    )
  }
}
