import styled from 'styled-components';

export const MainContext = styled.div`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 1.8rem;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 95px;
`;

export const SubContext = styled.div`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 1.4rem;
  line-height: 30px;
  margin-top: 32px;
  margin-left: 300px;
  margin-bottom: 1rem;
`;

export const ExplainContext = styled.div`
  font-family: 'EliceDigitalBaeum';
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin-bottom: ${(props) => `${props.bottom}rem`};
  margin-left: ${(props) => `${props.left}rem`};
`;

export const MainTitle = styled.h1`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 1.8rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.4rem;
  font-family: 'EliceDigitalBaeum_Bold';
  color: ${(props) => (props.color == 'purple' ? '#3d2c8d' : '#e64980')};
`;

// HighLight
export const HighLightPurple = styled.span`
  color: ${({ theme }) => theme.color.mainPurple};
`;

export const HighLightPink = styled.span`
  color: ${({ theme }) => theme.color.mainPink};
`;

export const HighLightExplain = styled.span`
  font-family: EliceDigitalBaeum_Bold;
  color: ${({ theme }) => theme.color.mainPink};
  font-weight: 900;
`;

export const TextInput = styled.input`
  min-height: 20px;
  width: 700px;
  margin: 0.5rem;
  padding: 0 1rem;
  border: none;
  border-bottom: 2px solid #ccc;
  cursor: text;
  font-size: ${(props) => `${props.size}rem`};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.mainPurple};
  }
  &:focus::-webkit-input-placeholder {
    color: #748ffc;
  }
`;

// container
export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
