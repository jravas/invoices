import { CollectionActions } from "./actionTypes";
import { Collection } from "../models";

/** Add Actions*/
export const addCollectionRequest = () => ({
  type: CollectionActions.AddActions.AddCollectionRequest,
});

export const addCollectionSuccess = (collection: Collection) => ({
  type: CollectionActions.AddActions.AddCollectionSuccess,
  payload: collection,
});

export const addCollectionError = () => ({
  type: CollectionActions.AddActions.AddCollectionError,
});

/** Get Actions */

export const collectionRequest = () => ({
  type: CollectionActions.GetActions.CollectionRequest,
});

export const collectionSuccess = (collection: Collection) => ({
  type: CollectionActions.GetActions.CollectionSuccess,
  payload: collection,
});

export const collectionError = (error: string) => ({
  type: CollectionActions.GetActions.CollectionError,
  payload: error,
});
