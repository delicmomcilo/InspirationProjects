import { addFiles, removeFile, setFiles } from '../actions';
import { ADD_FILES, SET_FILES, REMOVE_FILE } from '../constants';

describe('modules/ui/preemption/proof/actions', () => {
  const mockFiles = [{ name: 'file1' }, { name: 'file2' }];
  it('addFiles', () => {
    expect(addFiles(mockFiles)).toEqual({
      type: ADD_FILES,
      payload: { files: mockFiles },
    });
  });
  it('addFiles', () => {
    expect(setFiles(mockFiles)).toEqual({
      type: SET_FILES,
      payload: { files: mockFiles },
    });
  });
  it('removeFile', () => {
    expect(removeFile('file1')).toEqual({
      type: REMOVE_FILE,
      payload: {
        name: 'file1',
      },
    });
  });
});
