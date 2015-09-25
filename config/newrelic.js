/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
module.exports.newrelic = {
  /**
   * Array of application names.
   */
  app_name: ['dindins'],
  /**
   * Your New Relic license key.
   */
  license_key: 'd535290bf7a49801e4dc0ca3d4f2ac5b9e2a3146',
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'trace',
    rules: {
      ignore: ['^/socket.io/*/xhr-polling']
    }
  }
}
