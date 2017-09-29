# vue-todolist-demo

> A Vue.js Todo project

# Demo
xxx

## Build Setup

```bash
# install dependencies
npm install 

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --repor
```

------



以下是该项目中学习的一些笔记：

# Vue

## Vue基础
### <slot> 插槽接口
在使用iView时，发现表单组件可以进行嵌套：
```html
<Form>
	<FormItem>
		<Input>
	</FromItem>
</Form>
```
于是研究了一下它的实现。对于vue组件，其模板内容都是在自身组件作用域内编译的：
```html
<parent-component>    
	<child-component>
		{{ message }}
		/* {{ message }} is complied in parent scope  */
	</child-component>
</parent-component>
```
即父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译。指令也是同理。
在这里，Vue提供了一个`<slot>`插口作为内容分发。

1. 对于子组件而言，`<slot>`内的任何内容都被视为备用内容。备用内容在子组件的作用域内编译，并且只有在宿主元素为空，且没有要插入的内容时才显示备用内容。
2. 如果子组件模板中**只有一个没有属性**的插槽时，父组件整个内容片段将插入插槽所在的DOM位置。并替换掉插槽标签本身。
3. `<slot>`可以使用name属性来配置分发具体插槽，同时可以有一个默认插槽（匿名）作为匹配不到内容片段的备选。

**单个插槽**：
```html
/* parent */
<div>
  <h1>I'm the parent title</h1>
  <child-component>
  	<p>This is some original content</p>
  </child-component>
</div>

/* child-component */
<div>
  <h2>I'm the child title</h2>
  <slot>
    <p>This will only be displayed if there is no content to be distributed.</p>
  </slot>
  <p>I'm the child paragraphs</p>
</div>

/* rendered result */
<div>
  <h1>I'm the parent title</h1>
  <div>
    <h2>I'm the child title</h2>
    <p>This is some original content</p>
    <p>I'm the child paragraphs</p>
  </div>
</div>
```

**具名插槽**：
```html
/* app-layout */
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

/* parent */
<app-layout>
  <h1 slot="header">这里可能是一个页面标题</h1>
  
  /* 父组件中使用slot属性指向具体子组件的位置 */
  
  <p>主要内容的一个段落。</p>
  <p>另一个主要段落。</p>
  <p slot="footer">这里有一些联系信息</p>
</app-layout>



/* rendered result */
<div class="container">
  <header>
    <h1>这里可能是一个页面标题</h1>
  </header>
  <main>
    <p>主要内容的一个段落。</p>
    <p>另一个主要段落。</p>
  </main>
  <footer>
    <p>这里有一些联系信息</p>
  </footer>
</div>
```





参考：[Vue 插槽分发内容](https://cn.vuejs.org/v2/guide/components.html#使用插槽分发内容)

## Vuex
为了学习单文件组件，尝试使用Vuex进行数据统一管理。

### Mutation
关于Mutations 部分，有不少博客栗子和文章指出，一般会使用常量代替Mutation事件类型，将这些常量放在单独的文件进行统一管理。
对此我的理解是，当项目复杂时，单独的命名管理更利于开发和维护。同时，Mutation更像是事件管理，而不是一个动作，触发动作应由action完成。

详细阅读官方文档后，发现文档已经指出关于常量使用的目的：
1. 在各类Flux 实现中，使用常量代替mutation是常见的模式。
2. 它可以使linter等工具发挥作用。
3. 使你的代码合作者对整个项目的mutation一目了然。
4. 在大型项目中，这会很有作用。
5. 至于如何使用，取决于你自己。


## Vue-router
用于login和Todo 组件加载。

### vue-router+webpack 懒加载/按需加载
使用路由+webpack 实现懒加载可以减少首屏时间（虽然该项目中影响不大）/首屏加载流量（不认同）

https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
```js
const Foo = resolve => require(['./Foo.vue'], resolve)

const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})
```

### [异步组件](https://cn.vuejs.org/v2/guide/components.html#异步组件)

根据文档的说法：

> 为了让事情更简单，Vue.js 允许将组件定义为一个工厂函数，动态地解析组件的定义。Vue.js 只在组件需要渲染时触发工厂函数，并且把结果缓存起来，用于后面的再次渲染。
```js
Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // Pass the component definition to the resolve callback
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})
```
在这里setTimeout只是一个示例，具体如何获取组件由开发者决定。



## 后端（leancloud）

当前项目使用的是leancloud提供的数据存储服务，主要参考：[leantodo-Vue](https://github.com/leancloud/leantodo-vue)


### 增删改查

### liveQuery

### 用户
ACL 

## 遇到的困难
- ~~iview 表单组件中的验证功能无法使用~~
    1. [async-validator](https://github.com/yiminghe/async-validator#async-validator)的文档中没有iview的实例，有点难结合iview组件读懂。其次是对vue组件的理解不足。
    2. $ref 不太理解

- leancloud后端还无法部署
    1. leancloud提供的数据结构还没有理清
    2. api不熟悉
    3. 无法将leancloud提供的sdk和vuex vuex-router结合

- 需求的把握
    1. 没有确定的功能需求 => 无法确定哪些功能需要实现
    2. 没有确定的设计稿=> 无法绘制合适的UI

## 继续实现
- 登录
    1. 手写样式，验证部分交给leancloud处理，由后端返回错误码来提示错误信息
    2. 注意this的使用
    3. 通过路由+AV实例做是否已登录验证，已登录则直接跳转至todo页面
    4. 跳转画面  基于Vue的动画实现，考虑参考ppt、手机切屏的效果
    5. 登录拦截+用户状态储存
- todo
    1. 添加todo重要程度选择，该选择影响todu 输入框的颜色，以此提示用户
    2. 可以尝试 CSS --property的方式写颜色
    3. 筛选功能
    4. 修改todo的功能（暂时还没想好样式）