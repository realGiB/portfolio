import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 5;
  top: 1.6rem;
  right: 1.8rem;
  display: none;
  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: absolute;

  @media (max-width: 960px) {
    display: block;
  }
`;

type BarProps = {
  top?: boolean;
  sidebar?: boolean;
  mid?: boolean;
  bottom?: boolean;
};

export const Bar = styled.div<BarProps>`
  width: 1.6rem;
  height: 0.15rem;
  margin-bottom: 0.3rem;
  background-color: #fff;
  transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91), opacity 500ms,
    box-shadow 250ms, background-color 500ms;

  @media (max-width: 600px) {
    width: 1.6rem;
  }

  ${({ top, sidebar }) =>
    top &&
    sidebar &&
    `
    transform: translateY(8px) rotate(-135deg);
    
  `}

  ${({ mid, sidebar }) =>
    mid &&
    sidebar &&
    `
    transform: scale(0);
    `}

  ${({ bottom, sidebar }) =>
    bottom &&
    sidebar &&
    `
      background-color: #fff;
      transform: translateY(-6px) rotate(-45deg);
  `}
`;
