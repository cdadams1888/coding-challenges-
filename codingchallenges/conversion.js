function myParseInt(str) {
  var parse = parseInt(str);
  var check_spaces = str.indexOf(" ");
  var check_float;
  check_float = parse / str;


  if(parse === NaN) {
    return "NaN";
  } else if(parse === 0) {
      return parse;
      } else if(check_float !== 1) {
          return "NaN";
        } else {
          return parse;
        }
     }


// make conversion only if single integer , even with spaces and tabs
// all other strings including float values return NaN



Test.assertEquals(myParseInt("1"), 1);
Test.assertEquals(myParseInt("  1 "), 1);
Test.assertEquals(myParseInt("08"), 8);
Test.expect(isNaN(myParseInt("5 friends")));
Test.expect(isNaN(myParseInt("16.5")));


/* You are asked to write a myParseInt method with the following rules:

It should make the conversion if the given string only contains a single integer value (and eventually spaces - including tabs, line feeds... - at both ends)
For all other strings (including the ones representing float values), it should return NaN
It should assume that all numbers are not signed and written in base 10 */
