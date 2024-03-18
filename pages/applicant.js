import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';
import SidepageHero from '../components/building-blocks/SidepageHero';
import { api } from '../utils/api';
import {
  Box,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

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
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <SidepageHero title="Application" />

      <Container maxWidth={'md'} sx={{ flexGrow: 1, padding: 5 }}>
        {user && (
          <Paper elevation={4} sx={{ padding: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">User Info</Typography>
              <Divider />
              <Stack
                spacing={1}
                direction={'row'}
                justifyContent={'space-between'}>
                <Typography variant="p">
                  <Typography fontWeight={'bold'} variant="span">
                    Username:
                  </Typography>{' '}
                  {user.username}
                </Typography>
                <Typography variant="p">
                  <Typography fontWeight={'bold'} variant="span">
                    Email:
                  </Typography>{' '}
                  {user.email}
                </Typography>
                <Typography variant="p">
                  <Typography fontWeight={'bold'} variant="span">
                    Member since:
                  </Typography>{' '}
                  {user.createdAt.split('T')[0]}
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default Applicant;

const Wrapper = styled.div``;

const UserInfo = styled.div``;

const boldSpan = styled.span`
  font-weight: bold;
`;
