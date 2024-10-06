import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const Render = () => {
  return html`
    <ul>
      <li>Unordered item 1</li>
      <li>Unordered item 2</li>
      <li>Unordered item 3</li>
    </ul>

    <ul>
      <li>Ordered item 1</li>
      <li>Ordered item 2</li>
      <li>Ordered item 3</li>
    </ul>
  `;
};

const meta: Meta = {
  title: 'Basics/Lists',
  component: 'lists',
  render: Render,
};

export const Primary: StoryObj = {
  args: {},
};

export default meta;
