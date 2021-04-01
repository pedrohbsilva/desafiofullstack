import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchListContainer = styled.div`
  border: 1px solid #3f51b5;
  border-radius: 4px;
  margin: 8px;
  height: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 65%;

  @media only screen and (max-width: 1024px) {
    width: 85%;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #cccccc;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ReputationContainer = styled.div`
  background: #f3f3f3;
  border-radius: 8px;
  padding: 8px;
  width: 95%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AvatarImage = styled.img`
  width: 100px;
  border-radius: 50%;
`;

export const NameButton = styled(Link)`
  color: #333333;
  font-family: 'Ubuntu';
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    opacity: 0.5;
  }
`;

export const AboutQuestion = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const FormTags = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  h6 {
    border-radius: 8px;
    background: #3f51b5;
    color: white;
    font-family: 'Ubuntu';
    font-size: 12px;
    margin: 8px;
    padding: 10px;
    transition: 0.5s;

    &:hover {
      opacity: 0.5;
    }
  }
  @media only screen and (max-width: 1024px) {
    h6 {
      margin: 2px;
    }
  }
`;

export const ResponseContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h6 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1024px) {
    h6 {
      font-size: 10px;
    }
  }
`;

export const FooterDiv = styled.footer`
  height: 50px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #cccccc;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  h6 {
    color: #333333;
    font-family: 'Ubuntu';
  }
`;

export const DatesInfo = styled.div`
  width: 100%;
  display: flex;
  padding: 8px;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  h6 {
    flex-direction: row;
    font-size: 12px;
    font-family: 'Ubuntu';
    b {
      margin-left: 4px;
    }
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: row;

    h6 {
      font-size: 8px;
    }
  }
`;

export const InfoViews = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  padding: 10px;
  h6 {
    width: 30%;
  }
`;
