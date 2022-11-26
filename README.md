# 仅仅出于网络原因
中国大陆使用[原插件](https://github.com/fz6m/lamu-leimu-button)难以顺利显示图片  
因为原插件使用的cdn在加载图片时受到大陆安全限制，故做了替换与修改，可以满足我的博客的正常使用。  

如果你在尝试建立博客并想为其加入快速滚动功能，可以直接引入下方语句进行测试。
```js
<script src="https://cdn.jsdelivr.net/gh/yaleiyale/lamu-leimu-button@0.1/lamu-leimu.min.js"></script>
```
由于图床文件类型限制，已删去光标图片，点击拉姆回到顶部，点击雷姆到达底部  
使用到了img的鼠标相关响应函数，注意不要被覆盖，否则会导致图片切换失效  
![image](https://user-images.githubusercontent.com/55282569/202417973-52b750ce-b40c-457c-a53d-c4ec3051117c.png)  
