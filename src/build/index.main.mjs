// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc0, ctc1],
      4: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc1, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc1, ctc2, ctc1],
      8: [ctc0, ctc1, ctc0, ctc0, ctc1, ctc2, ctc1, ctc1],
      10: [ctc0, ctc1, ctc0, ctc0, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Bettor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bettor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bettor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v274 = stdlib.protect(ctc0, interact.deadline, 'for Bettor\'s interact field deadline');
  const v275 = stdlib.protect(ctc0, interact.wager, 'for Bettor\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v275, v274],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:46:10:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v275, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v279, v280], secs: v282, time: v281, didSend: v31, from: v278 } = txn1;
      
      sim_r.txns.push({
        amt: v279,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v279, v280], secs: v282, time: v281, didSend: v31, from: v278 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v289], secs: v291, time: v290, didSend: v40, from: v288 } = txn2;
  ;
  const v298 = stdlib.safeAdd(v290, v280);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: ['time', v298],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v278, v279, v280, v288, v298],
      evt_cnt: 0,
      funcNum: 3,
      lct: v290,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v451, time: v450, didSend: v246, from: v449 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v278,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc3, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v451, time: v450, didSend: v246, from: v449 } = txn4;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:38:29:application',
      fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:36:28:function exp)', 'at ./index.rsh:60:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bettor'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v304, time: v303, didSend: v49, from: v302 } = txn3;
    const v306 = stdlib.add(v279, v279);
    ;
    const v313 = stdlib.safeAdd(v303, v280);
    const v317 = stdlib.protect(ctc0, await interact.getWeather(), {
      at: './index.rsh:64:47:application',
      fs: ['at ./index.rsh:63:14:application call to [unknown function] (defined at: ./index.rsh:63:18:function exp)'],
      msg: 'getWeather',
      who: 'Bettor'
      });
    const v318 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:65:56:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:63:14:application call to [unknown function] (defined at: ./index.rsh:63:18:function exp)'],
      msg: 'random',
      who: 'Bettor'
      });
    const v319 = stdlib.digest([ctc0, ctc0], [v318, v317]);
    
    const txn4 = await (ctc.sendrecv({
      args: [v278, v279, v280, v288, v302, v306, v313, v319],
      evt_cnt: 1,
      funcNum: 4,
      lct: v303,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:68:10:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v322], secs: v324, time: v323, didSend: v63, from: v321 } = txn4;
        
        ;
        const v332 = stdlib.safeAdd(v323, v280);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v313],
      tys: [ctc3, ctc0, ctc0, ctc3, ctc3, ctc0, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v278, v279, v280, v288, v302, v306, v313],
        evt_cnt: 0,
        funcNum: 5,
        lct: v303,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v429, time: v428, didSend: v212, from: v427 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v302,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc3, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v429, time: v428, didSend: v212, from: v427 } = txn5;
      ;
      const v430 = stdlib.addressEq(v278, v427);
      const v431 = stdlib.addressEq(v302, v427);
      const v432 = v430 ? true : v431;
      const v433 = stdlib.addressEq(v288, v427);
      const v434 = v432 ? true : v433;
      stdlib.assert(v434, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:69:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Bettor'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:38:29:application',
        fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:36:28:function exp)', 'at ./index.rsh:69:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bettor'
        });
      
      return;
      
      }
    else {
      const {data: [v322], secs: v324, time: v323, didSend: v63, from: v321 } = txn4;
      ;
      const v325 = stdlib.addressEq(v278, v321);
      stdlib.assert(v325, {
        at: './index.rsh:68:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bettor'
        });
      const v332 = stdlib.safeAdd(v323, v280);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc0],
        timeoutAt: ['time', v332],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v278, v279, v280, v288, v302, v306, v322, v332],
          evt_cnt: 0,
          funcNum: 7,
          lct: v323,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v407, time: v406, didSend: v173, from: v405 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v278,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc3, ctc0, ctc1, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v407, time: v406, didSend: v173, from: v405 } = txn6;
        ;
        const v408 = stdlib.addressEq(v278, v405);
        const v409 = stdlib.addressEq(v302, v405);
        const v410 = v408 ? true : v409;
        const v411 = stdlib.addressEq(v288, v405);
        const v412 = v410 ? true : v411;
        stdlib.assert(v412, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:77:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bettor'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:38:29:application',
          fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:36:28:function exp)', 'at ./index.rsh:77:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bettor'
          });
        
        return;
        
        }
      else {
        const {data: [v338], secs: v340, time: v339, didSend: v73, from: v337 } = txn5;
        ;
        const v341 = stdlib.addressEq(v302, v337);
        stdlib.assert(v341, {
          at: './index.rsh:76:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bettor'
          });
        const v348 = stdlib.safeAdd(v339, v280);
        const txn6 = await (ctc.sendrecv({
          args: [v278, v279, v288, v302, v306, v322, v338, v348, v318, v317],
          evt_cnt: 2,
          funcNum: 8,
          lct: v339,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:83:10:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v353, v354], secs: v356, time: v355, didSend: v83, from: v352 } = txn6;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v348],
          tys: [ctc3, ctc0, ctc3, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v278, v279, v288, v302, v306, v322, v338, v348],
            evt_cnt: 0,
            funcNum: 9,
            lct: v339,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v385, time: v384, didSend: v134, from: v383 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v302,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc3, ctc3, ctc0, ctc1, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v385, time: v384, didSend: v134, from: v383 } = txn7;
          ;
          const v386 = stdlib.addressEq(v278, v383);
          const v387 = stdlib.addressEq(v302, v383);
          const v388 = v386 ? true : v387;
          const v389 = stdlib.addressEq(v288, v383);
          const v390 = v388 ? true : v389;
          stdlib.assert(v390, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:84:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bettor'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:38:29:application',
            fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:36:28:function exp)', 'at ./index.rsh:84:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bettor'
            });
          
          return;
          
          }
        else {
          const {data: [v353, v354], secs: v356, time: v355, didSend: v83, from: v352 } = txn6;
          ;
          const v357 = stdlib.addressEq(v278, v352);
          stdlib.assert(v357, {
            at: './index.rsh:83:10:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bettor'
            });
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 10,
            out_tys: [ctc0],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v362], secs: v364, time: v363, didSend: v93, from: v361 } = txn7;
          ;
          const v365 = stdlib.addressEq(v288, v361);
          stdlib.assert(v365, {
            at: './index.rsh:91:10:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bettor'
            });
          const v366 = stdlib.digest([ctc0, ctc0], [v353, v354]);
          const v367 = stdlib.digestEq(v322, v366);
          stdlib.assert(v367, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:92:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bettor'
            });
          const v368 = stdlib.lt(v354, v338);
          const v369 = v368 ? stdlib.checkedBigNumberify('./index.rsh:9:100:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:9:104:decimal', stdlib.UInt_max, '2');
          const v370 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:94:10:decimal', stdlib.UInt_max, '2'), v279);
          const v371 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          const v372 = v371 ? v302 : v278;
          ;
          stdlib.protect(ctc2, await interact.seeOutcome(v369), {
            at: './index.rsh:98:24:application',
            fs: ['at ./index.rsh:97:7:application call to [unknown function] (defined at: ./index.rsh:97:30:function exp)'],
            msg: 'seeOutcome',
            who: 'Bettor'
            });
          
          return;
          
          
          }
        
        }
      
      }
    
    }
  
  
  
  
  
  };
export async function Gambler(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Gambler expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Gambler expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v279, v280], secs: v282, time: v281, didSend: v31, from: v278 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v289], secs: v291, time: v290, didSend: v40, from: v288 } = txn2;
  ;
  const v298 = stdlib.safeAdd(v290, v280);
  stdlib.protect(ctc1, await interact.acceptWager(v279), {
    at: './index.rsh:57:25:application',
    fs: ['at ./index.rsh:56:15:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'acceptWager',
    who: 'Gambler'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v278, v279, v280, v288, v298],
    evt_cnt: 0,
    funcNum: 2,
    lct: v290,
    onlyIf: true,
    out_tys: [],
    pay: [v279, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v304, time: v303, didSend: v49, from: v302 } = txn3;
      
      const v306 = stdlib.add(v279, v279);
      sim_r.txns.push({
        amt: v279,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v313 = stdlib.safeAdd(v303, v280);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v298],
    tys: [ctc3, ctc0, ctc0, ctc3, ctc0],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v278, v279, v280, v288, v298],
      evt_cnt: 0,
      funcNum: 3,
      lct: v290,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v451, time: v450, didSend: v246, from: v449 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v278,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc3, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v451, time: v450, didSend: v246, from: v449 } = txn4;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:38:29:application',
      fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:36:28:function exp)', 'at ./index.rsh:60:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Gambler'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v304, time: v303, didSend: v49, from: v302 } = txn3;
    const v306 = stdlib.add(v279, v279);
    ;
    const v313 = stdlib.safeAdd(v303, v280);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc2],
      timeoutAt: ['time', v313],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v278, v279, v280, v288, v302, v306, v313],
        evt_cnt: 0,
        funcNum: 5,
        lct: v303,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v429, time: v428, didSend: v212, from: v427 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v302,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc3, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v429, time: v428, didSend: v212, from: v427 } = txn5;
      ;
      const v430 = stdlib.addressEq(v278, v427);
      const v431 = stdlib.addressEq(v302, v427);
      const v432 = v430 ? true : v431;
      const v433 = stdlib.addressEq(v288, v427);
      const v434 = v432 ? true : v433;
      stdlib.assert(v434, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:69:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Gambler'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:38:29:application',
        fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:36:28:function exp)', 'at ./index.rsh:69:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Gambler'
        });
      
      return;
      
      }
    else {
      const {data: [v322], secs: v324, time: v323, didSend: v63, from: v321 } = txn4;
      ;
      const v325 = stdlib.addressEq(v278, v321);
      stdlib.assert(v325, {
        at: './index.rsh:68:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Gambler'
        });
      const v332 = stdlib.safeAdd(v323, v280);
      const v336 = stdlib.protect(ctc0, await interact.getWeather(), {
        at: './index.rsh:74:58:application',
        fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:19:function exp)'],
        msg: 'getWeather',
        who: 'Gambler'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v278, v279, v280, v288, v302, v306, v322, v332, v336],
        evt_cnt: 1,
        funcNum: 6,
        lct: v323,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:76:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v338], secs: v340, time: v339, didSend: v73, from: v337 } = txn5;
          
          ;
          const v348 = stdlib.safeAdd(v339, v280);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v332],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc3, ctc0, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v278, v279, v280, v288, v302, v306, v322, v332],
          evt_cnt: 0,
          funcNum: 7,
          lct: v323,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v407, time: v406, didSend: v173, from: v405 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v278,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc3, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v407, time: v406, didSend: v173, from: v405 } = txn6;
        ;
        const v408 = stdlib.addressEq(v278, v405);
        const v409 = stdlib.addressEq(v302, v405);
        const v410 = v408 ? true : v409;
        const v411 = stdlib.addressEq(v288, v405);
        const v412 = v410 ? true : v411;
        stdlib.assert(v412, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:77:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Gambler'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:38:29:application',
          fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:36:28:function exp)', 'at ./index.rsh:77:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Gambler'
          });
        
        return;
        
        }
      else {
        const {data: [v338], secs: v340, time: v339, didSend: v73, from: v337 } = txn5;
        ;
        const v341 = stdlib.addressEq(v302, v337);
        stdlib.assert(v341, {
          at: './index.rsh:76:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Gambler'
          });
        const v348 = stdlib.safeAdd(v339, v280);
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 8,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v348],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v278, v279, v288, v302, v306, v322, v338, v348],
            evt_cnt: 0,
            funcNum: 9,
            lct: v339,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v385, time: v384, didSend: v134, from: v383 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v302,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc3, ctc3, ctc0, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v385, time: v384, didSend: v134, from: v383 } = txn7;
          ;
          const v386 = stdlib.addressEq(v278, v383);
          const v387 = stdlib.addressEq(v302, v383);
          const v388 = v386 ? true : v387;
          const v389 = stdlib.addressEq(v288, v383);
          const v390 = v388 ? true : v389;
          stdlib.assert(v390, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:84:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Gambler'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:38:29:application',
            fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:36:28:function exp)', 'at ./index.rsh:84:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Gambler'
            });
          
          return;
          
          }
        else {
          const {data: [v353, v354], secs: v356, time: v355, didSend: v83, from: v352 } = txn6;
          ;
          const v357 = stdlib.addressEq(v278, v352);
          stdlib.assert(v357, {
            at: './index.rsh:83:10:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Gambler'
            });
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 10,
            out_tys: [ctc0],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v362], secs: v364, time: v363, didSend: v93, from: v361 } = txn7;
          ;
          const v365 = stdlib.addressEq(v288, v361);
          stdlib.assert(v365, {
            at: './index.rsh:91:10:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Gambler'
            });
          const v366 = stdlib.digest([ctc0, ctc0], [v353, v354]);
          const v367 = stdlib.digestEq(v322, v366);
          stdlib.assert(v367, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:92:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Gambler'
            });
          const v368 = stdlib.lt(v354, v338);
          const v369 = v368 ? stdlib.checkedBigNumberify('./index.rsh:9:100:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:9:104:decimal', stdlib.UInt_max, '2');
          const v370 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:94:10:decimal', stdlib.UInt_max, '2'), v279);
          const v371 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          const v372 = v371 ? v302 : v278;
          ;
          stdlib.protect(ctc1, await interact.seeOutcome(v369), {
            at: './index.rsh:98:24:application',
            fs: ['at ./index.rsh:97:7:application call to [unknown function] (defined at: ./index.rsh:97:30:function exp)'],
            msg: 'seeOutcome',
            who: 'Gambler'
            });
          
          return;
          
          
          }
        
        }
      
      }
    
    }
  
  
  
  
  
  };
export async function Oracle(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Oracle expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v279, v280], secs: v282, time: v281, didSend: v31, from: v278 } = txn1;
  ;
  const v287 = stdlib.protect(ctc0, await interact.prova(), {
    at: './index.rsh:51:47:application',
    fs: ['at ./index.rsh:50:14:application call to [unknown function] (defined at: ./index.rsh:50:18:function exp)'],
    msg: 'prova',
    who: 'Oracle'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v278, v279, v280, v287],
    evt_cnt: 1,
    funcNum: 1,
    lct: v281,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v289], secs: v291, time: v290, didSend: v40, from: v288 } = txn2;
      
      ;
      const v298 = stdlib.safeAdd(v290, v280);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v289], secs: v291, time: v290, didSend: v40, from: v288 } = txn2;
  ;
  const v298 = stdlib.safeAdd(v290, v280);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: ['time', v298],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v278, v279, v280, v288, v298],
      evt_cnt: 0,
      funcNum: 3,
      lct: v290,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v451, time: v450, didSend: v246, from: v449 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v278,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v451, time: v450, didSend: v246, from: v449 } = txn4;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:38:29:application',
      fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:36:28:function exp)', 'at ./index.rsh:60:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Oracle'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v304, time: v303, didSend: v49, from: v302 } = txn3;
    const v306 = stdlib.add(v279, v279);
    ;
    const v313 = stdlib.safeAdd(v303, v280);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc1],
      timeoutAt: ['time', v313],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v278, v279, v280, v288, v302, v306, v313],
        evt_cnt: 0,
        funcNum: 5,
        lct: v303,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v429, time: v428, didSend: v212, from: v427 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v302,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v429, time: v428, didSend: v212, from: v427 } = txn5;
      ;
      const v430 = stdlib.addressEq(v278, v427);
      const v431 = stdlib.addressEq(v302, v427);
      const v432 = v430 ? true : v431;
      const v433 = stdlib.addressEq(v288, v427);
      const v434 = v432 ? true : v433;
      stdlib.assert(v434, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:69:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Oracle'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:38:29:application',
        fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:36:28:function exp)', 'at ./index.rsh:69:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Oracle'
        });
      
      return;
      
      }
    else {
      const {data: [v322], secs: v324, time: v323, didSend: v63, from: v321 } = txn4;
      ;
      const v325 = stdlib.addressEq(v278, v321);
      stdlib.assert(v325, {
        at: './index.rsh:68:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oracle'
        });
      const v332 = stdlib.safeAdd(v323, v280);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc0],
        timeoutAt: ['time', v332],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v278, v279, v280, v288, v302, v306, v322, v332],
          evt_cnt: 0,
          funcNum: 7,
          lct: v323,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v407, time: v406, didSend: v173, from: v405 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v278,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc0, ctc0, ctc2, ctc2, ctc0, ctc1, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v407, time: v406, didSend: v173, from: v405 } = txn6;
        ;
        const v408 = stdlib.addressEq(v278, v405);
        const v409 = stdlib.addressEq(v302, v405);
        const v410 = v408 ? true : v409;
        const v411 = stdlib.addressEq(v288, v405);
        const v412 = v410 ? true : v411;
        stdlib.assert(v412, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:77:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Oracle'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:38:29:application',
          fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:36:28:function exp)', 'at ./index.rsh:77:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Oracle'
          });
        
        return;
        
        }
      else {
        const {data: [v338], secs: v340, time: v339, didSend: v73, from: v337 } = txn5;
        ;
        const v341 = stdlib.addressEq(v302, v337);
        stdlib.assert(v341, {
          at: './index.rsh:76:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Oracle'
          });
        const v348 = stdlib.safeAdd(v339, v280);
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 8,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v348],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v278, v279, v288, v302, v306, v322, v338, v348],
            evt_cnt: 0,
            funcNum: 9,
            lct: v339,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v385, time: v384, didSend: v134, from: v383 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v302,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc0, ctc2, ctc2, ctc0, ctc1, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v385, time: v384, didSend: v134, from: v383 } = txn7;
          ;
          const v386 = stdlib.addressEq(v278, v383);
          const v387 = stdlib.addressEq(v302, v383);
          const v388 = v386 ? true : v387;
          const v389 = stdlib.addressEq(v288, v383);
          const v390 = v388 ? true : v389;
          stdlib.assert(v390, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:84:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Oracle'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:38:29:application',
            fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:36:28:function exp)', 'at ./index.rsh:84:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Oracle'
            });
          
          return;
          
          }
        else {
          const {data: [v353, v354], secs: v356, time: v355, didSend: v83, from: v352 } = txn6;
          ;
          const v357 = stdlib.addressEq(v278, v352);
          stdlib.assert(v357, {
            at: './index.rsh:83:10:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Oracle'
            });
          const v360 = stdlib.protect(ctc0, await interact.extractWinner(), {
            at: './index.rsh:89:59:application',
            fs: ['at ./index.rsh:88:14:application call to [unknown function] (defined at: ./index.rsh:88:18:function exp)'],
            msg: 'extractWinner',
            who: 'Oracle'
            });
          
          const txn7 = await (ctc.sendrecv({
            args: [v278, v279, v288, v302, v322, v338, v353, v354, v360],
            evt_cnt: 1,
            funcNum: 10,
            lct: v355,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:91:10:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v362], secs: v364, time: v363, didSend: v93, from: v361 } = txn7;
              
              ;
              const v368 = stdlib.lt(v354, v338);
              const v369 = v368 ? stdlib.checkedBigNumberify('./index.rsh:9:100:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:9:104:decimal', stdlib.UInt_max, '2');
              const v370 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:94:10:decimal', stdlib.UInt_max, '2'), v279);
              const v371 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
              const v372 = v371 ? v302 : v278;
              sim_r.txns.push({
                kind: 'from',
                to: v372,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc0, ctc2, ctc2, ctc1, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [v362], secs: v364, time: v363, didSend: v93, from: v361 } = txn7;
          ;
          const v365 = stdlib.addressEq(v288, v361);
          stdlib.assert(v365, {
            at: './index.rsh:91:10:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Oracle'
            });
          const v366 = stdlib.digest([ctc0, ctc0], [v353, v354]);
          const v367 = stdlib.digestEq(v322, v366);
          stdlib.assert(v367, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:92:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Oracle'
            });
          const v368 = stdlib.lt(v354, v338);
          const v369 = v368 ? stdlib.checkedBigNumberify('./index.rsh:9:100:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:9:104:decimal', stdlib.UInt_max, '2');
          const v370 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:94:10:decimal', stdlib.UInt_max, '2'), v279);
          const v371 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          const v372 = v371 ? v302 : v278;
          ;
          return;
          
          
          }
        
        }
      
      }
    
    }
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64,uint64))void`, `_reachp_10((uint64,uint64))void`, `_reachp_2((uint64))void`, `_reachp_3((uint64))void`, `_reachp_4((uint64,digest))void`, `_reachp_5((uint64))void`, `_reachp_6((uint64,uint64))void`, `_reachp_7((uint64))void`, `_reachp_8((uint64,uint64,uint64))void`, `_reachp_9((uint64))void`],
    pure: [],
    sigs: [`_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64,uint64))void`, `_reachp_10((uint64,uint64))void`, `_reachp_2((uint64))void`, `_reachp_3((uint64))void`, `_reachp_4((uint64,digest))void`, `_reachp_5((uint64))void`, `_reachp_6((uint64,uint64))void`, `_reachp_7((uint64))void`, `_reachp_8((uint64,uint64,uint64))void`, `_reachp_9((uint64))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCANAAgBIAIocJgBBAYQCpABJgMAAQABATEYQQSsKGRJIls1ASNbNQIpZCpkUIILBAodJkkEG275UAR1DuQGBIRjYqUEpHE8lgSuRPLfBMjQULEE4lfE+QTlOmzuBOxvOQ8E/0yWvTYaAI4LA/sEEQPwBAYDxgPlA9oEJwQcBD0EMgAxADUUNAwiWzUNNAwjWzUTNAwhCls1C4AE93ETTTQNFlA0ExZQNAsWULA0DYgEajQTiARzNBQ0ExZQNAsWUCEGr1AkMgY1AjUBKUsBVwB/ZypMV38hZyg0ARY0AhZQZzEZIhJEiAR5NANAAAqABBUffHU0BFCwJEMxADUSJDQBEkRJVwAgNRRJJVs1EyEFWzULNAwiWzUNgATHtgrVNA0WUDQMVwgIULA0DYgD7DIGNAsINQ40FDQTFlA0CxZQNBJQNA4WUIFIr1AhBDIGQv91IQs0ARJESVcAIDUUSSVbNRNJVyggNRJJV0ggNRFJV2ggNRBJgYgBWzUPSSEMWzUOIQdbNQ00CyJbNQyABJOl9jw0DBZQNAtXCAhQsDQMiAN4NBIxABJENBA0DhY0DRZQARJEIQQ0Ews0FDQRIQQiNA00DwxNIQQSTYgDVzEZgQUSRIgDiyIyCjIJiAQWQv8HMQA1ESEENAESRIgDVjQMFzUNgASXTvcXNA0WULA0DYgDFzIGNA4MRDQTSQg1DDQTiAMUMgY0Cwg1DzQUNBMWUDQLFlA0ElA0EVA0DBZQNA8WUDIDUCEIMgZC/okhBDQBEkSIAv40DBc1C4AE1Axs1jQLFlCwNAuIAr8yBjQOD0Q0EzQUiAK8Qv9iIQg0ARJEiANXNA0iWzUONA1XCCA1EIAET287RDQOFlA0EFCwNA6IAoYyBjQPDEQ0FDEAEkQyBjQLCDUVNBQ0ExZQNAsWUDQSUDQRUDQMFlA0EFA0FRZQIQkyBkL9/SEINAESRIgC+TQNFzULgASBqprPNAsWULA0C4gCMzIGNA8PRDQUMQASNBExABIRNBIxABIRRDQMNBGIAh5C/sQhCTQBEkSIAoo0DSJbNQ40DSNbNQ+ABEohy/w0DhZQNA8WULA0DogB6DIGNBUMRDQRMQASRDIGNAsINRU0FDQTFlA0ElA0EVA0DBZQNBBQNA8WUDQVFlAjMgZC/WAhCTQBEkSIAi00DRc1C4AEcaixozQLFlCwNAuIAZYyBjQVD0Q0FDEAEjQRMQASETQSMQASEUQ0DDQUiAGBQv4nIzQBEkSIAb80CyJbNQw0CyNbNQ40CyEKWzUNgAQShlvANAwWUDQOFlA0DRZQsDQMiAFBMgY0FQxENBQxABJENBQ0ExZQNBJQNBFQNBBQNA8WUDQOFlA0DRZQIQsyBkL8vyM0ARJEiAFeNAsXNQ2ABGNXUVw0DRZQsDQNiAD2MgY0FQ9ENBQxABI0ETEAEhE0EjEAEhFENAw0EYgA4UL9h4gAzYGgjQY0Bgg1BjYaATUMQvwniAC5NhoBNQxC/JSIAK42GgE1C0L84YgAozYaATUMQv1miACYNhoBNQxC/beIAI02GgE1DUL92ogAgjYaATUNQv4tiAB3NhoBNQ1C/mKIAGw2GgE1DUL+tIgAYTYaATULQv7piABWNhoBNQtC/z8iMTQSRIEDMTUSRCIxNhJEIjE3EkSIADaBoAGvIiJC+90xGSISREL7/CKyASSyELIHsgiziUiJTAlJNQYyCYgAG4kJSUH/7kk1BogAE4kkNQOJSSISTDQCEhFEibFC/8kxFjQAJAhJNQAJRwI4BzIKEkQ4ECQSRDgIEkSJSVcAIDUUSSVbNRNJIQVbNQtJVzAgNRKBUFs1Dok0BjQHSg9B/5VC/51JVwAgNRRJJVs1E0lXKCA1EklXSCA1EUmBaFs1DElXcCA1EEkhDFs1DyEHWzUViUlXACA1FEklWzUTSSEFWzULSVcwIDUSSVdQIDURSSEGWzUMSVd4IDUQIQdbNRWJSVcAIDUUSSVbNRNJIQVbNQtJVzAgNRJJV1AgNRFJIQZbNQyBeFs1D4mxsglC/vc=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `589`,
    1001: `590`,
    1002: `590`,
    1003: `591`,
    1004: `592`,
    1005: `593`,
    1006: `593`,
    1007: `594`,
    1008: `595`,
    1009: `595`,
    101: `21`,
    1010: `596`,
    1011: `597`,
    1012: `597`,
    1013: `598`,
    1014: `599`,
    1015: `599`,
    1016: `600`,
    1017: `601`,
    1018: `602`,
    1019: `602`,
    102: `21`,
    1020: `603`,
    1021: `604`,
    1022: `605`,
    1023: `605`,
    1024: `606`,
    1025: `607`,
    1026: `608`,
    1027: `608`,
    1028: `609`,
    1029: `609`,
    103: `22`,
    1030: `610`,
    1031: `610`,
    1032: `610`,
    1033: `612`,
    1034: `613`,
    1035: `613`,
    1036: `614`,
    1037: `615`,
    1038: `616`,
    1039: `616`,
    104: `22`,
    1040: `616`,
    1041: `617`,
    1042: `617`,
    1043: `618`,
    1044: `619`,
    1045: `619`,
    1046: `620`,
    1047: `620`,
    1048: `620`,
    1049: `620`,
    105: `22`,
    1050: `620`,
    1051: `620`,
    1052: `621`,
    1053: `621`,
    1054: `622`,
    1055: `623`,
    1056: `624`,
    1057: `626`,
    1058: `626`,
    1059: `627`,
    106: `23`,
    1060: `627`,
    1061: `627`,
    1062: `628`,
    1063: `628`,
    1064: `629`,
    1065: `629`,
    1066: `630`,
    1067: `631`,
    1068: `632`,
    1069: `632`,
    107: `23`,
    1070: `633`,
    1071: `633`,
    1072: `634`,
    1073: `635`,
    1074: `635`,
    1075: `636`,
    1076: `636`,
    1077: `637`,
    1078: `638`,
    1079: `639`,
    108: `23`,
    1080: `639`,
    1081: `640`,
    1082: `640`,
    1083: `641`,
    1084: `642`,
    1085: `643`,
    1086: `647`,
    1087: `647`,
    1088: `649`,
    1089: `649`,
    109: `23`,
    1090: `650`,
    1091: `650`,
    1092: `650`,
    1093: `651`,
    1094: `651`,
    1095: `651`,
    1096: `653`,
    1097: `653`,
    1098: `653`,
    1099: `654`,
    11: `2`,
    110: `23`,
    1100: `654`,
    1101: `654`,
    1102: `654`,
    1103: `656`,
    1104: `656`,
    1105: `657`,
    1106: `658`,
    1107: `658`,
    1108: `659`,
    1109: `659`,
    111: `23`,
    1110: `659`,
    1111: `660`,
    1112: `660`,
    1113: `661`,
    1114: `661`,
    1115: `661`,
    1116: `663`,
    1117: `663`,
    1118: `663`,
    1119: `664`,
    112: `23`,
    1120: `664`,
    1121: `664`,
    1122: `665`,
    1123: `665`,
    1124: `666`,
    1125: `666`,
    1126: `666`,
    1127: `668`,
    1128: `668`,
    1129: `668`,
    113: `23`,
    1130: `669`,
    1131: `669`,
    1132: `669`,
    1133: `670`,
    1134: `670`,
    1135: `671`,
    1136: `671`,
    1137: `671`,
    1138: `673`,
    1139: `673`,
    114: `23`,
    1140: `673`,
    1141: `674`,
    1142: `674`,
    1143: `674`,
    1144: `675`,
    1145: `675`,
    1146: `676`,
    1147: `676`,
    1148: `676`,
    1149: `678`,
    115: `23`,
    1150: `678`,
    1151: `678`,
    1152: `679`,
    1153: `679`,
    1154: `679`,
    1155: `680`,
    1156: `680`,
    1157: `681`,
    1158: `681`,
    1159: `681`,
    116: `23`,
    1160: `683`,
    1161: `683`,
    1162: `683`,
    1163: `684`,
    1164: `684`,
    1165: `684`,
    1166: `685`,
    1167: `685`,
    1168: `686`,
    1169: `686`,
    117: `23`,
    1170: `686`,
    1171: `688`,
    1172: `688`,
    1173: `688`,
    1174: `689`,
    1175: `689`,
    1176: `689`,
    1177: `690`,
    1178: `690`,
    1179: `691`,
    118: `23`,
    1180: `691`,
    1181: `691`,
    1182: `693`,
    1183: `693`,
    1184: `693`,
    1185: `694`,
    1186: `694`,
    1187: `694`,
    1188: `695`,
    1189: `695`,
    119: `23`,
    1190: `696`,
    1191: `696`,
    1192: `696`,
    1193: `698`,
    1194: `698`,
    1195: `698`,
    1196: `699`,
    1197: `699`,
    1198: `699`,
    1199: `700`,
    12: `2`,
    120: `23`,
    1200: `700`,
    1201: `701`,
    1202: `701`,
    1203: `701`,
    1204: `703`,
    1205: `703`,
    1206: `703`,
    1207: `704`,
    1208: `704`,
    1209: `704`,
    121: `23`,
    1210: `705`,
    1211: `705`,
    1212: `706`,
    1213: `706`,
    1214: `706`,
    1215: `708`,
    1216: `708`,
    1217: `708`,
    1218: `709`,
    1219: `709`,
    122: `23`,
    1220: `709`,
    1221: `710`,
    1222: `710`,
    1223: `711`,
    1224: `711`,
    1225: `711`,
    1226: `713`,
    1227: `714`,
    1228: `714`,
    1229: `715`,
    123: `23`,
    1230: `716`,
    1231: `717`,
    1232: `717`,
    1233: `718`,
    1234: `718`,
    1235: `719`,
    1236: `720`,
    1237: `721`,
    1238: `722`,
    1239: `722`,
    124: `23`,
    1240: `723`,
    1241: `724`,
    1242: `725`,
    1243: `726`,
    1244: `726`,
    1245: `727`,
    1246: `728`,
    1247: `729`,
    1248: `729`,
    1249: `729`,
    125: `23`,
    1250: `730`,
    1251: `730`,
    1252: `730`,
    1253: `731`,
    1254: `732`,
    1255: `733`,
    1256: `734`,
    1257: `734`,
    1258: `734`,
    1259: `736`,
    126: `23`,
    1260: `736`,
    1261: `737`,
    1262: `738`,
    1263: `739`,
    1264: `741`,
    1265: `741`,
    1266: `741`,
    1267: `743`,
    1268: `744`,
    1269: `744`,
    127: `23`,
    1270: `745`,
    1271: `746`,
    1272: `746`,
    1273: `747`,
    1274: `747`,
    1275: `748`,
    1276: `748`,
    1277: `749`,
    1278: `750`,
    1279: `752`,
    128: `23`,
    1280: `753`,
    1281: `755`,
    1282: `756`,
    1283: `757`,
    1284: `758`,
    1285: `758`,
    1286: `759`,
    1287: `759`,
    1288: `760`,
    1289: `760`,
    129: `23`,
    1290: `760`,
    1291: `761`,
    1292: `763`,
    1293: `764`,
    1294: `765`,
    1295: `765`,
    1296: `765`,
    1297: `766`,
    1298: `767`,
    1299: `767`,
    13: `2`,
    130: `25`,
    1300: `768`,
    1301: `768`,
    1302: `768`,
    1303: `769`,
    1304: `771`,
    1305: `772`,
    1306: `772`,
    1307: `773`,
    1308: `775`,
    1309: `776`,
    131: `27`,
    1310: `777`,
    1311: `778`,
    1312: `779`,
    1313: `779`,
    1314: `780`,
    1315: `781`,
    1316: `782`,
    1317: `783`,
    1318: `785`,
    1319: `786`,
    132: `27`,
    1320: `786`,
    1321: `786`,
    1322: `789`,
    1323: `789`,
    1324: `790`,
    1325: `790`,
    1326: `791`,
    1327: `792`,
    1328: `793`,
    1329: `794`,
    133: `28`,
    1330: `794`,
    1331: `795`,
    1332: `796`,
    1333: `796`,
    1334: `797`,
    1335: `797`,
    1336: `798`,
    1337: `798`,
    1338: `799`,
    1339: `800`,
    134: `28`,
    1340: `801`,
    1341: `801`,
    1342: `802`,
    1343: `803`,
    1344: `804`,
    1345: `805`,
    1346: `805`,
    1347: `806`,
    1348: `807`,
    1349: `808`,
    135: `29`,
    1350: `810`,
    1351: `811`,
    1352: `811`,
    1353: `811`,
    1354: `812`,
    1355: `812`,
    1356: `813`,
    1357: `814`,
    1358: `815`,
    1359: `816`,
    136: `29`,
    1360: `816`,
    1361: `817`,
    1362: `818`,
    1363: `818`,
    1364: `819`,
    1365: `820`,
    1366: `820`,
    1367: `821`,
    1368: `822`,
    1369: `822`,
    137: `30`,
    1370: `822`,
    1371: `823`,
    1372: `823`,
    1373: `824`,
    1374: `824`,
    1375: `825`,
    1376: `826`,
    1377: `826`,
    1378: `827`,
    1379: `829`,
    138: `31`,
    1380: `829`,
    1381: `830`,
    1382: `830`,
    1383: `831`,
    1384: `832`,
    1385: `833`,
    1386: `833`,
    1387: `833`,
    1388: `834`,
    1389: `834`,
    139: `32`,
    1390: `834`,
    1391: `836`,
    1392: `837`,
    1393: `837`,
    1394: `837`,
    1395: `838`,
    1396: `838`,
    1397: `839`,
    1398: `840`,
    1399: `841`,
    14: `2`,
    140: `32`,
    1400: `842`,
    1401: `842`,
    1402: `843`,
    1403: `844`,
    1404: `844`,
    1405: `844`,
    1406: `845`,
    1407: `845`,
    1408: `846`,
    1409: `847`,
    141: `33`,
    1410: `847`,
    1411: `847`,
    1412: `848`,
    1413: `848`,
    1414: `849`,
    1415: `850`,
    1416: `850`,
    1417: `851`,
    1418: `852`,
    1419: `852`,
    142: `33`,
    1420: `853`,
    1421: `854`,
    1422: `854`,
    1423: `854`,
    1424: `855`,
    1425: `855`,
    1426: `856`,
    1427: `857`,
    1428: `857`,
    1429: `858`,
    143: `34`,
    1430: `859`,
    1431: `859`,
    1432: `860`,
    1433: `860`,
    1434: `861`,
    1435: `862`,
    1436: `862`,
    1437: `863`,
    1438: `865`,
    1439: `866`,
    144: `35`,
    1440: `866`,
    1441: `866`,
    1442: `867`,
    1443: `867`,
    1444: `868`,
    1445: `869`,
    1446: `870`,
    1447: `871`,
    1448: `871`,
    1449: `872`,
    145: `36`,
    1450: `873`,
    1451: `873`,
    1452: `874`,
    1453: `875`,
    1454: `875`,
    1455: `876`,
    1456: `877`,
    1457: `877`,
    1458: `877`,
    1459: `878`,
    146: `36`,
    1460: `878`,
    1461: `879`,
    1462: `880`,
    1463: `880`,
    1464: `880`,
    1465: `881`,
    1466: `881`,
    1467: `882`,
    1468: `883`,
    1469: `883`,
    147: `37`,
    1470: `884`,
    1471: `885`,
    1472: `885`,
    1473: `886`,
    1474: `887`,
    1475: `887`,
    1476: `887`,
    1477: `888`,
    1478: `888`,
    1479: `889`,
    148: `37`,
    1480: `889`,
    1481: `890`,
    1482: `891`,
    1483: `891`,
    1484: `892`,
    1485: `894`,
    1486: `895`,
    1487: `895`,
    1488: `895`,
    1489: `896`,
    149: `38`,
    1490: `896`,
    1491: `897`,
    1492: `898`,
    1493: `899`,
    1494: `900`,
    1495: `900`,
    1496: `901`,
    1497: `902`,
    1498: `902`,
    1499: `903`,
    15: `2`,
    150: `38`,
    1500: `904`,
    1501: `904`,
    1502: `905`,
    1503: `906`,
    1504: `906`,
    1505: `906`,
    1506: `907`,
    1507: `907`,
    1508: `908`,
    1509: `909`,
    151: `39`,
    1510: `909`,
    1511: `909`,
    1512: `910`,
    1513: `910`,
    1514: `911`,
    1515: `912`,
    1516: `912`,
    1517: `913`,
    1518: `914`,
    1519: `914`,
    152: `40`,
    1520: `915`,
    1521: `915`,
    1522: `916`,
    1523: `917`,
    1524: `917`,
    1525: `918`,
    1526: `920`,
    1527: `921`,
    1528: `921`,
    1529: `922`,
    153: `40`,
    154: `41`,
    155: `41`,
    156: `41`,
    157: `41`,
    158: `41`,
    159: `41`,
    16: `2`,
    160: `42`,
    161: `42`,
    162: `43`,
    163: `44`,
    164: `45`,
    165: `45`,
    166: `46`,
    167: `47`,
    168: `48`,
    169: `48`,
    17: `2`,
    170: `49`,
    171: `50`,
    172: `51`,
    173: `53`,
    174: `53`,
    175: `54`,
    176: `54`,
    177: `54`,
    178: `55`,
    179: `55`,
    18: `2`,
    180: `56`,
    181: `56`,
    182: `56`,
    183: `60`,
    184: `60`,
    185: `61`,
    186: `61`,
    187: `62`,
    188: `63`,
    189: `64`,
    19: `2`,
    190: `64`,
    191: `65`,
    192: `66`,
    193: `67`,
    194: `67`,
    195: `68`,
    196: `69`,
    197: `70`,
    198: `71`,
    199: `71`,
    2: `2`,
    20: `2`,
    200: `73`,
    201: `73`,
    202: `74`,
    203: `74`,
    204: `75`,
    205: `76`,
    206: `76`,
    207: `77`,
    208: `77`,
    209: `77`,
    21: `2`,
    210: `78`,
    211: `79`,
    212: `80`,
    213: `81`,
    214: `81`,
    215: `81`,
    216: `82`,
    217: `83`,
    218: `84`,
    219: `84`,
    22: `2`,
    220: `85`,
    221: `86`,
    222: `86`,
    223: `87`,
    224: `88`,
    225: `89`,
    226: `90`,
    227: `90`,
    228: `91`,
    229: `92`,
    23: `2`,
    230: `93`,
    231: `95`,
    232: `95`,
    233: `95`,
    234: `97`,
    235: `97`,
    236: `98`,
    237: `98`,
    238: `98`,
    239: `100`,
    24: `2`,
    240: `100`,
    241: `100`,
    242: `100`,
    243: `100`,
    244: `100`,
    245: `101`,
    246: `101`,
    247: `102`,
    248: `103`,
    249: `105`,
    25: `4`,
    250: `106`,
    251: `108`,
    252: `108`,
    253: `109`,
    254: `109`,
    255: `110`,
    256: `111`,
    257: `111`,
    258: `112`,
    259: `113`,
    26: `4`,
    260: `115`,
    261: `116`,
    262: `116`,
    263: `116`,
    264: `117`,
    265: `117`,
    266: `118`,
    267: `119`,
    268: `120`,
    269: `121`,
    27: `5`,
    270: `121`,
    271: `122`,
    272: `122`,
    273: `123`,
    274: `124`,
    275: `124`,
    276: `125`,
    277: `125`,
    278: `126`,
    279: `127`,
    28: `5`,
    280: `128`,
    281: `128`,
    282: `129`,
    283: `129`,
    284: `129`,
    285: `129`,
    286: `129`,
    287: `129`,
    288: `130`,
    289: `130`,
    29: `5`,
    290: `131`,
    291: `132`,
    292: `133`,
    293: `133`,
    294: `134`,
    295: `134`,
    296: `134`,
    297: `135`,
    298: `136`,
    299: `138`,
    3: `2`,
    30: `6`,
    300: `138`,
    301: `139`,
    302: `139`,
    303: `139`,
    304: `140`,
    305: `140`,
    306: `141`,
    307: `141`,
    308: `142`,
    309: `143`,
    31: `7`,
    310: `143`,
    311: `145`,
    312: `145`,
    313: `146`,
    314: `146`,
    315: `147`,
    316: `148`,
    317: `149`,
    318: `149`,
    319: `150`,
    32: `8`,
    320: `151`,
    321: `152`,
    322: `152`,
    323: `153`,
    324: `154`,
    325: `154`,
    326: `155`,
    327: `156`,
    328: `157`,
    329: `157`,
    33: `9`,
    330: `158`,
    331: `159`,
    332: `160`,
    333: `160`,
    334: `161`,
    335: `161`,
    336: `162`,
    337: `162`,
    338: `162`,
    339: `164`,
    34: `10`,
    340: `164`,
    341: `165`,
    342: `165`,
    343: `166`,
    344: `167`,
    345: `169`,
    346: `170`,
    347: `170`,
    348: `170`,
    349: `171`,
    35: `11`,
    350: `171`,
    351: `172`,
    352: `173`,
    353: `174`,
    354: `175`,
    355: `175`,
    356: `176`,
    357: `177`,
    358: `177`,
    359: `177`,
    36: `11`,
    360: `178`,
    361: `178`,
    362: `179`,
    363: `180`,
    364: `180`,
    365: `180`,
    366: `181`,
    367: `181`,
    368: `182`,
    369: `183`,
    37: `12`,
    370: `183`,
    371: `183`,
    372: `184`,
    373: `184`,
    374: `185`,
    375: `186`,
    376: `186`,
    377: `186`,
    378: `187`,
    379: `188`,
    38: `13`,
    380: `188`,
    381: `189`,
    382: `190`,
    383: `190`,
    384: `191`,
    385: `192`,
    386: `192`,
    387: `193`,
    388: `193`,
    389: `194`,
    39: `14`,
    390: `195`,
    391: `195`,
    392: `196`,
    393: `196`,
    394: `197`,
    395: `198`,
    396: `199`,
    397: `199`,
    398: `200`,
    399: `200`,
    4: `2`,
    40: `14`,
    400: `200`,
    401: `200`,
    402: `200`,
    403: `200`,
    404: `201`,
    405: `201`,
    406: `202`,
    407: `203`,
    408: `204`,
    409: `204`,
    41: `15`,
    410: `205`,
    411: `205`,
    412: `205`,
    413: `206`,
    414: `207`,
    415: `209`,
    416: `209`,
    417: `210`,
    418: `210`,
    419: `210`,
    42: `16`,
    420: `211`,
    421: `211`,
    422: `212`,
    423: `212`,
    424: `213`,
    425: `214`,
    426: `217`,
    427: `217`,
    428: `218`,
    429: `218`,
    43: `17`,
    430: `219`,
    431: `220`,
    432: `220`,
    433: `221`,
    434: `222`,
    435: `223`,
    436: `224`,
    437: `225`,
    438: `229`,
    439: `229`,
    44: `18`,
    440: `230`,
    441: `230`,
    442: `231`,
    443: `233`,
    444: `233`,
    445: `234`,
    446: `234`,
    447: `235`,
    448: `235`,
    449: `236`,
    45: `19`,
    450: `237`,
    451: `237`,
    452: `238`,
    453: `238`,
    454: `239`,
    455: `240`,
    456: `241`,
    457: `241`,
    458: `242`,
    459: `243`,
    46: `21`,
    460: `244`,
    461: `244`,
    462: `244`,
    463: `246`,
    464: `246`,
    465: `247`,
    466: `247`,
    467: `248`,
    468: `249`,
    469: `251`,
    47: `21`,
    470: `251`,
    471: `251`,
    472: `253`,
    473: `254`,
    474: `254`,
    475: `255`,
    476: `255`,
    477: `256`,
    478: `256`,
    479: `256`,
    48: `21`,
    480: `257`,
    481: `257`,
    482: `257`,
    483: `259`,
    484: `259`,
    485: `260`,
    486: `260`,
    487: `261`,
    488: `261`,
    489: `262`,
    49: `21`,
    490: `262`,
    491: `263`,
    492: `264`,
    493: `265`,
    494: `265`,
    495: `265`,
    496: `266`,
    497: `266`,
    498: `267`,
    499: `268`,
    5: `2`,
    50: `21`,
    500: `268`,
    501: `269`,
    502: `269`,
    503: `269`,
    504: `269`,
    505: `269`,
    506: `269`,
    507: `270`,
    508: `270`,
    509: `271`,
    51: `21`,
    510: `272`,
    511: `273`,
    512: `275`,
    513: `275`,
    514: `276`,
    515: `276`,
    516: `276`,
    517: `277`,
    518: `277`,
    519: `278`,
    52: `21`,
    520: `278`,
    521: `279`,
    522: `280`,
    523: `281`,
    524: `281`,
    525: `282`,
    526: `283`,
    527: `284`,
    528: `284`,
    529: `285`,
    53: `21`,
    530: `285`,
    531: `286`,
    532: `286`,
    533: `286`,
    534: `289`,
    535: `289`,
    536: `290`,
    537: `290`,
    538: `291`,
    539: `292`,
    54: `21`,
    540: `292`,
    541: `294`,
    542: `294`,
    543: `295`,
    544: `295`,
    545: `296`,
    546: `297`,
    547: `298`,
    548: `298`,
    549: `299`,
    55: `21`,
    550: `300`,
    551: `301`,
    552: `301`,
    553: `302`,
    554: `303`,
    555: `303`,
    556: `304`,
    557: `305`,
    558: `305`,
    559: `306`,
    56: `21`,
    560: `307`,
    561: `308`,
    562: `308`,
    563: `309`,
    564: `310`,
    565: `311`,
    566: `311`,
    567: `312`,
    568: `313`,
    569: `313`,
    57: `21`,
    570: `314`,
    571: `314`,
    572: `315`,
    573: `315`,
    574: `315`,
    575: `317`,
    576: `317`,
    577: `318`,
    578: `318`,
    579: `319`,
    58: `21`,
    580: `320`,
    581: `321`,
    582: `321`,
    583: `321`,
    584: `322`,
    585: `322`,
    586: `323`,
    587: `324`,
    588: `324`,
    589: `325`,
    59: `21`,
    590: `325`,
    591: `325`,
    592: `325`,
    593: `325`,
    594: `325`,
    595: `326`,
    596: `326`,
    597: `327`,
    598: `328`,
    599: `329`,
    6: `2`,
    60: `21`,
    600: `331`,
    601: `331`,
    602: `332`,
    603: `332`,
    604: `332`,
    605: `333`,
    606: `333`,
    607: `334`,
    608: `334`,
    609: `335`,
    61: `21`,
    610: `336`,
    611: `337`,
    612: `337`,
    613: `339`,
    614: `339`,
    615: `340`,
    616: `340`,
    617: `340`,
    618: `341`,
    619: `341`,
    62: `21`,
    620: `341`,
    621: `343`,
    622: `343`,
    623: `344`,
    624: `344`,
    625: `345`,
    626: `346`,
    627: `347`,
    628: `347`,
    629: `347`,
    63: `21`,
    630: `348`,
    631: `348`,
    632: `349`,
    633: `350`,
    634: `351`,
    635: `351`,
    636: `352`,
    637: `352`,
    638: `353`,
    639: `353`,
    64: `21`,
    640: `353`,
    641: `354`,
    642: `354`,
    643: `355`,
    644: `355`,
    645: `355`,
    646: `355`,
    647: `355`,
    648: `355`,
    649: `356`,
    65: `21`,
    650: `356`,
    651: `357`,
    652: `358`,
    653: `359`,
    654: `359`,
    655: `360`,
    656: `361`,
    657: `363`,
    658: `363`,
    659: `364`,
    66: `21`,
    660: `364`,
    661: `364`,
    662: `365`,
    663: `365`,
    664: `366`,
    665: `366`,
    666: `367`,
    667: `368`,
    668: `369`,
    669: `369`,
    67: `21`,
    670: `370`,
    671: `370`,
    672: `371`,
    673: `372`,
    674: `375`,
    675: `375`,
    676: `376`,
    677: `376`,
    678: `377`,
    679: `378`,
    68: `21`,
    680: `378`,
    681: `380`,
    682: `380`,
    683: `381`,
    684: `381`,
    685: `382`,
    686: `383`,
    687: `384`,
    688: `384`,
    689: `385`,
    69: `21`,
    690: `386`,
    691: `387`,
    692: `387`,
    693: `388`,
    694: `389`,
    695: `389`,
    696: `390`,
    697: `391`,
    698: `391`,
    699: `392`,
    7: `2`,
    70: `21`,
    700: `393`,
    701: `394`,
    702: `394`,
    703: `395`,
    704: `396`,
    705: `396`,
    706: `397`,
    707: `398`,
    708: `399`,
    709: `399`,
    71: `21`,
    710: `400`,
    711: `400`,
    712: `401`,
    713: `401`,
    714: `401`,
    715: `403`,
    716: `403`,
    717: `404`,
    718: `404`,
    719: `405`,
    72: `21`,
    720: `406`,
    721: `407`,
    722: `407`,
    723: `407`,
    724: `408`,
    725: `408`,
    726: `409`,
    727: `410`,
    728: `410`,
    729: `411`,
    73: `21`,
    730: `411`,
    731: `411`,
    732: `411`,
    733: `411`,
    734: `411`,
    735: `412`,
    736: `412`,
    737: `413`,
    738: `414`,
    739: `415`,
    74: `21`,
    740: `417`,
    741: `417`,
    742: `418`,
    743: `418`,
    744: `418`,
    745: `419`,
    746: `419`,
    747: `420`,
    748: `420`,
    749: `421`,
    75: `21`,
    750: `422`,
    751: `423`,
    752: `423`,
    753: `424`,
    754: `424`,
    755: `425`,
    756: `426`,
    757: `426`,
    758: `427`,
    759: `427`,
    76: `21`,
    760: `428`,
    761: `429`,
    762: `430`,
    763: `430`,
    764: `431`,
    765: `431`,
    766: `432`,
    767: `433`,
    768: `434`,
    769: `438`,
    77: `21`,
    770: `438`,
    771: `440`,
    772: `440`,
    773: `441`,
    774: `441`,
    775: `441`,
    776: `442`,
    777: `442`,
    778: `442`,
    779: `444`,
    78: `21`,
    780: `444`,
    781: `445`,
    782: `445`,
    783: `446`,
    784: `447`,
    785: `448`,
    786: `448`,
    787: `448`,
    788: `449`,
    789: `449`,
    79: `21`,
    790: `450`,
    791: `451`,
    792: `452`,
    793: `452`,
    794: `453`,
    795: `453`,
    796: `454`,
    797: `455`,
    798: `456`,
    799: `456`,
    8: `2`,
    80: `21`,
    800: `457`,
    801: `457`,
    802: `457`,
    803: `457`,
    804: `457`,
    805: `457`,
    806: `458`,
    807: `458`,
    808: `459`,
    809: `460`,
    81: `21`,
    810: `461`,
    811: `461`,
    812: `462`,
    813: `463`,
    814: `464`,
    815: `466`,
    816: `466`,
    817: `467`,
    818: `467`,
    819: `467`,
    82: `21`,
    820: `468`,
    821: `468`,
    822: `469`,
    823: `469`,
    824: `470`,
    825: `471`,
    826: `472`,
    827: `472`,
    828: `473`,
    829: `473`,
    83: `21`,
    830: `474`,
    831: `475`,
    832: `478`,
    833: `478`,
    834: `479`,
    835: `479`,
    836: `480`,
    837: `481`,
    838: `481`,
    839: `483`,
    84: `21`,
    840: `483`,
    841: `484`,
    842: `484`,
    843: `485`,
    844: `486`,
    845: `487`,
    846: `487`,
    847: `488`,
    848: `489`,
    849: `489`,
    85: `21`,
    850: `490`,
    851: `491`,
    852: `491`,
    853: `492`,
    854: `493`,
    855: `494`,
    856: `494`,
    857: `495`,
    858: `496`,
    859: `496`,
    86: `21`,
    860: `497`,
    861: `498`,
    862: `499`,
    863: `499`,
    864: `500`,
    865: `501`,
    866: `502`,
    867: `503`,
    868: `503`,
    869: `504`,
    87: `21`,
    870: `504`,
    871: `504`,
    872: `506`,
    873: `506`,
    874: `507`,
    875: `507`,
    876: `508`,
    877: `509`,
    878: `510`,
    879: `510`,
    88: `21`,
    880: `510`,
    881: `511`,
    882: `511`,
    883: `512`,
    884: `513`,
    885: `513`,
    886: `514`,
    887: `514`,
    888: `514`,
    889: `514`,
    89: `21`,
    890: `514`,
    891: `514`,
    892: `515`,
    893: `515`,
    894: `516`,
    895: `517`,
    896: `518`,
    897: `520`,
    898: `520`,
    899: `521`,
    9: `2`,
    90: `21`,
    900: `521`,
    901: `521`,
    902: `522`,
    903: `522`,
    904: `523`,
    905: `523`,
    906: `524`,
    907: `525`,
    908: `526`,
    909: `526`,
    91: `21`,
    910: `527`,
    911: `527`,
    912: `528`,
    913: `529`,
    914: `529`,
    915: `530`,
    916: `530`,
    917: `531`,
    918: `532`,
    919: `533`,
    92: `21`,
    920: `533`,
    921: `534`,
    922: `534`,
    923: `535`,
    924: `536`,
    925: `537`,
    926: `541`,
    927: `541`,
    928: `543`,
    929: `543`,
    93: `21`,
    930: `544`,
    931: `544`,
    932: `544`,
    933: `545`,
    934: `545`,
    935: `545`,
    936: `547`,
    937: `548`,
    938: `548`,
    939: `549`,
    94: `21`,
    940: `550`,
    941: `551`,
    942: `551`,
    943: `551`,
    944: `552`,
    945: `552`,
    946: `553`,
    947: `554`,
    948: `555`,
    949: `555`,
    95: `21`,
    950: `556`,
    951: `556`,
    952: `557`,
    953: `558`,
    954: `559`,
    955: `559`,
    956: `560`,
    957: `560`,
    958: `561`,
    959: `561`,
    96: `21`,
    960: `562`,
    961: `563`,
    962: `563`,
    963: `564`,
    964: `564`,
    965: `564`,
    966: `564`,
    967: `564`,
    968: `564`,
    969: `565`,
    97: `21`,
    970: `565`,
    971: `566`,
    972: `567`,
    973: `568`,
    974: `568`,
    975: `569`,
    976: `570`,
    977: `571`,
    978: `571`,
    979: `572`,
    98: `21`,
    980: `573`,
    981: `574`,
    982: `576`,
    983: `576`,
    984: `577`,
    985: `577`,
    986: `577`,
    987: `578`,
    988: `578`,
    989: `579`,
    99: `21`,
    990: `579`,
    991: `580`,
    992: `581`,
    993: `582`,
    994: `582`,
    995: `583`,
    996: `583`,
    997: `584`,
    998: `585`,
    999: `589`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 160,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v702","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e10","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e8","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e9","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"v705","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"v732","type":"tuple"}],"name":"_reachp_10","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v708","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v711","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T7","name":"v714","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v717","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"v720","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v723","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v726","type":"tuple"}],"name":"_reachp_8","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v729","type":"tuple"}],"name":"_reachp_9","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200216c9081380391601f1980601f85011683019360018060401b039284861084871117620003085781606092869260409889528339810103126200031e578351926200004e8462000323565b80518452602093858583015192868301938452015194868201958652436003558651918183018381108782111762000308578852600080935260049060ff825416620002f1577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808a5133815283518682015287518c8201528a516060820152a1518015908115620002e4575b5015620002cd5783513403620002b657875196620000fa8862000323565b8288019484865289890198858a5233905251855251875260019687845543885588519433848701525189860152516060850152606084526080840184811087821117620002a357885283519586116200029057600254908782811c9216801562000285575b83831014620002725750601f811162000226575b508093601f8611600114620001be57505091839491849394620001b2575b50501b916000199060031b1c1916176002555b51611e2c9081620003408239f35b01519250388062000191565b600283528183209493928692918316915b888383106200020b5750505010620001f1575b505050811b01600255620001a4565b015160001960f88460031b161c19169055388080620001e2565b858701518855909601959485019487935090810190620001cf565b60028352818320601f870160051c81019183881062000267575b601f0160051c019087905b8281106200025b57505062000173565b8481550187906200024b565b909150819062000240565b634e487b7160e01b845260229052602483fd5b91607f16916200015f565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b602490600989519163100960cb60e01b8352820152fd5b602490600889519163100960cb60e01b8352820152fd5b90506001541438620000dc565b885163100960cb60e01b8152600781840152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b03821117620003085760405256fe608060409080825260049182361015610020575b505050361561001e57005b005b60009160e0908335821c908163048fbfca146116215750806313777274146113835780631e93b0f1146113645780632f132302146111ba57806330dd5d081461100c57806341712c0a14610eb15780638323075714610e92578063ab53f2c614610e22578063b3722a9914610c51578063b559601a1461097e578063e3342bfa14610699578063ee9fe992146103bc5763f5a239bc146100c05750610013565b602093846003193601126103b8578383516100da816118b8565b526100e436611be3565b600292838654036103a1576101086100fa611972565b888082518301019101611c13565b9160ff84541661038a577f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a865180610141843383611c67565b0390a151801590811561037e575b501561036757608082015143101561035057868201805134036103395790868060608a898098979681519788936101858561191f565b868552808501908782528b886101e9878901958287528a8a019783895260808b019a848c5260a081019d8e5260c081019e8f5260018060a01b039c8d9b8c9283865116905283518a5284019384518b520151168952338b525180018c525143611ab6565b8b52558460019d8e439055519b5116908b0152518d8a015251606089015251166080870152511660a08501525160c08401525181830152815261022b8161193a565b8051916001600160401b0383116103265750610247845461187e565b601f81116102ed575b508690601f831160011461028e579282939183928894610283575b50501b916000199060031b1c19161790555b51908152f35b01519250388061026b565b848752878720919083601f198116895b8b888383106102d657505050106102bd575b505050811b01905561027d565b015160001960f88460031b161c191690553880806102b0565b86860151885590960195948501948793500161029e565b61031690858852888820601f850160051c8101918a861061031c575b601f0160051c0190611a9f565b38610250565b9091508190610309565b634e487b7160e01b875260419052602486fd5b855163100960cb60e01b8152601881860152602490fd5b845163100960cb60e01b8152601781850152602490fd5b845163100960cb60e01b8152601681850152602490fd5b9050600154143861014f565b855163100960cb60e01b8152601581860152602490fd5b845163100960cb60e01b8152601481850152602490fd5b8380fd5b509281600319360112610695578282516103d5816118b8565b526103df36611a27565b90600684540361067e576103f1611972565b94610406602096878082518301019101611d2e565b60ff835416610667577f9449691f9246ec4b81aeb2f34bd8715f4e442367780c7ac745057e0a3a212bd685518061043e873383611a78565b0390a18351801590811561065b575b5015610644578181015143101561062d573461061657608081019360018060a01b033381875116036105ff57918887926104cd94610489611cf0565b98818551168a5283850151848b015281606086015116868b01525116606089015260a0830151608089015260c083015160a0890152015160c0870152015143611ab6565b90830152600884556001914383556104ea84519187830190611da8565b61010081526104f881611956565b8051916001600160401b0383116105ec575061051560025461187e565b601f81116105bd575b508590601f831160011461055c579282939183928794610551575b50501b916000199060031b1c19161760025551908152f35b015192503880610539565b60028652868620919083601f198116885b8a888383106105a6575050501061058d575b505050811b0160025561027d565b015160001960f88460031b161c1916905538808061057f565b86860151885590960195948501948793500161056d565b6105e69060028752878720601f850160051c81019189861061031c57601f0160051c0190611a9f565b3861051e565b634e487b7160e01b865260419052602485fd5b865163100960cb60e01b8152602f81870152602490fd5b845163100960cb60e01b8152602e81850152602490fd5b845163100960cb60e01b8152602d81850152602490fd5b845163100960cb60e01b8152602c81850152602490fd5b9050600154143861044d565b845163100960cb60e01b8152602b81850152602490fd5b602490602a84519163100960cb60e01b8352820152fd5b8280fd5b509281600319360112610695578282516106b2816118b8565b526106bc36611a27565b81845403610967576106cc611972565b946106e1602096878082518301019101611c81565b9160ff845416610950577f2b488b46f65093e5cc34b7a23106f60902da34f9221ba5c98d129851d4f8efe685518061071a843383611a78565b0390a180518015908115610944575b501561092d5760c083015143101561091657346108ff5782516001600160a01b03939033908516036108e85791869186959493610764611cf0565b948181879351168352818c820151948d85019586528d8b8401968751918d880192835280856060880151169460608a01958652866080890151169760808b0198895260a001519960a001998a5201519860c08d01998a525143906107c791611ab6565b9a8a8d019b8c52600690558460019e8f439055519c5116908c0152518d8b01525160608a015251166080880152511660a08601525160c08501525190830152516101009081830152815261081a81611956565b8051916001600160401b0383116105ec575061083760025461187e565b601f81116108b9575b508590601f83116001146108725792829391839287946105515750501b916000199060031b1c19161760025551908152f35b60028652868620919083601f198116885b8a888383106108a2575050501061058d57505050811b0160025561027d565b868601518855909601959485019487935001610883565b6108e29060028752878720601f850160051c81019189861061031c57601f0160051c0190611a9f565b38610840565b855163100960cb60e01b8152602381870152602490fd5b845163100960cb60e01b8152602281860152602490fd5b845163100960cb60e01b8152602181860152602490fd5b845163100960cb60e01b8152808501889052602490fd5b90506001541438610729565b845163100960cb60e01b8152601f81860152602490fd5b50601e602492519163100960cb60e01b8352820152fd5b50606036600319011261069557828251610997816118b8565b528151936109a4856118e9565b80358552602094858101926024908135855285830160443581526008885403610c3b576109cf611972565b958651870196610100978882820312610c3757908b806109f193019101611ae0565b9460ff875416610c21577fd6d1c39c0a5020e00dd6931b7ce85fc33eab108766c9c35e10ee90df64121f4460808a513381528d84519082015284518c82015285516060820152a1518015908115610c15575b5015610bff5782850151431015610be95734610bd35784516001600160a01b0395903390871603610bbd5760c090610a79611cf0565b968082511688528c8201518d890152808b830151168b890152606082015116606088015260a08101516080880152015160a08601525160c08501525190830152600a8655600193438555610ad286519389850190611da8565b8252610add82611956565b8151926001600160401b038411610bac575050610afb60025461187e565b601f8111610b7d575b508590601f8311600114610b365792829391839287946105515750501b916000199060031b1c19161760025551908152f35b60028652868620919083601f198116885b8a88838310610b66575050501061058d57505050811b0160025561027d565b868601518855909601959485019487935001610b47565b610ba69060028752878720601f850160051c81019189861061031c57601f0160051c0190611a9f565b38610b04565b634e487b7160e01b87526041905285fd5b885163100960cb60e01b8152603b818901528590fd5b875163100960cb60e01b8152603a818801528490fd5b875163100960cb60e01b81526039818801528490fd5b875163100960cb60e01b81526038818801528490fd5b90506001541438610a43565b885163100960cb60e01b81526037818901528590fd5b8a80fd5b865163100960cb60e01b81526036818701528390fd5b508360203660031901126103b857838351610c6b816118b8565b52610c7536611be3565b916008855403610e0b57610c87611972565b805181019061010081830312610e0757602080610ca693019101611ae0565b9260ff835416610df0577fd64d3134781556c6a626b018733c1e4f7a8f056da03bbd004578b0e46c1b667e855180610cdf843383611c67565b0390a1518015908115610de4575b5015610dcd578201514310610db65734610d9f5781516001600160a01b03919082163303610d915760015b15610d845760015b15610d6d575083808360808295946060849601511691015190828215610d64575bf115610d5a57906020918180558160015561027d611b6b565b51903d90823e3d90fd5b506108fc610d41565b602490604185519163100960cb60e01b8352820152fd5b3382858501511614610d20565b338260608501511614610d18565b825163100960cb60e01b8152908101839052602490fd5b602490603f84519163100960cb60e01b8352820152fd5b835163100960cb60e01b8152603e81840152602490fd5b90506001541486610ced565b845163100960cb60e01b8152603d81850152602490fd5b8680fd5b835163100960cb60e01b8152603c81840152602490fd5b505034610e8e5781600319360112610e8e578154610e3e611972565b91805193849283526020828185015284518093850152815b838110610e7757505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610e56565b5080fd5b505034610e8e5781600319360112610e8e576020906001549051908152f35b505082602060031936011261069557828251610ecc816118b8565b52610ed636611be3565b906002845403610ff557610efa610eeb611972565b60208082518301019101611c13565b9160ff825416610fde577fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e8515845180610f33843383611c67565b0390a1518015908115610fd2575b5015610fbb5760808201514310610fa45734610f8d57508280808093602060018060a01b0382511691015190828215610d6457f115610d5a57906020918180558160015561027d611b6b565b602490601d84519163100960cb60e01b8352820152fd5b602490601c84519163100960cb60e01b8352820152fd5b602490601b84519163100960cb60e01b8352820152fd5b90506001541485610f41565b835163100960cb60e01b8152601a81840152602490fd5b602490601984519163100960cb60e01b8352820152fd5b505082602060031936011261069557828251611027816118b8565b5261103136611be3565b90808454036111a457611054611045611972565b60208082518301019101611c81565b9160ff82541661118d577f46f247599a5fa9114da586bc9a4d716618c03f0781a481e77299e07c647c124984518061108d843383611c67565b0390a1518015908115611181575b501561116a5760c08201514310611153573461113c5781516001600160a01b0391908216330361112e5760015b156111205760015b15611109575083808360a08295946080849601511691015190828215610d6457f115610d5a57906020918180558160015561027d611b6b565b602490602985519163100960cb60e01b8352820152fd5b3382606085015116146110d0565b3382608085015116146110c8565b602490602884519163100960cb60e01b8352820152fd5b602490602784519163100960cb60e01b8352820152fd5b602490602684519163100960cb60e01b8352820152fd5b9050600154148561109b565b835163100960cb60e01b8152602581840152602490fd5b825163100960cb60e01b81526024918101829052fd5b508360203660031901126103b8578383516111d4816118b8565b526111de36611be3565b91600685540361134d576112026111f3611972565b60208082518301019101611d2e565b9260ff835416611336577fa4850b05c9188495196ad609440a82393348559ec3e1eb1c2ab8d784a9e9d40185518061123b843383611c67565b0390a151801590811561132a575b50156113135782015143106112fc57346112e55781516001600160a01b039190821633036112d75760015b156112c95760015b156112b2575083808360a08295948395511691015190828215610d6457f115610d5a57906020918180558160015561027d611b6b565b602490603585519163100960cb60e01b8352820152fd5b33826060850151161461127c565b338260808501511614611274565b602490603484519163100960cb60e01b8352820152fd5b602490603384519163100960cb60e01b8352820152fd5b835163100960cb60e01b8152603281840152602490fd5b90506001541486611249565b845163100960cb60e01b8152603181850152602490fd5b835163100960cb60e01b8152603081840152602490fd5b505034610e8e5781600319360112610e8e576020906003549051908152f35b505080600319360112610e8e5781815161139c816118b8565b526113a636611a27565b60018084540361160a576113b8611972565b946060868051810103126116065783516113d1816118e9565b6020966113df888201611a64565b82526060868201519189840192835201519486830195865260ff8454166115ef577fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a76392487518061142f843383611a78565b0390a15180159081156115e4575b50156115cd57346115b65785519161145483611904565b8783528883019588875287840189815261149560608601928b845260808701958c875260018060a01b03809651168852518a52805183523384525143611ab6565b84526002808b554388558951955184168c8701529751858a0152516060850152511660808301525160a08083019190915281526001600160401b039160c08201838111838210176115a3578652815192831161032657506114f6845461187e565b601f8111611575575b508690601f83116001146115305792829391839288946102835750501b916000199060031b1c191617905551908152f35b848752878720919083601f198116895b8b8883831061155e57505050106102bd57505050811b01905561027d565b868601518855909601959485019487935001611540565b61159d90858852888820601f850160051c8101918a861061031c57601f0160051c0190611a9f565b386114ff565b634e487b7160e01b885260418252602488fd5b855163100960cb60e01b8152600d81850152602490fd5b855163100960cb60e01b8152600c81850152602490fd5b90508454143861143d565b865163100960cb60e01b8152600b81860152602490fd5b8480fd5b825163100960cb60e01b8152600a81870152602490fd5b9050826003193601126103b8578061163985926118b8565b5261164336611a27565b600a84540361186757611654611972565b8051810161010082820312611863579060208061167393019101611ae0565b9060ff86541661184c577f60a927a803d82db9bc2b937443d9c3c0255c9a6dbcecd20808977781a6cb94c58451806116ac843383611a78565b0390a1518015908115611840575b5015611829573461181257808301516001600160a01b03929033908416036117fb57608082015160c08301519183019182518651906020820192835287820152868152611706816118e9565b519020036117e4575160a082015111156117dc576002845b036117d057602082606083015116915b0151918492801590811561177d575b50859650949394156103b85783928392839283918315611773575b1690f115610d5a57906020918180558160015561027d611b6b565b6108fc9250611758565b909350600181901b6001600160ff1b03821682036117bd5780946117aa579596508695046002143861173d565b634e487b7160e01b875260128852602487fd5b634e487b7160e01b875260118852602487fd5b6020828251169161172e565b60028061171e565b835163100960cb60e01b8152601381880152602490fd5b835163100960cb60e01b8152601281880152602490fd5b825163100960cb60e01b8152601181870152602490fd5b825163100960cb60e01b8152601081870152602490fd5b905060015414386116ba565b835163100960cb60e01b8152600f81880152602490fd5b8580fd5b825163100960cb60e01b8152600e81870152602490fd5b90600182811c921680156118ae575b602083101461189857565b634e487b7160e01b600052602260045260246000fd5b91607f169161188d565b602081019081106001600160401b038211176118d357604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b038211176118d357604052565b60a081019081106001600160401b038211176118d357604052565b60e081019081106001600160401b038211176118d357604052565b61010081019081106001600160401b038211176118d357604052565b61012081019081106001600160401b038211176118d357604052565b6040519060006002546119848161187e565b808552600191808316908115611a0857506001146119c2575b5050829003601f01601f191682016001600160401b038111838210176118d357604052565b60026000908152602093509183600080516020611e008339815191525b8385106119f45750505050830101388061199d565b8054888601830152930192849082016119df565b919250506020925060ff191682850152151560051b830101388061199d565b6040906003190112611a5f5760408051919082016001600160401b038111838210176118d35760405260043582526024356020830152565b600080fd5b51906001600160a01b0382168203611a5f57565b6001600160a01b039091168152815160208083019190915290910151604082015260600190565b818110611aaa575050565b60008155600101611a9f565b9190820191828111611aca578210611a5f57565b634e487b7160e01b600052601160045260246000fd5b8092916101009182910312611a5f576040519081016001600160401b038111828210176118d35760405260e0808294611b1881611a64565b845260208101516020850152611b3060408201611a64565b6040850152611b4160608201611a64565b60608501526080810151608085015260a081015160a085015260c081015160c08501520151910152565b611b7660025461187e565b80611b7e5750565b601f8111600114611b9157506000600255565b6002600052611bd690601f0160051c600080516020611e00833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611a9f565b6000602081208160025555565b6020906003190112611a5f5760405190602082016001600160401b038111838210176118d3576040526004358252565b908160a0910312611a5f57608060405191611c2d83611904565b611c3681611a64565b83526020810151602084015260408101516040840152611c5860608201611a64565b60608401520151608082015290565b6001600160a01b0390911681529051602082015260400190565b908160e0910312611a5f5760c060405191611c9b8361191f565b611ca481611a64565b83526020810151602084015260408101516040840152611cc660608201611a64565b6060840152611cd760808201611a64565b608084015260a081015160a0840152015160c082015290565b60405190611cfd8261193a565b8160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b9081610100910312611a5f5760e060405191611d498361193a565b611d5281611a64565b83526020810151602084015260408101516040840152611d7460608201611a64565b6060840152611d8560808201611a64565b608084015260a081015160a084015260c081015160c0840152015160e082015290565b60e0809160018060a01b038082511685526020820151602086015280604083015116604086015260608201511660608501526080810151608085015260a081015160a085015260c081015160c0850152015191015256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 8556,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:48:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:54:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:60:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:69:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:70:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:77:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:78:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:84:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:85:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:95:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bettor": Bettor,
  "Gambler": Gambler,
  "Oracle": Oracle
  };
export const _APIs = {
  };
