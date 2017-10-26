# 修改

1. 增加Overwrite文章的发表时间。
   * 在文章顶部增加`<!-- datetime: YYYY-mm-dd HH:MM:SS -->`用于替换issue的created_at，迁移博客可以用到。

# AcyOrt

A Node.js blog tool powered by GitHub. Write you blog on `GitHub issue`

## Features

- Quick install and simple config
- Write blog on github issues
- Muti-authors support
- Simple themes development(width livereload)
- Json output support
- Scripts support
- Ci auto deploy support

## Demo

http://acyort.am0200.com/

## Install

```bash
$ sudo npm install acyort -g
```

## Usage

### create

```bash
$ acyort init blog
```

or 

```bash
$ cd blog
$ acyort init
```

### config

modify `config.yml`

### build

```bash
$ acyort build
```

### publish

all generated html files are saved in the `'public_dir'` you define in `config.yml`. 

you can publish them to wherever you like.

### local test server

```bash
$ acyort server
```

or

```bash
$ acyort server [port]
```

local server: `http://127.0.0.1:2222`

> width liveReload
          
set `dev: true` in `config.yml`

### clean

clean the generated files

```bash
acyort clean
```

## Development

### build

```bash
$ npm run build
```

### test

local test server width LiveReload

```bash
$ npm start
```

### clean

clean the generated files

```bash
$ npm run clean
```

## Todo

- unit test
- the website

## License

MIT

## Relate

![acyort](https://cloud.githubusercontent.com/assets/2193211/23157548/b3ebe872-f856-11e6-9859-d173c7905dcb.jpg)

