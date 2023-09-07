import styled from 'styled-components';

export const Button = styled.button`
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  background-color: #e89b00;
  cursor: pointer;

  &:hover {
    background-color: #bb7900;
  }

  &:focus {
    outline-color: #bb7900;
  }
`;
