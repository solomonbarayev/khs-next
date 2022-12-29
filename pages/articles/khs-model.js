import Image from 'next/image';
import styled from 'styled-components';
import BodyText from '../../components/building-blocks/BodyText';
import HeaderTwo from '../../components/building-blocks/HeaderTwo';
import SidepageHero from '../../components/building-blocks/SidepageHero';
import { primaryColor, secondaryColor } from '../../utils/style-variables';
import successIndexImage from '../../public/success-index-model.png';

import figure1 from '../../public/model-figure-1.png';
import figure2 from '../../public/model-figure-2.png';
import figure3 from '../../public/model-figure-3.png';
import figure4 from '../../public/model-figure-4.png';
import figure5 from '../../public/model-figure-5.gif';

const KHSModel = () => {
  return (
    <>
      <SidepageHero title="KHS Network Model" />
      <Content>
        <BodyText text="Education is an investment. After investing time, effort, and money, one’s value increases, hopefully in such a way that also translates to higher pay. Here we show that a community that shares in the cost of an individual’s education, will also later share in its value. What follows is a simple network model that clarifies and quantitatively supports this contention." />

        <br />
        <br />

        <HeaderTwo
          text="Value and the Success Index"
          className="model__header"
        />

        <BodyText
          text={
            <span>
              <span>
                We define one&rsquo;s&nbsp;<strong>value</strong>,&nbsp;
                <em>vᵢ</em>, as not only an individual&rsquo;s net worth, but
                also his or her expertise, time, skills, assets, and so on.
              </span>
              <span>
                <strong>Note</strong>: When discussing value in the abstract, we
                refer to this abstract definition that includes everything one
                can offer in a transaction, but in our simulations, we treat
                value as one&rsquo;s net worth, since that is easier to
                approximate and the results are then more immediately
                interpretable. Nevertheless, the same results hold (in a
                qualitative sense) for the more abstract notion of value, as
                defined above.
              </span>
              <span>
                An individual&rsquo;s value, however, is not all the value to
                which one has access. For example, while Bill Gates&rsquo; net
                worth is $130B, with friends like Warren Buffett, he has access
                to much more wealth than that. We therefore define
                one&rsquo;s&nbsp;
                <strong>
                  <em>success index</em>
                </strong>
                ,&nbsp;<em>sᵢ</em>, as one&rsquo;s own value plus some fraction
                of the value of one&rsquo;s connections. This not only includes
                one&rsquo;s immediate connections, but also second, third and
                fourth degree connections, since these are usually also
                accessible (although with farther connections, one has access to
                an even smaller fraction of their value).&nbsp;
              </span>
              <span>Mathematically, we can write this as follows:</span>
            </span>
          }
        />
        <Image
          src={successIndexImage}
          alt="success index"
          width={400}
          className="model__image"
        />

        <BodyText
          text={
            <span>
              where, for a community of size&nbsp;<em>N,&nbsp;s</em>&nbsp;is the
              vector of the success indices of each of its members,&nbsp;
              <em>i.e.,&nbsp;</em>
              <em>s</em>=(<em>s</em>₁,...,&nbsp;<em>sᵢ</em>,...,&nbsp;
              <em>sₙ</em>);&nbsp;<em>v</em>&nbsp;is the same sized vector of the
              individual values of each member,&nbsp;<em>q &isin;&nbsp;</em>
              (0,1)&nbsp;is the average fraction of value an immediate neighbor
              would be willing to share;&nbsp;<em>A</em>&nbsp;is the adjacency
              matrix (an&nbsp;<em>N &times;&nbsp;N</em>&nbsp;matrix whose&nbsp;(
              <em>i,j</em>)&nbsp;th element is 1 if individuals&nbsp;<em>i</em>
              &nbsp;and&nbsp;<em>j</em>&nbsp;are connected, and 0
              otherwise);&nbsp;<em>L</em>&nbsp;is highest degree of connections
              one may have access to (we have set&nbsp;<em>L</em>=4&nbsp;in the
              simulations); and&nbsp;<em>diag</em>(&bull;)&nbsp;is an operator
              that, for any square matrix, returns the same matrix but all
              non-diagonal entries equal to zero.
            </span>
          }
        />
        <br />
        <br />
        <HeaderTwo
          text="Model and simulations setup"
          className="model__header"
        />
        <BodyText
          text={
            <span>
              The initial network was set up with&nbsp;<em>N</em>
              ₀=100&nbsp;individuals, each of whom was given a value drawn from
              an exponential distribution with a scale parameter
              of&nbsp;1&times;10⁶. Each value in the&nbsp;<em>N</em>₀&times;
              <em>N</em>₀&nbsp;adjacency matrix&nbsp;<em>A</em>₀&nbsp;for this
              initial community is drawn from a binomial&nbsp;<em>B</em>(1,0.1).
              For the&nbsp;kth additional node that is added to the community,
              we draw an&nbsp;(<em>N</em>₀+<em>k</em>)-dimensional column
              vector&nbsp;b, also from&nbsp;<em>B</em>(1,0.1), and obtain&nbsp;
              <em>Aₖ</em>&nbsp;by concatenating&nbsp;b&nbsp;with&nbsp;
              <em>Aₖ₋₁</em>&nbsp;horizontally, and its transpose&nbsp;
              <em>bᵀ</em>&nbsp;vertically (with a&nbsp;0&nbsp;along the
              diagonal). Thus, for every&nbsp;<em>k</em>,&nbsp;<em>Aₖ</em>
              &nbsp;is the adjacency matrix for the entire network, including
              the&nbsp;<em>k</em>&nbsp;individuals added.&nbsp;&nbsp;The value
              of every individual added was initially sampled from an
              exponential distribution with a scale parameter
              of&nbsp;1&times;10⁴. We then distinguished three groups:
            </span>
          }
        />
        <ol>
          <li>
            <BodyText
              text={
                <span>
                  <strong>Null</strong>: Individuals whose value stays constant.
                  This serves either as a model for those not pursuing further
                  education, whose value is not, on average, expected to
                  increase as substantially; or as a standard relative to which
                  we compare the evolution of the other two groups.
                </span>
              }
            />
          </li>
          <li>
            <BodyText
              text={
                <span>
                  <strong>Without KHS</strong>: This is a group that incurs debt
                  for their education, with a resulting delay in the trajectory
                  of the growth of their value.
                </span>
              }
            />
          </li>
          <li>
            <BodyText
              text={
                <span>
                  <strong>With KHS</strong>: This is the group whose debt is
                  fully or partially paid off,&nbsp;<em>i.e.</em>, the
                  beneficiaries of KHS.
                </span>
              }
            />
          </li>
        </ol>
        <BodyText text="The following figure shows the sigmoidal growth curves for the second and third groups, with the value measured as a fraction of the individual theoretical maximum value." />

        <Image
          src={figure1}
          alt="figure 1"
          width={500}
          className="model__image"
        />

        <BodyText text="The average success for the entire community was measured after the addition of each new member. We also tracked the success of one of the members of the original community (a “donor”), and of one of the members that joined later (a “joiner”). Finally, we reported the distribution of success indices for each of the three groups as a function of the number of individuals added." />

        <br />
        <br />

        <HeaderTwo text="Results" className="model__header" />
        <BodyText text="Below we present figures displaying the results of adding 800 individuals to a network initially consisting of 100 individuals. The rest of the parameters are as outlined above. Success is measured as a function of individuals added. When time is indicated (in years) this is assuming 10 individuals are added a year. " />
        <BodyText text="As the figures below show, not only is the average success of the entire community growing much faster under the KHS model, but even donors and joiners experience the same kind of growth on an individual level." />

        <Image
          src={figure2}
          alt="figure 2"
          width={500}
          className="model__image"
        />
        <Image
          src={figure3}
          alt="figure 3"
          width={500}
          className="model__image"
        />
        <Image
          src={figure4}
          alt="figure 4"
          width={500}
          className="model__image"
        />

        <br />

        <BodyText text="Below is the distribution of success over three same-sized populations as a function of the number of joiners (s(0)is the distribution of the initial N0=100 individuals, which is identical for the three groups). The average of each distribution grows according to the figures above. The red and blue distributions have a wider spread presumably because joiners are at different points in their value growth curve (see the figure in the previous section)." />

        <Image
          src={figure5}
          alt="figure 5"
          width={500}
          className="model__image"
        />

        <BodyText
          text={
            <span>
              To obtain the code for the simulations, please feel free to reach
              out to Daniel at{' '}
              <a href="mailto:daniel@kochvei.org" className="model__link">
                daniel@kochvei.org
              </a>
              .
            </span>
          }
        />
      </Content>
    </>
  );
};

export default KHSModel;

const Content = styled.main`
  padding: 4rem 2rem 6rem;
  max-width: 900px;
  margin: 0 auto;

  ol {
    list-style-type: decimal;
    padding-inline-start: 2rem;
  }

  .model__image {
    margin: 2rem auto;
  }

  .model__header {
    margin: 2rem 0;
    font-size: 1.4rem;
  }

  .model__link {
    color: ${primaryColor};
  }
`;
