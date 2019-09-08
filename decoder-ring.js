// collection of constants
var reference = {
  array : {
    lower : [] ,
    upper : []
  } ,
  charCodes : {
    a : "a".charCodeAt(),
    A : "A".charCodeAt(),
    z : "z".charCodeAt(),
    Z : "Z".charCodeAt()
  }
};

// initialize constants
( function () {
  var nCharCode;
  // initialize "lower" array
  nCharCode = reference.charCodes.a;
  while ( nCharCode <= reference.charCodes.z ) {
     reference.array.lower.push( String.fromCharCode( nCharCode++ ) );
  }
  // initialize "upper" array
  nCharCode = reference.charCodes.A;
  while ( nCharCode <= reference.charCodes.Z ) {
     reference.array.upper.push( String.fromCharCode( nCharCode++ ) );
  }
})();



// library of helper functions
var lib = {
  
  
  
}



// decoder ring object
var ring = {
    
  encode : function ( pStrPlainText, pNumOffset ) {
    
  },
    
  decode : function ( pStrCipherText, pNumOffset ) {
    
  }
  
};