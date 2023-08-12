### 第一章 git 版本控制

在团队协作的过程中，一般使用版本控制系统 `version control system(vcs)`  或者源代码管理工具 `source code manager(scm)` 来管理项目工程文件。

最初人们通过 `cv(control c + control v)` 的方式来复制代码，后来有了 `patch(补丁)` 文件，通过 `patch` 文件来完成代码的合并。

随着时间的推移，代码越来越多，越来越复杂，代码的合并也越来越困难，就诞生了很多的 `vcs/scm` 工具，随着代码工程的进一步增大，这些工具的缺点也满满暴露出来了。市面上对一个好用的版本控制工具的需求越来越强烈，后来`Linus Torvalds（Linux  之父）` 又和 `bitkeeper (当时较为出名的 vcs 工具)` 有了一段恩怨纠纷，所以 `Linus Torvalds` 决定要开发一个更好用的`vcs` 工具，于是 `git` 便诞生了。