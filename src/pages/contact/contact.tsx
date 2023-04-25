import React, { useState } from 'react';

import { Container, Text } from 'shared/components';

import { Page } from '../page';
import styles from './contact.module.scss';
import { List, ListItem } from '../../shared/components/list';

export const Contact = () => {
  return (
    <Page className={styles.contact}>
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
