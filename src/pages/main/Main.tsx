import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { VscGithub, VscGithubAlt } from 'react-icons/vsc';
import { RouteComponentProps, navigate } from '@reach/router';
import { PrimaryButton, SecondaryButton } from '../../components/Button';
import { Input } from '../../components/Input';
import { Title } from '../../components/Header';

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;

  * {
    margin: 10px 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  > button {
    flex-grow: 1;
    flex-basis: 0;
    margin: 0 15px;
  }
`;

const Logo = styled(VscGithubAlt)`
  font-size: 10rem;
`;

const Actions = styled.section`
  margin: 40px 0;
`;

export function Main(props: RouteComponentProps) {
  const [search, setSearch] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      navigateToResults();
    }
  }

  function navigateToResults() {
    navigate(`/search?q=${search}`);
  }
  return (
    <Container>
      <Content>
        <Title>
          <Logo />
          Github Search
        </Title>

        <Actions>
          <Input
            fullWidth
            onChange={handleChange}
            value={search}
            onKeyUp={handleKeyUp}
          />
          <Buttons>
            <PrimaryButton onClick={navigateToResults}>Search</PrimaryButton>
            <SecondaryButton>I'm feeling lucky</SecondaryButton>
          </Buttons>
        </Actions>
      </Content>
    </Container>
  );
}
