# hengtong_pc PC端

1、首先安装nodejs

2、进入到hengtong_pc,安装依赖运行命令npm install --registry=https://registry.npm.taobao.org --verbose

3、安装完依赖之后，启动项目运行npm run dev


打包：
配置coonfig目录下的index.js文件里的build.assetsPublicPath为http://www.ai-sc.net/
配置config下的prod.env.js下的BASE_API为http://www.ai-sc.net
然后在cmd运行命令 npm run build:prod
把生成的文件夹dist里的static文件夹复制到后端，index.html里面的内容替换到后端的index.jsp(注意：index.jsp的第一行不要改)