import CharacterInterface from '../../domain/character';
import {
  addCharacter,
  deleteCharacter,
} from '../../state/character/list/actions';

export type mapStateToProps = () => {
  charactersList: CharacterInterface[];
  character: CharacterInterface;
};

export type dispatchProps = {
  onAddCharacter: typeof addCharacter;
  onDeleteCharacter: typeof deleteCharacter;
};

export interface Props {
  charactersList: CharacterInterface[];
  character: CharacterInterface;
  onAddCharacter: Function;
  onDeleteCharacter: Function;
}
