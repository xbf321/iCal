# 国家法定假日(iCal 格式)

已有的法定假日大部分不维护，索性自己写个。

可以 clone 下来自己修改。

不局限节假日，任意活动都可以自行编辑。

## 编辑或添加 **.json 文件

放到 */data/* 目录中

json 格式

```js
[{
    "DTSTART;VALUE=DATE": "20180924",
    "DTEND;VALUE=DATE": "20180924",
    "SUMMARY": "中秋节"
},{
    "DTSTART;VALUE=DATE": "20180929",
    "DTEND;VALUE=DATE": "201801001",
    "SUMMARY": "国庆补班"
},{
    "DTSTART;VALUE=DATE": "20181001",
    "DTEND;VALUE=DATE": "20181008",
    "SUMMARY": "国庆放假"
}]
```

## 运行

```js
node index.js
```

## 最终文件在 /dist/holidays.ics

## 注意

结束日期不包含当天。如果想要连续创建活动，结束时间一定要大一天。

## 参考

[https://zh.wikipedia.org/zh/ICalendar](https://zh.wikipedia.org/zh/ICalendar)

[https://gist.github.com/yulanggong/be953ffee1d42df53a1a](https://gist.github.com/yulanggong/be953ffee1d42df53a1a)