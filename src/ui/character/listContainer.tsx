import React from 'react';
import {AppState} from 'src/state/types';
import {connect} from 'react-redux';
import CharacterListComponent from './listComponent';
import {
  addCharacter,
  deleteCharacter,
} from '../../state/character/list/actions';
import {Props} from './types';

const mapStateToProps = (state: AppState) => {
  return {
    charactersList: state.characters.charactersList,
    character: state.characters.character,
  };
};

const mapDispatch = {
  onAddCharacter: addCharacter,
  onDeleteCharacter: deleteCharacter,
};

class CharacterListContainer extends React.Component<Props> {
  render() {
    return (
      <CharacterListComponent
        character={this.props.character}
        charactersList={this.props.charactersList}
        onAddCharacter={this.props.onAddCharacter}
        onDeleteCharacter={this.props.onDeleteCharacter}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatch,
)(CharacterListContainer);
