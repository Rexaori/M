const _0x1a8261=_0x26db;(function(_0xd1bc08,_0x3b6144){const _0x3ba562=_0x26db,_0x4dbef2=_0xd1bc08();while(!![]){try{const _0x1b5d82=parseInt(_0x3ba562(0x89))/0x1+-parseInt(_0x3ba562(0x8c))/0x2*(parseInt(_0x3ba562(0x86))/0x3)+parseInt(_0x3ba562(0xab))/0x4*(-parseInt(_0x3ba562(0x91))/0x5)+-parseInt(_0x3ba562(0x8b))/0x6*(parseInt(_0x3ba562(0x9b))/0x7)+-parseInt(_0x3ba562(0x96))/0x8+-parseInt(_0x3ba562(0xb4))/0x9+parseInt(_0x3ba562(0x97))/0xa;if(_0x1b5d82===_0x3b6144)break;else _0x4dbef2['push'](_0x4dbef2['shift']());}catch(_0x1357c1){_0x4dbef2['push'](_0x4dbef2['shift']());}}}(_0x3003,0x53dc4));function _0x3003(){const _0x12aed4=['@g.us','error','./handler.js','4WBNRBB','menu!c2:e','readFileSync','authState','log','\x20adalah\x20no\x20bot.\x20ketik\x20<panduan>\x20untuk\x20mengetahui\x20menu\x20yang\x20tersedia','parse','chatbot/term','no\x20ini\x20','764361xoIESn','masa\x20trial\x20anda\x20akan\x20berakhir\x20pada\x20','safari','message','versi\x20UNLIMITED\x20telah\x20aktif\x0aterima\x20kasih\x20gelah\x20menggunakan\x20jasa\x20Kami','split','silah\x20kan\x20hubungi\x20admin\x20NGAJI\x20NGODING\x20untuk\x20mendapatkan\x20versi\x20UNLIMITED\x20nya','STATUS','output','substring','@s.whatsapp.net','session.json','argv','9pfukSQ','match','./session.json','639440zHKLXR','endsWith','159582pqcOXn','240502hXiSdi','length','trimEnd','close','key','158420PiiJov','NGAJI\x20NGODING','chatbot/ss','chatbot/helper','unlimit','3697824NtPkng','10957950oUCQHx','@hapi/boom','env',',\x20reconnecting\x20','119bdJIGV','logout','@adiwajshing/baileys','silent','masa\x20trial\x20anda\x20telah\x20berakhir\x0asilahkan\x20hubungi\x20admin\x20NGAJI\x20NGODING\x20untuk\x20mendapatkan\x20versi\x20UNLIMITED\x20nya','config/templateMsg.json','terminalbot','dotenv','sendMessage','messages.upsert','remoteJid','creds','getRows'];_0x3003=function(){return _0x12aed4;};return _0x3003();}const handler=require(_0x1a8261(0xaa)),helper=require(_0x1a8261(0x94)),{ss}=require(_0x1a8261(0x93)),{termBot}=require(_0x1a8261(0xb2)),{default:makeWASocket,useSingleFileAuthState,DisconnectReason}=require(_0x1a8261(0x9d)),P=require('pino'),{Boom}=require(_0x1a8261(0x98)),fs=require('fs');require(_0x1a8261(0xa2))['config']();const argv=process[_0x1a8261(0x85)][0x2],{state,saveState}=useSingleFileAuthState(_0x1a8261(0x84));async function connectToWhatsApp(){const _0x4c7874=_0x1a8261,_0x3108bc=makeWASocket({'auth':state,'printQRInTerminal':!![],'logger':P({'level':_0x4c7874(0x9e)}),'browser':[_0x4c7874(0x92),_0x4c7874(0xb6),'3.0']});_0x3108bc['ev']['on']('connection.update',async _0xd84d21=>{const _0x27da11=_0x4c7874,{connection:_0x4463be,lastDisconnect:_0x29f36a}=_0xd84d21;if(_0x4463be===_0x27da11(0x8f)){const _0x24a4a6=new Boom(_0x29f36a[_0x27da11(0xa9)])[_0x27da11(0xbc)]['statusCode']===DisconnectReason['loggedOut'];console['log']('connection\x20closed\x20due\x20to\x20',_0x29f36a[_0x27da11(0xa9)],_0x27da11(0x9a),_0x24a4a6),!_0x24a4a6?connectToWhatsApp():(fs['rmSync'](_0x27da11(0x88)),_0x3108bc[_0x27da11(0x9c)]());}else{if(_0x4463be==='open'){_0x3108bc['updateProfileStatus'](_0x27da11(0xb3)+_0x3108bc[_0x27da11(0xae)]?.[_0x27da11(0xa6)]?.['me']?.['id'][_0x27da11(0xbd)](0x0,0xd)+_0x27da11(0xb0)),console[_0x27da11(0xaf)]('opened\x20connection');let _0x1713ba=await helper[process[_0x27da11(0x99)][_0x27da11(0xbb)]](_0x3108bc);_0x1713ba[0x2]===_0x27da11(0x95)?_0x3108bc[_0x27da11(0xa3)](_0x1713ba+_0x27da11(0xbe),{'text':_0x27da11(0xb8)}):(console['log'](_0x27da11(0xb5)+new Date(_0x1713ba[0x2])),console[_0x27da11(0xaf)](_0x27da11(0xba)),setInterval(()=>{const _0x5193fb=_0x27da11;new Date(_0x1713ba[0x2])<new Date()&&(console['log'](_0x5193fb(0x9f)),_0x3108bc[_0x5193fb(0x9c)]());},0x7d0)),argv==_0x27da11(0xa1)&&termBot(_0x3108bc);}}}),_0x3108bc['ev']['on']('creds.update',saveState),_0x3108bc['ev']['on'](_0x4c7874(0xa4),async({messages:_0x15e54f,type:_0x24ac34})=>{const _0x41a5a6=_0x4c7874,_0x20d386=_0x15e54f[0x0];if(_0x20d386[_0x41a5a6(0x90)]['remoteJid']=='status@broadcast'||_0x20d386[_0x41a5a6(0x90)]['fromMe']||_0x20d386[_0x41a5a6(0x90)][_0x41a5a6(0xa5)][_0x41a5a6(0x8a)](_0x41a5a6(0xa8)))return;let _0x1d3d3f=JSON[_0x41a5a6(0xb1)](fs[_0x41a5a6(0xad)](_0x41a5a6(0xa0)))['tmp'];const _0x3a7384=_0x20d386[_0x41a5a6(0xb7)]?.['conversation'];let _0x30a5dc=_0x3a7384[_0x41a5a6(0x87)](/#[\w-]*/g);_0x30a5dc&&(_0x30a5dc=_0x30a5dc[0x0][_0x41a5a6(0xbd)](0x1));let _0x358728=_0x3a7384[_0x41a5a6(0x87)](/(?<=:\s*)[\w\d\.@]+ *[\w\d\.]* *[\w\d\.]*/gm);_0x358728&&(_0x358728=_0x358728['map'](_0x1d4df0=>_0x1d4df0[_0x41a5a6(0x8e)]()));let _0x9034f7=await ss[_0x41a5a6(0xa7)](_0x41a5a6(0xac));_0x9034f7&&_0x9034f7[_0x41a5a6(0x8d)]>0x0&&(_0x1d3d3f=[..._0x1d3d3f,..._0x9034f7]);for(var _0x961386=0x0;_0x961386<_0x1d3d3f[_0x41a5a6(0x8d)];_0x961386++){_0x3a7384===_0x1d3d3f[_0x961386][0x0]&&_0x3108bc['sendMessage'](_0x20d386['key'][_0x41a5a6(0xa5)],{'text':_0x1d3d3f[_0x961386][0x1]});}handler[_0x3a7384[_0x41a5a6(0xb9)]('\x20')[0x0]]&&handler[_0x3a7384[_0x41a5a6(0xb9)]('\x20')[0x0]](_0x3108bc,_0x20d386,_0x30a5dc,_0x358728,_0x1d3d3f);});}function _0x26db(_0x5c5655,_0x343077){const _0x300387=_0x3003();return _0x26db=function(_0x26db66,_0x5c0692){_0x26db66=_0x26db66-0x84;let _0x218f9e=_0x300387[_0x26db66];return _0x218f9e;},_0x26db(_0x5c5655,_0x343077);}connectToWhatsApp();