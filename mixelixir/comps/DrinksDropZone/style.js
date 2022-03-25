import styled from 'styled-components'

export const DropZone = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
align-items:center;
background:${({bg})=>bg || '#DDD'};
width:90%;
height:40%;
border-radius:10px;
`;

export const DropZoneText = styled.div`
font-weight: 400;
font-size: 60px;
color: #FF3549;
`;