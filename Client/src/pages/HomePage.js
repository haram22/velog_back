import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Header from '../components/homePage/Header';
import Header2 from '../components/homePage/Header2';
import HomeCard from '../components/homePage/HomeCard';

export default function Home() {
	return (
		<Container>
			<Header></Header>
			<Header2></Header2>
			<HomeCard></HomeCard>
		</Container>
	);
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  align-items: center;
  background-color: ${theme.colors.background};
  padding-top: 150px;

  padding-bottom: 100px;
  box-sizing: border-box; 
`;