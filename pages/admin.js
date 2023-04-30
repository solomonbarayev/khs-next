import React, { useEffect, useMemo, useState } from 'react';
import SidepageHero from '../components/building-blocks/SidepageHero';
import styled from 'styled-components';
import { api } from '../utils/api';
import { useRouter } from 'next/router';
import { useTable } from 'react-table';

const COLUMNS = [
  {
    Header: 'Table',
    columns: [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'AppliedTo',
        accessor: 'universitiesAppliedTo',
      },
      {
        Header: 'Accepted',
        accessor: 'universitiesAcceptedTo',
      },
    ],
  },
];

const Admin = () => {
  const [jwt, setJwt] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  const columns = useMemo(() => COLUMNS, []);

  const tableInstance = useTable({
    columns,
    data: applicants,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setJwt(localStorage.getItem('jwt'));
    }
  }, []);

  useEffect(() => {
    if (jwt && mounted) {
      api.getApplications(jwt).then((res) => {
        const { data } = res.data;
        data.forEach((applicant, i) => {
          // setApplicants((prev) => [...prev, applicant.attributes]);
          //add applicant.attributes to applicants array except conver subarray universitiesAppliedTo to comma separated string
          const { universitiesAppliedTo, universitiesAcceptedTo, ...rest } =
            applicant.attributes;

          const unisAppliedString = universitiesAppliedTo
            .map((uni) => uni.university)
            .join(', ');

          const unisAcceptedString = universitiesAcceptedTo
            .map((uni) => uni.university)
            .join(', ');

          setApplicants((prev) => [
            ...prev,
            {
              ...rest,
              universitiesAppliedTo: unisAppliedString,
              universitiesAcceptedTo: unisAcceptedString,
            },
          ]);
        });
      });
    } else if (!jwt && mounted) {
      router.push('/login');
    } else if (!mounted) {
      setMounted(true);
      return;
    } else if (jwt === null) {
      router.push('/login');
    }
  }, [jwt, mounted]);

  console.log(applicants);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <SidepageHero title="Admin Dashboard" />
      <Wrapper>
        {jwt && mounted && (
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, i) => (
                <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, k) => (
                    <th
                      key={k}
                      {...column.getHeaderProps()}
                      style={{
                        borderBottom: 'solid 3px red',
                        background: 'aliceblue',
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr key={i} {...row.getRowProps()}>
                    {row.cells.map((cell, k) => {
                      return (
                        <td
                          key={k}
                          {...cell.getCellProps()}
                          style={{
                            padding: '10px',
                            border: 'solid 1px gray',
                          }}>
                          {cell.value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </Wrapper>
    </>
  );
};

export default Admin;

const Wrapper = styled.div``;
