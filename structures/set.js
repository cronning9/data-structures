function Set(){
  this._storage = {}
};

Set.prototype.add = function(value) {
  this._storage[value] = 0;
};

Set.prototype.contains = function(value) {
  return (value in this._storage);
};

Set.prototype.remove = function(value) {
  if (value in this._storage) delete this._storage[value];
};

module.exports = Set;