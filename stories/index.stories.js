import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ComponentName } from '../src'

storiesOf('ComponentName', module)
  .add('with text', () => <ComponentName someProp='test prop' />)
