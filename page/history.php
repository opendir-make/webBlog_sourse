<?php
// 获得当前月份和日期
$month=date('m',time());
$day=date('d',time());

// 组成链接然后用curl获取数据后json解码下转成文字
$url="https://baike.baidu.com/cms/home/eventsOnHistory/".$month.".json";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$data=curl_exec($ch);
curl_close($ch);
$json = json_decode($data,true);

// 显示内容
echo '今天是'.date('m/d',time()).'-历史上的今天<br><br>';
// 这里之所以是<=14是因为百度这个历史上的今天只提供15条
for ($x=0; $x<=14; $x++) {
    echo $json[$month][$month.$day][$x]['year'].'年 ';
    echo $json[$month][$month.$day][$x]['title'].'<br>';    
}
?>