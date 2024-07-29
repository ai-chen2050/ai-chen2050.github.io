import{_ as a,r as n,o as i,c as l,e as o,a as e}from"./app.abfd3e79.js";const r={},s=e('<p>Verifiable logic clock &amp; p2p, a novel verifiable logical clock system.</p><h3 id="guideline-principles" tabindex="-1"><a class="header-anchor" href="#guideline-principles" aria-hidden="true">#</a> Guideline &amp; Principles</h3><h4 id="clock-reference-cops" tabindex="-1"><a class="header-anchor" href="#clock-reference-cops" aria-hidden="true">#</a> Clock ( Reference COPS )</h4><ul><li>L2 causality Replica group (similar Cohort, sub-network, or cluster, Maybe HLS certification) <ul><li>1\u3001CohortClock needs to be still asynchronous to update a batch of Txs &amp; VLC in a cluster (DHT network).</li><li>2\u3001Merge by VLC-defined algorithm, communicate by gossip Algo. (small world servers<br> cluster)</li><li>3\u3001Keep the size of the L2 causality network to prevent linear inflation of VLC space. v(May need to change DHT or Bootstrap logic)</li><li>4\u3001runtime clock data pruning\uFF08when node online or offline\uFF09</li><li>5\u3001 A random select leader or conductor must exist for submitting Rollup-tx(ZKP IVC), and conductor clock in each L2 epoch timestamp.</li></ul></li><li>L1 main-chain Hubs for security gatekeepers, consistency, and tokenization value layer. <ul><li>only accept cohort leader rollup tx and VLC data for a global up-to-date view of the entire network.</li></ul></li></ul><h4 id="p2p-vlc" tabindex="-1"><a class="header-anchor" href="#p2p-vlc" aria-hidden="true">#</a> P2P &amp; VLC</h4><ul><li><strong>SyncMessage</strong>: VLC state &amp; hash of a batch of tx needs to sync to peers</li><li>VLC state ZKP &amp; txs MKT needs submit to L1 Hub for validation &amp; global causal state</li><li>Adjust DHT, Bootstrap Algo parameters to Limit network scale and size</li></ul><h3 id="modeling-data-structure" tabindex="-1"><a class="header-anchor" href="#modeling-data-structure" aria-hidden="true">#</a> Modeling &amp; Data Structure</h3><h4 id="simple-modeling" tabindex="-1"><a class="header-anchor" href="#simple-modeling" aria-hidden="true">#</a> Simple Modeling</h4><p>Suppose there were <code>n</code> nodes in cohort network, n is three in below graph. It looks like below, when start node running.</p>',9),c=e('<h4 id="data-structure" tabindex="-1"><a class="header-anchor" href="#data-structure" aria-hidden="true">#</a> Data Structure</h4><ul><li>Purpose <ul><li>Display clock\u2019s state &amp; change in global view.</li></ul></li><li>Related data structure as below: <ul><li>Message (Ref P2P Design) or Transaction <ul><li>VLC: Verifiable logical clock</li><li>node_id</li></ul></li><li><strong>MergeLog as edge, ClockInfo as vertex.</strong><ul><li>main data structure for db saving and recovering the dag propagation graph about clocks.</li></ul></li></ul></li></ul>',2),d=e('<h4 id="persistence-db" tabindex="-1"><a class="header-anchor" href="#persistence-db" aria-hidden="true">#</a> <strong>Persistence &amp; DB</strong></h4><p>Clock data save to the KV db, LMDB for persistence for now.</p><p>Maybe the <code>postgreDB</code> or <code>influxDB</code> is a better choice for <code>next step</code>.</p><ul><li><p><strong>ClockInfo</strong></p><ul><li>key: <code>nodeid-count-vertex</code>, value: <code>serde(ClockInfo)</code></li></ul></li><li><p><strong>MergeLog</strong></p><ul><li>key: <code>fromid-fcount-toid-tcount-edge</code>, value: <code>serde(MergeLog)</code></li></ul></li><li><p>CurCount, not must</p><ul><li>key: <code>nodeid</code>, value: <code>current_count</code></li></ul></li><li><p>When needs to rebuild the dag of clock propagation,</p><ul><li>first use ClockInfo node to construct participant event line,</li><li>then use MergeLog info for constructing the edge of the dag.</li></ul></li></ul><h3 id="state-increment-sync-separate-clock" tabindex="-1"><a class="header-anchor" href="#state-increment-sync-separate-clock" aria-hidden="true">#</a> State Increment Sync &amp; Separate Clock</h3><h4 id="separate-state-clock" tabindex="-1"><a class="header-anchor" href="#separate-state-clock" aria-hidden="true">#</a> Separate State &amp; Clock</h4><p>Because global data state is much big, so can\u2019t gossip to other participants with so big data package. Separate full state and clock is must to do.</p><ul><li>But clock needs to reference transactions or message. <ul><li>So <code>message_id</code> needs add to ClockInfo.</li></ul></li></ul><h4 id="state-increment-sync" tabindex="-1"><a class="header-anchor" href="#state-increment-sync" aria-hidden="true">#</a> State Increment Sync</h4><p>There are two methods for state increment sync, make events organize to merkle tree or just the native vlc structure.</p><ul><li>1\u3001Event merkle tree <ul><li>Transactions merkle tree in block header, just for light client quick verify. <ul><li>whether there is a transaction block in our design ? <code>not must</code></li></ul></li><li>World state MPT or merkle tree in memory <ul><li>whether there is a world state tree in our design ? <ul><li>Must be consensus algorithm &amp; full transaction order. <code>not must</code></li><li>if not, it will cause state not consistency.</li></ul></li></ul></li></ul></li></ul><p>So, we accept <code>second method</code>, just use native vlc structure to sync state directly.</p><ul><li>2\u3001direct sync by vlc <ul><li>first sync clock, then active pull diff events.</li><li>init setup, pull from many peers neighbor by needs in parallel.</li></ul></li></ul>',13),u=e('<ul><li>All message types: <ul><li>ServerMsg: <ul><li>EventTrigger</li><li>DiffReq</li><li>DiffRsp</li><li>ActiveSync</li></ul></li><li>ClientMsg: only send latest clock</li></ul></li><li>Tips: <ul><li><code>C_A</code> refer to the latest clock of node A, <code>C_B</code> : latest clock of node B.</li></ul></li></ul><h4 id="ledger-organization-modes" tabindex="-1"><a class="header-anchor" href="#ledger-organization-modes" aria-hidden="true">#</a> Ledger Organization Modes</h4><p>Ledger mode is another important issue, this topic leaves to the <code>next step</code> to discuss or design.</p><ul><li>DAG ledger <ul><li>DAG, not friendly to virtual-machine, and asset</li></ul></li><li>liner chain ledger <ul><li>liner chain, not friendly scalability</li></ul></li></ul>',4);function h(p,g){const t=n("Mermaid");return i(),l("div",null,[s,o(t,{id:"mermaid_382ee223","data-code":`gitGraph
   commit tag: "1, 0, 0"
   commit tag: "2, 0, 0"
   branch B
   branch C
   commit tag: "2, 0, 1"
   
   checkout B
   commit tag: "2, 1, 0"
   commit tag: "2, 2, 0"
   
   checkout main
   merge B
   commit tag: "3, 2, 0"

   checkout C
   merge B
   commit tag: "2, 2, 2"
   commit tag: "2, 2, 3"
   
   checkout main
   merge C
   commit tag: "4, 2, 3"`}),c,o(t,{id:"mermaid_64a5701e","data-code":`classDiagram
    note for Message "Message or tx in network"
    note for MergeLog "Merging log save to db, as the edge"
    note for ClockInfo "ClockInfo save to db, as the vertex"
    
    Message <-- Clock
    MergeLog
    ClockInfo <-- Clock
    Message: +vlc Clock
    Message: +isZK bool
    Message: +from/toAddr str
    Message: +signature str
    
    Clock: -value map\uFF08id, u128\uFF09
    class Clock {
	    -partial_cmp()
	    -inc()
	    -merge()
    }
    
    class ClockInfo {
	    -nodeID u128
	    -eventCount u128
	    -createAt u128
	    -Clock Clock
	    -messageId String
    }
    
    class MergeLog {
	    -fromID u128
	    -toID u128
	    -startCount u128
	    -endCount u128
	    -startClockHash ClockHash
	    -afterClockHash ClockHash
	    -mergeAt u128
	    +serialize()
	    +deserialize()
    }`}),d,o(t,{id:"mermaid_64a561e6","data-code":`sequenceDiagram
	  
    A->>B: Event A-1 happen, send latest C_A
    alt if C_A>C_B 
        B->>A: req diff of C_A minus C_B
        A->>B: send [ clocks of C_A - C_B]
    else if C_A<C_B
        B->>A: nothing to do,reduce msg num
    end
    opt if C_A//C_B
        B->>A: send [ clocks of C_B - C_A] and C_B
        A->>B: send [ clocks of C_A - C_B]
    end
    B->>+other-peers: if C_A//C_B,then broadcast C_B
    other-peers-)-B: similar to A and B
    
    other-peers->>+B: if D is init setup, req clocks by needs from peers`}),u])}var f=a(r,[["render",h],["__file","index.html.vue"]]);export{f as default};
