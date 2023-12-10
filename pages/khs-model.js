import React from 'react';

const khsModel = () => {
  return <div></div>;
};

export default khsModel;

export async function getServerSideProps() {
  return {
    props: {},
    redirect: {
      destination: '/articles/khs-model',
      permanent: false,
    },
  };
}
