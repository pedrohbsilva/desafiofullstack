import styled from 'styled-components';

export const ContainerCardLoading = styled.div`
  align-items: center;
  background: #f3f3f3;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  height: 401px;
  justify-content: space-between;
  margin: 8px;
  transition: 0.5s;
  width: 90%;

  .bg-skeleton {
    filter: brightness(96%);
    height: 70px;
    width: 100%;
  }
  span {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .avatar-skeleton {
    z-index: 1;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 10px auto 10px auto;
  }

  .row-skeleton {
    height: 12px;

    &:nth-child(1) {
      border-radius: 3px 3px 0px 0px;
      height: 36px;
      width: 100%;
    }
    &:nth-child(2) {
      border-radius: 6px;
      height: 60px;
      margin: 30px 10px 10px 10px;
      width: 95%;
    }
    &:nth-child(3) {
      border-radius: 6px;
      height: 52px;
      margin: 0px 10px 80px 10px;
      width: 90%;
    }
    &:nth-child(4) {
      border-radius: 6px;
      height: 48px;
      margin: 0px 10px 0 10px;
      width: 40%;
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 311px;
    .row-skeleton {
      &:nth-child(1) {
        width: 311px;
      }
    }
  }
`;
