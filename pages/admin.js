import React, { useEffect, useState, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Link from 'next/link';

import SidepageHero from '../components/building-blocks/SidepageHero';
import styled from 'styled-components';
import { api } from '../utils/api';
import { useRouter } from 'next/router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const headers = [
  'Name',
  'Email',
  'Phone',
  'Applied To',
  'Accepted To',
  'Letter',
];

const Admin2 = () => {
  const { user } = useAuth();

  const [applicants, setApplicants] = useState([]);

  // const APPLICANTS = useMemo();

  const router = useRouter();

  async function awaitUser() {
    if (user) {
      axios
        .get(`${API_URL}/applicants`)
        .then((res) => {
          const { data } = res.data.applicants;

          console.log(data);

          data.forEach((applicant) => {
            const {
              universitiesAppliedTo,
              universitiesAcceptedTo,
              letter,
              ...rest
            } = applicant.attributes;

            const unisAppliedString = universitiesAppliedTo
              .map((uni) => uni.university)
              .join(', ');

            const unisAcceptedString = universitiesAcceptedTo
              .map((uni) => uni.university)
              .join(', ');

            setApplicants((prev) => {
              //first check if the applicant is already in the array
              //if they are, then update their info
              //if not, then add them to the array
              const index = prev.findIndex(
                (applicant) => applicant.email === rest.email
              );

              if (index !== -1) {
                prev[index] = {
                  ...prev[index],
                  universitiesAppliedTo: unisAppliedString,
                  universitiesAcceptedTo: unisAcceptedString,
                  letter: letter.data.attributes.url,
                };
                return prev;
              } else {
                return [
                  ...prev,
                  {
                    ...rest,
                    universitiesAppliedTo: unisAppliedString,
                    universitiesAcceptedTo: unisAcceptedString,
                    letter: letter.data.attributes.url,
                  },
                ];
              }
            });
          });
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      awaitUser();
    }
  }, [user]);

  return (
    <Container>
      <SidepageHero title="Admin Dashboard" />
      <Wrapper>
        {user ? (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map((h, i) => (
                    <TableCell key={i}>{h}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {applicants.map((applicant) => (
                  <TableRow key={applicant.applicantI}>
                    <TableCell>
                      {applicant.firstName + ' ' + applicant.lastName}
                    </TableCell>
                    <TableCell>
                      <a href={'mailto:' + applicant.email}>
                        {applicant.email}
                      </a>
                    </TableCell>
                    <TableCell>
                      <a href={'tel:' + applicant.phone}>+1{applicant.phone}</a>
                    </TableCell>
                    <TableCell className="mx-200">
                      {applicant.universitiesAppliedTo}
                    </TableCell>
                    <TableCell className="mx-200">
                      {applicant.universitiesAcceptedTo}
                    </TableCell>
                    <TableCell>
                      <button>
                        <a
                          href={applicant.letter}
                          target="_blank"
                          rel="noreferrer"
                          className="letter__link">
                          view&nbsp;document
                        </a>
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Unauthed>
            <h2>Not Logged In</h2>
            <Link href="/login">Log in</Link>
          </Unauthed>
        )}
      </Wrapper>
    </Container>
  );
};

export default Admin2;

const Unauthed = styled.div`
  margin: 100px auto 0;
  padding: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 92vh;
`;

const Wrapper = styled.div`
  flex-grow: 1;

  .letter__link {
    padding: 5px 10px;
    background-color: #51b7bc;
    border-radius: 50px;
    color: #0c1670;
    cursor: pointer;
    transition: all ease-in 0.3s;
  }

  .letter__link:hover {
    opacity: 0.8;
  }

  .mx-200 {
    max-width: 200px;
  }
`;
