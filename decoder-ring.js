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
  
  fnTransformChar : function ( pStrChar , pNumOffset , pBoolModeDecode ) {
    var bAlpha = /[a-z]/.test( pStrChar.toLowerCase() );
    var bUpper = bAlpha && /[A-Z]/.test( pStrChar );
    if ( pBoolModeDecode ) pNumOffset = pNumOffset * -1 + 26;
    var sTransformedChar = pStrChar;
    var nAlphaIndex;
    if ( bAlpha ) {
      nAlphaIndex = reference.array.lower.indexOf( pStrChar.toLowerCase() );
      sTransformedChar = reference.array.lower[ (nAlphaIndex + pNumOffset) % 26 ];
    }
    if ( bUpper ) sTransformedChar = sTransformedChar.toUpperCase();
    return sTransformedChar;
  }
  
}



// decoder ring object
var ring = {
    
  encode : function ( pStrPlainText, pNumOffset ) {
    
  },
    
  decode : function ( pStrCipherText, pNumOffset ) {
    
  }
  
};