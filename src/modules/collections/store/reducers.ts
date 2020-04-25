import { CollectionActionTypes, CollectionActions } from "./actionTypes";
import { Collection } from "../models";

interface State {
  collection: Collection | undefined;
  isLoading: boolean;
  isAdding: boolean;
  error?: string;
}

export const initialState: State = {
  collection: undefined,
  isLoading: false,
  isAdding: false,
  error: undefined,
};

export const invoiceReducer = (
  state = initialState,
  action: CollectionActionTypes
) => {
  switch (action.type) {
    case CollectionActions.AddActions.AddCollectionRequest:
      return { ...state, isAdding: true, error: undefined };
    case CollectionActions.AddActions.AddCollectionSuccess:
      return {
        ...state,
        isAdding: false,
        error: undefined,
        collection: state.collection,
      };
    case CollectionActions.AddActions.AddCollectionError:
      return { ...state, isAdding: false, error: action.payload };
    case CollectionActions.GetActions.CollectionRequest:
      return { ...state, isLoading: true, error: undefined };
    case CollectionActions.GetActions.CollectionSuccess:
      return {
        ...state,
        isLoading: false,
        error: undefined,
        collection: action.payload,
      };
    case CollectionActions.GetActions.CollectionError:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
