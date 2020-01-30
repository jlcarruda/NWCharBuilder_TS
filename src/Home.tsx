import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import CharacterListContainer from './ui/character/listContainer';
import {Layout} from '@ui-kitten/components';

export default class NWCharBuilder extends Component {
  render() {
    return (
      <Layout style={style.layout}>
        <CharacterListContainer />
      </Layout>
    );
  }
}

const style = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
