umi-tool支持3个命令,`build` `rollup` `test`,这是一个古老的包，最新更新是在4年前，来看看它的结构设计，

```text
├── CHANGELOG.md
├── LICENSE
├── README.md
├── cli.js
├── doc.md
├── package.json
├── src
│   ├── build.js
│   ├── rollup.js
│   ├── test.js
│   └── utils
│       ├── log.js
│       └── parseGlobals.js
└── yarn.lock
```

## build-用babel打包

1. 以lerna.json判断是否是lerna多包管理
2. 执行build方法
3. `assert`对必须文件已经属性进行判断，
4. 确定输入、输出目录。移除输出目录
5. 创建`stream`文件，使用`vinyl-fs`包，管道化处理。
6. 使用`slash`处理`path`，`slash2`可以在window和linux上的路径保持一致
7. 使用`babel`api的方式转化代码
8. 输出到目标目录，处理watch的情况`chokidar`
9. `through2`

## rollup-用rollup打包
没有进行打包，都是commonjs的形式。
