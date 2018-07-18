# bug
css：
fixed居中可以left:0 right:0 然后margin：auto

js：
module.exports 变量 文件名 都不能含数字

safari:
var date =new Date("2016-05-31 08:00");  
要转换成  
var date =new Date("2016/05/31 08:00");  
转换方法：  
function GetDateDiff(startDiffTime, endDiffTime) {      
            //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式   
            startTime = startDiffTime.replace(/\-/g, "/");  
            endTime = endDiffTime.replace(/\-/g, "/");  
};  

study:  
http://www.rntools.co/  
https://doc.react-china.org  
https://docs.amcharts.com/3/javascriptstockchart 
https://juejin.im/post/5b44a485e51d4519945fb6b7#heading-36
