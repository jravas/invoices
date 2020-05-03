export interface UserAuthData {
  email: string;
  password: string;
}

interface UserCollections {
  id: string;
  name: string;
}

export interface UserProfile {
  id: string;
  email: string;
  collections?: UserCollections[];
}

export interface UserState {
  isLoading: boolean;
  userData?: UserProfile;
  error?: string;
}
