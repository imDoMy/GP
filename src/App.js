import React from 'react';
import { View, ScrollView  } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';
import Business from './components/Business';
import Reviews from './components/Reviews';
import AlbumList from './components/salman/AlbumList';



const App = () => {
  return (
    <Provider store={createStore(reducers)}>

      <View style={{ flex: 1, marginBottom: 10 }}>
        <Header headerText={'Tech stack'} / >
        <AlbumList />
      </View>

    </Provider>

  );
};

export default App;
