import { env } from './helpers';

export default {
  RECAPTCHA: {
    URL: 'https://www.google.com/recaptcha/api.js?render=6Le_cwEVAAAAANJJaXeJLQoR3DJzs1kJAgbJpC5n',
    KEY: '6Le_cwEVAAAAANJJaXeJLQoR3DJzs1kJAgbJpC5n',
  },
  MAPS: {
    EMBED: {
      URL: 'https://www.google.com/maps/embed/v1',
      KEY: env.REACT_APP_GOOGLE_MAPS_API_KEY || 'AIzaSyDgPtDJN6R3uhDFq_RjGKxKRVJf_9ikWiI',
    },
  },
} as const;
