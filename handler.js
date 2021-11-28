const {
 ss
} = require('./spreadsheet');
const fs = require('fs');
const {
 MessageType
} = require('@adiwajshing/baileys');

module.exports = {
 daftar: async function (conn, msg, args) {
  if (!args) return;
  var noHP = msg.key.remoteJid.split('@')[0];
  var data = [
   noHP
  ];
  data = data.concat(args);
  let user = await ss.getRows("users!a2:c");
  let duplikat;
  if (user) {
   await user.forEach(usr=> {
    if (usr[0] == noHP) {
     duplikat = [usr[1],
      noHP];
    }
   });
  }
  if (!duplikat) {
   ss.addData("users!$a:c", data);
   conn.sendMessage(msg.key.remoteJid,
    `terima kasih! ${args[0]} telah terdaftar di sistem kami dengan no hp: ${noHP}.`,
    MessageType.text);
  } else {
   conn.sendMessage(msg.key.remoteJid, `mohon maaf! no ${noHP} telah digunakan oleh ${duplikat[0]}.`,
    MessageType.text);
  }
 },
 izin(sendMessage, msg, args) {},
 listSiswa: async function(conn, remoteJid, args) {
  let listSiswa = await ss.getRows("data-siswa!a2:b219");
  var ls = [];
  var i = 1;
  listSiswa.forEach(a=> {
   if (a[1] == args[0].toUpperCase()) {
    ls.push(`${i++} ${a[0]}`);
   }
  });
  conn.sendMessage(remoteJid,
   ls.toString().replace(/,/gm, '\n'),
   MessageType.text);
 },
 async info(conn,
  msg,
  option,
  args) {
  if (option[0].toLowerCase() == "#jadwal") {
   let jadwal = await ss.getRows("jadwal!a2:e349");
   let dataJadwal = [];
   let i = 1;
   await jadwal.forEach(jdw=> {
    if (jdw[1].toLowerCase() == args[0].toLowerCase() && jdw[0].toLowerCase() == args[1].toLowerCase()) {
     dataJadwal.push([i++, jdw[2], jdw[3], jdw[4]]);
    }
   })
   conn.sendMessage(msg.key.remoteJid,
    dataJadwal.toString().replace(/,/gm, '\n'),
    MessageType.text);
  }
  if (option[0].toLowerCase() == "#jadwalpas") {
   let jadwal = await ss.getRows("jadwalpas!a2:e86");
   let dataJadwal = [];
   let i = "___________";
   await jadwal.forEach(jdw=> {
    if (jdw[0] == args[0]) {
     dataJadwal.push([i, jdw[1], jdw[2], jdw[3], jdw[4]]);
    }
   })
   conn.sendMessage(msg.key.remoteJid,
    dataJadwal.toString().replace(/,/gm, '\n'),
    MessageType.text);
  }
  if (option[0].toLowerCase() == "#pembayaran") {
   // cek no hp exist
   let noHP = msg.key.remoteJid.split("@")[0];
   let dataUsers = await ss.getRows('users!a2:c');
   let userExist;
   if (dataUsers) {
    dataUsers.forEach(usr=> {
     if (usr[0] == noHP) {
      userExist = usr;
     }
    });
   }
   if (!userExist) {
    conn.sendMessage(msg.key.remoteJid, "no anda belum terdaftar!", MessageType.text);
    return;
   }
   let dataPembayaranUser = [];
   if (userExist) {
    let dataPembayaran = await ss.getRows("pembayaran!a3:o");
    let n = 1;
    await dataPembayaran.forEach(byr=> {
     if (byr[2] == userExist[1]) {
      dataPembayaranUser.push([byr[3],
       parseInt(byr[5])*1000,
       parseInt(byr[6])*1000,
       parseInt(byr[7])*1000,
       parseInt(byr[8])*1000,
       parseInt(byr[9])*1000,
       parseInt(byr[10])*1000,
       parseInt(byr[11])*1000,
       parseInt(byr[12]*1000)
      ]);
     }
    });
   }
   let totalTghTh;
   let totalBayar;
   if (userExist[2] == '3' || userExist[2] == '2') {
    totalTghTh = 435000;
   }
   if (userExist[2] == '5' || userExist[2] == '4') {
    totalTghTh = 495000;
   }
   if (userExist[2] == '6') {
    totalTghTh = 1140000;
   }
   if (userExist[2] == '1') {
    totalTghTh = 560000;
   }
   if (dataPembayaranUser.length > 0) {
    dataPembayaranUser.forEach(dpu=> {
     totalTghTh = totalTghTh - (dpu[8]-dpu[7]);
     dpu[0] = 'tanggal : '+dpu[0];
     dpu[1] = 'raport : '+dpu[1];
     dpu[2] = 'LKS : '+dpu[2];
     dpu[3] = 'PTS : '+dpu[3];
     dpu[4] = 'PAS/PAT : '+dpu[4];
     dpu[5] = 'IURAN AKHIR TAHUN : '+dpu[5];
     dpu[6] = 'KOSTIM : '+dpu[6];
     dpu[7] = 'INFAQ : '+dpu[7];
     dpu[8] = 'TOTAL : '+dpu[8]+'\n';
    });
   }
   if (totalTghTh == 0) {
    totalTghTh = 'LUNAS';
   }
   console.log(totalTghTh);
   if (dataPembayaranUser.length > 0) {
    conn.sendMessage(msg.key.remoteJid, `data pembayaran siswa atas nama ${userExist[1]}\n\n`+dataPembayaranUser.toString().replace(/,/gm, '\n')+`\nsisa tagihan tahunan = ${totalTghTh}`, MessageType.text);
   }
  }
 }
};