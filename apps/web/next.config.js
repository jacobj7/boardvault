/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {};

const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig(nextConfig, { silent: true });
