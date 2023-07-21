### 版本库存储结构

git 版本库是四个对象组成的，不断向前推进的结构。

![p1](https://typra-pictures.oss-cn-beijing.aliyuncs.com/imgs/%E6%B5%81%E7%A8%8B%E5%9B%BE%20(4).jpg)

git 的版本结构如此，除此之外，还有标签和引用，git 的所有标签和引用都存储在 refs 文件夹中， 指定关键字也会指向 refs 文件夹下的引用。

.git 文件夹下有三个文件夹，分别保存着本地仓库的引用，远程仓库的引用以及标签。

```bash
    ➜ project git:(main) ✗ tree .git/refs 
    .git/refs
    ├── heads
    │   └── main
    ├── remotes
    │   └── origin
    │       ├── HEAD
    │       └── main
    └── tags
```

无论是引用还是标签最终都是指向对象，标签可以自定义，引用则是特定的关键字指向特定的对象

- HEAD ：ref: refs/heads/main：指向本地仓库最新的 commit 对象
- FETCH_HEAD：指向 fetch 下来远程仓库的标签、引用、分支等。
- ORIG_HEAD：用于保存在进行某些操作（如合并、重置等）之前当前分支的状态，以便在需要时可以回退到该状态。
