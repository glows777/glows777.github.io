import{_ as t,c as e,o as l,d as i}from"./app.f03f6dba.js";const _=JSON.parse('{"title":"http\u7684\u5404\u4E2A\u7248\u672C\u533A\u522B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53D1\u5C55\u5386\u53F2","slug":"\u53D1\u5C55\u5386\u53F2","link":"#\u53D1\u5C55\u5386\u53F2","children":[{"level":3,"title":"HTTP0.9","slug":"http0-9","link":"#http0-9","children":[]},{"level":3,"title":"HTTP1.0","slug":"http1-0","link":"#http1-0","children":[]},{"level":3,"title":"HTTP1.1","slug":"http1-1","link":"#http1-1","children":[]},{"level":3,"title":"HTTP2","slug":"http2","link":"#http2","children":[]},{"level":3,"title":"\u6309\u4E0B\u7F51\u5740\u4E4B\u540E\uFF0C\u53D1\u751F\u4E86\u4EC0\u4E48","slug":"\u6309\u4E0B\u7F51\u5740\u4E4B\u540E\uFF0C\u53D1\u751F\u4E86\u4EC0\u4E48","link":"#\u6309\u4E0B\u7F51\u5740\u4E4B\u540E\uFF0C\u53D1\u751F\u4E86\u4EC0\u4E48","children":[]}]}],"relativePath":"base/Network/http.md","lastUpdated":1670813510000}'),a={name:"base/Network/http.md"},h=i('<h1 id="http\u7684\u5404\u4E2A\u7248\u672C\u533A\u522B" tabindex="-1">http\u7684\u5404\u4E2A\u7248\u672C\u533A\u522B <a class="header-anchor" href="#http\u7684\u5404\u4E2A\u7248\u672C\u533A\u522B" aria-hidden="true">#</a></h1><h2 id="\u53D1\u5C55\u5386\u53F2" tabindex="-1">\u53D1\u5C55\u5386\u53F2 <a class="header-anchor" href="#\u53D1\u5C55\u5386\u53F2" aria-hidden="true">#</a></h2><h3 id="http0-9" tabindex="-1">HTTP0.9 <a class="header-anchor" href="#http0-9" aria-hidden="true">#</a></h3><ul><li>\u7EAF\u6587\u672C\uFF0C\u53EA\u80FD\u7528get\u8BF7\u6C42\uFF0C\u54CD\u5E94\u8BF7\u6C42\u540E\u5C31\u4F1A\u5173\u95ED\u8FDE\u63A5</li></ul><h3 id="http1-0" tabindex="-1">HTTP1.0 <a class="header-anchor" href="#http1-0" aria-hidden="true">#</a></h3><ul><li>\u589E\u52A0\u4E86HEAD\uFF0CPOST\u7B49\u65B9\u6CD5\uFF0C\u4EE5\u53CA\u54CD\u5E94\u72B6\u6001\u7801\uFF0C\u7528\u4E8E\u6807\u8BB0\u9519\u4F4D\u7684\u539F\u56E0</li><li>\u52A0\u5165\u534F\u8BAE\u7248\u672C\u53F7\uFF0C<code>http header</code>\u5934\u90E8\u7684\u6982\u5FF5</li><li>\u4F20\u8F93\u7684\u6570\u636E\u4E0D\u5728\u53EA\u6709\u6587\u672C</li></ul><h3 id="http1-1" tabindex="-1">HTTP1.1 <a class="header-anchor" href="#http1-1" aria-hidden="true">#</a></h3><ul><li>\u589E\u52A0\u4E86 PUT\u3001DELETE \u7B49\u65B0\u7684\u65B9\u6CD5\uFF0C\u4EE5\u53CA\u7F13\u5B58\u7BA1\u7406\u548C\u63A7\u5236\uFF0C\u5141\u8BB8\u6301\u4E45\u8FDE\u63A5</li><li>\u5141\u8BB8\u6570\u636E\u5206\u5757\uFF0C\u6709\u5229\u4E8E\u5927\u6587\u4EF6\u4F20\u8F93</li><li>\u5F3A\u5236\u8981\u6C42 Host \u5934\uFF0C\u8BA9\u4E92\u8054\u7F51\u4E3B\u673A\u6258\u7BA1\u6210\u4E3A\u53EF\u80FD</li></ul><h3 id="http2" tabindex="-1">HTTP2 <a class="header-anchor" href="#http2" aria-hidden="true">#</a></h3><ul><li>\u89C4\u5B9A\u4EE5\u540EHTTP\u7684\u7248\u672C\u53EA\u6709\u5927\u7248\u672C\uFF0C\u4E0D\u518D\u6709<code>x.x</code>\u7684\u7248\u672C\u53F7</li><li>\u91C7\u7528\u4E8C\u8FDB\u5236\u534F\u8BAE\uFF0C\u4E0D\u518D\u662F\u7EAF\u6587\u672C</li><li>\u53EF\u53D1\u8D77\u591A\u4E2A\u8BF7\u6C42\uFF0C\u5E9F\u5F03http1.1\u4E2D\u7684\u7BA1\u9053\uFF0C\u5F15\u5165\u6D41\u548C\u5E27\u7684\u6982\u5FF5</li><li>\u91C7\u7528\u4E13\u7528\u7684\u5934\u90E8\u538B\u7F29\u7B97\u6CD5\uFF0C\u51CF\u5C0F\u6570\u636E\u4F20\u8F93\u91CF</li><li>\u5141\u8BB8\u670D\u52A1\u5668\u4E3B\u52A8\u5411\u5BA2\u6237\u7AEF\u63A8\u9001\u6570\u636E\uFF0C\u540C\u65F6\uFF0C\u8981\u6C42\u52A0\u5BC6\u901A\u4FE1\uFF08https\uFF09</li></ul><h3 id="\u6309\u4E0B\u7F51\u5740\u4E4B\u540E\uFF0C\u53D1\u751F\u4E86\u4EC0\u4E48" tabindex="-1">\u6309\u4E0B\u7F51\u5740\u4E4B\u540E\uFF0C\u53D1\u751F\u4E86\u4EC0\u4E48 <a class="header-anchor" href="#\u6309\u4E0B\u7F51\u5740\u4E4B\u540E\uFF0C\u53D1\u751F\u4E86\u4EC0\u4E48" aria-hidden="true">#</a></h3><ul><li>\u9996\u5148\u662FDNS\u89E3\u6790\uFF08\u57DF\u540D -&gt; ip\u5730\u5740\uFF09</li><li>\u968F\u540E\u662FTCP\u4E09\u6B21\u63E1\u624B\uFF0C\u5EFA\u7ACB\u8FDE\u63A5</li><li>\u53D1\u9001HTTP\u8BF7\u6C42</li><li>\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u4E3A\u51CF\u5C11\u54CD\u5E94\u65F6\u95F4\uFF0C\u4F1A\u5728\u6574\u4E2A\u8FC7\u7A0B\u7684\u591A\u4E2A\u73AF\u8282\u8BBE\u7F6E\u7F13\u5B58 <ul><li>\u5728DNS\u89E3\u6790\u8FC7\u7A0B\u4E2D\uFF0CDNS \u89E3\u6790\u53EF\u80FD\u4F1A\u7ED9\u51FA CDN \u670D\u52A1\u5668\u7684 IP \u5730\u5740\uFF0C\u8FD9\u6837HTTP\u8BF7\u6C42\u5C31\u4E0D\u9700\u8981\u53D1\u9001\u5230\u670D\u52A1\u5668\uFF0CCDN\u5C31\u53EF\u4EE5\u76F4\u63A5\u54CD\u5E94\u8BF7\u6C42</li><li>\u5728\u54CD\u5E94\u8BF7\u6C42\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u8D1F\u8F7D\u5747\u8861\u8BBE\u5907\u4F1A\u5148\u8BBF\u95EE\u7CFB\u7EDF\u91CC\u7684\u7F13\u5B58\u670D\u52A1\u5668\uFF0C\u901A\u5E38\u6709 memory \u7EA7\u7F13\u5B58 Redis \u548C disk \u7EA7\u7F13\u5B58 Varnish\uFF0C\u5B83\u4EEC\u7684\u4F5C\u7528\u4E0E CDN \u7C7B\u4F3C\uFF0C\u4E0D\u8FC7\u662F\u5DE5\u4F5C\u5728\u5185\u90E8\u7F51\u7EDC\u91CC\uFF0C\u628A\u6700\u9891\u7E41\u8BBF\u95EE\u7684\u6570\u636E\u7F13\u5B58\u51E0\u79D2\u949F\u6216\u51E0\u5206\u949F\uFF0C\u51CF\u8F7B\u540E\u7AEF\u5E94\u7528\u670D\u52A1\u5668\u7684\u538B\u529B</li></ul></li></ul>',12),r=[h];function d(n,s,c,p,o,T){return l(),e("div",null,r)}const P=t(a,[["render",d]]);export{_ as __pageData,P as default};
