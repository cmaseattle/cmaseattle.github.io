cmaseattle.github.io
====================

The technical blog of [Creative Media Alliance](http://creativemediaalliance.com/) based out of Seattle, WA. View it at [cmaseattle.github.io](http://cmaseattle.github.io/)

**Sources:**

* Jekyll Starter Template from [cmaseattle/jekyll-starter-template](https://github.com/cmaseattle/jekyll-starter-template)
* RSS feed from [snaptortoise](https://github.com/snaptortoise/jekyll-rss-feeds).
* Some patterns from [Subtle Patterns](www.subtlepatterns.com)

##Contributing

If you would like to contribute to the blog please fork and pull. To build the repository locally you'll need jekyll and npm installed.

**1. Clone Repository**

```
git clone git@github.com:cmaseattle/cmaseattle.github.io.git
cd cmaseattle.github.io
```

**2. Install package dependencies**

```
cd src
npm install
```

check to see if things are working correctly by:

```
grunt
```

response should be similar to:

```
Sam-Matthews:src sammatthews$ grunt 
Running "less:src" (less) task
File ../css/main.css created.

Done, without errors.
Sam-Matthews:src sammatthews$
```

**3. Build Jekyll and host locally**

```
cd ..
jekyll serve --watch
```

site should be running properly at `localhost:4000`

*Happy Tech Blogging!*
