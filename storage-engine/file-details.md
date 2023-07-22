### git 版本仓库

git 仓库的所有信息都保存在 .git 文件夹中

1. objects 文件夹：对象文件夹，保存着git 仓库中的所有对象。
2. refs 文件夹：引用文件夹，保存着git 所有的引用、标签
3. index 文件：git 的索引，保存着当前版本追踪的所有文件
4. hooks 文件夹：保存着 git 的 hook 钩子脚本
5. config 文件：保存着当前项目的 git 配置。
6. description ：仓库描述
7. logs：存储HEAD、分支和引用的更新日志。
8. 引用文件：保存引用的文件
   - HEAD 
   - ORIG_HEAD
   - FETCH_HEAD
   - . . . 
