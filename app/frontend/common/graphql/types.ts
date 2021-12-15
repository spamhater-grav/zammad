export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded date */
  ISO8601Date: any;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
  /** Represents untyped JSON */
  JSON: any;
};

/** Autogenerated return type of ConfigUpdated */
export type ConfigUpdatedPayload = {
  __typename?: 'ConfigUpdatedPayload';
  /** Updated setting */
  setting?: Maybe<KeyComplexValue>;
};

/** Key/value type with complex (JSON) values. */
export type KeyComplexValue = {
  __typename?: 'KeyComplexValue';
  key: Scalars['String'];
  value?: Maybe<Scalars['JSON']>;
};

/** Locales available in the system */
export type Locale = Node & {
  __typename?: 'Locale';
  active: Scalars['Boolean'];
  alias?: Maybe<Scalars['String']>;
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdBy: User;
  dir: Scalars['String'];
  id: Scalars['ID'];
  locale: Scalars['String'];
  name: Scalars['String'];
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedBy: User;
};

/** Autogenerated return type of Login */
export type LoginPayload = {
  __typename?: 'LoginPayload';
  /** The current session */
  sessionId: Scalars['String'];
};

/** Autogenerated return type of Logout */
export type LogoutPayload = {
  __typename?: 'LogoutPayload';
  /** Was the logout successful? */
  success: Scalars['Boolean'];
};

/** All available mutations. */
export type Mutations = {
  __typename?: 'Mutations';
  /** Performs a user login to create a session */
  login?: Maybe<LoginPayload>;
  /** End the current session */
  logout?: Maybe<LogoutPayload>;
};


/** All available mutations. */
export type MutationsLoginArgs = {
  fingerprint: Scalars['String'];
  login: Scalars['String'];
  password: Scalars['String'];
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID'];
};

/** Data of one object attribute value of another object */
export type ObjectAttributeValue = {
  __typename?: 'ObjectAttributeValue';
  /** The object attribute record */
  attribute: ObjectManagerAttribute;
  /** The value of the current object's object attribute */
  value?: Maybe<Scalars['String']>;
};

/** Custom object fields (only editable & active) */
export type ObjectAttributeValueInterface = {
  objectAttributeValues: Array<ObjectAttributeValue>;
};

/** An object manager attribute record */
export type ObjectManagerAttribute = Node & {
  __typename?: 'ObjectManagerAttribute';
  active: Scalars['Boolean'];
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdBy: User;
  dataOption?: Maybe<Scalars['JSON']>;
  dataType: Scalars['String'];
  display: Scalars['String'];
  editable: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  position: Scalars['Int'];
  screens?: Maybe<Scalars['JSON']>;
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedBy: User;
};

/** Organizations that users can belong to */
export type Organization = Node & ObjectAttributeValueInterface & {
  __typename?: 'Organization';
  active: Scalars['Boolean'];
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdBy: User;
  domain?: Maybe<Scalars['String']>;
  domainAssignment: Scalars['Boolean'];
  id: Scalars['ID'];
  members: UserConnection;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  objectAttributeValues: Array<ObjectAttributeValue>;
  shared: Scalars['Boolean'];
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedBy: User;
};


/** Organizations that users can belong to */
export type OrganizationMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Permissions for the current user */
export type Permission = {
  __typename?: 'Permission';
  ids: Array<Scalars['Int']>;
  names: Array<Scalars['String']>;
};

/** All available queries */
export type Queries = {
  __typename?: 'Queries';
  /** Configuration required for front end operation (more results returned for authenticated users) */
  applicationConfig: Array<KeyComplexValue>;
  /** Information about the authenticated user */
  currentUser: User;
  /** Locales available in the system */
  locales: Array<Locale>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Fetches a list of objects given a list of IDs. */
  nodes: Array<Maybe<Node>>;
  /** The sessionId of the currently authenticated user. */
  sessionId: Scalars['String'];
  /** Translations for a given locale */
  translations?: Maybe<TranslationsPayload>;
};


/** All available queries */
export type QueriesNodeArgs = {
  id: Scalars['ID'];
};


/** All available queries */
export type QueriesNodesArgs = {
  ids: Array<Scalars['ID']>;
};


/** All available queries */
export type QueriesTranslationsArgs = {
  cacheKey?: InputMaybe<Scalars['String']>;
  locale: Scalars['String'];
};

/** All available subscriptions */
export type Subscriptions = {
  __typename?: 'Subscriptions';
  /** Updates to configuration settings */
  configUpdated: ConfigUpdatedPayload;
};

/** Autogenerated return type of Translations */
export type TranslationsPayload = {
  __typename?: 'TranslationsPayload';
  /** Cache key that the front end should use to cache the new translation data. */
  cacheKey?: Maybe<Scalars['String']>;
  /** If this is true, then the front end's translation cache is still valid and should be used, cacheKey and translation will not be returned. */
  isCacheStillValid: Scalars['Boolean'];
  /** The actual translation data as Hash where keys are source and values target strings (excluding untranslated strings). */
  translations?: Maybe<Scalars['JSON']>;
};

/** Users (admins, agents and customers) */
export type User = Node & ObjectAttributeValueInterface & {
  __typename?: 'User';
  active: Scalars['Boolean'];
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdById: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  imageSource?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['ISO8601DateTime']>;
  lastname?: Maybe<Scalars['String']>;
  login: Scalars['String'];
  loginFailed: Scalars['Int'];
  mobile?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  objectAttributeValues: Array<ObjectAttributeValue>;
  organization?: Maybe<Organization>;
  outOfOffice: Scalars['Boolean'];
  outOfOfficeEndAt?: Maybe<Scalars['ISO8601Date']>;
  outOfOfficeReplacementId?: Maybe<Scalars['Int']>;
  outOfOfficeStartAt?: Maybe<Scalars['ISO8601Date']>;
  password?: Maybe<Scalars['String']>;
  permissions?: Maybe<Permission>;
  phone?: Maybe<Scalars['String']>;
  preferences?: Maybe<Scalars['JSON']>;
  source?: Maybe<Scalars['String']>;
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedById: Scalars['Int'];
  verified: Scalars['Boolean'];
  vip?: Maybe<Scalars['Boolean']>;
  web?: Maybe<Scalars['String']>;
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

export type ApplicationConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type ApplicationConfigQuery = { __typename?: 'Queries', applicationConfig: Array<{ __typename?: 'KeyComplexValue', key: string, value?: any | null | undefined }> };

export type ConfigUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ConfigUpdatedSubscription = { __typename?: 'Subscriptions', configUpdated: { __typename?: 'ConfigUpdatedPayload', setting?: { __typename?: 'KeyComplexValue', key: string, value?: any | null | undefined } | null | undefined } };

export type ObjectAttributeValuesFragment = { __typename?: 'ObjectAttributeValue', value?: string | null | undefined, attribute: { __typename?: 'ObjectManagerAttribute', name: string, display: string, dataType: string, dataOption?: any | null | undefined, screens?: any | null | undefined, editable: boolean, active: boolean } };

export type LoginMutationVariables = Exact<{
  login: Scalars['String'];
  password: Scalars['String'];
  fingerprint: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutations', login?: { __typename?: 'LoginPayload', sessionId: string } | null | undefined };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutations', logout?: { __typename?: 'LogoutPayload', success: boolean } | null | undefined };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Queries', currentUser: { __typename?: 'User', firstname?: string | null | undefined, lastname?: string | null | undefined, preferences?: any | null | undefined, objectAttributeValues: Array<{ __typename?: 'ObjectAttributeValue', value?: string | null | undefined, attribute: { __typename?: 'ObjectManagerAttribute', name: string, display: string, dataType: string, dataOption?: any | null | undefined, screens?: any | null | undefined, editable: boolean, active: boolean } }>, organization?: { __typename?: 'Organization', name: string, objectAttributeValues: Array<{ __typename?: 'ObjectAttributeValue', value?: string | null | undefined, attribute: { __typename?: 'ObjectManagerAttribute', name: string, display: string, dataType: string, dataOption?: any | null | undefined, screens?: any | null | undefined, editable: boolean, active: boolean } }> } | null | undefined, permissions?: { __typename?: 'Permission', names: Array<string> } | null | undefined } };

export type LocalesQueryVariables = Exact<{ [key: string]: never; }>;


export type LocalesQuery = { __typename?: 'Queries', locales: Array<{ __typename?: 'Locale', locale: string, alias?: string | null | undefined, name: string, dir: string, active: boolean }> };

export type SessionIdQueryVariables = Exact<{ [key: string]: never; }>;


export type SessionIdQuery = { __typename?: 'Queries', sessionId: string };

export type TranslationsQueryVariables = Exact<{
  locale: Scalars['String'];
  cacheKey?: InputMaybe<Scalars['String']>;
}>;


export type TranslationsQuery = { __typename?: 'Queries', translations?: { __typename?: 'TranslationsPayload', isCacheStillValid: boolean, cacheKey?: string | null | undefined, translations?: any | null | undefined } | null | undefined };
