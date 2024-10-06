import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const Render = () => {
  return html`
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p class="body-1">Body 1</p>
  `;
};

const meta: Meta = {
  title: 'Basics/Typography',
  component: 'typography',
  render: Render,
};

const Typography = {
  title: 'Basics/Typography',
  render: Render,
};

// type Story = StoryObj;

export const Primary: StoryObj = {
  args: {},
};

export default meta;
