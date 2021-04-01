import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

export const FiltersWrapper = styled(Form)`
  margin: 10px;
  padding: 10px;
  background: #f3f3f3;
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  input {
    width: 20%;
    font-family: 'Ubuntu';
  }
  @media only screen and (max-width: 1024px) {
    margin: 10px;
    padding: 10px;
    width: 95%;
    border-radius: 8px;
  }
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  div {
    margin: 4px;
    h6 {
      margin: 4px;
      color: #aaa;
      font-family: 'Ubuntu';
    }
  }
  padding: 14px 28px 14px 28px;
  @media only screen and (max-width: 1024px) {
    padding: 8px;
    flex-direction: column;
  }
`;

export const SearchTitle = styled.h3`
  color: grey;
  width: 100%;
  text-align: left;
  padding-left: 28px;
  font-family: 'Ubuntu';
  @media only screen and (max-width: 1024px) {
    padding-left: 10px;
    text-align: center;
  }
`;

export const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 28px;
  @media only screen and (max-width: 1024px) {
    padding-right: 10px;
  }
`;

export const CardsQuestions = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  justify-items: center;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  justify-items: center;
  width: 100%;
  text-align: left;
  h6 {
    width: 100%;
    text-align: left;
  }
`;
