### 2.6 lfs(large file storage)

在 git 仓库管理时，会经常复制和移动文件。假设在一个非常大的项目中，需要多次修改提交一个大文件，那么在操作时就会变得非常耗时。git lfs 很好地解决了这个问题。

git lfs 将对象库中的大文件对象替换成一种指针文件。

指针文件不是链接文件，指针文件由三部分组成，每部分都是 key - value 的形式存储。


```bash
    # 三部分分别代表，文件规范 url ，原文件对象的 key ，原文件文件的实际大小
    version https://git-lfs.github.com/spec/v1
    oid sha256:5b62e134d2478ae0bbded57f6be8f048d8d916cb876f0656a8a6d1363716d999
    size 285
```

当你添加一个大文件到仓库时，git lfs 用一个指针文件来替换其内容，并将文件内容存储在本地 git lfs 缓存( .git/lfs/objects )中，当你推送 commit 到远程服务器时，新提交的 git lfs 文件就会从本地 git lfs 缓存传输到远程的 git lfs 缓存中。

当 pull 或者 clone 时，却不会从远程的 git lfs 缓存中下载下来，只有这个大文件在当前分支时，才会被下载下来。

git lfs 不是 git 自带的功能，使用时需要进行额外的安装。

> [git-lfs/git-lfs: Git extension for versioning large files](https://github.com/git-lfs/git-lfs)
