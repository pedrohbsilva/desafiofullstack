import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';
import { FormHandles } from '@unform/core';
import { GET_QUESTIONS_FROM_THE_STACKOVERFLOW } from '../../queries';
import {
  Container,
  FiltersWrapper,
  InputsDiv,
  SearchTitle,
  SearchDiv,
  CardsQuestions,
  ContainerInputs,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Questions, QueryProps } from '../../interfaces';
import SearchList from '../../components/SearchList';
import { sortInfo } from '../../utils/constants';
import { isNumeric } from '../../utils/functions';
import CardLoading from '../../components/Shimmer/CardLoading';

const Home = (): React.ReactElement => {
  const formRef = useRef<FormHandles>(null);
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [sort, setSort] = useState('');
  const [getQuestions, { data, refetch }] = useLazyQuery(
    GET_QUESTIONS_FROM_THE_STACKOVERFLOW,
  );
  const [showLoading, setShowLoading] = useState(false);

  const handleSearch = useCallback(
    async (info: QueryProps) => {
      setShowLoading(true);

      const variables = {
        limit: isNumeric(info.limit!) ? info.limit : '',
        sort,
        tags: info.tags,
        score: isNumeric(info.score!) ? info.score : '',
      };
      try {
        if (!data) {
          getQuestions({
            variables,
          });
        } else if (refetch !== undefined) {
          await refetch({
            variables,
          });
        }
        if (data) {
          getQuestions({
            variables,
          });
        }
      } catch (err) {
        console.log(err);
      }
      if (isNumeric(info.limit!) === false && info.limit! !== '') {
        formRef.current?.setFieldError('limit', 'Não pode inserir letras');
      } else {
        formRef.current?.setFieldError('limit', '');
      }
      if (isNumeric(info.score!) === false && info.score! !== '') {
        formRef.current?.setFieldError('score', 'Não pode inserir letras');
      } else {
        formRef.current?.setFieldError('score', '');
      }
      formRef.current?.reset();
      setShowLoading(false);
    },
    [getQuestions, data, refetch, sort],
  );

  useEffect(() => {
    const load = (): void => {
      setShowLoading(true);
      if (data === undefined) {
        setShowLoading(false);
        return;
      }
      setQuestions(data.getQuestions);
      setShowLoading(false);
    };
    load();
  }, [data]);

  return (
    <Container>
      <FiltersWrapper ref={formRef} onSubmit={handleSearch}>
        <SearchTitle>Buscar na API</SearchTitle>
        <InputsDiv>
          <ContainerInputs>
            <h6>Tags</h6>
            <Input name="tags" type="text" placeholder="" />
          </ContainerInputs>
          <ContainerInputs>
            <h6>Limit</h6>
            <Input name="limit" type="text" placeholder="" />
          </ContainerInputs>
          <ContainerInputs>
            <h6>Score</h6>
            <Input name="score" type="text" placeholder="" />
          </ContainerInputs>
          <ContainerInputs>
            <h6>Sort</h6>
            <select
              name="sort"
              id={sort}
              onChange={(e) => setSort(e.target.value)}
              style={{
                height: 36,
                marginTop: 4,
                marginBottom: 4,
                width: '100%',
              }}
            >
              <option value="">Não selecionado</option>

              {sortInfo.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </ContainerInputs>
        </InputsDiv>
        <SearchDiv>
          <Button disabled={showLoading} type="submit">
            {showLoading ? 'Carregando...' : 'Buscar'}
          </Button>
        </SearchDiv>
      </FiltersWrapper>
      {showLoading ? (
        <CardsQuestions>
          <CardLoading />
        </CardsQuestions>
      ) : (
        <CardsQuestions>
          {questions.map((item) => {
            return (
              <SearchList
                key={item.question_id}
                question_id={item.question_id}
                answer_count={item.answer_count}
                content_license={item.content_license}
                creation_date={item.creation_date}
                is_answered={item.is_answered}
                last_activity_date={item.last_activity_date}
                link={item.link}
                owner={item.owner}
                score={item.score}
                tags={item.tags}
                title={item.title}
                view_count={item.view_count}
              />
            );
          })}
        </CardsQuestions>
      )}
    </Container>
  );
};

export default Home;
