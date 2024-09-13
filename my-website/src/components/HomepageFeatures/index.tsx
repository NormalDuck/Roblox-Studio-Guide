import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'image'>>;
  description: JSX.Element;
};
const FeatureList: FeatureItem[] = [
  {
    title: 'Industry standard tools',
    Svg: require('@site/static/img/rojo.svg').default,
    description: (
      <>
        This documentation teaches the most professional industry standard tools,
        this includes Rojo, React-lua, Roblox-TS and other programming theories
        we offer in this tutorial.
      </>
    ),
  },
  {
    title: 'Goodbye, payed tutorials!',
    Svg: require('@site/static/img/money_mouth.svg').default,
    description: (
      <>
        We aim to create the most helpful website for learning Roblox studio.
        Because of the nature of open sourced, we <em>never</em> make you pay the
        fee. 
      </>
    ),
  },
  {
    title: 'Always up to date',
    Svg: require('@site/static/img/roblox_studio.svg').default,
    description: (
      <>
        We constantly update our information in the roblox studio community. 
        If anything is wrong in the documentation then feel free to make a issue 
        or pull request!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
