/* eslint-disable camelcase */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

type NonNullable<T> = Exclude<T, null | undefined>;

export interface QueryQuestionsArgs {
  tags: Scalars['String'];
  score?: NonNullable<Scalars['String']>;
  sort?: NonNullable<Scalars['String']>;
  limit?: NonNullable<Scalars['String']>;
}

export interface Owner {
  reputation: number;
  user_id: number;
  user_type: string;
  profile_image: string;
  display_name: string;
  link: string;
}

export interface Questions {
  tags: string[];
  owner: Owner;
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  question_id: number;
  content_license: string;
  link: string;
  title: string;
}
