import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';
import SidepageHero from '../components/building-blocks/SidepageHero';
import { api } from '../utils/api';

const Applicant = () => {
  const { user } = useAuth();

  async function awaitApplication() {
    if (user) {
      api
        .getApplication()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      awaitApplication();
    }
  }, [user]);

  return (
    <Container>
      <SidepageHero title="Application" />

      <Wrapper>
        <UserInfo>
          <h2>Username: {user.username}</h2>
          <p>Email: {user.email}</p>
          <p>Member since: {user.createdAt.split('T')[0]}</p>
        </UserInfo>
      </Wrapper>
    </Container>
  );
};

export default Applicant;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div``;

const UserInfo = styled.div``;
