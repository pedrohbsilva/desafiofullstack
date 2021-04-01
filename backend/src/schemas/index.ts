import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Owner {
    reputation: Int
    user_id: Int
    user_type: String
    profile_image: String
    display_name: String
    link: String
  }

  type Question {
    question_id: Int
    is_answered: Boolean
    creation_date: String
    last_activity_date: String
    view_count: Int
    answer_count: Int
    score: Int
    content_license: String
    tags: [String]
    title: String
    link: String
    owner: Owner
  }

  type Query {
    getQuestions(
      limit: String
      score: String
      sort: String
      tags: String!
    ): [Question]
  }
`;

export default typeDefs;
