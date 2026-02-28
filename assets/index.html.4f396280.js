import{_ as i,r as d,o as r,c as a,e as o,b as e,w as l,a as s,d as t}from"./app.70947246.js";const _={},u=s('<p>\u95EA\u7535\u7F51\u7EDC\u9002\u914D Setu or DAG \u94FE \u2014 \u6539\u9020\u91CD\u6784\u6587\u6863</p><h2 id="_0-overview" tabindex="-1"><a class="header-anchor" href="#_0-overview" aria-hidden="true">#</a> 0. Overview</h2><p>\u5C06 LND \u95EA\u7535\u7F51\u7EDC\u6539\u9020\u4E3A\u540C\u65F6\u652F\u6301\xA0<strong>Bitcoin + Setu \u53CC\u94FE</strong>\u3002Setu \u662F\u57FA\u4E8E\u5BF9\u8C61\u8D26\u6237\u6A21\u578B\u7684 DAG \u533A\u5757\u94FE\uFF0C\u4F7F\u7528\u81EA\u5B9A\u4E49 10 \u64CD\u4F5C\u7801\u89E3\u91CA\u5668\uFF08<code>ProgramTx</code>\uFF09\u4F5C\u4E3A\u5408\u7EA6\u8BED\u8A00\uFF0C\u5BC6\u7801\u5B66\u540C\u65F6\u652F\u6301 secp256k1 \u548C Ed25519\uFF0C\u901A\u9053\u4EE5 32 \u5B57\u8282\xA0<code>ObjectID</code>\xA0\u6807\u8BC6\u3002\u6539\u9020\u7B56\u7565\uFF1A\u5728\u73B0\u6709 Bitcoin \u7C7B\u578B\u4E4B\u4E0A\u5F15\u5165<strong>\u94FE\u65E0\u5173\u62BD\u8C61\u5C42</strong>\uFF0CBitcoin \u4FDD\u7559\u4E3A\u4E00\u4E2A\u5B9E\u73B0\uFF0CSetu \u4F5C\u4E3A\u53E6\u4E00\u4E2A\u5B9E\u73B0\u63D2\u5165\uFF0C\u901A\u8FC7\xA0<code>ChainControl</code>\xA0\u505A\u53CC\u94FE\u8C03\u5EA6\u3002</p><p>\u6838\u5FC3\u6539\u9020\u5DE5\u4F5C\u91CF\u5206\u5E03\uFF1A<strong>\u65B0\u589E\u62BD\u8C61\u5C42\uFF0840%\uFF09\u2192 Setu \u540E\u7AEF\u5B9E\u73B0\uFF0830%\uFF09\u2192 \u73B0\u6709\u6A21\u5757\u9002\u914D\u63A5\u53E3\uFF0820%\uFF09\u2192 Setu \u94FE\u4E0A\u5408\u7EA6\uFF0810%\uFF09</strong>\u3002</p><hr><h2 id="_1-\u6D41\u7A0B\u4EA4\u4E92\u56FE" tabindex="-1"><a class="header-anchor" href="#_1-\u6D41\u7A0B\u4EA4\u4E92\u56FE" aria-hidden="true">#</a> 1. \u6D41\u7A0B\u4EA4\u4E92\u56FE</h2><p>\u5982\u4E0B 7 \u5F20\u56FE\u5206\u522B\u8986\u76D6\u4E86\uFF1A</p><ol><li><strong>\u67B6\u6784\u603B\u89C8</strong>\xA0\u2014 \u53CC\u94FE\u62BD\u8C61\u5C42\u5206\u5C42\u4E0E\u6A21\u5757\u5173\u7CFB</li><li><strong>\u901A\u9053\u751F\u547D\u5468\u671F\u5BF9\u6BD4</strong>\xA0\u2014 Bitcoin vs Setu \u7684\u6D41\u7A0B\u5DEE\u5F02\u4E00\u76EE\u4E86\u7136</li><li><strong>\u5F00\u901A\u9053\u5E8F\u5217</strong>\xA0\u2014 \u8BE6\u7EC6\u7684\u53CC\u65B9+\u94FE\u4EA4\u4E92\u65F6\u5E8F</li><li><strong>\u591A\u8DF3 HTLC \u652F\u4ED8</strong>\xA0\u2014 \u6B63\u5E38\u6D41\u8F6C\u4E0E\u5F02\u5E38\u8D85\u65F6\u7684\u5B8C\u6574\u5E8F\u5217</li><li><strong>\u5F3A\u5236\u5173\u95ED\u4E0E\u4E89\u8BAE\u89E3\u51B3</strong>\xA0\u2014 \u542B\u8FDD\u7EA6\u60E9\u7F5A\u7684\u5B8C\u6574\u51B3\u7B56\u6D41\u7A0B</li><li><strong>Script\u2192ProgramTx \u6620\u5C04</strong>\xA0\u2014 \u6BCF\u4E2A Bitcoin \u64CD\u4F5C\u7801\u5982\u4F55\u7FFB\u8BD1\u4E3A Setu 10 \u64CD\u4F5C\u7801</li><li><strong>\u6539\u9020\u9636\u6BB5\u4F9D\u8D56</strong>\xA0\u2014 5 \u4E2A Phase \u7684\u6267\u884C\u987A\u5E8F\u4E0E\u4F9D\u8D56</li><li><strong>\u94FE\u4E0A/\u94FE\u4E0B\u6570\u636E\u6D41\u5168\u666F</strong>\xA0\u2014 \u5B8C\u6574\u7684\u901A\u9053\u751F\u547D\u5468\u671F\u4EA4\u4E92\u6CF3\u9053</li></ol><h3 id="_1-\u53CC\u94FE\u62BD\u8C61\u67B6\u6784\u603B\u89C8" tabindex="-1"><a class="header-anchor" href="#_1-\u53CC\u94FE\u62BD\u8C61\u67B6\u6784\u603B\u89C8" aria-hidden="true">#</a> 1. \u53CC\u94FE\u62BD\u8C61\u67B6\u6784\u603B\u89C8</h3>',9),h=e("h3",{id:"_2-\u901A\u9053\u751F\u547D\u5468\u671F\u5BF9\u6BD4-bitcoin-vs-setu",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-\u901A\u9053\u751F\u547D\u5468\u671F\u5BF9\u6BD4-bitcoin-vs-setu","aria-hidden":"true"},"#"),t(" 2. \u901A\u9053\u751F\u547D\u5468\u671F\u5BF9\u6BD4\uFF08Bitcoin vs Setu\uFF09")],-1),p=e("ul",null,[e("li",null,"\u56FE1\uFF1ABitcoin \u95EA\u7535\u7F51\u7EDC\u901A\u9053\u751F\u547D\u5468\u671F")],-1),b=e("ul",null,[e("li",null,"\u56FE2\uFF1ASetu \u95EA\u7535\u7F51\u7EDC\u901A\u9053\u751F\u547D\u5468\u671F")],-1),f=e("h3",{id:"_3-\u5F00\u901A\u9053\u5E8F\u5217\u4EA4\u4E92\u56FE-setu-\u9002\u914D",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-\u5F00\u901A\u9053\u5E8F\u5217\u4EA4\u4E92\u56FE-setu-\u9002\u914D","aria-hidden":"true"},"#"),t(" 3. \u5F00\u901A\u9053\u5E8F\u5217\u4EA4\u4E92\u56FE\uFF08Setu \u9002\u914D\uFF09")],-1),C=e("h3",{id:"_4-\u591A\u8DF3-htlc-\u652F\u4ED8\u5E8F\u5217\u56FE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-\u591A\u8DF3-htlc-\u652F\u4ED8\u5E8F\u5217\u56FE","aria-hidden":"true"},"#"),t(" 4. \u591A\u8DF3 HTLC \u652F\u4ED8\u5E8F\u5217\u56FE")],-1),S=e("h3",{id:"_5-\u5F3A\u5236\u5173\u95ED\u4E0E\u4E89\u8BAE\u89E3\u51B3\u6D41\u7A0B\u56FE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-\u5F3A\u5236\u5173\u95ED\u4E0E\u4E89\u8BAE\u89E3\u51B3\u6D41\u7A0B\u56FE","aria-hidden":"true"},"#"),t(" 5. \u5F3A\u5236\u5173\u95ED\u4E0E\u4E89\u8BAE\u89E3\u51B3\u6D41\u7A0B\u56FE")],-1),g=e("h3",{id:"_6-setu-programtx-\u5408\u7EA6\u903B\u8F91\u6620\u5C04\u56FE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-setu-programtx-\u5408\u7EA6\u903B\u8F91\u6620\u5C04\u56FE","aria-hidden":"true"},"#"),t(" 6. Setu ProgramTx \u5408\u7EA6\u903B\u8F91\u6620\u5C04\u56FE")],-1),m=e("h3",{id:"_7-\u6A21\u5757\u6539\u9020\u4F18\u5148\u7EA7\u4E0E\u4F9D\u8D56\u5173\u7CFB",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-\u6A21\u5757\u6539\u9020\u4F18\u5148\u7EA7\u4E0E\u4F9D\u8D56\u5173\u7CFB","aria-hidden":"true"},"#"),t(" 7. \u6A21\u5757\u6539\u9020\u4F18\u5148\u7EA7\u4E0E\u4F9D\u8D56\u5173\u7CFB")],-1),P=e("h3",{id:"_8-\u6570\u636E\u6D41-\u94FE\u4E0A-vs-\u94FE\u4E0B\u4EA4\u4E92\u5168\u666F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_8-\u6570\u636E\u6D41-\u94FE\u4E0A-vs-\u94FE\u4E0B\u4EA4\u4E92\u5168\u666F","aria-hidden":"true"},"#"),t(" 8. \u6570\u636E\u6D41\uFF1A\u94FE\u4E0A vs \u94FE\u4E0B\u4EA4\u4E92\u5168\u666F")],-1),B=s('<h2 id="_2-\u6539\u9020\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_2-\u6539\u9020\u6B65\u9AA4" aria-hidden="true">#</a> 2. \u6539\u9020\u6B65\u9AA4</h2><p><strong>1. \u65B0\u589E\xA0<code>chaintype/</code>\xA0\u5305 \u2014 \u94FE\u65E0\u5173\u57FA\u7840\u7C7B\u578B</strong></p><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA\u72EC\u7ACB\u5305\uFF0C\u5B9A\u4E49\u6240\u6709\u94FE\u65E0\u5173\u7684\u539F\u59CB\u7C7B\u578B\uFF0C\u66FF\u4EE3 Bitcoin \u7279\u5B9A\u7C7B\u578B\u5728\u63A5\u53E3\u5C42\u7684\u76F4\u63A5\u4F7F\u7528\uFF1A</p><table><thead><tr><th>\u65B0\u7C7B\u578B</th><th>\u66FF\u4EE3</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>chaintype.TxID</code></td><td><code>chainhash.Hash</code></td><td>32 \u5B57\u8282\u4EA4\u6613/\u5BF9\u8C61\u6807\u8BC6</td></tr><tr><td><code>chaintype.ChannelPoint</code></td><td><code>wire.OutPoint</code></td><td>Bitcoin:\xA0<code>{TxID, Index}</code>\uFF1BSetu:\xA0<code>ObjectID</code></td></tr><tr><td><code>chaintype.Amount</code></td><td><code>btcutil.Amount</code></td><td>\u7EDF\u4E00\u91D1\u989D\u7C7B\u578B\uFF08int64 \u6700\u5C0F\u5355\u4F4D\uFF09</td></tr><tr><td><code>chaintype.RawTx</code></td><td><code>*wire.MsgTx</code></td><td>\u5B57\u8282\u5E8F\u5217\u5316\u4EA4\u6613\uFF08\u94FE\u7279\u5B9A\u683C\u5F0F\u4E0D\u900F\u660E\u4F20\u9012\uFF09</td></tr><tr><td><code>chaintype.Address</code></td><td><code>btcutil.Address</code></td><td>\u7EDF\u4E00\u5730\u5740\u63A5\u53E3</td></tr><tr><td><code>chaintype.PubKey</code></td><td><code>*btcec.PublicKey</code></td><td><code>[]byte</code>\uFF08secp256k1 33 \u5B57\u8282 / Ed25519 32 \u5B57\u8282\uFF09</td></tr><tr><td><code>chaintype.Signature</code></td><td><code>*ecdsa.Signature</code></td><td><code>[]byte</code>\uFF08\u94FE\u7279\u5B9A\u7F16\u7801\uFF09</td></tr><tr><td><code>chaintype.FeeRate</code></td><td><code>chainfee.SatPerKWeight</code></td><td>\u62BD\u8C61\u8D39\u7387\uFF08Bitcoin: sat/kw, Setu: gas price\uFF09</td></tr><tr><td><code>chaintype.BlockHeight</code></td><td><code>uint32</code></td><td>Bitcoin: \u533A\u5757\u9AD8\u5EA6\uFF1BSetu: epoch \u7F16\u53F7</td></tr><tr><td><code>chaintype.ShortChannelID</code></td><td><code>lnwire.ShortChannelID</code></td><td>Bitcoin: 8 \u5B57\u8282 block:tx:pos\uFF1BSetu: ObjectID \u54C8\u5E0C\u622A\u65AD\u6216\u76F4\u63A5 32 \u5B57\u8282</td></tr></tbody></table><p>\u540C\u65F6\u5B9A\u4E49\xA0<code>chaintype.ChainID</code>\xA0\u679A\u4E3E\u6807\u8BC6\u5F53\u524D\u94FE\uFF08<code>Bitcoin</code>/<code>Setu</code>\uFF09\uFF0C\u4EE5\u53CA\xA0<code>chaintype.Converter</code>\xA0\u63A5\u53E3\u505A\u4E0D\u540C\u94FE\u7C7B\u578B\u95F4\u7684\u7F16\u89E3\u7801\u3002</p><p><strong>2. \u91CD\u5B9A\u4E49\u6838\u5FC3\u94FE\u540E\u7AEF\u63A5\u53E3</strong></p><p>\u4FEE\u6539\u4EE5\u4E0B\u63A5\u53E3\u4F7F\u5176\u4F7F\u7528\xA0<code>chaintype.*</code>\xA0\u800C\u975E\xA0<code>wire.*</code>/<code>btcutil.*</code>\u3002<strong>\u4FDD\u7559\u73B0\u6709 Bitcoin \u5B9E\u73B0</strong>\uFF0C\u901A\u8FC7\u5305\u88C5\u5668 (wrapper) \u5728 Bitcoin \u4FA7\u505A\u7C7B\u578B\u8F6C\u6362\uFF1A</p>',7),v=e("strong",null,[e("code",null,"ChainNotifier")],-1),y=t("\xA0("),w=t("interface.go"),A=t(") \u2014\xA0"),T=e("code",null,"RegisterConfirmationsNtfn",-1),k=t("/"),N=e("code",null,"RegisterSpendNtfn",-1),O=t("\xA0\u53C2\u6570\u4ECE\xA0"),D=e("code",null,"*chainhash.Hash",-1),L=t("/"),R=e("code",null,"*wire.OutPoint",-1),x=t("\xA0\u6539\u4E3A\xA0"),I=e("code",null,"chaintype.TxID",-1),V=t("/"),j=e("code",null,"chaintype.ChannelPoint",-1),E=e("strong",null,[e("code",null,"BlockChainIO")],-1),H=t("\xA0("),G=t("interface.go:567-597"),U=t(") \u2014\xA0"),M=e("code",null,"GetBestBlock",-1),F=t("/"),K=e("code",null,"GetUtxo",-1),W=t("/"),X=e("code",null,"GetBlock",-1),z=t("\xA0\u8FD4\u56DE\u503C\u62BD\u8C61\u5316"),J=e("strong",null,[e("code",null,"Signer")],-1),q=t("\xA0("),Q=t("signer.go"),Y=t(") \u2014\xA0"),Z=e("code",null,"SignOutputRaw",-1),$=t("/"),ee=e("code",null,"ComputeInputScript",-1),te=t("\xA0\u53C2\u6570\u4ECE\xA0"),oe=e("code",null,"*wire.MsgTx",-1),ne=t("\xA0\u6539\u4E3A\xA0"),le=e("code",null,"chaintype.RawTx",-1),ce=t("\xA0+ \u62BD\u8C61\xA0"),se=e("code",null,"SignRequest",-1),de=e("strong",null,[e("code",null,"WalletController")],-1),ie=t("\xA0("),re=t("interface.go:230-563"),ae=t(") \u2014 \u8FD9\u662F\u6700\u5927\u6311\u6218\uFF1B\u7B56\u7565\u662F\u62C6\u5206\u4E3A"),_e=e("strong",null,"\u901A\u7528\u94B1\u5305\u63A5\u53E3",-1),ue=t("\uFF08\u4F59\u989D\u67E5\u8BE2\u3001\u8F6C\u8D26\u3001\u5730\u5740\u751F\u6210\uFF09+\xA0"),he=e("strong",null,"\u94FE\u7279\u6709\u6269\u5C55\u63A5\u53E3",-1),pe=t("\uFF08Bitcoin: PSBT/UTXO \u64CD\u4F5C\uFF1BSetu: \u5BF9\u8C61\u64CD\u4F5C\uFF09"),be=e("p",null,[e("strong",null,[t("3. \u6269\u5C55\xA0"),e("code",null,"ChainControl"),t("\xA0\u4E3A\u94FE\u8C03\u5EA6\u5668")])],-1),fe=t("\u4FEE\u6539\xA0"),Ce=t("chainregistry.go:193-220"),Se=t("\xA0\u4E2D\u7684\xA0"),ge=e("code",null,"ChainControl",-1),me=t("\xA0\u7ED3\u6784\u4F53\uFF1A"),Pe=e("li",null,[t("\u65B0\u589E\xA0"),e("code",null,"ChainType chaintype.ChainID"),t("\xA0\u5B57\u6BB5")],-1),Be=t("\u5728\xA0"),ve=t("chainregistry.go:266-350"),ye=t("\xA0\u7684 switch \u8BED\u53E5\u4E2D\u65B0\u589E\xA0"),we=e("code",null,'"setu"',-1),Ae=t("\xA0\u5206\u652F"),Te=e("li",null,[t("\u521B\u5EFA chainreg/setu_params.go \u5B9A\u4E49\xA0"),e("code",null,"SetuNetParams"),t("\uFF08\u7F51\u7EDC ID\u3001\u521B\u4E16\u54C8\u5E0C\u3001\u9ED8\u8BA4\u7AEF\u53E3\u3001epoch \u95F4\u9694\uFF09")],-1),ke=t("\u4FEE\u6539\xA0"),Ne=t("config.go:249"),Oe=t("\xA0\u65B0\u589E\xA0"),De=e("code",null,'SetuChainName = "setu"',-1),Le=t("\xA0\u548C\xA0"),Re=e("code",null,"Setu *lncfg.Chain",-1),xe=t("\xA0\u914D\u7F6E\u9879"),Ie=s("<p><strong>4. \u5B9E\u73B0 Setu \u94FE\u901A\u77E5\u540E\u7AEF\xA0<code>chainntnfs/setunotify/</code></strong></p><p>\u5B9E\u73B0\xA0<code>ChainNotifier</code>\xA0\u63A5\u53E3\uFF0C\u6838\u5FC3\u6620\u5C04\u5173\u7CFB\uFF1A</p><table><thead><tr><th>Bitcoin \u6982\u5FF5</th><th>Setu \u5B9E\u73B0</th></tr></thead><tbody><tr><td><code>RegisterConfirmationsNtfn(txid, numConfs)</code></td><td>\u8BA2\u9605\u5BF9\u8C61\u6700\u7EC8\u786E\u5B9A\u4E8B\u4EF6\uFF08DAG \u6700\u7EC8\u6027\u901A\u5E38 1 \u6B21\u786E\u8BA4\u5373\u53EF\uFF09</td></tr><tr><td><code>RegisterSpendNtfn(outpoint)</code></td><td>\u8BA2\u9605 Channel Object \u72B6\u6001\u53D8\u66F4\uFF08\u4F59\u989D\u53D8\u5316/\u5BF9\u8C61\u9500\u6BC1\uFF09</td></tr><tr><td><code>RegisterBlockEpochNtfn()</code></td><td>\u8BA2\u9605 Setu epoch \u63A8\u8FDB\u4E8B\u4EF6</td></tr><tr><td>\u533A\u5757\u91CD\u7EC4\u68C0\u6D4B</td><td>\u5927\u5E45\u7B80\u5316\uFF08DAG \u65E0\u7ECF\u5178\u91CD\u7EC4\uFF09</td></tr><tr><td><code>GetBlock()</code>\xA0/\xA0<code>GetBlockHash()</code></td><td>\u67E5\u8BE2 epoch \u4FE1\u606F / DAG \u8F6E\u6B21\u6570\u636E</td></tr></tbody></table><p><strong>5. \u5B9E\u73B0 Setu \u94B1\u5305\xA0<code>lnwallet/setuwallet/</code></strong></p><p>\u5B9E\u73B0\u9002\u914D\u540E\u7684\xA0<code>WalletController</code>\xA0\u63A5\u53E3\uFF1A</p><table><thead><tr><th>Bitcoin \u64CD\u4F5C</th><th>Setu \u64CD\u4F5C</th></tr></thead><tbody><tr><td><code>ListUnspentWitness()</code>\xA0\u2014 \u5217\u51FA UTXO</td><td><code>GetBalance()</code>\xA0\u2014 \u67E5\u8BE2\u8D26\u6237\u4F59\u989D</td></tr><tr><td><code>LeaseOutput(OutPoint)</code>\xA0\u2014 \u9501 UTXO</td><td><code>ReserveBalance(amount)</code>\xA0\u2014 \u9884\u7559\u4F59\u989D</td></tr><tr><td><code>SendOutputs([]*wire.TxOut)</code>\xA0\u2014 \u6784\u5EFA TX</td><td><code>Transfer(to, amount)</code>\xA0\u2014 \u8C03\u7528\u8F6C\u8D26</td></tr><tr><td><code>FundPsbt()</code>\xA0/\xA0<code>SignPsbt()</code></td><td><code>BuildProgramTx()</code>\xA0/\xA0<code>SignProgramTx()</code>\xA0\u2014 \u6784\u5EFA Setu \u53EF\u7F16\u7A0B\u4EA4\u6613</td></tr><tr><td>\u5E01\u9009\u62E9\uFF08<code>selectInputs</code>\uFF09</td><td>\u4E0D\u9700\u8981\uFF08\u76F4\u63A5\u4ECE\u4F59\u989D\u6263\u51CF\uFF09</td></tr><tr><td>\u627E\u96F6\u5730\u5740\u751F\u6210</td><td>\u4E0D\u9700\u8981</td></tr></tbody></table>",6),Ve=t("\u5BC6\u94A5\u7BA1\u7406\u65B9\u9762\uFF1A\u590D\u7528\xA0"),je=t("derivation.go"),Ee=t("\xA0\u7684\xA0"),He=e("code",null,"KeyFamily",-1),Ge=t("\xA0\u4F53\u7CFB\uFF0C\u65B0\u589E Setu coinType\uFF0C\u5BC6\u94A5\u884D\u751F\u652F\u6301 secp256k1 \u548C Ed25519 \u53CC\u8DEF\u5F84\u3002"),Ue=s("<p><strong>6. Setu \u94FE\u4E0A\u811A\u672C\u5408\u7EA6 \u2014 \u57FA\u4E8E 10 \u64CD\u4F5C\u7801\u89E3\u91CA\u5668</strong></p><p>\u57FA\u4E8E Setu \u7684\xA0<code>ProgramTx</code>\xA0\u548C\xA0<code>{Nop, Const, Mov, BinOp, Cmp, LoadInput, StoreOutput, Jump, JumpIf, Halt}</code>\xA0\u64CD\u4F5C\u7801\uFF0C\u5B9E\u73B0\u4EE5\u4E0B\u95EA\u7535\u7F51\u7EDC\u6838\u5FC3\u5408\u7EA6\u903B\u8F91\uFF1A</p><p><strong>6a. \u901A\u9053\u8D44\u91D1\u5408\u7EA6\uFF08Channel Funding Program\uFF09</strong>\uFF1A</p><ul><li>\u4F7F\u7528\xA0<code>Const</code>\xA0+\xA0<code>Cmp</code>\xA0+\xA0<code>JumpIf</code>\xA0\u5B9E\u73B0\u53CC\u65B9\u7B7E\u540D\u9A8C\u8BC1\u5206\u652F</li><li><code>LoadInput</code>\xA0\u52A0\u8F7D\u7B7E\u540D\u6570\u636E\uFF0C<code>BinOp</code>\xA0\u505A\u54C8\u5E0C\u8BA1\u7B97</li><li>\u5BF9\u8C61\u5B57\u6BB5\u5B58\u50A8\uFF1A<code>local_balance</code>,\xA0<code>remote_balance</code>,\xA0<code>local_key</code>,\xA0<code>remote_key</code>,\xA0<code>state_num</code></li></ul><p><strong>6b. HTLC \u5408\u7EA6\u7A0B\u5E8F</strong>\uFF1A</p><ul><li>\u4E09\u8DEF\u5F84\u5206\u652F\uFF08<code>JumpIf</code>\uFF09\uFF1A\u2460 \u539F\u50CF\u89E3\u9501\uFF08<code>BinOp</code>\xA0\u505A SHA256 \u6BD4\u8F83\uFF09\u2461 \u8D85\u65F6\u56DE\u6536\uFF08<code>Cmp</code>\xA0\u6BD4\u8F83\u5F53\u524D epoch\uFF09\u2462 \u64A4\u9500\u60E9\u7F5A\uFF08\u7B7E\u540D\u9A8C\u8BC1\uFF09</li><li><code>LoadInput</code>\xA0\u4ECE\u4EA4\u6613\u8F93\u5165\u52A0\u8F7D\u539F\u50CF/\u7B7E\u540D</li><li><code>StoreOutput</code>\xA0\u5199\u5165\u4F59\u989D\u53D8\u66F4</li></ul><p><strong>6c. \u65F6\u95F4\u9501\u5B9E\u73B0</strong>\uFF1A</p><ul><li><strong>\u76F8\u5BF9\u65F6\u95F4\u9501\uFF08CSV \u7B49\u4EF7\uFF09</strong>\uFF1A<code>LoadInput(current_epoch)</code>\xA0\u2192\xA0<code>Const(creation_epoch + delay)</code>\xA0\u2192\xA0<code>Cmp</code>\xA0\u2192\xA0<code>JumpIf(fail)</code></li><li><strong>\u7EDD\u5BF9\u65F6\u95F4\u9501\uFF08CLTV \u7B49\u4EF7\uFF09</strong>\uFF1A<code>LoadInput(current_epoch)</code>\xA0\u2192\xA0<code>Const(expiry_epoch)</code>\xA0\u2192\xA0<code>Cmp</code>\xA0\u2192\xA0<code>JumpIf(fail)</code></li></ul><p><strong>6d. \u64A4\u9500/\u60E9\u7F5A\u673A\u5236</strong>\uFF1A</p><ul><li>\u5BF9\u8C61\u72B6\u6001\u4E2D\u5B58\u50A8\xA0<code>revocation_key</code></li><li>\u82E5\u68C0\u6D4B\u5230\u65E7\u72B6\u6001\u5E7F\u64AD\uFF0C\u6301\u6709\u64A4\u9500\u5BC6\u94A5\u7684\u4E00\u65B9\u53EF\u8C03\u7528\u60E9\u7F5A\u5165\u53E3\uFF08\u901A\u8FC7\u7B7E\u540D\u9A8C\u8BC1\u5206\u652F\uFF09</li></ul>",10),Me=t("\u5728 Go \u4FA7\u521B\u5EFA\xA0"),Fe=e("code",null,"input/setu_programs.go",-1),Ke=t("\uFF0C\u5C01\u88C5\u4E0A\u8FF0\u5408\u7EA6\u7684\u6784\u5EFA\u51FD\u6570\uFF08\u7B49\u4EF7\u4E8E\u73B0\u6709\xA0"),We=t("script_utils.go"),Xe=t("\xA0\u7684 3275 \u884C Bitcoin Script \u6784\u5EFA\uFF09\u3002"),ze=e("p",null,[e("strong",null,"7. \u901A\u9053\u6807\u8BC6\u4F53\u7CFB\u91CD\u8BBE\u8BA1")],-1),Je=t("\u4FEE\u6539\xA0"),qe=t("channel_id.go"),Qe=t("\xA0\u2014\xA0"),Ye=e("code",null,"NewChanIDFromOutPoint",-1),Ze=t("\xA0\u5728 Setu \u94FE\u4E0A\u76F4\u63A5\u4F7F\u7528 ObjectID \u7684\u524D 32 \u5B57\u8282\uFF0C\u65E0\u9700 XOR \u53D8\u6362"),$e=t("\u4FEE\u6539\xA0"),et=t("short_channel_id.go"),tt=t("\xA0\u2014 Setu \u6A21\u5F0F\u4E0B\xA0"),ot=e("code",null,"ShortChannelID",-1),nt=t("\xA0\u4F7F\u7528 ObjectID\uFF0832 \u5B57\u8282\uFF09\u3002\u8DEF\u7531\u534F\u8BAE\u6D88\u606F\u4E2D\u7684\u7F16\u7801\u9700\u6269\u5C55\u4E3A\u53D8\u957F\u6216\u4F7F\u7528 TLV \u6269\u5C55\u5B57\u6BB5\u627F\u8F7D\u5B8C\u6574 ObjectID"),lt=t("\u66F4\u65B0\xA0"),ct=t("channel.go"),st=t("\xA0\u2014\xA0"),dt=e("code",null,"FundingOutpoint",-1),it=t("\xA0\u5B57\u6BB5\u6539\u4E3A\xA0"),rt=e("code",null,"chaintype.ChannelPoint",-1),at=t("\uFF0C\u6570\u636E\u5E93 schema \u9700\u652F\u6301 Bitcoin OutPoint \u548C Setu ObjectID \u4E24\u79CD\u683C\u5F0F\u7684\u5E8F\u5217\u5316"),_t=t("\u4FEE\u6539\xA0"),ut=t("channel_edge_info.go"),ht=t("\xA0\u2014\xA0"),pt=e("code",null,"BitcoinKey1Bytes",-1),bt=t("/"),ft=e("code",null,"BitcoinKey2Bytes",-1),Ct=t("\xA0\u91CD\u547D\u540D\u4E3A\xA0"),St=e("code",null,"ChainKey1Bytes",-1),gt=t("/"),mt=e("code",null,"ChainKey2Bytes",-1),Pt=t("\uFF0C\u6216\u4FDD\u7559 Bitcoin \u5B57\u6BB5\u5E76\u65B0\u589E\xA0"),Bt=e("code",null,"SetuKey1Bytes",-1),vt=t("/"),yt=e("code",null,"SetuKey2Bytes",-1),wt=e("p",null,[e("strong",null,"8. \u901A\u9053\u72B6\u6001\u673A\u9002\u914D")],-1),At=t("channel.go"),Tt=t("\uFF0810185 \u884C\uFF09\u7684\u6539\u9020\u7B56\u7565\u662F"),kt=e("strong",null,"\u5206\u79BB\u534F\u8BAE\u903B\u8F91\u4E0E\u94FE\u4E0A\u64CD\u4F5C",-1),Nt=t("\uFF1A"),Ot=e("li",null,[t("\u63D0\u53D6\u63A5\u53E3\xA0"),e("code",null,"CommitmentBuilder"),t("\uFF1ABitcoin \u5B9E\u73B0\u6784\u5EFA\xA0"),e("code",null,"wire.MsgTx"),t("\xA0\u627F\u8BFA\u4EA4\u6613\uFF0CSetu \u5B9E\u73B0\u6784\u5EFA\xA0"),e("code",null,"ProgramTx"),t("\xA0\u72B6\u6001\u66F4\u65B0")],-1),Dt=e("li",null,[t("\u63D0\u53D6\u63A5\u53E3\xA0"),e("code",null,"ScriptEngine"),t("\uFF1ABitcoin \u5B9E\u73B0\u4F7F\u7528\xA0"),e("code",null,"txscript"),t("\xA0\u9A8C\u8BC1/\u6784\u5EFA\u811A\u672C\uFF0CSetu \u5B9E\u73B0\u4F7F\u7528 10 \u64CD\u4F5C\u7801\u89E3\u91CA\u5668")],-1),Lt=t("\u4FEE\u6539\xA0"),Rt=t("commitment.go"),xt=t("\xA0\u2014\xA0"),It=e("code",null,"CommitmentKeyRing",-1),Vt=t("\xA0\u7684\u5BC6\u94A5\u884D\u751F\u4FDD\u7559\u901A\u7528\u903B\u8F91\uFF0C\u7B7E\u540D/\u9A8C\u8BC1\u59D4\u6258\u7ED9\xA0"),jt=e("code",null,"Signer",-1),Et=t("\xA0\u63A5\u53E3"),Ht=t("\u4FDD\u7559\u72B6\u6001\u7F16\u53F7\uFF08"),Gt=e("code",null,"StateNum",-1),Ut=t("\uFF09\u3001HTLC \u7BA1\u7406\uFF08"),Mt=e("code",null,"UpdateLog",-1),Ft=t("\uFF09\u3001\u64A4\u9500\u5BC6\u94A5\u4EA4\u6362\uFF08"),Kt=t("shachain"),Wt=t("\uFF09\u7684\u6838\u5FC3\u6765\u534F\u8BAE\u903B\u8F91\u4E0D\u53D8"),Xt=e("p",null,[e("strong",null,"9. \u8D44\u91D1\u7BA1\u7406\u5668\u9002\u914D")],-1),zt=t("\u4FEE\u6539\xA0"),Jt=t("manager.go"),qt=t("\uFF1A"),Qt=s("<ul><li><code>waitForFundingConfirmation</code>\xA0\u2014 Setu \u6A21\u5F0F\u4E0B\u7B49\u5F85 DAG \u6700\u7EC8\u786E\u5B9A\uFF081 \u6B21\u786E\u8BA4\uFF09\uFF0C\u5927\u5E45\u7F29\u77ED\u8D85\u65F6</li><li>\u8D44\u91D1\u4EA4\u6613\u6784\u5EFA\u4ECE\xA0<code>chanfunding.WalletAssembler</code>\uFF08UTXO \u9009\u62E9\uFF09\u5207\u6362\u5230\u65B0\u7684\xA0<code>chanfunding.SetuAssembler</code>\uFF08\u76F4\u63A5\u521B\u5EFA Channel Object + \u4F59\u989D\u9501\u5B9A\uFF09</li><li><code>ShortChannelID</code>\xA0\u751F\u6210\u903B\u8F91\uFF1ABitcoin \u7B49\u5F85\u5728\u533A\u5757\u4E2D\u786E\u8BA4\u540E\u7F16\u7801\u4F4D\u7F6E\uFF1BSetu \u5728\u5BF9\u8C61\u521B\u5EFA\u6700\u7EC8\u786E\u5B9A\u540E\u4F7F\u7528 ObjectID</li></ul><p><strong>10. \u5408\u7EA6\u88C1\u51B3\u9002\u914D</strong></p>",2),Yt=t("\u4FEE\u6539\xA0"),Zt=t("contractcourt"),$t=t("\xA0\u6240\u6709 resolver\uFF1A"),eo=s("<li><code>commitSweepResolver</code>\xA0\u2014 Setu: \u8C03\u7528 Channel Object \u7684\xA0<code>claim_local_balance</code>\xA0\u5165\u53E3</li><li><code>htlcTimeoutResolver</code>\xA0\u2014 Setu: \u8C03\u7528 HTLC \u7684\xA0<code>timeout_claim</code>\xA0\u5165\u53E3\uFF08\u7B49\u5F85 epoch \u5230\u671F\uFF09</li><li><code>htlcSuccessResolver</code>\xA0\u2014 Setu: \u8C03\u7528 HTLC \u7684\xA0<code>preimage_claim</code>\xA0\u5165\u53E3</li><li><code>breachArbitrator</code>\xA0\u2014 Setu: \u8C03\u7528 Channel Object \u7684\xA0<code>penalize</code>\xA0\u5165\u53E3\uFF08\u63D0\u4EA4\u64A4\u9500\u5BC6\u94A5 + \u65E7\u72B6\u6001\u8BC1\u660E\uFF09</li><li><code>anchorResolver</code>\xA0\u2014 Setu:\xA0<strong>\u4E0D\u9700\u8981</strong>\uFF08DAG \u65E0\u9700\u8D39\u7387\u63D0\u5347\u673A\u5236\uFF09</li>",5),to=t("\u4FEE\u6539\xA0"),oo=t("channel_arbitrator.go"),no=t("\xA0\u68C0\u6D4B\u5BF9\u8C61\u72B6\u6001\u53D8\u66F4\u800C\u975E UTXO \u82B1\u8D39"),lo=e("p",null,[e("strong",null,"11. Sweep \u6A21\u5757\u7B80\u5316")],-1),co=t("\u5728\xA0"),so=t("sweep"),io=t("\xA0\u4E2D\u65B0\u589E Setu \u6A21\u5F0F\uFF1A"),ro=s("<ul><li>\u79FB\u9664 Bitcoin \u7279\u6709\u7684\u4EA4\u6613\u6784\u5EFA (<code>wire.NewMsgTx</code>)\u3001\u6743\u91CD\u4F30\u7B97\u3001RBF/CPFP \u903B\u8F91</li><li>Setu \u4E0A\u7684&quot;\u626B\u56DE&quot;\u7B80\u5316\u4E3A\uFF1A\u8C03\u7528 Channel Object \u7684\xA0<code>withdraw</code>\xA0\u51FD\u6570\u5C06\u4F59\u989D\u8F6C\u56DE\u4E2A\u4EBA\u8D26\u6237</li><li><code>FeeRate</code>\xA0\u4ECE\xA0<code>SatPerKWeight</code>\xA0\u6539\u4E3A\xA0<code>chaintype.FeeRate</code>\uFF08Setu: gas price\uFF09</li><li>\u6279\u91CF\u805A\u5408\u4F18\u5316\u5728 Setu \u4E0A\u7528\u5904\u4E0D\u5927\uFF08\u6BCF\u6B21\u8C03\u7528\u6210\u672C\u4F4E\u4E8E Bitcoin TX\uFF09</li></ul><p><strong>12. \u56FE\u4E0E\u53D1\u73B0\u9002\u914D</strong></p>",2),ao=t("\u4FEE\u6539\xA0"),_o=t("builder.go"),uo=t("\xA0\u2014 \u901A\u9053\u5B58\u6D3B\u6027\u68C0\u67E5\uFF1ABitcoin \u68C0\u67E5 UTXO \u96C6\u5408\uFF1BSetu \u67E5\u8BE2 Channel Object \u662F\u5426\u4ECD\u5B58\u5728\u4E8E\u72B6\u6001\u6811\uFF08SMT \u67E5\u8BE2\uFF09"),ho=t("\u4FEE\u6539\xA0"),po=t("gossiper.go"),bo=t("\xA0\u2014 \u901A\u9053\u9A8C\u8BC1\uFF1ABitcoin \u9A8C\u8BC1\u94FE\u4E0A 2-of-2 \u591A\u7B7E\u811A\u672C\uFF1BSetu \u9A8C\u8BC1 Channel Object \u5B58\u5728 + \u53CC\u65B9 key \u5339\u914D + SMT Merkle \u8BC1\u660E"),fo=e("li",null,[e("code",null,"chanvalidate/"),t("\xA0\u65B0\u589E Setu \u9A8C\u8BC1\u903B\u8F91")],-1),Co=e("p",null,[e("strong",null,"13. \u8D39\u7387\u4F53\u7CFB\u9002\u914D")],-1),So=t("\u5728\xA0"),go=t("chainfee"),mo=t("\xA0\u4E2D\u65B0\u589E\xA0"),Po=e("code",null,"SetuEstimator",-1),Bo=t("\xA0\u5B9E\u73B0\xA0"),vo=e("code",null,"Estimator",-1),yo=t("\xA0\u63A5\u53E3"),wo=e("li",null,[t("Bitcoin:\xA0"),e("code",null,"EstimateFeePerKW(numBlocks)"),t("\xA0\u2192 Setu:\xA0"),e("code",null,"EstimateGasPrice(priority)")],-1),Ao=t("\u4FEE\u6539\xA0"),To=t("rates.go"),ko=t("\xA0\u2014 \u65B0\u589E\xA0"),No=e("code",null,"GasPrice",-1),Oo=t("\xA0\u7C7B\u578B\u548C\u8F6C\u6362\u65B9\u6CD5"),Do=e("li",null,"\u79FB\u9664 Setu \u6A21\u5F0F\u4E0B\u7684 dust \u9650\u5236\u68C0\u67E5\uFF08\u8D26\u6237\u6A21\u578B\u65E0 dust \u6982\u5FF5\uFF09",-1),Lo=e("p",null,[e("strong",null,"14. RPC \u4E0E\u53D1\u7968\u9002\u914D")],-1),Ro=t("\u4FEE\u6539\xA0"),xo=t("rpcserver.go"),Io=t("\xA0\u4E2D\u7684\xA0"),Vo=e("code",null,"GetInfo",-1),jo=t("\xA0\u2014 \u6839\u636E\xA0"),Eo=e("code",null,"ChainType",-1),Ho=t("\xA0\u8FD4\u56DE\xA0"),Go=e("code",null,'"bitcoin"',-1),Uo=t("\xA0\u6216\xA0"),Mo=e("code",null,'"setu"',-1),Fo=e("li",null,[t("\u94B1\u5305 RPC\uFF08"),e("code",null,"SendCoins"),t("\u3001"),e("code",null,"NewAddress"),t("\u3001"),e("code",null,"ListUnspent"),t("\uFF09\u9700\u6309\u94FE\u7C7B\u578B\u8C03\u5EA6")],-1),Ko=t("\u4FEE\u6539\xA0"),Wo=t("zpay32"),Xo=t("\xA0\u2014 \u65B0\u589E Setu HRP\uFF08\u5982\xA0"),zo=e("code",null,"lnst",-1),Jo=t("\xA0\u4E3B\u7F51\u3001"),qo=e("code",null,"lnsts",-1),Qo=t("\xA0\u6D4B\u8BD5\u7F51\uFF09"),Yo=e("li",null,"\u91D1\u989D\u5355\u4F4D\u5728 proto \u5B9A\u4E49\u4E2D\u4FDD\u6301\u4E3A\u6700\u5C0F\u5355\u4F4D\u6574\u6570\uFF0C\u7531\u5BA2\u6237\u7AEF\u89E3\u91CA",-1),Zo=e("p",null,[e("strong",null,"15. \u914D\u7F6E\u4E0E\u542F\u52A8")],-1),$o=t("\u4FEE\u6539\xA0"),en=t("config.go"),tn=t("\xA0\u2014 \u65B0\u589E\xA0"),on=e("code",null,"Setu *lncfg.Chain",-1),nn=t("\u3001"),ln=e("code",null,"SetuMode *lncfg.SetuNode",-1),cn=e("li",null,"\u65B0\u589E lncfg/setu.go \u2014 Setu \u8282\u70B9\u914D\u7F6E\uFF08RPC \u5730\u5740\u3001SDK \u8DEF\u5F84\u7B49\uFF09",-1),sn=t("\u4FEE\u6539\xA0"),dn=t("config_builder.go"),rn=t("\xA0\u2014\xA0"),an=e("code",null,"BuildChainControl",-1),_n=t("\xA0\u65B0\u589E Setu \u5206\u652F"),un=t("\u4FEE\u6539\xA0"),hn=t("server.go"),pn=t("\xA0\u2014 \u6839\u636E\u94FE\u7C7B\u578B\u521D\u59CB\u5316\u5BF9\u5E94\u5B50\u7CFB\u7EDF"),bn=e("hr",null,null,-1),fn=e("h2",{id:"_3-setu-\u94FE\u5FC5\u987B\u652F\u6301\u7684\u5B8C\u6574\u80FD\u529B\u6E05\u5355",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-setu-\u94FE\u5FC5\u987B\u652F\u6301\u7684\u5B8C\u6574\u80FD\u529B\u6E05\u5355","aria-hidden":"true"},"#"),t(" 3. Setu \u94FE\u5FC5\u987B\u652F\u6301\u7684\u5B8C\u6574\u80FD\u529B\u6E05\u5355")],-1),Cn=e("h3",{id:"p0-\u2014-\u6838\u5FC3\u80FD\u529B-\u65E0\u6B64\u80FD\u529B\u5219\u65E0\u6CD5\u8FD0\u884C\u95EA\u7535\u7F51\u7EDC",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#p0-\u2014-\u6838\u5FC3\u80FD\u529B-\u65E0\u6B64\u80FD\u529B\u5219\u65E0\u6CD5\u8FD0\u884C\u95EA\u7535\u7F51\u7EDC","aria-hidden":"true"},"#"),t(" P0 \u2014 \u6838\u5FC3\u80FD\u529B\uFF08\u65E0\u6B64\u80FD\u529B\u5219\u65E0\u6CD5\u8FD0\u884C\u95EA\u7535\u7F51\u7EDC\uFF09")],-1),Sn=e("thead",null,[e("tr",null,[e("th",null,"#"),e("th",null,"\u80FD\u529B"),e("th",null,"\u8BE6\u7EC6\u9700\u6C42"),e("th",null,"\u5BF9\u5E94 LND \u6A21\u5757")])],-1),gn=e("tr",null,[e("td",null,"1"),e("td",null,[e("strong",null,"\u53EF\u7F16\u7A0B\u4EA4\u6613 (ProgramTx)")]),e("td",null,"10 \u64CD\u4F5C\u7801\u89E3\u91CA\u5668\u9700\u652F\u6301\uFF1A\u6761\u4EF6\u5206\u652F\u3001\u54C8\u5E0C\u6BD4\u8F83\u3001\u7B7E\u540D\u9A8C\u8BC1\u3001epoch \u6BD4\u8F83\u3001\u72B6\u6001\u8BFB\u5199"),e("td",null,[e("code",null,"input/setu_programs.go")])],-1),mn=e("tr",null,[e("td",null,"2"),e("td",null,[e("strong",null,"\u5171\u4EAB\u5BF9\u8C61 (Shared Object)")]),e("td",null,"Channel Object \u9700\u53CC\u65B9\u90FD\u80FD\u64CD\u4F5C\uFF1B\u72B6\u6001\u66F4\u65B0\u9700\u53CC\u65B9\u7B7E\u540D\u6388\u6743"),e("td",null,[e("code",null,"lnwallet/setuwallet/")])],-1),Pn=e("tr",null,[e("td",null,"3"),e("td",null,[e("strong",null,"\u54C8\u5E0C\u9501 (Hashlock)")]),e("td",null,[e("code",null,"BinOp"),t("\xA0\u64CD\u4F5C\u7801\u9700\u652F\u6301 SHA256\uFF0C"),e("code",null,"Cmp"),t("\xA0\u9700\u652F\u6301\u5B57\u8282\u6570\u7EC4/\u54C8\u5E0C\u6BD4\u8F83")]),e("td",null,"HTLC \u5408\u7EA6")],-1),Bn=e("tr",null,[e("td",null,"4"),e("td",null,[e("strong",null,"Epoch \u7EA7\u65F6\u95F4\u67E5\u8BE2")]),e("td",null,[e("code",null,"LoadInput"),t("\xA0\u80FD\u52A0\u8F7D\u5F53\u524D epoch \u7F16\u53F7\uFF0C\u5408\u7EA6\u53EF\u636E\u6B64\u505A\u65F6\u95F4\u9501\u5224\u65AD")]),e("td",null,"CSV/CLTV \u7B49\u4EF7")],-1),vn=e("tr",null,[e("td",null,"5"),e("td",null,[e("strong",null,"\u5BF9\u8C61\u7248\u672C/\u5E8F\u5217\u53F7")]),e("td",null,[t("Channel Object \u9700\u6709\u5355\u8C03\u9012\u589E\u7684\xA0"),e("code",null,"state_num"),t("\uFF0C\u9632\u6B62\u65E7\u72B6\u6001\u91CD\u653E")]),e("td",null,"\u627F\u8BFA\u4EA4\u6613\u5E8F\u53F7")],-1),yn=e("tr",null,[e("td",null,"6"),e("td",null,[e("strong",null,"\u4E8B\u4EF6\u8BA2\u9605 API")]),e("td",null,"\u6309 ObjectID \u8BA2\u9605\u72B6\u6001\u53D8\u66F4\u4E8B\u4EF6\uFF08\u521B\u5EFA\u3001\u66F4\u65B0\u3001\u9500\u6BC1\uFF09\uFF1Bepoch \u63A8\u8FDB\u4E8B\u4EF6"),e("td",null,[e("code",null,"chainntnfs/setunotify/")])],-1),wn=e("td",null,"7",-1),An=e("td",null,[e("strong",null,"\u6700\u7EC8\u6027\u901A\u77E5")],-1),Tn=e("td",null,"\u4EA4\u6613\u63D0\u4EA4\u540E\u80FD\u56DE\u8C03\u901A\u77E5\u6700\u7EC8\u786E\u5B9A\u72B6\u6001",-1),kn=t("manager.go"),Nn=t("\xA0\u786E\u8BA4\u6D41\u7A0B"),On=e("tr",null,[e("td",null,"8"),e("td",null,[e("strong",null,"\u591A\u7B7E\u540D\u9A8C\u8BC1")]),e("td",null,[e("code",null,"ProgramTx"),t("\xA0\u4E2D\u80FD\u9A8C\u8BC1 2-of-2 \u7B7E\u540D\uFF08secp256k1 ECDSA \u6216 Ed25519\uFF09")]),e("td",null,"\u8D44\u91D1\u8F93\u51FA 2-of-2")],-1),Dn=e("tr",null,[e("td",null,"9"),e("td",null,[e("strong",null,"\u5BF9\u8C61\u67E5\u8BE2 API")]),e("td",null,"\u6309 ObjectID \u67E5\u8BE2\u5B8C\u6574\u5BF9\u8C61\u72B6\u6001\uFF08\u4F59\u989D\u3001\u5BC6\u94A5\u3001HTLC \u5217\u8868\u7B49\uFF09"),e("td",null,[e("code",null,"BlockChainIO"),t("\xA0\u7B49\u4EF7")])],-1),Ln=e("tr",null,[e("td",null,"10"),e("td",null,[e("strong",null,"\u539F\u5B50\u6027\u72B6\u6001\u66F4\u65B0")]),e("td",null,"\u5408\u7EA6\u6267\u884C\u7684\u72B6\u6001\u53D8\u66F4\u8981\u4E48\u5168\u90E8\u751F\u6548\u3001\u8981\u4E48\u5168\u90E8\u56DE\u6EDA"),e("td",null,"\u901A\u9053\u72B6\u6001\u4E00\u81F4\u6027")],-1),Rn=e("td",null,"11",-1),xn=e("td",null,[e("strong",null,"\u5BC6\u94A5\u7BA1\u7406 SDK")],-1),In=e("td",null,"Go SDK \u652F\u6301 secp256k1 \u548C Ed25519 \u5BC6\u94A5\u5BF9\u751F\u6210\u3001HD \u884D\u751F\u3001\u7B7E\u540D\u3001\u9A8C\u8BC1",-1),Vn=t("keychain"),jn=e("tr",null,[e("td",null,"12"),e("td",null,[e("strong",null,"\u4EA4\u6613\u6784\u5EFA\u4E0E\u5E7F\u64AD SDK")]),e("td",null,[t("Go SDK \u652F\u6301\u7F16\u7A0B\u6784\u5EFA\xA0"),e("code",null,"ProgramTx"),t("\u3001\u7B7E\u540D\u3001\u63D0\u4EA4\u5230\u7F51\u7EDC")]),e("td",null,[e("code",null,"lnwallet/setuwallet/")])],-1),En=e("h3",{id:"p1-\u2014-\u91CD\u8981\u80FD\u529B-\u5F71\u54CD\u5B89\u5168\u6027\u548C\u53EF\u6269\u5C55\u6027",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#p1-\u2014-\u91CD\u8981\u80FD\u529B-\u5F71\u54CD\u5B89\u5168\u6027\u548C\u53EF\u6269\u5C55\u6027","aria-hidden":"true"},"#"),t(" P1 \u2014 \u91CD\u8981\u80FD\u529B\uFF08\u5F71\u54CD\u5B89\u5168\u6027\u548C\u53EF\u6269\u5C55\u6027\uFF09")],-1),Hn=e("thead",null,[e("tr",null,[e("th",null,"#"),e("th",null,"\u80FD\u529B"),e("th",null,"\u8BE6\u7EC6\u9700\u6C42"),e("th",null,"\u5BF9\u5E94 LND \u6A21\u5757")])],-1),Gn=e("td",null,"13",-1),Un=e("td",null,[e("strong",null,"Merkle \u8BC1\u660E (SMT Proof)")],-1),Mn=e("td",null,"\u63D0\u4F9B\u5BF9\u8C61\u5B58\u5728\u6027/\u4E0D\u5B58\u5728\u6027\u7684 Binary+Sparse Merkle Tree \u8BC1\u660E",-1),Fn=t("discovery"),Kn=t("\xA0\u901A\u9053\u9A8C\u8BC1"),Wn=e("td",null,"14",-1),Xn=e("td",null,[e("strong",null,"\u5386\u53F2\u72B6\u6001\u67E5\u8BE2")],-1),zn=e("td",null,"\u6309 epoch \u67E5\u8BE2 Channel Object \u7684\u5386\u53F2\u72B6\u6001\uFF08\u7528\u4E8E\u4E89\u8BAE\u4EF2\u88C1\uFF09",-1),Jn=t("contractcourt"),qn=e("tr",null,[e("td",null,"15"),e("td",null,[e("strong",null,"Gas \u4F30\u7B97 API")]),e("td",null,[t("\u4F30\u7B97\xA0"),e("code",null,"ProgramTx"),t("\xA0\u6267\u884C\u7684 gas \u6D88\u8017")]),e("td",null,[e("code",null,"chainfee/")])],-1),Qn=e("td",null,"16",-1),Yn=e("td",null,[e("strong",null,"\u6279\u91CF\u64CD\u4F5C")],-1),Zn=e("td",null,"\u5355\u7B14\u4EA4\u6613\u4E2D\u539F\u5B50\u6027\u5730\u64CD\u4F5C\u591A\u4E2A\u5BF9\u8C61\uFF08\u6279\u91CF HTLC \u7ED3\u7B97\uFF09",-1),$n=t("sweep"),el=t("\xA0\u6279\u91CF\u5904\u7406"),tl=e("td",null,"17",-1),ol=e("td",null,[e("strong",null,"\u5BF9\u8C61\u9500\u6BC1\u901A\u77E5")],-1),nl=e("td",null,"Channel Object \u88AB\u9500\u6BC1\u65F6\uFF08\u901A\u9053\u5173\u95ED\uFF09\u751F\u6210\u53EF\u8BA2\u9605\u4E8B\u4EF6",-1),ll=t("builder.go"),cl=t("\xA0\u901A\u9053\u5B58\u6D3B\u6027"),sl=e("td",null,"18",-1),dl=e("td",null,[e("strong",null,"\u8282\u70B9\u53D1\u73B0/P2P")],-1),il=e("td",null,"Setu \u7F51\u7EDC\u8282\u70B9\u7684 P2P \u8FDE\u63A5\u4FE1\u606F\uFF08\u7528\u4E8E LN gossip \u5F15\u5BFC\uFF09",-1),rl=t("chainreg"),al=t("\xA0DNS \u79CD\u5B50"),_l=s('<h3 id="p2-\u2014-\u4F18\u5316\u80FD\u529B-\u63D0\u5347\u6027\u80FD\u548C\u7528\u6237\u4F53\u9A8C" tabindex="-1"><a class="header-anchor" href="#p2-\u2014-\u4F18\u5316\u80FD\u529B-\u63D0\u5347\u6027\u80FD\u548C\u7528\u6237\u4F53\u9A8C" aria-hidden="true">#</a> P2 \u2014 \u4F18\u5316\u80FD\u529B\uFF08\u63D0\u5347\u6027\u80FD\u548C\u7528\u6237\u4F53\u9A8C\uFF09</h3><table><thead><tr><th>#</th><th>\u80FD\u529B</th><th>\u8BE6\u7EC6\u9700\u6C42</th></tr></thead><tbody><tr><td>19</td><td><strong>\u8F7B\u5BA2\u6237\u7AEF\u6A21\u5F0F</strong></td><td>\u7C7B\u4F3C Neutrino \u7684 Setu \u8F7B\u8282\u70B9\uFF08\u4EC5\u9A8C\u8BC1 Merkle \u8BC1\u660E\uFF0C\u4E0D\u5B58\u5168\u91CF\u72B6\u6001\uFF09</td></tr><tr><td>20</td><td><strong>Watchtower \u652F\u6301</strong></td><td>\u7B2C\u4E09\u65B9\u53EF\u76D1\u63A7 Channel Object \u72B6\u6001\u5E76\u5728\u8FDD\u7EA6\u65F6\u81EA\u52A8\u63D0\u4EA4\u60E9\u7F5A\u4EA4\u6613</td></tr><tr><td>21</td><td><strong>\u539F\u5B50\u8DE8\u94FE\u64CD\u4F5C</strong></td><td>\u652F\u6301 Bitcoin\u2194Setu \u7684\u539F\u5B50\u4EA4\u6362/\u8DE8\u94FE HTLC\uFF08\u5982\u679C\u9700\u8981\u53CC\u94FE\u4E92\u64CD\u4F5C\uFF09</td></tr></tbody></table><hr><h2 id="_4-\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_4-\u9A8C\u8BC1" aria-hidden="true">#</a> 4. \u9A8C\u8BC1</h2>',4),ul=e("li",null,[e("strong",null,"\u5355\u5143\u6D4B\u8BD5"),t(": \u6BCF\u4E2A\u65B0\u589E\u7684 Setu \u5B9E\u73B0\uFF08"),e("code",null,"setunotify/"),t("\u3001"),e("code",null,"setuwallet/"),t("\u3001"),e("code",null,"setu_programs.go"),t("\uFF09\u72EC\u7ACB\u6D4B\u8BD5\uFF0Cmock Setu SDK")],-1),hl=e("strong",null,"\u96C6\u6210\u6D4B\u8BD5",-1),pl=t(": \u4FEE\u6539\xA0"),bl=t("itest"),fl=t("\xA0\u6846\u67B6\uFF0C\u65B0\u589E Setu devnet backend\uFF0C\u8986\u76D6\u6838\u5FC3\u573A\u666F\uFF1A "),Cl=e("ul",null,[e("li",null,"\u5F00\u901A\u9053 \u2192 \u53D1\u9001\u652F\u4ED8 \u2192 \u591A\u8DF3\u8F6C\u53D1 \u2192 \u534F\u4F5C\u5173\u95ED"),e("li",null,"\u5355\u65B9\u9762\u5173\u95ED \u2192 HTLC \u8D85\u65F6/\u6210\u529F\u89E3\u6790"),e("li",null,"\u8FDD\u7EA6\u68C0\u6D4B \u2192 \u60E9\u7F5A\u4EA4\u6613"),e("li",null,"\u53CC\u94FE\u6A21\u5F0F\uFF1ABitcoin \u548C Setu \u901A\u9053\u5171\u5B58")],-1),Sl=e("li",null,[e("strong",null,"\u547D\u4EE4"),t(":\xA0"),e("code",null,"make itest backend=setu"),t("\xA0\u6216\xA0"),e("code",null,"go test -tags setu [lnd](http://_vscodecontentref_/118).")],-1),gl=e("li",null,[e("strong",null,"\u624B\u52A8\u68C0\u67E5"),t(":\xA0"),e("code",null,"lncli --chain=setu getinfo"),t("\u3001"),e("code",null,"lncli --chain=setu openchannel")],-1),ml=e("h2",{id:"_5-\u51B3\u7B56\u8BB0\u5F55",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-\u51B3\u7B56\u8BB0\u5F55","aria-hidden":"true"},"#"),t(" 5. \u51B3\u7B56\u8BB0\u5F55")],-1),Pl=e("strong",null,"\u5BC6\u7801\u5B66",-1),Bl=t(": \u53CC\u652F\u6301 secp256k1 + Ed25519\uFF08\u540C Sui\uFF09\uFF0C"),vl=t("keychain"),yl=t("\xA0\u9700\u6269\u5C55\u53CC\u8DEF\u5F84\u884D\u751F"),wl=e("li",null,[e("strong",null,"\u53CC\u94FE\u652F\u6301"),t(": \u4FDD\u7559 Bitcoin\uFF0C\u901A\u8FC7\u63A5\u53E3\u62BD\u8C61 +\xA0"),e("code",null,"ChainControl"),t("\xA0\u8C03\u5EA6\u540C\u65F6\u652F\u6301 Setu")],-1),Al=e("li",null,[e("strong",null,"\u5408\u7EA6\u8BED\u8A00"),t(": Setu \u81EA\u5B9A\u4E49 10 \u64CD\u4F5C\u7801\u89E3\u91CA\u5668\uFF08"),e("code",null,"ProgramTx"),t("\uFF09\uFF0C\u975E Move/EVM \u2014 \u9700\u7CBE\u5FC3\u8BBE\u8BA1\u64CD\u4F5C\u7801\u5E8F\u5217\u5B9E\u73B0 HTLC/\u65F6\u95F4\u9501/\u64A4\u9500\u903B\u8F91")],-1),Tl=e("li",null,[e("strong",null,"\u901A\u9053 ID"),t(": Setu \u4E0A\u4F7F\u7528 32 \u5B57\u8282 ObjectID \u76F4\u63A5\u6807\u8BC6\u901A\u9053\uFF0C\u8DEF\u7531\u534F\u8BAE\u6D88\u606F\u4E2D\u901A\u8FC7 TLV \u6269\u5C55\u627F\u8F7D")],-1);function kl(Nl,Ol){const c=d("Mermaid"),n=d("RouterLink");return r(),a("div",null,[u,o(c,{id:"mermaid_382ee1e5","data-code":`graph TB
    subgraph "LND \u5E94\u7528\u5C42\uFF08\u94FE\u65E0\u5173\uFF09"
        RPC["RPC Server<br/>lnrpc/"]
        Router["\u8DEF\u7531\u5F15\u64CE<br/>routing/"]
        Switch["HTLC Switch<br/>htlcswitch/"]
        Invoice["\u53D1\u7968\u7BA1\u7406<br/>invoices/"]
        Funding["\u8D44\u91D1\u7BA1\u7406\u5668<br/>funding/"]
        ChanSM["\u901A\u9053\u72B6\u6001\u673A<br/>lnwallet/channel.go"]
        ContractCourt["\u5408\u7EA6\u88C1\u51B3<br/>contractcourt/"]
        Graph["\u56FE\u6784\u5EFA<br/>graph/"]
        Discovery["Gossip \u53D1\u73B0<br/>discovery/"]
    end

    subgraph CT["chaintype/ \u62BD\u8C61\u5C42"]
        CT_Types["\u94FE\u65E0\u5173\u7C7B\u578B<br/>TxID \xB7 ChannelPoint<br/>Amount \xB7 FeeRate<br/>PubKey \xB7 Signature"]
        CT_Iface["\u7EDF\u4E00\u63A5\u53E3<br/>ChainNotifier<br/>BlockChainIO<br/>Signer<br/>WalletController"]
        CC["ChainControl<br/>\u94FE\u8C03\u5EA6\u5668"]
    end

    subgraph "Bitcoin \u540E\u7AEF"
        BTC_Notify["bitcoindnotify/<br/>btcdnotify/<br/>neutrinonotify/"]
        BTC_Wallet["btcwallet/<br/>WalletController \u5B9E\u73B0"]
        BTC_Script["input/script_utils.go<br/>Bitcoin Script \u6784\u5EFA"]
        BTC_Fee["chainfee/<br/>SatPerKWeight"]
        BTC_Chain["Bitcoin \u533A\u5757\u94FE<br/>UTXO \u6A21\u578B"]
    end

    subgraph "Setu \u540E\u7AEF\uFF08\u65B0\u589E\uFF09"
        SETU_Notify["setunotify/<br/>\u5BF9\u8C61\u4E8B\u4EF6\u8BA2\u9605"]
        SETU_Wallet["setuwallet/<br/>\u8D26\u6237\u4F59\u989D\u64CD\u4F5C"]
        SETU_Program["input/setu_programs.go<br/>ProgramTx \u5408\u7EA6\u6784\u5EFA"]
        SETU_Fee["chainfee/setu_estimator<br/>GasPrice"]
        SETU_Chain["Setu DAG \u94FE<br/>\u5BF9\u8C61\u8D26\u6237\u6A21\u578B"]
    end

    RPC -- toCC --> CC
    Router --> Switch
    Switch --> ChanSM
    Funding -- toCC --> CC
    ChanSM -- toCC --> CC
    ContractCourt -- toCC --> CC
    Graph -- toCC --> CC
    Discovery -- toCC --> CC

    CC -->|"chain=bitcoin"| BTC_Notify
    CC -->|"chain=bitcoin"| BTC_Wallet
    CC -->|"chain=bitcoin"| BTC_Script
    CC -->|"chain=bitcoin"| BTC_Fee

    CC -->|"chain=setu"| SETU_Notify
    CC -->|"chain=setu"| SETU_Wallet
    CC -->|"chain=setu"| SETU_Program
    CC -->|"chain=setu"| SETU_Fee

    BTC_Notify --> BTC_Chain
    BTC_Wallet --> BTC_Chain
    SETU_Notify --> SETU_Chain
    SETU_Wallet --> SETU_Chain

    CT_Types -.->|"\u7C7B\u578B\u5B9A\u4E49"| CT_Iface
    CT_Iface -.->|"\u7EC4\u5408"| CC
    
    %% \u5F3A\u5236\u5782\u76F4\u5E03\u5C40\u7684\u8FB9\uFF08\u8BBE\u4E3A\u4E0D\u53EF\u89C1\uFF09
    ChanSM --- CT_Types

    style CT_Types fill:#4a9eff,color:#fff
    style CT_Iface fill:#4a9eff,color:#fff
    style CC fill:#4a9eff,color:#fff
    style SETU_Notify fill:#2ecc71,color:#fff
    style SETU_Wallet fill:#2ecc71,color:#fff
    style SETU_Program fill:#2ecc71,color:#fff
    style SETU_Fee fill:#2ecc71,color:#fff
    style SETU_Chain fill:#2ecc71,color:#fff
    style BTC_Chain fill:#f39c12,color:#fff
    
    %% \u9690\u85CF\u6700\u540E\u4E24\u6761\u8FB9\uFF08\u5F3A\u5236\u5E03\u5C40\u8FB9\uFF09
    linkStyle 22 stroke-width:0, stroke:transparent;`}),h,p,o(c,{id:"mermaid_382ee205","data-code":`flowchart LR
    B1["\u9009\u62E9 UTXO<br/>coin selection"] --> B2["\u6784\u5EFA 2-of-2<br/>\u591A\u7B7E\u8D44\u91D1 TX"]
    B2 --> B3["\u5E7F\u64AD TX<br/>\u7B49\u5F85 3-6 \u6B21\u786E\u8BA4<br/>\u23F1 30~60 min"]
    B3 --> B4["\u751F\u6210 ShortChanID<br/>block:tx:output"]
    B4 --> B5["\u4EA4\u6362\u627F\u8BFA\u4EA4\u6613<br/>wire.MsgTx \u7B7E\u540D"]
    B5 --> B6["HTLC \u66F4\u65B0<br/>Script \u6761\u4EF6\u5206\u652F"]
    B6 --> B7{"\u5173\u95ED\u65B9\u5F0F"}
    B7 -->|\u534F\u4F5C| B8["\u6784\u5EFA\u5173\u95ED TX<br/>\u53CC\u65B9\u7B7E\u540D\u5E7F\u64AD"]
    B7 -->|\u5F3A\u5236| B9["\u5E7F\u64AD\u627F\u8BFA TX<br/>CSV \u5EF6\u8FDF\u7B49\u5F85"]
    B9 --> B10["Sweep UTXO<br/>\u626B\u56DE\u94B1\u5305"]
    B7 -->|\u8FDD\u7EA6| B11["\u6784\u5EFA\u6B63\u4E49 TX<br/>\u64A4\u9500\u5BC6\u94A5\u82B1\u8D39"]

    style B3 fill:#e74c3c,color:#fff
    style B10 fill:#e67e22,color:#fff`}),b,o(c,{id:"mermaid_382ee222","data-code":`flowchart LR
    S1["\u67E5\u8BE2\u4F59\u989D<br/>balance check"] --> S2["\u521B\u5EFA Channel<br/>Object \u5171\u4EAB\u5BF9\u8C61"]
    S2 --> S3["DAG \u6700\u7EC8\u786E\u5B9A<br/>\u23F1 < 1 sec"]
    S3 --> S4["ObjectID<br/>\u5373\u4E3A\u901A\u9053\u6807\u8BC6"]
    S4 --> S5["\u7B7E\u540D\u72B6\u6001\u66F4\u65B0<br/>state_num \u9012\u589E"]
    S5 --> S6["HTLC \u66F4\u65B0<br/>ProgramTx \u5408\u7EA6"]
    S6 --> S7{"\u5173\u95ED\u65B9\u5F0F"}
    S7 -->|\u534F\u4F5C| S8["\u8C03\u7528 close()<br/>\u4F59\u989D\u5206\u914D\u56DE\u8D26\u6237"]
    S7 -->|\u5F3A\u5236| S9["\u8C03\u7528 force_close()<br/>epoch \u5EF6\u8FDF\u7B49\u5F85"]
    S9 --> S10["\u8C03\u7528 withdraw()<br/>\u4F59\u989D\u56DE\u8D26\u6237"]
    S7 -->|\u8FDD\u7EA6| S11["\u8C03\u7528 penalize()<br/>\u64A4\u9500\u5BC6\u94A5+\u65E7\u72B6\u6001"]

    style S3 fill:#2ecc71,color:#fff
    style S10 fill:#2ecc71,color:#fff`}),f,o(c,{id:"mermaid_382ee226","data-code":`sequenceDiagram
    participant Alice as Alice (\u53D1\u8D77\u65B9)
    participant Bob as Bob (\u63A5\u6536\u65B9)
    participant Setu as Setu DAG \u94FE
    participant LND_A as Alice LND
    participant LND_B as Bob LND

    Note over Alice, Bob: \u2550\u2550\u2550 \u901A\u9053\u5F00\u8BBE\u534F\u8BAE \u2550\u2550\u2550

    Alice->>LND_A: openchannel(bob_pubkey, amount)
    LND_A->>LND_A: \u68C0\u67E5\u4F59\u989D \u2265 amount + gas
    LND_A->>LND_B: MsgOpenChannel<br/>{chain_hash, amount, push_amt,<br/>channel_flags, funding_key}
    
    LND_B->>LND_B: \u9A8C\u8BC1\u53C2\u6570<br/>\u68C0\u67E5\u4F59\u989D(\u82E5\u6709 push)
    LND_B->>LND_A: MsgAcceptChannel<br/>{min_depth=1, funding_key,<br/>revocation_basepoint, ...}

    Note over LND_A, Setu: \u2550\u2550\u2550 Setu \u94FE\u4E0A\u64CD\u4F5C \u2550\u2550\u2550

    LND_A->>LND_A: \u6784\u5EFA ProgramTx:<br/>\u521B\u5EFA Channel Object<br/>{local_key, remote_key,<br/>local_balance, remote_balance,<br/>state_num=0, to_self_delay}
    
    LND_A->>Setu: \u63D0\u4EA4 ProgramTx<br/>(\u521B\u5EFA\u5171\u4EAB\u5BF9\u8C61)
    Setu-->>Setu: DAG \u5171\u8BC6\u6267\u884C<br/>\u521B\u5EFA Channel Object
    Setu-->>LND_A: \u6700\u7EC8\u786E\u5B9A\u901A\u77E5<br/>ObjectID = 0xABC...

    LND_A->>LND_B: MsgFundingCreated<br/>{object_id, initial_commitment_sig}

    LND_B->>LND_B: \u9A8C\u8BC1 Object \u5B58\u5728\u4E8E\u94FE\u4E0A<br/>\u9A8C\u8BC1\u7B7E\u540D
    LND_B->>LND_A: MsgFundingSigned<br/>{commitment_sig}

    Note over LND_A, Setu: \u2550\u2550\u2550 \u7B49\u5F85\u6700\u7EC8\u786E\u5B9A\uFF08\u6781\u5FEB\uFF09 \u2550\u2550\u2550

    Setu-->>LND_A: Object \u6700\u7EC8\u786E\u5B9A \u2713
    Setu-->>LND_B: Object \u6700\u7EC8\u786E\u5B9A \u2713

    LND_A->>LND_B: MsgChannelReady<br/>{channel_id = ObjectID}
    LND_B->>LND_A: MsgChannelReady<br/>{channel_id = ObjectID}

    Note over Alice, Bob: \u2705 \u901A\u9053\u5C31\u7EEA\uFF0C\u53EF\u53D1\u9001\u652F\u4ED8<br/>ShortChanID = ObjectID

    rect rgb(200, 235, 200)
        Note over Alice, Setu: \u5BF9\u6BD4 Bitcoin: \u6B64\u6D41\u7A0B\u4ECE ~60min \u7F29\u77ED\u5230 ~2sec
    end`}),C,o(c,{id:"mermaid_382ee23f","data-code":`sequenceDiagram
    participant A as Alice<br/>(\u4ED8\u6B3E\u65B9)
    participant N1 as Node1<br/>(\u4E2D\u7EE7)
    participant B as Bob<br/>(\u6536\u6B3E\u65B9)
    participant Setu as Setu \u94FE<br/>(\u4EC5\u4E89\u8BAE\u65F6)

    Note over A, B: \u2550\u2550\u2550 \u53D1\u7968\u521B\u5EFA \u2550\u2550\u2550
    B->>B: \u751F\u6210 preimage R<br/>payment_hash H = SHA256(R)
    B->>A: Invoice (lnst1...)<br/>{H, amount, expiry_epoch}

    Note over A, B: \u2550\u2550\u2550 \u6D0B\u8471\u8DEF\u7531\u6784\u5EFA \u2550\u2550\u2550
    A->>A: \u8DEF\u5F84\u67E5\u627E: A \u2192 N1 \u2192 B<br/>\u6784\u5EFA\u6D0B\u8471\u5305 (Sphinx)

    Note over A, B: \u2550\u2550\u2550 HTLC \u8F6C\u53D1\u94FE \u2550\u2550\u2550
    
    rect rgb(40, 50, 70)  # \u66FF\u6362\u4E3A\u6697\u8272\u4E3B\u9898\u9002\u914D\u7684\u6DF1\u84DD
        A->>N1: update_add_htlc<br/>{H, amt=1010, expiry=epoch+200}
        A->>N1: commitment_signed
        N1->>A: revoke_and_ack
        N1->>A: commitment_signed
        A->>N1: revoke_and_ack
        Note over A, N1: A\u2194N1 \u901A\u9053\u72B6\u6001\u66F4\u65B0<br/>(\u94FE\u4E0B\u7B7E\u540D\u4EA4\u6362\uFF0C\u65E0\u94FE\u4E0A\u64CD\u4F5C)
    end

    rect rgb(40, 50, 70)  # \u66FF\u6362\u4E3A\u6697\u8272\u4E3B\u9898\u9002\u914D\u7684\u6DF1\u84DD
        N1->>B: update_add_htlc<br/>{H, amt=1000, expiry=epoch+100}
        N1->>B: commitment_signed
        B->>N1: revoke_and_ack
        B->>N1: commitment_signed
        N1->>B: revoke_and_ack
        Note over N1, B: N1\u2194B \u901A\u9053\u72B6\u6001\u66F4\u65B0<br/>(\u94FE\u4E0B\u7B7E\u540D\u4EA4\u6362\uFF0C\u65E0\u94FE\u4E0A\u64CD\u4F5C)
    end

    Note over A, B: \u2550\u2550\u2550 \u539F\u50CF\u63ED\u793A\uFF08\u53CD\u5411\uFF09 \u2550\u2550\u2550

    rect rgb(30, 60, 30)  # \u66FF\u6362\u4E3A\u6697\u8272\u4E3B\u9898\u9002\u914D\u7684\u6DF1\u7EFF
        B->>N1: update_fulfill_htlc<br/>{preimage=R}
        B->>N1: commitment_signed
        N1->>B: revoke_and_ack
        Note over N1, B: N1 \u83B7\u5F97 R\uFF0C\u6263\u51CF B \u7684 HTLC
    end

    rect rgb(30, 60, 30)  # \u66FF\u6362\u4E3A\u6697\u8272\u4E3B\u9898\u9002\u914D\u7684\u6DF1\u7EFF
        N1->>A: update_fulfill_htlc<br/>{preimage=R}
        N1->>A: commitment_signed
        A->>N1: revoke_and_ack
        Note over A, N1: A \u786E\u8BA4\u652F\u4ED8\u5B8C\u6210
    end

    Note over A, B: \u2705 \u652F\u4ED8\u5B8C\u6210<br/>\u5168\u7A0B\u94FE\u4E0B\uFF0C\u96F6 gas \u6D88\u8017

    Note over A, Setu: \u2550\u2550\u2550 \u5F02\u5E38\u60C5\u51B5\uFF1AHTLC \u8D85\u65F6 \u2550\u2550\u2550
    
    rect rgb(70, 30, 30)  # \u66FF\u6362\u4E3A\u6697\u8272\u4E3B\u9898\u9002\u914D\u7684\u6DF1\u7EA2
        alt B \u4E0D\u63ED\u793A\u539F\u50CF\u4E14 expiry \u5230\u8FBE
            N1->>Setu: \u8C03\u7528 htlc_timeout()<br/>ProgramTx: Cmp(current_epoch \u2265 expiry)
            Setu-->>N1: HTLC \u91D1\u989D\u8FD4\u8FD8 N1
            N1->>A: update_fail_htlc
        end
    end`}),S,o(c,{id:"mermaid_382ee243","data-code":`flowchart TB
    Start["\u5355\u65B9\u9762\u5173\u95ED\u89E6\u53D1<br/>(\u5BF9\u7AEF\u6389\u7EBF/\u4E0D\u54CD\u5E94)"]
    
    Start --> Publish["\u63D0\u4EA4\u6700\u65B0\u627F\u8BFA\u72B6\u6001\u5230 Setu<br/>\u8C03\u7528 Channel Object \u7684<br/>force_close(state_num, sig)"]

    Publish --> SetuExec["Setu DAG \u6267\u884C ProgramTx"]
    SetuExec --> Validate{"\u9A8C\u8BC1\u7B7E\u540D +<br/>state_num \u2265 \u94FE\u4E0A\u8BB0\u5F55?"}
    
    Validate -->|"\u5931\u8D25"| Reject["\u4EA4\u6613\u5931\u8D25<br/>\u72B6\u6001\u4E0D\u53D8"]
    Validate -->|"\u6210\u529F"| Freeze["Channel Object<br/>\u8FDB\u5165 CLOSING \u72B6\u6001<br/>\u8BB0\u5F55 close_epoch"]
    
    Freeze --> Parallel["\u5E76\u884C\u5904\u7406"]
    
    Parallel --> LocalBalance["\u672C\u5730\u4F59\u989D\u5904\u7406"]
    Parallel --> RemoteBalance["\u5BF9\u7AEF\u4F59\u989D\u5904\u7406"]
    Parallel --> HTLCs["\u6D3B\u8DC3 HTLC \u5904\u7406"]

    subgraph "\u672C\u5730\u4F59\u989D\uFF08to_self_delay \u4FDD\u62A4\uFF09"
        LocalBalance --> WaitCSV{"\u7B49\u5F85\u76F8\u5BF9\u5EF6\u8FDF<br/>current_epoch \u2265<br/>close_epoch + to_self_delay?"}
        WaitCSV -->|"\u672A\u5230\u671F"| WaitCSV
        WaitCSV -->|"\u5230\u671F"| ClaimLocal["\u8C03\u7528 claim_local()<br/>\u4F59\u989D\u8F6C\u5165\u672C\u5730\u8D26\u6237"]
    end

    subgraph "\u5BF9\u7AEF\u4F59\u989D"
        RemoteBalance --> ClaimRemote["\u5BF9\u7AEF\u53EF\u7ACB\u5373\u8C03\u7528<br/>claim_remote()<br/>\uFF08\u65E0\u5EF6\u8FDF\uFF09"]
    end

    subgraph "HTLC \u89E3\u6790"
        HTLCs --> HTLCType{"HTLC \u65B9\u5411?"}
        HTLCType -->|"\u51FA\u7AD9 HTLC"| TimeoutPath["\u7B49\u5F85 CLTV \u5230\u671F<br/>current_epoch \u2265 htlc.expiry"]
        TimeoutPath --> ClaimTimeout["\u8C03\u7528 htlc_timeout()<br/>\u8D44\u91D1\u8FD4\u8FD8"]
        
        HTLCType -->|"\u5165\u7AD9 HTLC"| PreimagePath["\u6301\u6709\u539F\u50CF?"]
        PreimagePath -->|"\u662F"| ClaimSuccess["\u8C03\u7528 htlc_success(preimage)<br/>ProgramTx \u9A8C\u8BC1 SHA256"]
        PreimagePath -->|"\u5426"| WaitExpiry["\u7B49\u5F85\u8D85\u65F6\u540E<br/>\u5BF9\u7AEF\u53D6\u56DE"]
    end

    subgraph "\u8FDD\u7EA6\u68C0\u6D4B (Breach)"
        Freeze --> Monitor["ChainWatcher \u76D1\u63A7<br/>Object \u72B6\u6001\u53D8\u66F4"]
        Monitor --> OldState{"\u63D0\u4EA4\u7684 state_num<br/>< \u672C\u5730\u5DF2\u77E5\u6700\u65B0?"}
        OldState -->|"\u662F = \u8FDD\u7EA6!"| Penalize["\u8C03\u7528 penalize()<br/>\u63D0\u4EA4\u64A4\u9500\u5BC6\u94A5 +<br/>\u8BC1\u660E\u65E7\u72B6\u6001"]
        Penalize --> SeizeAll["\u5168\u90E8\u4F59\u989D<br/>\u5224\u5F52\u8BDA\u5B9E\u65B9"]
        OldState -->|"\u5426"| NoBreach["\u6B63\u5E38\u6D41\u7A0B"]
    end

    style Freeze fill:#e74c3c,color:#fff
    style ClaimLocal fill:#2ecc71,color:#fff
    style ClaimRemote fill:#2ecc71,color:#fff
    style ClaimSuccess fill:#2ecc71,color:#fff
    style ClaimTimeout fill:#f39c12,color:#fff
    style SeizeAll fill:#9b59b6,color:#fff
    style Reject fill:#95a5a6,color:#fff`}),g,o(c,{id:"mermaid_64a570ea","data-code":`graph TB
    subgraph "Bitcoin Script\uFF08\u73B0\u6709\uFF09"
        BS1["OP_2 &lt;key1&gt; &lt;key2&gt; OP_2<br/>OP_CHECKMULTISIG"]
        BS2["OP_HASH160 &lt;hash&gt; OP_EQUAL<br/>OP_CHECKSIG"]
        BS3["&lt;delay&gt; OP_CSV<br/>OP_DROP OP_CHECKSIG"]
        BS4["&lt;expiry&gt; OP_CLTV<br/>OP_DROP OP_CHECKSIG"]
        BS5["OP_IF<br/>  revocation_path<br/>OP_ELSE<br/>  normal_path<br/>OP_ENDIF"]
    end

    subgraph "Setu ProgramTx \u64CD\u4F5C\u7801\uFF08\u65B0\u589E\uFF09"
        SP1["Const(key1), Const(key2)<br/>LoadInput(sig1), LoadInput(sig2)<br/>BinOp(VERIFY_SIG) \xD7 2<br/>BinOp(AND), JumpIf(fail)"]
        SP2["LoadInput(preimage)<br/>BinOp(SHA256)<br/>Const(expected_hash)<br/>Cmp(EQ), JumpIf(fail)"]
        SP3["LoadInput(current_epoch)<br/>Const(creation_epoch + delay)<br/>Cmp(GE), JumpIf(fail)"]
        SP4["LoadInput(current_epoch)<br/>Const(expiry_epoch)<br/>Cmp(GE), JumpIf(fail)"]
        SP5["LoadInput(which_path)<br/>Const(REVOKE), Cmp(EQ)<br/>JumpIf(revoke_entry)<br/>Jump(normal_entry)"]
    end

    BS1 -->|"2-of-2 \u591A\u7B7E"| SP1
    BS2 -->|"\u54C8\u5E0C\u9501 HTLC"| SP2
    BS3 -->|"\u76F8\u5BF9\u65F6\u95F4\u9501 CSV"| SP3
    BS4 -->|"\u7EDD\u5BF9\u65F6\u95F4\u9501 CLTV"| SP4
    BS5 -->|"\u6761\u4EF6\u5206\u652F"| SP5

    subgraph "Channel Object \u72B6\u6001\u5B57\u6BB5"
        CO["Channel Object<br/>\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500<br/>object_id: [32]byte<br/>local_balance: u64<br/>remote_balance: u64<br/>local_key: [33]byte<br/>remote_key: [33]byte<br/>revocation_key: [33]byte<br/>state_num: u64<br/>to_self_delay: u64<br/>status: OPEN|CLOSING|CLOSED<br/>close_epoch: u64<br/>htlcs: []HTLC"]
    end

    SP1 --> CO
    SP2 --> CO
    SP3 --> CO
    SP4 --> CO
    SP5 --> CO

    style BS1 fill:#f39c12,color:#fff
    style BS2 fill:#f39c12,color:#fff
    style BS3 fill:#f39c12,color:#fff
    style BS4 fill:#f39c12,color:#fff
    style BS5 fill:#f39c12,color:#fff
    style SP1 fill:#2ecc71,color:#fff
    style SP2 fill:#2ecc71,color:#fff
    style SP3 fill:#2ecc71,color:#fff
    style SP4 fill:#2ecc71,color:#fff
    style SP5 fill:#2ecc71,color:#fff
    style CO fill:#3498db,color:#fff`}),m,o(c,{id:"mermaid_64a570e2","data-code":`graph LR
    subgraph "Phase 1: \u57FA\u7840\u5C42"
        P1A["chaintype/<br/>\u94FE\u65E0\u5173\u7C7B\u578B\u5B9A\u4E49"]
        P1B["chainreg/setu_params<br/>\u7F51\u7EDC\u53C2\u6570"]
        P1C["keychain/ \u6269\u5C55<br/>Ed25519 + secp256k1"]
    end

    subgraph "Phase 2: \u94FE\u540E\u7AEF"
        P2A["chainntnfs/setunotify/<br/>\u4E8B\u4EF6\u8BA2\u9605"]
        P2B["lnwallet/setuwallet/<br/>\u94B1\u5305\u5B9E\u73B0"]
        P2C["input/setu_programs.go<br/>\u5408\u7EA6\u6784\u5EFA"]
        P2D["chainfee/setu_estimator<br/>Gas \u4F30\u7B97"]
    end

    subgraph "Phase 3: \u6838\u5FC3\u9002\u914D"
        P3A["lnwallet/channel.go<br/>\u72B6\u6001\u673A\u62BD\u8C61"]
        P3B["funding/manager.go<br/>\u5F00\u901A\u9053\u6D41\u7A0B"]
        P3C["channeldb/<br/>Schema \u9002\u914D"]
        P3D["lnwire/<br/>ChannelID / SCID"]
    end

    subgraph "Phase 4: \u4E0A\u5C42\u9002\u914D"
        P4A["contractcourt/<br/>\u4E89\u8BAE\u89E3\u51B3"]
        P4B["sweep/<br/>\u4F59\u989D\u63D0\u53D6"]
        P4C["graph/ + discovery/<br/>\u901A\u9053\u9A8C\u8BC1"]
        P4D["rpcserver.go<br/>RPC \u5C42"]
    end

    subgraph "Phase 5: \u96C6\u6210"
        P5A["config.go<br/>\u914D\u7F6E\u96C6\u6210"]
        P5B["server.go<br/>\u542F\u52A8\u6D41\u7A0B"]
        P5C["zpay32/<br/>\u53D1\u7968\u7F16\u7801"]
        P5D["itest/<br/>\u96C6\u6210\u6D4B\u8BD5"]
    end

    P1A --> P2A & P2B & P2C & P2D
    P1B --> P2A & P2B
    P1C --> P2B & P2C

    P2A --> P3A & P3B
    P2B --> P3A & P3B
    P2C --> P3A
    P2D --> P3B

    P3A --> P4A & P4B
    P3B --> P4C
    P3C --> P3A & P3B
    P3D --> P3B & P4C

    P4A & P4B & P4C & P4D --> P5A
    P5A --> P5B --> P5D
    P4D --> P5C

    style P1A fill:#e74c3c,color:#fff
    style P1B fill:#e74c3c,color:#fff
    style P1C fill:#e74c3c,color:#fff
    style P2A fill:#e67e22,color:#fff
    style P2B fill:#e67e22,color:#fff
    style P2C fill:#e67e22,color:#fff
    style P2D fill:#e67e22,color:#fff
    style P3A fill:#f1c40f,color:#333
    style P3B fill:#f1c40f,color:#333
    style P3C fill:#f1c40f,color:#333
    style P3D fill:#f1c40f,color:#333
    style P4A fill:#2ecc71,color:#fff
    style P4B fill:#2ecc71,color:#fff
    style P4C fill:#2ecc71,color:#fff
    style P4D fill:#2ecc71,color:#fff
    style P5A fill:#3498db,color:#fff
    style P5B fill:#3498db,color:#fff
    style P5C fill:#3498db,color:#fff
    style P5D fill:#3498db,color:#fff`}),P,o(c,{id:"mermaid_64a570da","data-code":`sequenceDiagram
    box rgb(230,240,255) \u94FE\u4E0B\uFF08Lightning Protocol\uFF09
        participant Alice
        participant Bob
    end
    box rgb(255,240,220) \u94FE\u4E0A\uFF08Setu DAG\uFF09
        participant SetuChain as Setu Chain
        participant ChanObj as Channel Object
    end

    Note over Alice, ChanObj: \u2550\u2550\u2550\u2550\u2550\u2550 Phase 1: \u901A\u9053\u5EFA\u7ACB \u2550\u2550\u2550\u2550\u2550\u2550

    Alice->>SetuChain: ProgramTx: create_channel<br/>{keys, balances, delay}
    SetuChain->>ChanObj: \u521B\u5EFA Shared Object<br/>state_num=0, status=OPEN
    SetuChain-->>Alice: ObjectID \u786E\u8BA4
    SetuChain-->>Bob: ObjectID \u786E\u8BA4

    Note over Alice, ChanObj: \u2550\u2550\u2550\u2550\u2550\u2550 Phase 2: \u94FE\u4E0B\u652F\u4ED8\uFF08\u6838\u5FC3\u5FAA\u73AF\uFF09 \u2550\u2550\u2550\u2550\u2550\u2550

    loop \u6BCF\u6B21\u652F\u4ED8/\u8F6C\u53D1
        Alice->>Bob: update_add_htlc {hash, amt, expiry}
        Alice->>Bob: commitment_signed {sig_for_state_N+1}
        Bob->>Alice: revoke_and_ack {revocation_key_N}
        Bob->>Alice: commitment_signed {sig_for_state_N+1}
        Alice->>Bob: revoke_and_ack {revocation_key_N}
        Note over Alice, Bob: \u53CC\u65B9\u672C\u5730\u66F4\u65B0\u72B6\u6001<br/>state_num++ (\u65E0\u94FE\u4E0A\u4EA4\u4E92!)
    end

    Note over Alice, Bob: \u{1F4A1} \u6B63\u5E38\u8FD0\u884C\u671F\u95F4<br/>\u96F6\u94FE\u4E0A\u4EA4\u6613\uFF0C\u96F6 Gas

    Note over Alice, ChanObj: \u2550\u2550\u2550\u2550\u2550\u2550 Phase 3a: \u534F\u4F5C\u5173\u95ED \u2550\u2550\u2550\u2550\u2550\u2550

    Alice->>Bob: shutdown
    Bob->>Alice: shutdown
    Alice->>Bob: closing_signed {final_balances}
    Bob->>Alice: closing_signed {final_balances}
    
    Alice->>SetuChain: ProgramTx: cooperative_close<br/>{both_sigs, final_balances}
    SetuChain->>ChanObj: \u9A8C\u8BC1\u53CC\u7B7E\u540D<br/>\u5206\u914D\u4F59\u989D\u5230\u5404\u81EA\u8D26\u6237
    SetuChain->>ChanObj: \u9500\u6BC1 Object \u2192 status=CLOSED

    Note over Alice, ChanObj: \u2550\u2550\u2550\u2550\u2550\u2550 Phase 3b: \u5F3A\u5236\u5173\u95ED\uFF08\u66FF\u4EE3\u8DEF\u5F84\uFF09 \u2550\u2550\u2550\u2550\u2550\u2550

    rect rgb(255, 235, 235)
        Alice->>SetuChain: ProgramTx: force_close<br/>{state_num, commitment_sig}
        SetuChain->>ChanObj: status \u2192 CLOSING<br/>close_epoch = current_epoch
        
        Note over Bob, ChanObj: Bob \u6709 to_self_delay \u4E2A epoch<br/>\u68C0\u6D4B\u662F\u5426\u4E3A\u65E7\u72B6\u6001

        alt Bob \u53D1\u73B0\u662F\u65E7\u72B6\u6001\uFF08\u8FDD\u7EA6!\uFF09
            Bob->>SetuChain: ProgramTx: penalize<br/>{revocation_key, proof}
            SetuChain->>ChanObj: \u5168\u90E8\u4F59\u989D\u5224\u5F52 Bob
        else \u72B6\u6001\u6B63\u786E\uFF0C\u5EF6\u8FDF\u5230\u671F\u540E
            Alice->>SetuChain: ProgramTx: claim_local<br/>{epoch \u2265 close_epoch + delay}
            Bob->>SetuChain: ProgramTx: claim_remote
            SetuChain->>ChanObj: \u4F59\u989D\u5206\u522B\u8F6C\u5165\u5404\u81EA\u8D26\u6237
        end
    end`}),B,e("ul",null,[e("li",null,[v,y,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[w]),_:1}),A,T,k,N,O,D,L,R,x,I,V,j]),e("li",null,[E,H,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[G]),_:1}),U,M,F,K,W,X,z]),e("li",null,[J,q,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[Q]),_:1}),Y,Z,$,ee,te,oe,ne,le,ce,se]),e("li",null,[de,ie,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[re]),_:1}),ae,_e,ue,he,pe])]),be,e("p",null,[fe,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[Ce]),_:1}),Se,ge,me]),e("ul",null,[Pe,e("li",null,[Be,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[ve]),_:1}),ye,we,Ae]),Te,e("li",null,[ke,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[Ne]),_:1}),Oe,De,Le,Re,xe])]),Ie,e("p",null,[Ve,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[je]),_:1}),Ee,He,Ge]),Ue,e("p",null,[Me,Fe,Ke,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[We]),_:1}),Xe]),ze,e("ul",null,[e("li",null,[Je,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[qe]),_:1}),Qe,Ye,Ze]),e("li",null,[$e,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[et]),_:1}),tt,ot,nt]),e("li",null,[lt,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[ct]),_:1}),st,dt,it,rt,at]),e("li",null,[_t,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[ut]),_:1}),ht,pt,bt,ft,Ct,St,gt,mt,Pt,Bt,vt,yt])]),wt,e("p",null,[o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[At]),_:1}),Tt,kt,Nt]),e("ul",null,[Ot,Dt,e("li",null,[Lt,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[Rt]),_:1}),xt,It,Vt,jt,Et]),e("li",null,[Ht,Gt,Ut,Mt,Ft,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[Kt]),_:1}),Wt])]),Xt,e("p",null,[zt,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[Jt]),_:1}),qt]),Qt,e("p",null,[Yt,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[Zt]),_:1}),$t]),e("ul",null,[eo,e("li",null,[to,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[oo]),_:1}),no])]),lo,e("p",null,[co,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[so]),_:1}),io]),ro,e("ul",null,[e("li",null,[ao,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[_o]),_:1}),uo]),e("li",null,[ho,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[po]),_:1}),bo]),fo]),Co,e("ul",null,[e("li",null,[So,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[go]),_:1}),mo,Po,Bo,vo,yo]),wo,e("li",null,[Ao,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[To]),_:1}),ko,No,Oo]),Do]),Lo,e("ul",null,[e("li",null,[Ro,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[xo]),_:1}),Io,Vo,jo,Eo,Ho,Go,Uo,Mo]),Fo,e("li",null,[Ko,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[Wo]),_:1}),Xo,zo,Jo,qo,Qo]),Yo]),Zo,e("ul",null,[e("li",null,[$o,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[en]),_:1}),tn,on,nn,ln]),cn,e("li",null,[sn,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[dn]),_:1}),rn,an,_n]),e("li",null,[un,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[hn]),_:1}),pn])]),bn,fn,Cn,e("table",null,[Sn,e("tbody",null,[gn,mn,Pn,Bn,vn,yn,e("tr",null,[wn,An,Tn,e("td",null,[o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[kn]),_:1}),Nn])]),On,Dn,Ln,e("tr",null,[Rn,xn,In,e("td",null,[o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[Vn]),_:1})])]),jn])]),En,e("table",null,[Hn,e("tbody",null,[e("tr",null,[Gn,Un,Mn,e("td",null,[o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[Fn]),_:1}),Kn])]),e("tr",null,[Wn,Xn,zn,e("td",null,[o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[Jn]),_:1})])]),qn,e("tr",null,[Qn,Yn,Zn,e("td",null,[o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[$n]),_:1}),el])]),e("tr",null,[tl,ol,nl,e("td",null,[o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[ll]),_:1}),cl])]),e("tr",null,[sl,dl,il,e("td",null,[o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[rl]),_:1}),al])])])]),_l,e("ul",null,[ul,e("li",null,[hl,pl,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[bl]),_:1}),fl,Cl]),Sl,gl]),ml,e("ul",null,[e("li",null,[Pl,Bl,o(n,{to:"/posts/vscode-file:/vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html"},{default:l(()=>[vl]),_:1}),yl]),wl,Al,Tl])])}var Ll=i(_,[["render",kl],["__file","index.html.vue"]]);export{Ll as default};
