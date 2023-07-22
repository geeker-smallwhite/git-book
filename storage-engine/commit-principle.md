### 版本更新原理


当在一个 git 仓库中，创建或者修改文件、更新版本信息时，git 仓库发生了什么?

1. 原始状态
    <img src="https://typra-pictures.oss-cn-beijing.aliyuncs.com/imgs/%E6%B5%81%E7%A8%8B%E5%9B%BE%20(5).jpg" alt="流程图 (5)" style="zoom:25%;" />

2. 在 git 仓库中创建一个文件时，git 仓库不会发生任何变化，此时文件处于未追踪状态，但是可以通过索引和工作目录进行对比，可以发现文件变更信息。如果你创建一个文件夹，则无法对比差异，因为索引不会暂存文件目录结构。

    <img src="https://typra-pictures.oss-cn-beijing.aliyuncs.com/imgs/image-20230719231256981.png" alt="image-20230719231256981" style="zoom:50%;" />

3. 执行 git add --all 命令时
   - 将变更文件添加到暂存区，此时文件由未追踪状态变为被追踪状态。
   - git 仓库会根据文件当前的版本创建 blob 对象，将对象保存到对象库中。
   - git 索引会指向新的 blob 对象。

   <img src="https://typra-pictures.oss-cn-beijing.aliyuncs.com/imgs/image-20230719231617401.png" alt="image-20230719231617401" style="zoom:50%;" />


4. 执行 git commit 时
   - git 会根据文件变更信息和 metadata 信息创建 commit 对象，并且将其指向上 commit ，同时也会保存目录树 tree 对象，将 HEAD 引用指向当前 commit。
   - 遍历工作目录树，如果当前目录结构或者目录中的文件发生变化，则创建新的 tree 对象，tree 对象指向 索引中的文件(即最新版本的文件)。

    <img src="https://typra-pictures.oss-cn-beijing.aliyuncs.com/imgs/image-20230721225829889.png" alt="image-20230721225829889" style="zoom: 50%;" />


5. git push 时

    - 将本地版本库推送到远程仓库中。