currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/a/b/moduleFile1.ts]
export function Foo() { };

//// [/a/b/file1Consumer1.ts]
import {Foo} from "./moduleFile1"; export var y = 10;

//// [/a/b/file1Consumer2.ts]
import {Foo} from "./moduleFile1"; let z = 10;

//// [/a/b/globalFile3.ts]
interface GlobalFoo { age: number }

//// [/a/b/moduleFile2.ts]
export var Foo4 = 10;

//// [/a/b/tsconfig.json]
{}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


/a/lib/tsc.js --w -p /a/b/tsconfig.json
Output::
>> Screen clear
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

[[90m12:00:34 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/file1Consumer1.ts","/a/b/file1Consumer2.ts","/a/b/globalFile3.ts","/a/b/moduleFile1.ts","/a/b/moduleFile2.ts"]
Program options: {"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/moduleFile1.ts
/a/b/file1Consumer1.ts
/a/b/file1Consumer2.ts
/a/b/globalFile3.ts
/a/b/moduleFile2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/moduleFile1.ts
/a/b/file1Consumer1.ts
/a/b/file1Consumer2.ts
/a/b/globalFile3.ts
/a/b/moduleFile2.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/modulefile1.ts (used version)
/a/b/file1consumer1.ts (used version)
/a/b/file1consumer2.ts (used version)
/a/b/globalfile3.ts (used version)
/a/b/modulefile2.ts (used version)

PolledWatches::
/a/b/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json: *new*
  {}
/a/b/file1consumer1.ts: *new*
  {}
/a/b/modulefile1.ts: *new*
  {}
/a/b/file1consumer2.ts: *new*
  {}
/a/b/globalfile3.ts: *new*
  {}
/a/b/modulefile2.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/a/b: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/moduleFile1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = void 0;
function Foo() { }
exports.Foo = Foo;
;


//// [/a/b/file1Consumer1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.y = void 0;
exports.y = 10;


//// [/a/b/file1Consumer2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var z = 10;


//// [/a/b/globalFile3.js]


//// [/a/b/moduleFile2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo4 = void 0;
exports.Foo4 = 10;



Change:: change moduleFile1 shape and create file1Consumer3

Input::
//// [/a/b/moduleFile1.ts]
export var T: number;export function Foo() { };

//// [/a/b/file1Consumer3.ts]
import {Foo} from "./moduleFile1"; let y = Foo();


Output::
>> Screen clear
[[90m12:00:40 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:52 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/file1Consumer1.ts","/a/b/file1Consumer2.ts","/a/b/file1Consumer3.ts","/a/b/globalFile3.ts","/a/b/moduleFile1.ts","/a/b/moduleFile2.ts"]
Program options: {"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/moduleFile1.ts
/a/b/file1Consumer1.ts
/a/b/file1Consumer2.ts
/a/b/file1Consumer3.ts
/a/b/globalFile3.ts
/a/b/moduleFile2.ts

Semantic diagnostics in builder refreshed for::
/a/b/moduleFile1.ts
/a/b/file1Consumer1.ts
/a/b/file1Consumer2.ts
/a/b/file1Consumer3.ts

Shape signatures in builder refreshed for::
/a/b/modulefile1.ts (computed .d.ts)
/a/b/file1consumer3.ts (computed .d.ts)
/a/b/file1consumer2.ts (computed .d.ts)
/a/b/file1consumer1.ts (computed .d.ts)

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/b/file1consumer1.ts:
  {}
/a/b/modulefile1.ts:
  {}
/a/b/file1consumer2.ts:
  {}
/a/b/globalfile3.ts:
  {}
/a/b/modulefile2.ts:
  {}
/a/lib/lib.d.ts:
  {}
/a/b/file1consumer3.ts: *new*
  {}

FsWatchesRecursive::
/a/b:
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/moduleFile1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = exports.T = void 0;
function Foo() { }
exports.Foo = Foo;
;


//// [/a/b/file1Consumer1.js] file written with same contents
//// [/a/b/file1Consumer2.js] file written with same contents
//// [/a/b/file1Consumer3.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moduleFile1_1 = require("./moduleFile1");
var y = (0, moduleFile1_1.Foo)();


