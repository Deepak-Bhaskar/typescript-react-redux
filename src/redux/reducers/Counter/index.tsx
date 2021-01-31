const INCREAMENT = 'INCREAMENT';
const DECREAMENT = 'DECREAMENT';

export interface IntialState {
  count: number;
}

export interface Counter {
  type: string;
}

const initialState: IntialState = {
  count: 0
};

interface IncreamentAction {
  type: typeof INCREAMENT;
}

interface DecreamentAction {
  type: typeof DECREAMENT;
}

export type CounterActionTypes = IncreamentAction | DecreamentAction;

export default function reducer(state = initialState, action: CounterActionTypes) {
  switch (action.type) {
    case INCREAMENT: {
      return { ...state, count: state.count + 1 };
    }
    case DECREAMENT: {
      return { ...state, count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
}
