import React, { Component } from 'react';

type Props = {
  variant?: 'primary' | 'secondary' | 'neutral' | null;
  children?: React.ReactNode;
};

export class Banner extends Component<Props> {
  render() {
    const { variant, children = `I'm a banner` } = this.progress;
  }
}
