exports.command = function(callback) {
  var self = this;

  callback = callback || function() {};

  this
    .timeoutsAsyncScript(20000)
    .pause(1000)
    .executeAsync(
      function(done) {
        var iteration = 0;
        var cycles = 19;

        timeOut = function(iteration) {
          if (document.readyState == "complete") {
            clearInterval(id);
            done(true);
          }
        };
        var id = setInterval(function() {
          timeOut(iteration);
          if (iteration == cycles) {
            clearInterval(id);
            done(false);
          } else
            iteration += 1;
        }, 1000);
      }, [],
      function(result) {
        if (typeof callback === "function") {
          callback.call(self, result);
        }
      }
  );
  return this;
};