import{_ as l,r as a,o as n,c as r,e as d,b as e,d as t,a as o}from"./app.30a6e44c.js";const s={},u=e("h2",{id:"flux-v1-\u6846\u67B6\u6982\u89C8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flux-v1-\u6846\u67B6\u6982\u89C8","aria-hidden":"true"},"#"),t(" Flux V1 \u6846\u67B6\u6982\u89C8")],-1),h=o('<h3 id="\u4EA4\u4ED8\u670D\u52A1\u548Csdk" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u4ED8\u670D\u52A1\u548Csdk" aria-hidden="true">#</a> \u4EA4\u4ED8\u670D\u52A1\u548CSDK</h3><ul><li>PoCW \u670D\u52A1\uFF1AMiner \u955C\u50CF\uFF0CValidator \u955C\u50CF\uFF0C\u4EE5\u53CA Consensus \u955C\u50CF</li><li>SDK \u4F30\u8BA1\u6CA1\u65F6\u95F4\u505A\uFF0C\u76F4\u63A5\u8C03\u7528\u76F8\u5173 API</li></ul><h3 id="\u5916\u90E8\u7B2C\u4E09\u65B9\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5916\u90E8\u7B2C\u4E09\u65B9\u63A5\u53E3" aria-hidden="true">#</a> \u5916\u90E8\u7B2C\u4E09\u65B9\u63A5\u53E3</h3><ul><li>Miner\uFF1A\u4E3B\u8981\u8D1F\u8D23\u4E24\u79CD\u6848\u4F8B\uFF0C\u6570\u636E\u63D0\u4EA4\u7C7B\uFF0C\u670D\u52A1\u63D0\u4F9B\u7C7B (\u542B Agent) <ul><li>\u63D0\u4F9B\u6570\u636E\u4E0A\u4F20\u670D\u52A1\uFF0C\u4E0D\u7BA1\u6570\u636E\u91C7\u96C6 Miner \u7B2C\u4E09\u65B9\u81EA\u5B9A\u4E49</li><li>\u670D\u52A1\u7C7B\u578B\uFF0C\u76F4\u63A5\u4E0A\u4F20\u670D\u52A1\u8FD4\u56DE\u7684\u7ED3\u679C\uFF0C\u670D\u52A1/Agent \u6316\u77FF\u7A0B\u5E8F \u7B2C\u4E09\u65B9\u81EA\u5B9A\u4E49</li></ul></li><li>Consensus Validator: <ul><li>\u4E3B\u8981\u9700\u8981\u66B4\u9732\u7528\u4E8E\u8D28\u91CF\u8BC4\u4F30\u8F85\u52A9\u7A0B\u5E8F\uFF0C\u7B2C\u4E09\u65B9\u81EA\u5B9A\u4E49\u3002</li></ul></li><li>SBT: <ul><li>\u7B2C\u4E09\u65B9\u7528\u6237\u521B\u5EFA\u5728 HPC \u4E0A\u5173\u8054\u521B\u5EFA SBT</li></ul></li></ul><h3 id="notice" tabindex="-1"><a class="header-anchor" href="#notice" aria-hidden="true">#</a> Notice</h3><ul><li>\u63D0\u4F9B\u7EDF\u4E00\u6846\u67B6\uFF0C\u6682\u4E0D\u7BA1\u5DF2\u5B9E\u73B0\u7684\u4E1A\u52A1\u3002 \uFF08\u4F8B\u5982\u73B0\u5DF2\u5B9E\u73B0\u7684\u8F6C\u63A8\u9A8C\u8BC1\uFF0C\u9700\u8981\u6309\u7167 V1 \u7248\u672C\u65B9\u5F0F\u8FDB\u884C\u96C6\u6210\u5B9E\u73B0\u65B9\u53EF\u4F7F\u7528\uFF09</li></ul><h2 id="key-\u670D\u52A1\u62C6\u5206" tabindex="-1"><a class="header-anchor" href="#key-\u670D\u52A1\u62C6\u5206" aria-hidden="true">#</a> KEY \u670D\u52A1\u62C6\u5206</h2><ul><li>POCW \u4E3B\u6D41\u7A0B\u5171\u8BC6\u52A0\u9A8C\u8BC1\u6295\u7968\uFF08validator/ miner\uFF09 <ul><li>\u62C6\u5206\u8D28\u91CF\u8BC4\u4F30\u63A5\u53E3\u4E3A\u5355\u72EC\u7684\u9A8C\u8BC1\u670D\u52A1\uFF0C\u9700\u8981\u7ED1\u5B9A\u5230 consensus validator</li></ul></li><li>\u73B0\u5728 Miner, Validator \u5747\u91C7\u7528 IP \u5199\u6B7B\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\uFF0C\u9700\u8981\u6539\u4E3A\u670D\u52A1\u6CE8\u518C\u65B9\u5F0F\u8FDB\u884C\u914D\u7F6E</li><li>\u62C6\u79BB\u8DDF\u8F6C\u63A8\u4EFB\u52A1\u76F8\u5173\u9A8C\u8BC1\u903B\u8F91\u548C\u76F8\u5BF9\u5E94\u7684 consensus validator \u9A8C\u8BC1\u903B\u8F91\u3002 <ul><li>\u540E\u7EED\u9700\u8981\u6309\u7167\u65B0\u65B9\u5F0F\u8FDB\u884C\u96C6\u6210</li></ul></li><li>User SBT Identity (SBT, Servers) @\u4E1C\u5947</li></ul><h2 id="\u5408\u7EA6\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5408\u7EA6\u5B9E\u73B0" aria-hidden="true">#</a> \u5408\u7EA6\u5B9E\u73B0</h2><ul><li>Leader-Validator \u8EAB\u4EFD\u7BA1\u7406\u5408\u7EA6</li><li>SBT NFT Identity \u5408\u7EA6\u5DF2\u5B9E\u73B0\uFF08\u590D\u7528\uFF09</li><li>Points \u5408\u7EA6\uFF08\u6682\u5B9A\uFF0C\u53EF\u80FD\u9700\u8981\u91CD\u6784\uFF0C\u6216\u518D\u8BBE\u8BA1\uFF09</li><li>\u5176\u4ED6 \uFF1F</li></ul>',10);function c(f,_){const i=a("Mermaid");return n(),r("div",null,[u,d(i,{id:"mermaid_1a96284d","data-code":`graph TB
    subgraph Flux Framework
        A[Flux Core] --> B[PoCW]
        A[Flux Core] --> C[\u94FE\u4E0ASBT]
    end
    
    B --> E[Miner \u77FF\u5DE5\u6A21\u5757]
    B --> F[Validator \u9A8C\u8BC1\u5668\u96C6\u7FA4]
    
    F --> G[Leader Validator]
    F --> H[Consensus Validator 1,2,3]
    
    E --> K[\u4EFB\u52A1\u7BA1\u7406]
    E --> L[Coordinator]
    
    H --> N[\u4E09\u65B9\u8D28\u91CF\u8BC4\u4F30\u670D\u52A1 1,2,3]
    
    K --> Q[\u8F6C\u63A8\u9A8C\u8BC1]
    K --> R[Agent\u670D\u52A1]
    K --> S[\u6570\u636E\u91C7\u96C6]
	
    C --> D[\u7528\u6237\u8EAB\u4EFD\u5173\u8054]
    D --> J[VLC-Points]
    
    style B fill:#e1f5fe
    style E fill:#f3e5f5
    style F fill:#e8f5e8`}),h])}var m=l(s,[["render",c],["__file","index.html.vue"]]);export{m as default};
