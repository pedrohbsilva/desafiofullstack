import React from 'react';
import { ContainerCardLoading } from './styles';
import Skeleton from '../../Skeleton/styles';

const CardLoading = (): React.ReactElement => {
  return (
    <ContainerCardLoading>
      <span>
        <Skeleton className="row-skeleton" />
        <Skeleton className="avatar-skeleton" />
        <Skeleton className="row-skeleton" />
        <Skeleton className="row-skeleton" />
        <Skeleton className="row-skeleton" />
      </span>
    </ContainerCardLoading>
  );
};

export default CardLoading;
