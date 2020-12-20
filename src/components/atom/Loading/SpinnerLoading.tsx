import React from 'react';
import './SpinnerLoading.scss';

interface Props {
  side?: number;
  color?: string;
}

export const SpinnerLoading: React.FC<Props> = ({ side, color }) => {
  return (
    <>
      <div className="spinner" style={{ width: side || 32 + 'px', height: side || 32 + 'px' }}>
        <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" className="icon">
          <circle
            className="length"
            fill="none"
            stroke={color || '#fff'}
            strokeWidth="8"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="28"
          />
        </svg>
      </div>
    </>
  );
};
