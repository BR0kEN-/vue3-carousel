import{_ as a,c as i,a0 as t,o as e}from"./chunks/framework.CH_Jd00V.js";const c=JSON.parse('{"title":"Data","description":"","frontmatter":{},"headers":[],"relativePath":"api/data.md","filePath":"api/data.md"}'),l={name:"api/data.md"};function n(d,s,h,p,r,k){return e(),i("div",null,s[0]||(s[0]=[t(`<h1 id="data" tabindex="-1">Data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;Data&quot;">​</a></h1><p>To use the data values, add a reference to the carousel element and then get the values from the data property.</p><p>Example:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">Carousel</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myCarousel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; ... &lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">Carousel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myCarousel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Data can be accessed under data property</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (myCarousel.data.currentSlide </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Do your magic here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span></code></pre></div><h2 id="available-data" tabindex="-1">Available Data <a class="header-anchor" href="#available-data" aria-label="Permalink to &quot;Available Data&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Data</th><th>Description</th></tr></thead><tbody><tr><td><code>config</code></td><td>the current carousel configuration</td></tr><tr><td><code>slidesCount</code></td><td>slides total count</td></tr><tr><td><code>slideWidth</code></td><td>single slide width</td></tr><tr><td><code>currentSlide</code></td><td>current slide index</td></tr><tr><td><code>maxSlide</code></td><td>maximum slide index</td></tr><tr><td><code>minSlide</code></td><td>minimum slide index</td></tr><tr><td><code>middleSlide</code></td><td>middle slide index</td></tr></tbody></table>`,7)]))}const E=a(l,[["render",n]]);export{c as __pageData,E as default};
