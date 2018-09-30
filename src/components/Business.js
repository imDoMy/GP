import React, { Component } from 'react';
import {
   Text,
    TouchableWithoutFeedback,
     View,
      LayoutAnimation,
      UIManager,
      Image,
      TextInput,
      ScrollView
     } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Button } from './common';
import * as actions from '../actions';

class Business extends Component {

render() {
  return (
    <ScrollView>
    <Card>
    <View
    style={{ borderBottomWidth: 1,
      padding: 5,
      // marginTop: 2,
      // backgroundColor: '#E0F8F8',

      backgroundColor: '#E0F8F8',
      justifyContent: 'center',
      flexDirection: 'row',
      borderColor: '#ddd',
      postion: 'relative' }} >
         <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg' }} />
      </View>

      <View
      style={{ borderBottomWidth: 1,
        padding: 5,
        // marginTop: 2,
        // backgroundColor: '#E0F8F8',

        backgroundColor: '#E0F8F8',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: '#ddd',
        postion: 'relative' }} >
      <Image style={{ width: 100, height: 20, paddingLeft: 5 }} source={{ uri: 'https://emdoesbookreviews.files.wordpress.com/2014/12/five-stars.png' }} />
      </View>

      <CardSection>
<Text> Description: </Text>
<View style={{ paddingTop: 10, paddingBottom: 10,  paddingLeft: 5 }}>

  <Text style={{ width: 250 }}> elrigheiruhveilruuil
  kfjlrflrjk
  elfkhlehflejkjrnjerkngekjrngkjen kejkejhrkefeefefefefefef efefe elrigheiruhvei
  lruuil
  kfjlrflrjk
  elfkhlehflejkjrnjerkngekjrngkjen kejkejhrkefeefefefefefef efefe
  </Text>
  </View>
      </CardSection>

      <CardSection>
<Text> Contact information: </Text>
      </CardSection>

      <CardSection >
      <View style={{ marginTop: 10, marginBottom: 10 }}>
 <Text > write review: </Text>
 <View style={{ paddingTop: 5 }}>
 <TextInput
    multiline={true}
    numberOfLines = {4}
    placeHolder='Message'
    backgroundColor='white'
    style={{ height: 100, width: 350 }}
/>
</View>
 </View>

      </CardSection>

      <CardSection>
      <Button>
 <Text> press here to see all the Reviews </Text>
      </Button>
      </CardSection>

    </Card>
    <View style={{ marginBottom: 100 }} />

   </ScrollView>

  );
}
}

// const mapStateToProps = (state) => {
//   return {
//     selectedLibraryId: state.selectedLibraryId,
//    };
export default (Business);
