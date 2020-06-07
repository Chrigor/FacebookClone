import styled from 'styled-components';

export const Container = styled.aside`
  display:flex;
  flex-direction:column;  
  position:relative;

  align-self: flex-end;

  width: 320px;
  padding-bottom:15px;
  background: #333;

  button {
    border:none;
    background:#ddd;
    border-radius: 50%;

    position: absolute;
    right:25px;
    bottom: 10px;
    padding: 10px;

    &:hover {
      background: #bbb;
    }
  }
`;


export const ContainerFriend = styled.header`
  display:flex;
  flex-direction:row;
  align-items:center;

  overflow-y:hidden;

  width: 100%;

  padding: 2px 6px;

  h3 {
    font-size: 16px;
    font-family:sans-serif;
    color:#B7B9BB;
  }
  
  img {
    width: 45px;
    height:42px;  
    border-radius: 22px;
    margin-right: 10px;
  }

  &:hover{
    background:#404040;
  }

`

export const ContainerMessenger = styled.section`

  display:flex;
  flex-direction:column;
  overflow-y:scroll;

  height:90vh;
  
  ul {
    list-style:none;
    padding:0;
  }
`

export const TitleMessenger = styled.h2`
  display:flex;
  flex-direction:row;

  height: 40px;

  justify-content:space-between;
  align-items:center;

  color:#929498;
  font-family:sans-serif;
  font-size:24px;

  padding: 10px 0px 0px 10px;
  
  margin:0;

  svg {
    margin-right: 12px;
  }

`
