import { gql } from '@apollo/client';

export const GET_QUESTIONS_FROM_THE_STACKOVERFLOW = gql`
  query Questions(
    $tags: String!
    $score: String
    $sort: String
    $limit: String
  ) {
    getQuestions(tags: $tags, score: $score, sort: $sort, limit: $limit) {
      question_id
      is_answered
      creation_date
      last_activity_date
      view_count
      answer_count
      score
      owner {
        reputation
        user_id
        user_type
        profile_image
        display_name
        link
      }
      content_license
      tags
      title
      link
    }
  }
`;
