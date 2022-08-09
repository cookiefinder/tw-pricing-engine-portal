# 作业

> ##### 背景
> 
> 承接DDD price engine上下文，并做了一些简化。需要做一个promotion 相关业务的前端页面。

> ##### 功能点：
> 
> 1. 需要一个home页，上面有两个Tab：Home 和 Promotion List，点击可以转到对应的页面。
> 
> 2. 首页有一个create promotion 按钮，点击后可以跳转到promotion创建的页面
> 
> 3. 创建页面内含有基础信息的表单，可以做一些简化。表单可以提交。
>    
>    （本例子中，只包含两种discount type，满减和打折，仅供参考。可根据自己的理解进行简化<u>限制条件</u>和<u>discount规则</u>）
>    
>    - 点击submit 成功 ： 跳转promotion List页面
>    
>    - submit 失败：留在创建页面
> 
> 4. Promotion List 页面内有一个表格可以展示Promotion基本信息，包括id, title, startDate, endDate, type, desciprion。
>    
>    - 表格上方有filter按钮，可以对promotion进行筛选。
>    
>    - 点击title，可以进入到promotion的详情页，详情页同创建页面，只是会展示之前创建的内容。并可以修改并提交。

> ##### 其他：
> 
> - 参考设计图：[Figma](https://www.figma.com/file/XzZ0cvReNkOndjFVyM6USG/pojian?node-id=0%3A1)（表单和表格的样式可以自己设计）
> 
> - api可以用DDD的作业，也可以用 MockServer 提供api （ 如 [yapi](http://yapi.smart-xwork.cn/)等，不做限制）

# 第一周作业（html + css）：

首页

- 首页样式

- 点击tab可以跳转到List页面

- 点击create promotion按钮可以跳转到创建页面

# 第二周作业（js）：

完成创建表单和表单展示

- 表单的展示和筛选

- 点击title跳转到详情页面

- 创建和详情页，可以修改提交
