import React from 'react';
import './SquareLoading.scss';
import { primary } from '@/libs/theme';

interface Props {
  columnSize?: number;
}

export const LoadingIcon: React.FC<Props> = () => {
  return (
    <div className="loading-icon">
      <div className="loading-peace" style={{ backgroundColor: primary[500] }}></div>
      <div className="loading-peace" style={{ backgroundColor: primary[500] }}></div>
      <div className="loading-peace" style={{ backgroundColor: primary[500] }}></div>
      <div className="loading-peace" style={{ backgroundColor: primary[500] }}></div>
      <div className="loading-peace" style={{ backgroundColor: primary[500] }}></div>
      <div className="loading-peace" style={{ backgroundColor: primary[500] }}></div>
      <div className="loading-peace" style={{ backgroundColor: primary[500] }}></div>
      <div className="loading-peace" style={{ backgroundColor: primary[500] }}></div>
      <div className="loading-peace" style={{ backgroundColor: primary[500] }}></div>
    </div>
  );
};

export const SquareLoading: React.FC<Props> = () => {
  return (
    <div className="loading">
      <LoadingIcon />
      Loading
    </div>
  );
};
