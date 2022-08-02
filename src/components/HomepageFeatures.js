import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'CHESTER',
    subtitle: 'Configurable IoT Gateway',
    link: '/chester/',
    svg: '/img/chester.svg',
    description: (
      <>
        CHESTER is an extensible IoT gateway platform featuring NB-IoT, LTE-M, LoRaWAN, BLE, and GNSS radio technologies.
      </>
    ),
  },
  {
    title: 'EMBER',
    subtitle: 'LoRaWAN IoT Hotspot',
    link: '/ember/',
    svg: '/img/ember.svg',
    description: (
      <>
        EMBER is a RouterBOARD-based waterproof industrial IoT gateway (with LTE card) for LoRaWAN sensors and actuators.
      </>
    ),
  },
  {
    title: 'TOWER',
    subtitle: 'Pluggable IoT Platform',
    link: '/tower/',
    svg: '/img/tower.svg',
    description: (
      <>
        TOWER is an open-source IoT platform for rapid deployment, featuring sub-GHz radio and a very low power consumption.
      </>
    ),
  },
  {
    title: 'CLOUD',
    subtitle: 'Middleware IoT Service',
    link: '/cloud/',
    svg: '/img/cloud.svg',
    description: (
      <>
        CLOUD is a device and data management platform providing REST API services for seamless integration for customers.
      </>
    ),
  },
];

function Feature({ svg, title, subtitle, link, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img src = {svg} width = "200" height = "200" />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to={link}>
            👉 Go to {title} documentation
          </Link>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
