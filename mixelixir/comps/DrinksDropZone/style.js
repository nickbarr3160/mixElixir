import styled from 'styled-components'

export const DropZone = styled.div`
display:flex;
justify-content:center;
align-items:center;
background:${({bg})=>bg || '#DDD'};
width:90%;
height:40%;
border: 6px dashed #F39C6B;
border-radius:10px;
`;

export const DropZoneText = styled.div`
font-weight: 400;
font-size: 28px;
color: #FF7259;
`;