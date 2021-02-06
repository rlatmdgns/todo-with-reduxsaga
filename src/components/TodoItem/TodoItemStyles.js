import styled from 'styled-components';

export const Label = styled.label`
  color:${props => props.checked && `#ccc`};
  text-decoration:${props => props.checked && `line-through`}
`