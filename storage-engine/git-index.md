###  2.4 git 索引

在git 中，可以将文件分为三种

- 被忽略的 Ignored： .gitignore 文件中指定的文件
- 已追踪的 Tracked：已经存在暂存区或者版本库中的文件
- 未追踪的 UnTracked ：未被追踪且未被忽略的文件，一般是刚添加到工作目录，但没有 git add 添加过的文件。

#### 暂存区

git 索引也被称为暂存区，一般是以二进制文件的形式存储在 .git 目录下的 index 文件中，暂存区中存储着仓库当前版本的所有已追踪的文件。

索引在 git 中非常重要，其一是可以通过索引来判断 工作目录中的文件是否变化，其二则是创建commit 时，通过索引和版本库进行对比，生成新的 commit 并且对应着正确的版本，并且 commit 指向正确的 tree 对象，tree 对象指向着正确的 blob 对象。

![img](https://typra-pictures.oss-cn-beijing.aliyuncs.com/imgs/1352126739_7909.jpg)