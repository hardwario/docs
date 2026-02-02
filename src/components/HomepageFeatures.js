import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'CHESTER',
    subtitle: 'Configurable IoT Gateway',
    link: '/chester/',
    src: '/img/chester.png',
    width: 300,
    height: 200,
    description: (
      <>
        CHESTER is an extensible IoT gateway platform featuring NB-IoT, LTE-M, LoRaWAN, BLE, and GNSS radio technologies.
      </>
    ),
  },
  {
    title: 'STICKER',
    subtitle: 'LoRaWAN Sensor Platform',
    link: '/sticker/',
    src: '/img/sticker.png',
    width: 300,
    height: 200,
    description: (
      <>
        STICKER is an STM32WL-based IoT platform with integrated LoRaWAN, designed as a compact, low-power, long-lifetime module for sensor applications.
      </>
    ),
  },
  {
    title: 'EMBER',
    subtitle: 'LoRaWAN IoT Hotspot',
    link: '/ember/',
    src: '/img/ember.png',
    width: 267,
    height: 200,
    description: (
      <>
        EMBER is a RouterBOARD-based waterproof industrial IoT gateway (with LTE card) for LoRaWAN sensors and actuators.
      </>
    ),
  },
  {
    title: 'FIBER',
    subtitle: 'Sensor IoT Monitor',
    link: '/fiber/',
    src: '/img/fiber.png',
    width: 250,
    height: 200,
    description: (
      <>
        FIBER is an IoT device for precise industrial temperature monitoring, offering seamless connectivity and intuitive interfaces.
      </>
    ),
  },
   {
    title: 'GAUGER',
    subtitle: 'Wi-Fi/LAN Input Module',
    link: '/gauger/',
    src: '/img/gauger.png',
    width: 200,
    height: 200,
    description: (
      <>
        GAUGER is an industrial IoT device designed to enable seamless data acquisition from production lines, connecting to existing PLCs or standalone machinery.
      </>
    ),
  },
  {
    title: 'TAPPER',
    subtitle: 'NFC Tag Reader',
    link: '/tapper/',
    src: '/img/tapper.png',
    width: 200,
    height: 200,
    description: (
      <>
        TAPPER is an NFC tag reader using Raspberry Pi Zero 2 W and PN532, designed for secure tag verification over MQTT.
      </>
    ),
  },
  {
    title: 'TOWER',
    subtitle: 'Pluggable IoT Platform',
    link: '/tower/',
    src: '/img/tower.png',
    width: 300,
    height: 200,
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
    src: '/img/cloud.svg',
    width: 200,
    height: 200,
    description: (
      <>
        CLOUD is a device and data management platform providing REST API services for seamless integration for customers.
      </>
    ),
  },
  {
    title: 'APPS',
    subtitle: 'Dashboards and Applications',
    link: '/apps/',
    src: '/img/apps.png',
    width: 200,
    height: 200,
    description: (
      <>
        APPS is a collection of custom dashboards and applications for visualizing and managing data from your IoT devices.
      </>
    ),
  },
];

function Feature({ src, width, height, title, subtitle, link, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Link to={link}>
          <img src={src} width={width} height={height} />
        </Link>
      </div>
      <div className='text--center padding-horiz--md'>
        <Link to={link} className='link-unstyled'>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </Link>
        <div className={styles.buttons}>
          <Link className = 'button button--secondary button--md' to={link}>
            👉 Go to {title} documentation
          </Link>
        </div>
        <p>{description}</p>
      </div>
    </div >
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
