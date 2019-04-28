module.exports = {
  apps : [{
    name: 'mk-frontend-framework',
    script: './node_modules/nuxt/bin/nuxt-start',
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
      'post-deploy' : 'npm run build && pm2 startOrReload ecosystem.config.js --env production',
      env  : {
        "NODE_ENV":"production"
      }
    }
  }
};
