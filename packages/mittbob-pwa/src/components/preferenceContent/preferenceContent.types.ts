import { Configuration, Person } from "../../redux/modules/person/types";

export interface Changes extends Partial<Person> {
    communicationPreferences?: Configuration['communicationPreferences'];
  }

export interface IProps {
    updatePreferences: (changes: Changes) => void;
    preferenceChanges: Changes;
    loading: boolean;
}
  