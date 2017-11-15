const request = require('request');
const cheerio = require('cheerio');
const Discord = require('discord.js');
const Nightmare = require('nightmare');
const electron = require('electron');
const client = new Discord.Client();


var nightmare = new Nightmare({show:false});


const url = "http://103.252.100.19/"
const selector = '#table'

var prefix = "!"

client.on('ready', () => {
	console.log('Ready!!')
});

client.on('message', message => {
	if(message.content.startsWith(prefix + 'cek')) {

		const args = message.content.slice(prefix.lenght).split(' ')
		const command = args.shift().toLowerCase();

		let tunggu = message.reply('Bentar Ane Cari dulu yak!')
		

		nightmare
			.goto(url)
      		.useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
      		.wait(2000)
      		.type('input[id="carii"]', `${args}`)
      		.wait(2000)
      		.wait('#table td')
      		.type('input[id="carii"]', '')
      		.evaluate((selector) => {

        		return document.body.innerHTML;
      		}, selector)
      		.then(function(body) {
      			var $ = cheerio.load(body, {
      				ignoreWhitespace: true,
      				xmlMode: true,
      			});

      			var b = $(body).find("#table > tbody > tr:nth-child(1)");
		    var b0 = b.children();
		    var ba0 = $(b0).eq(0).text();
		    var ba1 = $(b0).eq(1).text();
		    var ba2 = $(b0).eq(2).text();
		    var ba3 = $(b0).eq(3).text();
		    var ba4 = $(b0).eq(5).text();
        var c = $(body).find("#table > tbody > tr:nth-child(2)");
            var c0 = c.children();
		    var ca0 = $(c0).eq(0).text();
		    var ca1 = $(c0).eq(1).text();
		    var ca2 = $(c0).eq(2).text();
		    var ca3 = $(c0).eq(3).text();
		    var ca4 = $(c0).eq(5).text();
        var d = $(body).find("#table > tbody > tr:nth-child(3)");
            var d0 = d.children();
		    var da0 = $(d0).eq(0).text();
		    var da1 = $(d0).eq(1).text();
		    var da2 = $(d0).eq(2).text();
		    var da3 = $(d0).eq(3).text();
		    var da4 = $(d0).eq(5).text();
        var e = $(body).find("#table > tbody > tr:nth-child(4)");
            var e0 = e.children();
            var ea0 = $(e0).eq(0).text();
            var ea1 = $(e0).eq(1).text();
            var ea2 = $(e0).eq(2).text();
            var ea3 = $(e0).eq(3).text();
            var ea4 = $(e0).eq(5).text();
        var f = $(body).find("#table > tbody > tr:nth-child(5)");
            var f0 = f.children();
            var fa0 = $(f0).eq(0).text();
            var fa1 = $(f0).eq(1).text();
            var fa2 = $(f0).eq(2).text();
            var fa3 = $(f0).eq(3).text();
            var fa4 = $(f0).eq(5).text();
        var g = $(body).find("#table > tbody > tr:nth-child(6)");
            var g0 = g.children();
            var ga0 = $(g0).eq(0).text();
            var ga1 = $(g0).eq(1).text();
            var ga2 = $(g0).eq(2).text();
            var ga3 = $(g0).eq(3).text();
            var ga4 = $(g0).eq(5).text();
        var h = $(body).find("#table > tbody > tr:nth-child(7)");
            var h0 = h.children();
            var ha0 = $(h0).eq(0).text();
            var ha1 = $(h0).eq(1).text();
            var ha2 = $(h0).eq(2).text();
            var ha3 = $(h0).eq(3).text();
            var ha4 = $(h0).eq(5).text();
        var i = $(body).find("#table > tbody > tr:nth-child(8)");
            var i0 = i.children();
            var ia0 = $(i0).eq(0).text();
            var ia1 = $(i0).eq(1).text();
            var ia2 = $(i0).eq(2).text();
            var ia3 = $(i0).eq(3).text();
            var ia4 = $(i0).eq(5).text();
        var j = $(body).find("#table > tbody > tr:nth-child(9)");
            var j0 = j.children();
            var ja0 = $(j0).eq(0).text();
            var ja1 = $(j0).eq(1).text();
            var ja2 = $(j0).eq(2).text();
            var ja3 = $(j0).eq(3).text();
            var ja4 = $(j0).eq(5).text();
        var k = $(body).find("#table > tbody > tr:nth-child(10)");
            var k0 = k.children();
            var ka0 = $(k0).eq(0).text();
            var ka1 = $(k0).eq(1).text();
            var ka2 = $(k0).eq(2).text();
            var ka3 = $(k0).eq(3).text();
            var ka4 = $(k0).eq(5).text();

        console.log(ba0 + "=> " + ba1 + "=> " + ba2 + "=>" +ba3+ "=>" +ba4)
        console.log(ca0 + "=> " + ca1 + "=> " + ca2 + "=>" +ca3+ "=>" +ca4)
        console.log(da0 + "=> " + da1 + "=> " + da2 + "=>" +da3+ "=>" +da4)
        console.log(ea0 + "=> " + ea1 + "=> " + ea2 + "=>" +ea3+ "=>" +ea4)
        console.log(fa0 + "=> " + fa1 + "=> " + fa2 + "=>" +fa3+ "=>" +fa4)
        console.log(ga0 + "=> " + ga1 + "=> " + ga2 + "=>" +ga3+ "=>" +ga4)
        console.log(ha0 + "=> " + ha1 + "=> " + ha2 + "=>" +ha3+ "=>" +ha4)
        console.log(ia0 + "=> " + ia1 + "=> " + ia2 + "=>" +ia3+ "=>" +ia4)
        console.log(ja0 + "=> " + ja1 + "=> " + ja2 + "=>" +ja3+ "=>" +ja4)
        console.log(ka0 + "=> " + ka1 + "=> " + ka2 + "=>" +ka3+ "=>" +ka4)


        let embed = new Discord.RichEmbed()
            .setDescription(`${args}`)
            .setColor("#734004")
            .addField(ba0 + " => " + ba1 + " => " + ba2 + " => " +ba3+ " => " +ba4)
            .addField(ca0 + " => " + ca1 + " => " + ca2 + " => " +ca3+ " => " +ca4)
            .addField(da0 + " => " + da1 + " => " + da2 + " => " +da3+ " => " +da4)
            .addField(ea0 + " => " + ea1 + " => " + ea2 + " => " +ea3+ " => " +ea4)
            .addField(fa0 + " => " + fa1 + " => " + fa2 + " => " +fa3+ " => " +fa4)
            .addField(ga0 + " => " + ga1 + " => " + ga2 + " => " +ga3+ " => " +ga4)
            .addField(ha0 + " => " + ha1 + " => " + ha2 + " => " +ha3+ " => " +ha4)
            .addField(ia0 + " => " + ia1 + " => " + ia2 + " => " +ia3+ " => " +ia4)
            .addField(ja0 + " => " + ja1 + " => " + ja2 + " => " +ja3+ " => " +ja4)
            .addField(ka0 + " => " + ka1 + " => " + ka2 + " => " +ka3+ " => " +ka4)


            message.channel.send({embed})
            tunggu.delete();



      		})

		


	}
})

client.login(process.env.BOT_TOKEN);
