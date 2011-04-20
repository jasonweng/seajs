
/**
 * @fileoverview The bootstrap and entrances.
 */

(function(host, data, fn) {

  var config = data.config;

  fn.use = fn.load;

  var mainModuleId = config.main;
  if (mainModuleId) {
    fn.use([mainModuleId]);
  }

  // Parses the pre-call of seajs.config/seajs.boot/define.
  (function(args) {
    if (args) {
      var hash = {
        0: 'config',
        1: 'use',
        2: 'define'
      };
      for (var i = 0; i < args.length; i += 2) {
        fn[hash[args[i]]].apply(host, args[i + 1]);
      }
      delete host['args'];
    }
  })(host['args']);

})(seajs, seajs._data, seajs._fn);