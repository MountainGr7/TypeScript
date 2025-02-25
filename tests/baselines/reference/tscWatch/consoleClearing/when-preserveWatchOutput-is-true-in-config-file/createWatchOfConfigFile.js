currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/f.ts]


//// [/tsconfig.json]
{"compilerOptions":{"preserveWatchOutput":true}}

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


/a/lib/tsc.js --w -p /tsconfig.json
Output::
>> Screen clear
[[90m12:00:13 AM[0m] Starting compilation in watch mode...

[[90m12:00:16 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/f.ts","/a/lib/lib.d.ts"]
Program options: {"preserveWatchOutput":true,"configFilePath":"/tsconfig.json"}
Program structureReused: Not
Program files::
/f.ts
/a/lib/lib.d.ts

Semantic diagnostics in builder refreshed for::
/f.ts
/a/lib/lib.d.ts

Shape signatures in builder refreshed for::
/f.ts (used version)
/a/lib/lib.d.ts (used version)

FsWatches::
/tsconfig.json: *new*
  {}
/f.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/f.js]



Change:: Comment added to file f

Input::
//// [/f.ts]
//


Output::
[[90m12:00:19 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:23 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/f.ts","/a/lib/lib.d.ts"]
Program options: {"preserveWatchOutput":true,"configFilePath":"/tsconfig.json"}
Program structureReused: Completely
Program files::
/f.ts
/a/lib/lib.d.ts

Semantic diagnostics in builder refreshed for::
/f.ts

Shape signatures in builder refreshed for::
/f.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

//// [/f.js]
//


