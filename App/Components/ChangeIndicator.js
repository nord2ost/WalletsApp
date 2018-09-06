import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/ChangeIndicatorStyle'

export class ChangeIndicator extends Component {
  // // Prop type warnings
   static propTypes = {
    changeString: PropTypes.string.isRequired,
    hasBlob: PropTypes.bool,
   }
  //
  // // Defaults for props
  static defaultProps = {
    hasBlob: false
   }

  //function to determine how to display change indicator 
   formatChangeForDisplay = (str, hasBlob) =>{
    const changeNumber = Number(str)
    //format change display
      if (changeNumber < 0 && !hasBlob){
        //if negative and not in blob 
        return <View> <Text style={styles.negativeChange}>{str}%</Text></View>
      }else if (changeNumber < 0 && hasBlob) {
        //if negative and in blob
        return <View style={styles.blobNegative}> <Text style={styles.changeInBlob}>{str}%</Text></View>
      }else if (changeNumber >= 0 && !hasBlob) {
         //if positive and not in blob
        return <View> <Text style={styles.positiveChange}>+{str}%</Text></View>
      } else if (changeNumber >=0 && hasBlob){
        //if positive and in blob
        return <View style={styles.blobPositive}> <Text style={styles.changeInBlob}>+{str}%</Text></View>
      }

   }

  render () {

    const changeString = this.props.changeString
    const hasBlob = this.props.hasBlob ? this.props.hasBlob : ChangeIndicator.defaultProps.hasBlob
    const changeToBeDisplayed = this.formatChangeForDisplay(changeString, hasBlob)
    
    
    return changeToBeDisplayed
  }
}
