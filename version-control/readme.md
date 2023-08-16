### 第一章 git 版本控制

> vcs 工具 发展历史

在团队协作中，最初通过 `cv(control c + control v)`和文件管理系统来进行文本或者代码项目的管理，后来有了 `patch(补丁)` 文件，人们就通过 `patch` 文件来实现文本或者文件的合并。

随着时间的推移，文件越来越多，也越来越复杂，合并也变得越来越困难，于是，版本控制系统 `version control system(vcs)` 和源代码管理工具 `source code manager(scm)` 就诞生了，人们通过 `vcs/scm` 工具来管理文本或者代码项目。
随着`vcs/scm` 工具的发展和演化，`git` 一直独秀，成为了最流行的 `vcs/scm` 工具。


随着代码工程的进一步增大，这些工具的缺点也满满暴露出来了。市面上对一个好用的版本控制工具的需求越来越强烈，后来`Linus Torvalds（Linux  之父）` 又和 `bitkeeper (当时较为出名的 vcs 工具)` 有了一段恩怨纠纷，所以 `Linus Torvalds` 决定要开发一个更好用的`vcs` 工具，于是 `git` 便诞生了。