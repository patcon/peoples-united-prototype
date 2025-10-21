import type { Meta, StoryObj } from '@storybook/react';
import LandingPage from '../components/LandingPage';

const meta: Meta<typeof LandingPage> = {
  title: 'Pages/LandingPage',
  component: LandingPage,
  parameters: {
    // Full screen layout for the landing page
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RegisteredUser: Story = {
  name: 'Registered User View',
};