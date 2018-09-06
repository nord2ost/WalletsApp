import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native'
import {Metrics} from '../Themes'
import styles from './Styles/BalanceScrollStyle'
import TotalWalletBalance from './TotalWalletBalance'
export default class BalanceScroll extends Component {
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
    const total = this.props.total
    const width = Metrics.screenWidth
    //<OtherBalance/>
    return (
      <ScrollView 
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          style={styles.container}
          decelerationRate={0}
        snapToInterval={width - 5}
        snapToAlignment={"center"}
        contentInset={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}>
        <TotalWalletBalance total ={total}/>
        <TotalWalletBalance total ={total}/>
      </ScrollView>
    )
  }
}
