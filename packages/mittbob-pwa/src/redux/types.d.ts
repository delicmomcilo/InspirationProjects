type AnyError = Error | string | undefined;



/**
 * This type is used in saga functions as there is no guarantee that
 * a specific pattern is always associated with a specific payload.
 * See `import { AnyAction } from 'redux'` for more information.
 */
type AnyAction = {
  type: string;
  [props: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

type Reducer<State, Action> = (state: State, action: Action) => State;
