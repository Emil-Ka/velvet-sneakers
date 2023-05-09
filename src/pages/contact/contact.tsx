import React from 'react';
import { Helmet } from 'react-helmet';

import { Container, Text, List, ListItem } from 'shared/components';
import { Page } from '../page';
import styles from './contact.module.scss';

export const Contact = () => {
  return (
    <Page className={styles.contact}>
      <Helmet>
        <title>Контакты</title>
        <meta name="description" content="Наши контакты" />
      </Helmet>
      <Container>
        <Text tag="h1" color="#000" size="l" className={styles.title}>
          {' '}
          Контакты{' '}
        </Text>
        <div className={styles.subcont}>
          <List>
            <ListItem>
              <Text tag="p" color="#000" size="s" className={styles.subtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </ListItem>
            <ListItem>
              <Text tag="p" color="#000" size="s" className={styles.subtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </ListItem>
            <ListItem>
              <Text tag="p" color="#000" size="s" className={styles.subtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </ListItem>
            <ListItem>
              <Text tag="p" color="#000" size="s" className={styles.subtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Text tag="p" color="#000" size="s" className={styles.subtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </ListItem>
            <ListItem>
              <Text tag="p" color="#000" size="s" className={styles.subtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </ListItem>
            <ListItem>
              <Text tag="p" color="#000" size="s" className={styles.subtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </ListItem>
            <ListItem>
              <Text tag="p" color="#000" size="s" className={styles.subtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Text tag="p" color="#000" size="s" className={styles.subtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </ListItem>
            <ListItem>
              <Text tag="p" color="#000" size="s" className={styles.subtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </ListItem>
            <ListItem>
              <Text tag="p" color="#000" size="s" className={styles.subtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </ListItem>
            <ListItem>
              <Text tag="p" color="#000" size="s" className={styles.subtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </ListItem>
          </List>
        </div>
      </Container>
    </Page>
  );
};
