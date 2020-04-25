import { Collection } from "../models";

enum AddActions {
  AddCollectionRequest = "ADD_COLLECTION_REQUEST",
  AddCollectionSuccess = "ADD_COLLECTION_SUCCESS",
  AddCollectionError = "ADD_COLLECTION_ERROR",
}
enum GetActions {
  CollectionRequest = "COLLECTION_REQUEST",
  CollectionSuccess = "COLLECTION_SUCCESS",
  CollectionError = "COLLECTION_ERROR",
}

export const CollectionActions = {
  AddActions,
  GetActions,
};

export type CollectionActions = typeof CollectionActions;

interface CollectionRequest {
  type: typeof CollectionActions.GetActions.CollectionRequest;
}

interface CollectionSuccess {
  type: typeof CollectionActions.GetActions.CollectionSuccess;
  payload: Collection;
}

interface CollectionError {
  type: typeof CollectionActions.GetActions.CollectionError;
  payload: string;
}
interface AddCollectionRequest {
  type: typeof CollectionActions.AddActions.AddCollectionRequest;
}
interface AddCollectionSuccess {
  type: typeof CollectionActions.AddActions.AddCollectionSuccess;
  payload: Collection;
}
interface AddCollectionError {
  type: typeof CollectionActions.AddActions.AddCollectionError;
  payload: string;
}

export type CollectionActionTypes =
  | AddCollectionRequest
  | AddCollectionSuccess
  | AddCollectionError
  | CollectionRequest
  | CollectionSuccess
  | CollectionError;
// export type InvoiceActionTypes = SendMessageAction | DeleteMessageAction
