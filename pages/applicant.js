import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';
import SidepageHero from '../components/building-blocks/SidepageHero';
import { api } from '../utils/api';
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';

const Applicant = () => {
  const [app, setApp] = useState(null);
  const { user } = useAuth();

  async function awaitApplication() {
    if (user) {
      api
        .getApplication(user.username)
        .then((res) => {
          console.log(res);
          setApp(res.data.application.attributes);
        })
        .catch((err) => {
          console.error(err);
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
            <Stack spacing={6}>
              <Stack spacing={3}>
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
              <Stack spacing={2}>
                <Typography variant="h6">Application Details</Typography>
                <Divider />

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="p">
                      <Typography fontWeight={'bold'} variant="span">
                        Name:
                      </Typography>{' '}
                      {app?.firstName} {app?.lastName}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="p">
                      <Typography fontWeight={'bold'} variant="span">
                        Phone:
                      </Typography>{' '}
                      {app?.phone}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="p">
                      <Typography fontWeight={'bold'} variant="span">
                        Degree:
                      </Typography>{' '}
                      {app?.degree}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Divider />
                    <Typography variant="p">
                      <Typography fontWeight={'bold'} variant="span">
                        Universities Applied To:
                      </Typography>{' '}
                      {app?.universitiesAppliedTo
                        .map((uni) => uni.university)
                        .join(', ')}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Divider />
                    <Typography variant="p">
                      <Typography fontWeight={'bold'} variant="span">
                        Universities Accepted To:
                      </Typography>{' '}
                      {app?.universitiesAcceptedTo
                        .map((uni) => uni.university)
                        .join(', ')}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Divider />
                    <Typography variant="p">
                      <Typography fontWeight={'bold'} variant="span">
                        Files:
                      </Typography>{' '}
                      {
                        <Link
                          href={app?.letter?.data?.attributes?.url || '#'}
                          target="_blank">
                          {app?.letter?.data.attributes.name}
                        </Link>
                      }
                    </Typography>
                  </Grid>
                </Grid>
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
