import{_ as e,c as i,o as t,d as l}from"./app.8a89ed53.js";const m=JSON.parse('{"title":"\u6392\u5E8F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F52\u5E76\u6392\u5E8F","slug":"\u5F52\u5E76\u6392\u5E8F","link":"#\u5F52\u5E76\u6392\u5E8F","children":[{"level":3,"title":"\u5F52\u5E76\u6392\u5E8F\u7684\u539F\u7406","slug":"\u5F52\u5E76\u6392\u5E8F\u7684\u539F\u7406","link":"#\u5F52\u5E76\u6392\u5E8F\u7684\u539F\u7406","children":[]},{"level":3,"title":"\u5F52\u5E76\u6392\u5E8F\u7684\u5B9E\u73B0","slug":"\u5F52\u5E76\u6392\u5E8F\u7684\u5B9E\u73B0","link":"#\u5F52\u5E76\u6392\u5E8F\u7684\u5B9E\u73B0","children":[]}]},{"level":2,"title":"\u5FEB\u901F\u6392\u5E8F","slug":"\u5FEB\u901F\u6392\u5E8F","link":"#\u5FEB\u901F\u6392\u5E8F","children":[{"level":3,"title":"\u5FEB\u6392\u539F\u7406","slug":"\u5FEB\u6392\u539F\u7406","link":"#\u5FEB\u6392\u539F\u7406","children":[]},{"level":3,"title":"\u5B9E\u73B0\u5FEB\u6392","slug":"\u5B9E\u73B0\u5FEB\u6392","link":"#\u5B9E\u73B0\u5FEB\u6392","children":[]}]},{"level":2,"title":"\u5F52\u5E76\u548C\u5FEB\u6392\u7684\u6BD4\u8F83","slug":"\u5F52\u5E76\u548C\u5FEB\u6392\u7684\u6BD4\u8F83","link":"#\u5F52\u5E76\u548C\u5FEB\u6392\u7684\u6BD4\u8F83","children":[]},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6","link":"#\u5176\u4ED6","children":[{"level":3,"title":"\u5728O(n)\u7684\u590D\u6742\u5EA6\u5185\uFF0C\u5BFB\u627E\u65E0\u5E8F\u6570\u7EC4\u7684\u7B2CK\u7684\u5143\u7D20","slug":"\u5728o-n-\u7684\u590D\u6742\u5EA6\u5185\uFF0C\u5BFB\u627E\u65E0\u5E8F\u6570\u7EC4\u7684\u7B2Ck\u7684\u5143\u7D20","link":"#\u5728o-n-\u7684\u590D\u6742\u5EA6\u5185\uFF0C\u5BFB\u627E\u65E0\u5E8F\u6570\u7EC4\u7684\u7B2Ck\u7684\u5143\u7D20","children":[]}]}],"relativePath":"base/algo/\u6392\u5E8F\uFF08\u4E0B\uFF09.md","lastUpdated":1662714571000}'),r={name:"base/algo/\u6392\u5E8F\uFF08\u4E0B\uFF09.md"},o=l('<h1 id="\u6392\u5E8F" tabindex="-1">\u6392\u5E8F <a class="header-anchor" href="#\u6392\u5E8F" aria-hidden="true">#</a></h1><h2 id="\u5F52\u5E76\u6392\u5E8F" tabindex="-1">\u5F52\u5E76\u6392\u5E8F <a class="header-anchor" href="#\u5F52\u5E76\u6392\u5E8F" aria-hidden="true">#</a></h2><h3 id="\u5F52\u5E76\u6392\u5E8F\u7684\u539F\u7406" tabindex="-1">\u5F52\u5E76\u6392\u5E8F\u7684\u539F\u7406 <a class="header-anchor" href="#\u5F52\u5E76\u6392\u5E8F\u7684\u539F\u7406" aria-hidden="true">#</a></h3><ul><li>\u6838\u5FC3\u601D\u60F3\u662F <strong>-&gt;</strong> \u5148\u628A\u6570\u7EC4\u4ECE\u4E2D\u95F4\u5206\u6210\u524D\u540E\u4E24\u90E8\u5206\uFF0C\u7136\u540E\u5BF9\u524D\u540E\u4E24\u90E8\u5206\u5206\u522B\u6392\u5E8F\uFF0C\u518D\u5C06\u6392\u597D\u5E8F\u7684\u4E24\u90E8\u5206\u5408\u5E76\u5728\u4E00\u8D77\uFF0C\u8FD9\u6837\u6574\u4E2A\u6570\u7EC4\u5C31\u90FD\u6709\u5E8F\u4E86</li><li>\u4F7F\u7528\u7684\u662F\u5206\u6CBB\u601D\u60F3\uFF0C\u901A\u8FC7\u9012\u5F52\u6765\u5B9E\u73B0 <strong>-&gt;</strong> <strong>\u5206\u6CBB\u662F\u4E00\u79CD\u89E3\u51B3\u95EE\u9898\u7684\u5904\u7406\u601D\u60F3\uFF0C\u9012\u5F52\u662F\u4E00\u79CD\u7F16\u7A0B\u6280\u5DE7</strong></li><li>\u8FC7\u7A0B\u56FE\uFF1A<img src="https://cdn.jsdelivr.net/gh/glows777/image-hosting@main/%E6%9D%82%E5%9B%BE/image.42l3gfoun0o0.webp" alt="image"> <img src="https://raw.githubusercontent.com/glows777/image-hosting/main/%E6%9D%82%E5%9B%BE/image.42l3gfoun0o0.webp" alt="image"></li></ul><h3 id="\u5F52\u5E76\u6392\u5E8F\u7684\u5B9E\u73B0" tabindex="-1">\u5F52\u5E76\u6392\u5E8F\u7684\u5B9E\u73B0 <a class="header-anchor" href="#\u5F52\u5E76\u6392\u5E8F\u7684\u5B9E\u73B0" aria-hidden="true">#</a></h3><ul><li>\u5F52\u5E76\u901A\u8FC7\u9012\u5F52\u6765\u5B9E\u73B0\uFF0C\u9012\u63A8\u516C\u5F0F <strong>-&gt;</strong> <code>merge_sort(p\u2026r) = merge(merge_sort(p\u2026q), merge_sort(q+1\u2026r))</code> <strong>-&gt;</strong> \u7EC8\u6B62\u6761\u4EF6 <strong>-&gt;</strong> <code>p &gt;= r \u4E0D\u7528\u518D\u7EE7\u7EED\u5206\u89E3</code></li><li>\u5176\u4E2D,merge_sort(p\u2026r) \u8868\u793A\uFF0C\u7ED9\u4E0B\u6807\u4ECE p \u5230 r \u4E4B\u95F4\u7684\u6570\u7EC4\u6392\u5E8F\u3002\u6211\u4EEC\u5C06\u8FD9\u4E2A\u6392\u5E8F\u95EE\u9898\u8F6C\u5316\u4E3A\u4E86\u4E24\u4E2A\u5B50\u95EE\u9898\uFF0Cmerge_sort(p\u2026q) \u548C merge_sort(q+1\u2026r)\uFF0C\u5176\u4E2D\u4E0B\u6807 q \u7B49\u4E8E p \u548C r \u7684\u4E2D\u95F4\u4F4D\u7F6E\uFF0C\u4E5F\u5C31\u662F (p+r)/2\u3002\u5F53\u4E0B\u6807\u4ECE p \u5230 q \u548C\u4ECE q+1 \u5230 r \u8FD9\u4E24\u4E2A\u5B50\u6570\u7EC4\u90FD\u6392\u597D\u5E8F\u4E4B\u540E\uFF0C\u6211\u4EEC\u518D\u5C06\u4E24\u4E2A\u6709\u5E8F\u7684\u5B50\u6570\u7EC4\u5408\u5E76\u5728\u4E00\u8D77\uFF0C\u8FD9\u6837\u4E0B\u6807\u4ECE p \u5230 r \u4E4B\u95F4\u7684\u6570\u636E\u5C31\u4E5F\u6392\u597D\u5E8F\u4E86\u3002</li><li>\u62C6\u5F00\u6392\u5E8F\u540E\uFF0C\u9700\u8981\u5C06\u6392\u597D\u5E8F\u7684\u5B50\u6570\u7EC4\u5408\u5E76 <strong>-&gt;</strong> <code>merge(merge(A[p...r], A[p...q], A[q+1...r]))</code></li><li><code>merge</code>\u65B9\u6CD5\u7684\u8FC7\u7A0B\u662F <ul><li>\u7533\u8BF7\u4E00\u4E2A\u4E34\u65F6\u6570\u7EC4temp\uFF08\u5927\u5C0F\u4E0E\u539F\u6570\u7EC4\u76F8\u540C\uFF09\uFF0C\u6709\u6307\u9488i\uFF0Cj\u6307\u5411\u4E24\u4E2A\u5B50\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20</li><li>\u6BD4\u8F83\uFF0C\u8C01\u5C0F\uFF0C\u8C01\u5148\u653E\u5165temp\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u6307\u9488\u5F80\u540E\u79FB</li><li>\u76F4\u5230\u5176\u4E2D\u4E00\u4E2A\u5B50\u6570\u7EC4\u4E2D\u7684\u6240\u6709\u6570\u636E\u90FD\u653E\u5165\u4E34\u65F6\u6570\u7EC4\u4E2D\uFF0C\u518D\u628A\u53E6\u4E00\u4E2A\u6570\u7EC4\u4E2D\u7684\u6570\u636E\u4F9D\u6B21\u52A0\u5165\u5230\u4E34\u65F6\u6570\u7EC4\u7684\u672B\u5C3E</li><li>\u6700\u540E\u518D\u628A\u4E34\u65F6\u6570\u7EC4 tmp \u4E2D\u7684\u6570\u636E\u62F7\u8D1D\u5230\u539F\u6570\u7EC4</li><li>ps <strong>-&gt;</strong> \u53EF\u4EE5\u5229\u7528\u54E8\u5175\u4F18\u5316 <strong>-&gt;</strong> \u5F85\u5B8C\u6210</li></ul></li><li>\u5F52\u5E76\u6392\u5E8F\u662F\u7A33\u5B9A\u7684\u6392\u5E8F\u7B97\u6CD5\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(nlogn),\u7A7A\u95F4\u590D\u6742\u5EA6\u662FO(n)</li></ul><h2 id="\u5FEB\u901F\u6392\u5E8F" tabindex="-1">\u5FEB\u901F\u6392\u5E8F <a class="header-anchor" href="#\u5FEB\u901F\u6392\u5E8F" aria-hidden="true">#</a></h2><h3 id="\u5FEB\u6392\u539F\u7406" tabindex="-1">\u5FEB\u6392\u539F\u7406 <a class="header-anchor" href="#\u5FEB\u6392\u539F\u7406" aria-hidden="true">#</a></h3><ul><li>\u6838\u5FC3\u601D\u60F3 <strong>-&gt;</strong> \u5982\u679C\u8981\u6392\u5E8F\u6570\u7EC4\u4E2D\u4E0B\u6807\u4ECE p \u5230 r \u4E4B\u95F4\u7684\u4E00\u7EC4\u6570\u636E\uFF0C\u6211\u4EEC\u9009\u62E9 p \u5230 r \u4E4B\u95F4\u7684\u4EFB\u610F\u4E00\u4E2A\u6570\u636E\u4F5C\u4E3A pivot\uFF08\u5206\u533A\u70B9\uFF09</li><li>\u904D\u5386 p \u5230 r \u4E4B\u95F4\u7684\u6570\u636E\uFF0C\u5C06\u5C0F\u4E8E pivot \u7684\u653E\u5230\u5DE6\u8FB9\uFF0C\u5C06\u5927\u4E8E pivot \u7684\u653E\u5230\u53F3\u8FB9\uFF0C\u5C06 pivot \u653E\u5230\u4E2D\u95F4\u3002\u7ECF\u8FC7\u8FD9\u4E00\u6B65\u9AA4\u4E4B\u540E\uFF0C\u6570\u7EC4 p \u5230 r \u4E4B\u95F4\u7684\u6570\u636E\u5C31\u88AB\u5206\u6210\u4E86\u4E09\u4E2A\u90E8\u5206\uFF0C\u524D\u9762 p \u5230 q-1 \u4E4B\u95F4\u90FD\u662F\u5C0F\u4E8E pivot \u7684\uFF0C\u4E2D\u95F4\u662F pivot\uFF0C\u540E\u9762\u7684 q+1 \u5230 r \u4E4B\u95F4\u662F\u5927\u4E8E pivot \u7684</li><li>\u7528\u9012\u5F52\u6392\u5E8F\u4E0B\u6807\u4ECE p \u5230 q-1 \u4E4B\u95F4\u7684\u6570\u636E\u548C\u4E0B\u6807\u4ECE q+1 \u5230 r \u4E4B\u95F4\u7684\u6570\u636E\uFF0C\u76F4\u5230\u533A\u95F4\u7F29\u5C0F\u4E3A 1\uFF0C\u5C31\u8BF4\u660E\u6240\u6709\u7684\u6570\u636E\u90FD\u6709\u5E8F\u4E86</li><li>\u5B9E\u73B0\u8FC7\u7A0B\uFF1A<img src="https://cdn.jsdelivr.net/gh/glows777/image-hosting@main/%E6%9D%82%E5%9B%BE/image.5n5tntuty300.webp" alt="image"></li></ul><h3 id="\u5B9E\u73B0\u5FEB\u6392" tabindex="-1">\u5B9E\u73B0\u5FEB\u6392 <a class="header-anchor" href="#\u5B9E\u73B0\u5FEB\u6392" aria-hidden="true">#</a></h3><ul><li>\u9012\u63A8\u7684\u516C\u5F0F <strong>-&gt;</strong> <code>quick_sort(p\u2026r) = quick_sort(p\u2026q-1) + quick_sort(q+1\u2026 r)</code>,\u7EC8\u6B62\u6761\u4EF6\u662F<code>p &gt;= r</code></li><li>\u8FD9\u4E2A\u8FC7\u7A0B\u9700\u8981\u4E00\u4E2A\u5206\u533A\u51FD\u6570partition()\uFF0C\u7528\u4E8E\u968F\u673A\u9009\u62E9\u4E00\u4E2A\u5143\u7D20\u4F5C\u4E3Apivot\uFF0C\u7136\u540E\u5BF9\u6570\u7EC4\u8FDB\u884C\u5206\u533A\uFF0C\u51FD\u6570\u8FD4\u56DE pivot \u7684\u4E0B\u6807</li><li>partition()\u65B9\u6CD5 <strong>-&gt;</strong> \u6570\u7EC4\u8981\u6C42\u539F\u5730\u5206\u533A\u64CD\u4F5C <ul><li>\u901A\u8FC7\u6307\u9488 i \u628A\u6570\u7EC4\u5206\u6210\u4E24\u90E8\u5206\u3002p\u5230i-1 \u7684\u5143\u7D20\u90FD\u662F\u5C0F\u4E8E pivot \u7684\uFF0C\u6682\u4E14\u53EB\u5B83\u201C\u5DF2\u5904\u7406\u533A\u95F4\u201D\uFF0Ci\u5230r-1 \u662F\u201C\u672A\u5904\u7406\u533A\u95F4\u201D\u3002\u6211\u4EEC\u6BCF\u6B21\u90FD\u4ECE\u672A\u5904\u7406\u7684\u533A\u95F4\u4E2D\u53D6\u4E00\u4E2A\u5143\u7D20 <code>A[j]</code>\uFF0C\u4E0E pivot \u5BF9\u6BD4\uFF0C\u5982\u679C\u5C0F\u4E8E pivot\uFF0C\u5219\u5C06\u5176\u52A0\u5165\u5230\u5DF2\u5904\u7406\u533A\u95F4\u7684\u5C3E\u90E8\uFF0C\u4E5F\u5C31\u662F <code>A[i]</code>\u7684\u4F4D\u7F6E <strong>-&gt;</strong> \u8FD9\u6837\u9700\u8981\u6BCF\u6B21\u90FD\u642C\u79FB\u6570\u7EC4 <strong>-&gt;</strong> \u501F\u52A9\u6570\u7EC4\u63D2\u5165\u64CD\u4F5C\u7684\u53EA\u9700\u8981\u4EA4\u6362\u8FD9\u4E2A\u6280\u5DE7\u7684\u601D\u60F3\u4F18\u5316\uFF1A</li><li>\u53EA\u9700\u8981\u5C0F\u4E8E\u65F6\uFF0C\u5C06<code>A[i]</code>\u4E0E <code>A[j]</code>\u4EA4\u6362\uFF0C\u5C31\u53EF\u4EE5\u5728 O(1) \u65F6\u95F4\u590D\u6742\u5EA6\u5185\u5C06 <code>A[j]</code>\u653E\u5230\u4E0B\u6807\u4E3A i \u7684\u4F4D\u7F6E\uFF0C\u8FC7\u7A0B\u5982\u56FE\uFF1A<img src="https://cdn.jsdelivr.net/gh/glows777/image-hosting@main/%E6%9D%82%E5%9B%BE/image.3ks6z6jr0ti0.webp" alt="image"></li><li><code>i</code>\u7528\u4E8E\u8BB0\u5F55\u5DF2\u5904\u7406\u533A\u95F4\u7684\u4E0B\u4E00\u4F4D(\u6BCF\u4E00\u6B21\u4EA4\u6362\u5B8C <strong>-&gt;</strong> \u627E\u5230\u4E0B\u4E00\u4E2A\u5C0F\u4E8Epivot\u7684\u503C \uFF0C\u5C31\u8981\u66F4\u65B0\u5DF2\u5904\u7406\u533A\u95F4\u4E0B\u4E00\u4F4D\u7684\u4F4D\u7F6E)\uFF0C<code>j</code>\u7528\u4E8E\u904D\u5386\u6570\u7EC4</li><li>\u5FEB\u6392\u662F\u4E00\u4E2A\u4E0D\u7A33\u5B9A\u7684\u6392\u5E8F\u7B97\u6CD5\uFF0C\u539F\u5730\u6392\u5E8F\u7B97\u6CD5\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u662FO(nlogn)\uFF0C\u6700\u574F\u7684\u60C5\u51B5\u4F1A\u53D8\u6210n2 <strong>-&gt;</strong> \u4F8B\u5982\uFF1A</li><li>\u5982\u679C\u6570\u7EC4\u4E2D\u7684\u6570\u636E\u539F\u6765\u5DF2\u7ECF\u662F\u6709\u5E8F\u7684\u4E86\uFF0C\u6BD4\u5982 1\uFF0C3\uFF0C5\uFF0C6\uFF0C8\u3002\u5982\u679C\u6211\u4EEC\u6BCF\u6B21\u9009\u62E9\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u4F5C\u4E3A pivot\uFF0C\u90A3\u6BCF\u6B21\u5206\u533A\u5F97\u5230\u7684\u4E24\u4E2A\u533A\u95F4\u90FD\u662F\u4E0D\u5747\u7B49\u7684\u3002\u6211\u4EEC\u9700\u8981\u8FDB\u884C\u5927\u7EA6 n \u6B21\u5206\u533A\u64CD\u4F5C\uFF0C\u624D\u80FD\u5B8C\u6210\u5FEB\u6392\u7684\u6574\u4E2A\u8FC7\u7A0B\u3002\u6BCF\u6B21\u5206\u533A\u6211\u4EEC\u5E73\u5747\u8981\u626B\u63CF\u5927\u7EA6 n/2 \u4E2A\u5143\u7D20\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5FEB\u6392\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u5C31\u4ECE O(nlogn) \u9000\u5316\u6210\u4E86 O(n2)\u3002</li></ul></li></ul><h2 id="\u5F52\u5E76\u548C\u5FEB\u6392\u7684\u6BD4\u8F83" tabindex="-1">\u5F52\u5E76\u548C\u5FEB\u6392\u7684\u6BD4\u8F83 <a class="header-anchor" href="#\u5F52\u5E76\u548C\u5FEB\u6392\u7684\u6BD4\u8F83" aria-hidden="true">#</a></h2><ul><li>\u76F8\u540C\u70B9\u90FD\u662F\u9012\u5F52\u5B9E\u73B0\uFF0C\u9012\u63A8\u516C\u5F0F\u76F8\u4F3C</li><li>\u5F52\u5E76\u6392\u5E8F\u7684\u5904\u7406\u8FC7\u7A0B\u662F\u7531\u4E0B\u5230\u4E0A\u7684\uFF0C\u5148\u5904\u7406\u5B50\u95EE\u9898\uFF0C\u7136\u540E\u518D\u5408\u5E76\u3002\u800C\u5FEB\u6392\u6B63\u597D\u76F8\u53CD\uFF0C\u5B83\u7684\u5904\u7406\u8FC7\u7A0B\u662F\u7531\u4E0A\u5230\u4E0B\u7684\uFF0C\u5148\u5206\u533A\uFF0C\u7136\u540E\u518D\u5904\u7406\u5B50\u95EE\u9898\u3002</li><li>\u5F52\u5E76\u6392\u5E8F\u867D\u7136\u662F\u7A33\u5B9A\u7684\u3001\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(nlogn) \u7684\u6392\u5E8F\u7B97\u6CD5\uFF0C\u4F46\u662F\u5B83\u662F\u975E\u539F\u5730\u6392\u5E8F\u7B97\u6CD5\uFF0C\u6240\u4EE5\u8FD0\u7528\u573A\u666F\u76F8\u5F53\u4E8E\u5FEB\u901F\u6392\u5E8F\uFF0C\u8F83\u5C0F</li></ul><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><h3 id="\u5728o-n-\u7684\u590D\u6742\u5EA6\u5185\uFF0C\u5BFB\u627E\u65E0\u5E8F\u6570\u7EC4\u7684\u7B2Ck\u7684\u5143\u7D20" tabindex="-1">\u5728O(n)\u7684\u590D\u6742\u5EA6\u5185\uFF0C\u5BFB\u627E\u65E0\u5E8F\u6570\u7EC4\u7684\u7B2CK\u7684\u5143\u7D20 <a class="header-anchor" href="#\u5728o-n-\u7684\u590D\u6742\u5EA6\u5185\uFF0C\u5BFB\u627E\u65E0\u5E8F\u6570\u7EC4\u7684\u7B2Ck\u7684\u5143\u7D20" aria-hidden="true">#</a></h3><ul><li>\u53C2\u8003\u81EA\u5FEB\u6392\u7684\u601D\u60F3 <strong>-&gt;</strong> \u5206\u533A</li><li>\u9009\u62E9\u6570\u7EC4\u533A\u95F4<code>A[0...n-1]</code>\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20 <code>A[n-1]</code>\u4F5C\u4E3A pivot\uFF0C\u5BF9\u6570\u7EC4 <code>A[0...n-1]</code>\u539F\u5730\u5206\u533A\uFF0C\u8FD9\u6837\u6570\u7EC4\u5C31\u5206\u6210\u4E86\u4E09\u90E8\u5206\uFF0C<code>A[0...p-1]</code>\u3001<code>A[p]</code>\u3001<code>A[p+1...n-1]</code>\u3002</li><li>\u5982\u679C p+1=K\uFF0C\u90A3 <code>A[p]</code>\u5C31\u662F\u8981\u6C42\u89E3\u7684\u5143\u7D20\uFF1B\u5982\u679C K&gt;p+1, \u8BF4\u660E\u7B2C K \u5927\u5143\u7D20\u51FA\u73B0\u5728 <code>A[p+1...n-1]</code>\u533A\u95F4\uFF0C\u518D\u6309\u7167\u4E0A\u9762\u7684\u601D\u8DEF\u9012\u5F52\u5730\u5728 <code>A[p+1...n-1]</code>\u8FD9\u4E2A\u533A\u95F4\u5185\u67E5\u627E\u3002\u540C\u7406\uFF0C\u5982\u679C K&lt;p+1\uFF0C\u90A3\u6211\u4EEC\u5C31\u5728 <code>A[0...p-1]</code>\u533A\u95F4\u67E5\u627E</li></ul>',16),n=[o];function a(d,s,g,c,h,p){return t(),i("div",null,n)}const _=e(r,[["render",a]]);export{m as __pageData,_ as default};
