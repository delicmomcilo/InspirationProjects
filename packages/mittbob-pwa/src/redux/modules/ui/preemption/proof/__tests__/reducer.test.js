import reducer, { initialState } from '../reducer';
import { SET_FILES, ADD_FILES, REMOVE_FILE } from '../constants';
import { setFiles, addFiles, removeFile } from '../actions';

describe('modules/ui/preemption/proof/reducer', () => {
  const mockFiles = [{ name: 'file1' }, { name: 'file2' }];

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it(`should handle ${SET_FILES}`, () => {
    const first = reducer(initialState, setFiles(mockFiles));
    const second = reducer(first, setFiles(mockFiles));
    expect(first).toEqual({
      ...initialState,
      files: mockFiles,
    });
    expect(second).toEqual({
      ...first,
      files: mockFiles,
    });
  });
  it(`should handle ${ADD_FILES}`, () => {

    const first = reducer(initialState, addFiles(mockFiles));
    const second = reducer(first, addFiles(mockFiles));
    expect(first).toEqual({
      ...initialState,
      files: mockFiles,
    });
    expect(second).toEqual({
      ...first,
      files: mockFiles.concat(mockFiles),
    });
  });
  it(`should handle ${REMOVE_FILE}`, () => {
    expect(
      reducer({ ...initialState, files: mockFiles }, removeFile('file1')),
    ).toEqual({
      ...initialState,
      files: [{ name: 'file2' }],
    });
  });
});
