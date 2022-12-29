import React from 'react';
import Image from 'next/image';

// import danielImage from '/team/daniel-lazarev.jpg';
import danielImage from '../public/team/daniel-lazarev.jpg';
import solomonImage from '../public/team/solomon-barayev.jpg';
import estherImage from '../public/team/esther-perez.jpg';

export const ourTeam = [
  {
    id: 1,
    name: 'Daniel Lazarev',
    title: 'CEO & Founder',
    image: <Image src={danielImage} alt="Daniel Lazarev" />,
    linkedin: 'https://www.linkedin.com/in/daniel-lazarev-7473aa66/',
    email: 'daniel@kochvei.org',
    description: (
      <>
        <span>
          Daniel got his BA in mathematics and physics at Yeshiva University.
          During his time at YU, he was in Rabbi Eliyahu Ben-Haim&apos;s shiur.
          After graduating, he spent two years teaching physics, math, and
          chemistry at two high schools and at YU&apos;s Physics Department. He
          started medical school at Stony Brook University, taking a leave of
          absence after finishing the pre-clinical coursework to focus on
          research and to pursue a PhD. He spent a year working as a
          computational biologist at the Broad Institute, and is currently a PhD
          student in mathematics at MIT. For more information, check out his{' '}
          <a href="https://daniellazarev.wordpress.com/">website</a>.
        </span>
        <br />
        <span>
          Daniel is excited about how Kochvei can help young couples balance
          their personal and career goals, without needing to compromise one for
          the other.
        </span>
      </>
    ),
  },
  {
    id: 2,
    name: 'Solomon Barayev',
    title: 'Volunteer Web Developer',
    image: <Image src={solomonImage} alt="Solomon Barayev" />,
    linkedin: 'https://www.linkedin.com/in/solomon-barayev/',
    email: 'solomon@1bar.design',
    description: (
      <>
        <span>
          Solomon comes from an extensive background of Tech and Consumer
          Psychology. He completed his BS in Business with a concentration in
          Business Intelligence and Marketing Analytics at Yeshiva University.
          His specialties include Data Analysis, UI Design, Web Development, and
          Optimization. He has built up several successful businesses in the
          eCommerce space as well as his active Web Design Agency,{' '}
          <a href="https://www.1bar.design">1Bar Design</a>. Solomon made Aliya
          in 2019 with his family, and currently lives in Be&apos;er Sheva.
        </span>
        <br />
        <span>
          Solomon has always felt strongly that with a little bit of human help,
          and some divine intervention, the sky&apos;s the limit for young
          Jewish couples. As part of the Kochvei team he looks forward to
          helping provide that initial boost for many young professionals.
        </span>
      </>
    ),
  },
  {
    id: 3,
    name: 'Esther Perez',
    title: 'Kochvei Ambassador at Stern College',
    image: <Image src={estherImage} alt="Esther Perez" />,
    linkedin: 'https://www.linkedin.com/in/esther-perez-b87405211/',
    email: 'eperez@kochvei.org',
    description: (
      <>
        <span>
          Esther is a current student at Stern College for Women, pursuing a BA
          in Psychology. She has had experience volunteering and interning at
          some wonderful diverse nonprofit organizations. It is Esther&apos;s
          professional goal to get a MA in social work and focus specifically in
          nonprofit leadership and community outreach and development. Esther
          also hopes to get her MS in Jewish Education and Administration in
          order to one day enter the world of teaching.
        </span>
        <br />
        <span>
          Esther has always loved resolving challenges within our larger
          communities and is greatly inspired and excited by Kochvei&apos;s
          drive to make a difference for generations to come.
        </span>
      </>
    ),
  },
];
