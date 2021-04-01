import api from '../services/api';
import { QueryQuestionsArgs, Questions } from '../interfaces';

const resolvers = {
  Query: {
    async getQuestions(
      root: any,
      args: QueryQuestionsArgs,
    ): Promise<Questions[]> {
      const { tags, limit = '1', score = '0', sort } = args;
      const params = {
        min: score,
        tagged: `javascript;${tags}`,
        pagesize: limit,
        sort,
      };
      const response = await api.get('/questions?&site=stackoverflow', {
        params,
      });
      function VerifyNumberScore(question: Questions) {
        return question.score > Number(score);
      }

      const filtedData: Questions[] = response.data.items.filter(
        VerifyNumberScore,
      );
      return filtedData;
    },
  },
};

export default resolvers;
