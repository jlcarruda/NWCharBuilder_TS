import React from 'react';
import {FlatList, Button, StyleSheet} from 'react-native';
import {Props} from './types';

import CharacterListItemComponent from './listItemComponent';

const character = {
  id: '123',
  name: 'Donnar',
  race: {
    name: 'Elf',
  },
  abilities: {
    strength: 10,
  },
  getId: () => {
    return '123';
  },
  getAttribute: () => {
    return 10;
  },
};

class CharacterListComponent extends React.Component<Props> {
  render() {
    const {onAddCharacter, charactersList} = this.props;
    return (
      <>
        <FlatList
          style={styles.container}
          extraData={charactersList}
          data={charactersList}
          renderItem={({item}) => (
            <CharacterListItemComponent title={item.name} />
          )}
        />
        <Button
          title="Add Character"
          onPress={() => {
            onAddCharacter(character);
          }}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default CharacterListComponent;
