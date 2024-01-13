import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Header from '../components/Header';
import Header2 from '../components/Header2';

export default function Home() {
	return (
		<Container>
			<Header></Header>
			<Header2></Header2>
		</Container>
	);
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background};
`;

