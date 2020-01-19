Number("")              // 0
Number("   ")           // 0
Number(null)            // 0
Number(undefined)       // NaN
Number([])              // 0
Number([5])             // NaN
Number([null])          // 0
Number([undefined])     // 0
Number({})              // NaN

String(-0)              // "0"
String(null)            // "null"
String(undefined)       // "undefined"
String([null])          // ""
String([undefined])     // ""