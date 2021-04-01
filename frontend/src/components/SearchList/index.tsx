/* eslint-disable camelcase */
import React from 'react';
import { Questions } from '../../interfaces';
import {
  SearchListContainer,
  AvatarImage,
  NameButton,
  ProfileContainer,
  ReputationContainer,
  AboutQuestion,
  FormTags,
  ResponseContainer,
  FooterDiv,
  Header,
  DatesInfo,
  InfoViews,
} from './styles';
import { timestampToDate } from '../../utils/functions';

const SearchList = ({
  answer_count,
  content_license,
  creation_date,
  is_answered,
  last_activity_date,
  link,
  owner,
  question_id,
  score,
  tags,
  title,
  view_count,
}: Questions): React.ReactElement => {
  return (
    <SearchListContainer>
      <Header>
        <NameButton to={{ pathname: owner.link }} target="_blank">
          {owner.display_name}
        </NameButton>
      </Header>
      <AvatarImage src={owner.profile_image} alt="profile_image" />
      <ProfileContainer>
        <ReputationContainer>
          <NameButton to={{ pathname: link }} target="_blank">
            <h6>{title}</h6>
          </NameButton>
        </ReputationContainer>
        <AboutQuestion>
          <ResponseContainer>
            <h6 style={{ color: is_answered ? 'green' : 'red' }}>
              Essa pergunta foi concluída? {is_answered ? 'Sim' : 'Não'}
            </h6>
            <FormTags>
              {tags.map((item) => (
                <h6 key={item}>{item}</h6>
              ))}
            </FormTags>
            <InfoViews>
              <h6>
                <b>{answer_count > 0 ? answer_count : 'Nenhuma'}</b>
                Respondidas
              </h6>
              <h6>
                <b>{score}</b>
                Pontuação
              </h6>
              <h6>
                <b>{view_count}</b>
                Visualizações
              </h6>
            </InfoViews>
            <DatesInfo>
              <h6>
                Quando foi criada:
                <b>{timestampToDate(creation_date)}</b>
              </h6>
              <h6>
                Última atualização:
                <b> {timestampToDate(last_activity_date)}</b>
              </h6>
            </DatesInfo>
          </ResponseContainer>
        </AboutQuestion>
      </ProfileContainer>
      <FooterDiv>
        <h6>Licença: {content_license}</h6>
      </FooterDiv>
    </SearchListContainer>
  );
};

export default SearchList;
