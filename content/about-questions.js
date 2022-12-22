import React from 'react';

export const questions = [
  {
    id: '1',
    question: 'What?',
    answer: (
      <p>
        <strong>Our Mission:</strong> Kochvei HaShamayim champions the values of
        family, community, and education by supporting young Jewish couples,
        allowing them to minimize difficult compromises and to excel in both
        their family life and their early career or continued education.
      </p>
    ),
  },
  {
    id: '2',
    question: 'Who?',
    answer: (
      <>
        <p>
          In his code of Jewish Law, Maimonides explains that a man should first
          learn a craft that could sustain himself, then secure a home, and only
          then get married &#40;1&#41;.On the other hand, Yehuda ben Tema, a
          Mishnaic scholar, suggests &#40;2&#41; that a man could get married as
          early as eighteen years of age! These ideas are reconciled once we
          consider that, as recently as a few hundred years ago, one could
          complete one&apos;s education or training by the age of eighteen.
          Today, however, the required training for most jobs, especially in
          technical or professional fields, takes young adults into their late
          twenties or early thirties.
        </p>
        <br />
        <p>
          Unfortunately, it seems the Jewish Community has not yet responded to
          the challenge posed by this societal change, as many young couples
          either push off getting married or having kids until much later, or,
          conversely, forgo educational or career opportunities in order to
          focus on family life.
        </p>
        <br />
        <p>
          <strong>
            Kochvei HaShamyim was conceived to specifically address this issue
          </strong>{' '}
          by running initiatives to support young couples, allowing them to
          responsibly build their families while pursuing their educational
          goals.
        </p>
        <br />
        <hr />
        <div className="footnotes">
          <p className="footnote">
            {' '}
            &#40;1&#41; - Maimonides, Mishneh Torah, Sefer HaMada, Hil. Deot 5,
            11
          </p>
          <p className="footnote"> &#40;2&#41; - Pirkei Avot 5, 21</p>
        </div>
      </>
    ),
  },
  {
    id: '3',
    question: 'How?',
    answer: (
      <p>
        We currently accomplish these goals mainly through our Community
        Building Initiative, which seeks to establish a symbiotic relationship
        between a couple and the Jewish community in the city in which they are
        pursuing their education. We also run educational events on college
        campuses that promote our mission, such as our Panel Event at Yeshiva
        University. To learn more about these initiatives, you can visit our
        Initiatives page, or contact{' '}
        <a href="mailto:daniel@kochvei.org">daniel@kochvei.org</a> for more
        information or to schedule a meeting.
      </p>
    ),
  },
];
