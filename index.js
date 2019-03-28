// 初始化 express
var app = require('express')();

var request = require('superagent');

var cheerio = require('cheerio');
/**
 * 开启路由
 * 第一个参数指定路由地址,当前指向的是 localhost:3000/
 * 如果需要其他路由,可以这样定义,比如 需要我们的获取推荐歌单的路由 /recommendLst
 * app.get('/recommendLst', function(req, res){});
 */
app.get('/playlist', function(req, res){
	
	var resObj = {
		code:200,
		data:[]
	},y=0;
	//1295
	var x=0;
		request.get("https://music.163.com/discover/playlist/?order=hot&cat=%E5%85%A8%E9%83%A8&limit=35&offset=0").end(function(err,_response){
	    	
	    	var dom = _response.text;
	    	
	    	var $ = cheerio.load(dom);
	    	
	    	$(".m-cvrlst").eq(0).find("li").each(function(index,obj){
	    		var img = $(obj).find('img').attr('src');
	    		var count = $(obj).find('.nb').text();
	    		var name = $(obj).children('div').children('a').attr('title');
	    		var namehref = "https://music.163.com"+$(obj).children('div').children('a').attr('href');
	    		var author = $(obj).children("p").eq(1).children('a').attr('title');
	    		var authorhref = "https://music.163.com"+$(obj).children("p").eq(1).children('a').attr('href');
	    		var star = $(obj).children("p").eq(1).children('sup').length>0;
	    		
	    		resObj.data.push({
	    			imgSrc:img,
	    			time:count,
	    			title:name,
	    			author:author,
	    			star:star,
	    			authorhref:authorhref,
	    			namehref:namehref
	    		})
	    	})
	    	
	    	res.send(resObj.data)
	    })
}).get('/', function(req, res){

   res.send('你好')

}).get('/recommendLst', function(req, res){
	
	var resObj = {
		code:200,
		data:[]
	}

    request.get("https://music.163.com/discover").end(function(err,_response){
    	if(!err){
    		var dom = _response.text;
    		
    		var $ = cheerio.load(dom);
    		
    		var valArr = [];
    		
    		$(".m-cvrlst").eq(0).find('li').each(function(index,obj){
    			let a = $(obj).find('.u-cover').children('a');
    			let img = $(obj).find('img').attr('src');
    			let val = {
    				id:a.attr('data-res-id'),
    				title:a.attr("title"),
    				href:"https://music.163.com"+a.attr('href'),
    				type:a.attr('data-res-type'),
    				img:img
    			}
    			valArr.push(val);
    		})
    		resObj.data = valArr;
    	}else{
    		resObj.code = 404;
    	}
    	res.send(resObj);
    })
    
    

}).get('/playlist/:playlistId', function(req, res){

    // 获得歌单ID
    var playlistId = req.params.playlistId;
    // 定义返回对象
    var resObj = {
        code: 200,
        data: {}
    };

    /**
     * 使用 superagent 请求
     * 在这里我们为什么要请求 http://music.163.com/playlist?id=${playlistId}
     * 简友们应该还记得 网易云音乐首页的 iframe
     * 应该还记得去打开 调试面板的 Sources 选项卡
     * 那么就可以看到在歌单页面 iframe 到底加载了什么 url
     */
    request.get(`https://music.163.com/playlist?id=${playlistId}`)
        .end(function(err, _response){

            if (!err) {
                // 定义歌单对象
                var playlist = {
                    id: playlistId
                };

                // 成功返回 HTML, decodeEntities 指定不把中文字符转为 unicode 字符
                // 如果不指定 decodeEntities 为 false , 例如 " 会解析为 "
                var $ = cheerio.load(_response.text,{decodeEntities: false});
                // 获得歌单 dom
                var dom = $('#m-playlist');
                
                // 歌单标题
                playlist.title = dom.find('.tit').text();
                // 歌单拥有者
                playlist.owner = dom.find('.user').find('.name').text();
                // 创建时间
                playlist.create_time =  dom.find('.user').find('.time').text();
                // 歌单被收藏数量
                playlist.collection_count = dom.find('#content-operation').find('.u-btni-fav').attr('data-count');
                // 分享数量
                playlist.share_count = dom.find('#content-operation').find('.u-btni-share').attr('data-count');
                // 评论数量
                playlist.comment_count = dom.find('#content-operation').find('#cnt_comment_count').html();
                // 标签
                playlist.tags = [];
                dom.find('.tags').eq(0).find('.u-tag').each(function(index, element){
                    playlist.tags.push($(element).text());
                });
                // 歌单描述
                playlist.desc = dom.find('#album-desc-more').html();
                // 歌曲总数量
                playlist.song_count = dom.find('#playlist-track-count').text();
                // 播放总数量
                playlist.play_count = dom.find('#play-count').text();


                resObj.data = playlist;

            } else {
                resObj.code = 404 ;
                console.log('Get data error!');
            }

            res.send( resObj );

        });


}).get('/song_list/:playlistId', function(req, res){

    // 获得歌单ID
    var playlistId = req.params.playlistId;
    // 定义返回对象
    var resObj = {
        code: 200,
        data: []
    };

    request.get(`https://music.163.com/playlist?id=${playlistId}`)
        .end(function(err, _response){

            if (!err) {

                // 成功返回 HTML
                var $ = cheerio.load(_response.text,{decodeEntities: false});
                // 获得歌单 dom
                var dom = $('#song-list-pre-cache'),valueArr = [];
                
				dom.find('li').each(function(index,obj){
					var obj = {
						name:$(obj).find('a').text(),
						href:"https://music.163.com"+$(obj).find('a').attr('href')
					}
					valueArr.push(obj)
				})
				
//				res.send(dom.find("textarea").text().replace(/[\r\n]/g,''));
                /*dom.find('tbody').eq(0).find('tr').each(function(index,obj){
                	
                	var name = $(obj).find('td').eq(1).find('b').attr('title');
					var songHref =  $(obj).find('td').eq(1).find('a').attr('href');
					var time = $(obj).find('td').eq(2).children('span').text();
					var authour = $(obj).find('td').eq(3).children('div').attr('title');
					var authourHref = $(obj).find('td').eq(3).find('a').eq(0).attr('href');
					var album = $(obj).find('td').eq(4).find('a').eq(0).attr('title');
					var albumHref = $(obj).find('td').eq(4).find('a').eq(0).attr('href')
                	
                	var obj = {
                		name:name,
                		songHref:songHref,
                		time:time,
                		authour:authour,
                		authourHref:"https://music.163.com"+authourHref,
                		album:album,
                		albumHref:"https://music.163.com"+albumHref
                	}
                	valueArr.push(obj)
                	
                })*/
                
				resObj.data = valueArr;

            } else {
                resObj.code = 404 ;
                console.log('Get data error!');
            }
            
            res.send(resObj);

        });


});
/**
 * 开启express服务,监听本机3000端口
 * 第二个参数是开启成功后的回调函数
 */
var server = app.listen(81, function(){
    // 如果 express 开启成功,则会执行这个方法
    var port = server.address().port;

    console.log(`Express app listening at http://localhost:${port}`);
});