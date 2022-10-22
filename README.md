# 仅仅出于网络原因
中国大陆使用[原插件](https://github.com/fz6m/lamu-leimu-button)难以顺利显示图片  
因为原插件使用的cdn在加载非文本资源时受到大陆安全限制，故简单替换掉了部分关于cdn的硬编码，可以满足我的博客的正常使用。  

如果你在尝试建立博客并想为其加入快速滚动功能，可以直接引入下方语句进行测试。
```js
<script src="https://lestua.ml/lamu-leimu-button/lamu-leimu.min.js"></script>
```
因上述文件地址使用到了我的pages资源，可以支持的访问量有限。当你的博客热门起来时，正式使用请自行托管本仓库文件，自行修改 **lamu-leimu.min.js** 文件，使用你自己的资源。仅需将js文件中的 `https://lestua.ml/lamu-leimu-button` 全部替换为你的托管地址即可。

# 效果


https://user-images.githubusercontent.com/55282569/197342783-9ec4fdae-e145-45ea-878e-07b702df7890.mp4

