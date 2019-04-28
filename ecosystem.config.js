module.exports = {
  apps : [{
    name: 'mk-frontend-framework',
    script: 'server/index.js',
    instances: 1,
    autorestart: true,
    watch: true,
    ignore_watch: ['node_modules'],
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '47.107.150.160',
      port : '22',
      ref  : 'origin/master',
      repo : 'git@github.com:richardsmogodb/mk-frontend-framework.git',
      path : '/var/www/production',
      ssh_options : 'StrictHostKeyChecking=no',
      'post-deploy' : 'nvm use v12.0.0 && node -v && npm -v && cnpm -v && rm -rf node_modules && cnpm install && npm run build && pm2 startOrReload ecosystem.config.js --env production',
      env  : {
        "NODE_ENV":"production"
      }
    }
  }
};
