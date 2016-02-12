module.exports = {
  componentWillMount: function() {
    var self = this;
    function Q( state ){ state && this.push.apply( this, state ); }
    Q.prototype = Array.prototype;
    Q.prototype.add = function( val ){
      this.push( val );
      self.forceUpdate();
    }
    Q.prototype.del = function( val ){
      var index = this.indexOf( val );
      if( index > -1 ) this.splice( index, 1 );
      self.forceUpdate();
    }
    this.q = new Q();
  }
};
