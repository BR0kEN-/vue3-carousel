import{_ as e,c as a,o as s,a as l}from"./app.28b85194.js";const D=JSON.parse('{"title":"Methods","description":"","frontmatter":{},"headers":[{"level":2,"title":"slideTo(index: number)","slug":"slideto-index-number","link":"#slideto-index-number","children":[]},{"level":2,"title":"next()","slug":"next","link":"#next","children":[]},{"level":2,"title":"prev()","slug":"prev","link":"#prev","children":[]},{"level":2,"title":"updateSlideWidth()","slug":"updateslidewidth","link":"#updateslidewidth","children":[]},{"level":2,"title":"updateSlidesBuffer()","slug":"updateslidesbuffer","link":"#updateslidesbuffer","children":[]},{"level":2,"title":"updateBreakpointsConfigs()","slug":"updatebreakpointsconfigs","link":"#updatebreakpointsconfigs","children":[]},{"level":2,"title":"updateSlidesData()","slug":"updateslidesdata","link":"#updateslidesdata","children":[]},{"level":2,"title":"initCarousel()","slug":"initcarousel","link":"#initcarousel","children":[]},{"level":2,"title":"restartCarousel()","slug":"restartcarousel","link":"#restartcarousel","children":[]},{"level":2,"title":"updateCarousel()","slug":"updatecarousel","link":"#updatecarousel","children":[]}],"relativePath":"api/methods.md"}'),t={name:"api/methods.md"},n=l(`<h1 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h1><p>To use the API methods, add a reference to the carousel element and then call methods from that reference.</p><p>Example:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Carousel</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myCarousel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Carousel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myCarousel </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Methods are available in this reference</span></span>
<span class="line"><span style="color:#A6ACCD;">myCarousel</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">myCarousel</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">updateSlideWidth</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="slideto-index-number" tabindex="-1">slideTo(index: number) <a class="header-anchor" href="#slideto-index-number" aria-hidden="true">#</a></h2><p>Slide to specific slide index</p><h2 id="next" tabindex="-1">next() <a class="header-anchor" href="#next" aria-hidden="true">#</a></h2><p>Slide to the next slide</p><h2 id="prev" tabindex="-1">prev() <a class="header-anchor" href="#prev" aria-hidden="true">#</a></h2><p>Slide to the previous slide</p><h2 id="updateslidewidth" tabindex="-1">updateSlideWidth() <a class="header-anchor" href="#updateslidewidth" aria-hidden="true">#</a></h2><p>Update <code>slideWidth</code> value based on <code>itemsToShow</code> and the current carousel width</p><h2 id="updateslidesbuffer" tabindex="-1">updateSlidesBuffer() <a class="header-anchor" href="#updateslidesbuffer" aria-hidden="true">#</a></h2><p>Update <code>slidesBuffer</code> array which keep of the slides order, used mainly when <code>wrapAround</code> is <em>true</em></p><h2 id="updatebreakpointsconfigs" tabindex="-1">updateBreakpointsConfigs() <a class="header-anchor" href="#updatebreakpointsconfigs" aria-hidden="true">#</a></h2><p>Update the current carousel configs based on <code>breakpoints</code> settings and screen width</p><h2 id="updateslidesdata" tabindex="-1">updateSlidesData() <a class="header-anchor" href="#updateslidesdata" aria-hidden="true">#</a></h2><p>Update all the slide related date includes:</p><ul><li><code>currentSlideIndex</code></li><li><code>middleSlide</code></li><li><code>maxSlide</code></li><li><code>minSlide</code></li></ul><h2 id="initcarousel" tabindex="-1">initCarousel() <a class="header-anchor" href="#initcarousel" aria-hidden="true">#</a></h2><p>Init the carousel configs, internally it calls:</p><ul><li><code>initDefaultConfigs</code></li></ul><h2 id="restartcarousel" tabindex="-1">restartCarousel() <a class="header-anchor" href="#restartcarousel" aria-hidden="true">#</a></h2><p>Restart the carousel settings and data, internally it calls:</p><ul><li><code>initDefaultConfigs</code></li><li><code>resetAutoplay</code></li><li><code>updateBreakpointsConfigs</code></li><li><code>updateSlidesBuffer</code></li><li><code>updateSlidesData</code></li><li><code>updateSlideWidth</code></li></ul><h2 id="updatecarousel" tabindex="-1">updateCarousel() <a class="header-anchor" href="#updatecarousel" aria-hidden="true">#</a></h2><p>Update the carousel and slides data, it invokes after each slider slide, internally it calls:</p><ul><li><code>updateSlidesData</code></li><li><code>updateSlidesBuffer</code></li></ul>`,29),d=[n];function i(o,r,p,c,u,h){return s(),a("div",null,d)}const y=e(t,[["render",i]]);export{D as __pageData,y as default};
