import styled from "styled-components";

//SL = Server List
//SN = Server Name
//CI = Channel Info
//CL = Channel List
//CD = Channel Data
//UL = User List
//UI = User Info

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 4.43rem 15rem auto 15rem;
  grid-template-rows: 2.87rem auto 3.25rem;
  grid-template-area: 
  'SL SN CI CI'
  'SL CL CD UL'
  'SL UI CD UL';
  height: 100vh;
`