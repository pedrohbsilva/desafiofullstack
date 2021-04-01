import styled from 'styled-components';

export default styled.div`
  background-image: linear-gradient(
    -90deg,
    #f5f5f5 0%,
    #999999 50%,
    #e3e3e3 100%
  );
  background-size: 400% 400%;
  animation: shimmer 0.8s infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
