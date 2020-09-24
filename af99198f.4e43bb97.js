(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(2),r=(a(0),a(87));const o={slug:"rule_them_all",title:"One full-stack to rule them all!",author:"Tiago Bandeira",author_url:"https://github.com/tiagob",author_image_url:"https://avatars3.githubusercontent.com/u/1031522?v=4"},i={permalink:"/blog/rule_them_all",editUrl:"https://github.com/tiagob/create-full-stack/edit/master/packages/docusaurus/blog/2019-05-15-rule_them_all.md",source:"@site/blog/2019-05-15-rule_them_all.md",description:"Yes, yet another todo example app! \ud83e\udd26 Needed to throw my hat in the ring because the existing solutions weren\u2019t cutting it.",date:"2019-05-15T00:00:00.000Z",tags:[],title:"One full-stack to rule them all!",readingTime:6.655,truncated:!1,prevItem:{title:"Create Full Stack",permalink:"/blog/create_full_stack"}},s=[{value:"Why?",id:"why",children:[]},{value:"Why TypeScript (TS)?",id:"why-typescript-ts",children:[]},{value:"Why React?",id:"why-react",children:[]},{value:"Why GraphQL with Apollo?",id:"why-graphql-with-apollo",children:[]},{value:"Why Node?",id:"why-node",children:[]},{value:"Conclusions",id:"conclusions",children:[]}],l={rightToc:s};function c({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Yes, yet another todo example app! \ud83e\udd26 Needed to throw my hat in the ring because the existing solutions weren\u2019t cutting it."),Object(r.b)("p",null,"We want a stack that enables rapid iteration as requirements change without producing bugs. Ideally, it should scale in terms of traffic and developers without requiring costly re-writes."),Object(r.b)("p",null,"To achieve this we chose components that are:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"A single language, eliminating developer context switching"),Object(r.b)("li",{parentName:"ol"},"Type-safe, eliminating a whole class of bugs"),Object(r.b)("li",{parentName:"ol"},"Tested at scale in production"),Object(r.b)("li",{parentName:"ol"},"Used by enough developers that solutions are easy to find")),Object(r.b)("h2",{id:"why"},"Why?"),Object(r.b)("p",null,"Coming from Google, I realized the importance of static types across the entire stack (including the API). There are thousands of engineers working on Search and Ads at Google (I was one of them). No one person completely understands the systems because they\u2019ve been built over 10 years by thousands of engineers. Bringing data from the database through the Ad Server and onto Search crossed ~8 different services. Making these changes was scary, to say the least."),Object(r.b)("p",null,"Static typing across the stack and a single mono repo are what make this possible. Static typing ensures the data is there and of the expected type when you access it. Mono repo ensures all services are in the same state and the API contracts (Protobufs at Google) are enforced by the compiler. At Google code that doesn\u2019t compile can\u2019t be checked in."),Object(r.b)("h2",{id:"why-typescript-ts"},"Why TypeScript (TS)?"),Object(r.b)("p",null,"What other typed languages can run on the client and server and aren\u2019t experimental?\nHaving a single language reduces context switching for engineers. It gives us the confidence to own full-stack changes. TypeScript is rapidly growing in popularity. It\u2019s a superset of JavaScript which is the most popular language of all time so most programmers are at least somewhat familiar with the syntax."),Object(r.b)("p",null,"TS eliminates ",Object(r.b)("a",{target:"_blank",href:a(98).default},"15% of production bugs"),". It scales to hundreds, if not thousands, of developers. Microsoft, Google, and countless other companies rely on it in production systems with billions of users. Google is increasingly adopting it over Closure (Google\u2019s prehistoric typed JS language). It has great documentation and IDE support with a thriving community (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://insights.stackoverflow.com/survey/2019#technology-_-most-loved-dreaded-and-wanted-languages"}),"3rd most loved language on StackOverflow"),"). It presents clear errors when the compiler fails."),Object(r.b)("p",null,"The TypeScript team has been ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=Au-rrY0afe4"}),"rapidly improving TS across many dimensions"),". In the last year they added:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Support for existing tools to meet developers where they are",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"TS + Babel for easy integration in the React ecosystem"),Object(r.b)("li",{parentName:"ul"},"TS + ESLint for better linting support (TSLint is too slow)"))),Object(r.b)("li",{parentName:"ul"},"Improved error messages. Instead of highlighting an entire interface when there\u2019s a type issue it jumps to the property that\u2019s causing the issue.")),Object(r.b)("p",null,Object(r.b)("img",{alt:"TypeScript v2.8 vs v3.0",src:a(99).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"More advanced type checking (no overloads necessary in generics). Ex. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://youtu.be/Au-rrY0afe4?t=1690"}),"Promise.all"))),Object(r.b)("h2",{id:"why-react"},"Why React?"),Object(r.b)("p",null,"It\u2019s 2019! MVC should be dead! Long live JS in templates and one-direction data flow!"),Object(r.b)("p",null,"JS in templates gives us access to a Turing complete language when we\u2019re constructing what\u2019s displayed. This pushes complexity to the leaves instead of APIs or random custom functions which reduces overall complexity (see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=x7cQ3mrcKaY"}),"Pete Hunt\u2019s talk"),"). In Django (I have a python background pre-React), you\u2019d use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.djangoproject.com/en/2.2/ref/templates/builtins/#"}),"tags, filters")," or write your own ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.djangoproject.com/en/2.2/howto/custom-template-tags/#writing-custom-template-filters"}),"custom versions")," when you run into things like formatting date time ranges. Learning an extra template language and writing complicated escape hatches is a waste!"),Object(r.b)("p",null,"One way data flow ensures there\u2019s a single source of truth and you don\u2019t run into bugs where the same value could be in different states. Google just announced Compose, a React-like framework, in Android. They dive into the issues with two-way data bindings in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=VsStyq4Lzxo"}),"their talk at IO"),"."),Object(r.b)("p",null,"Since React\u2019s public launch in 2013, it\u2019s only gotten better and grown in popularity. Many of the worlds most used sites are completely or nearly completely written in React (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3"}),"Twitter"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/netflix-techblog/netflix-likes-react-509675426db"}),"Netflix"),", Uber, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.facebook.com/videos/2019/building-the-new-facebookcom-with-react-graphql-and-relay/"}),"Facebook"),", and Airbnb). Companies that value developer productivity are wise to adopt because it significantly reduces UI code complexity over more traditional frameworks."),Object(r.b)("h2",{id:"why-graphql-with-apollo"},"Why GraphQL with Apollo?"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphql.org/"}),"GraphQL")," provides a simple way for clients to request only the data they need and easily move across relationships. Requests can change without server modifications and deploys. Try that with REST or Protobufs!"),Object(r.b)("p",null,"If we extended our Todo example to have different users we could query for their specific todos. Any additional fields on either user or todo are emitted from the response but could be fetched in different queries without changes to the API"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  user(id: "xxx") {\n    name\n    todos {\n      name\n      complete\n    }\n  }\n}\n')),Object(r.b)("p",null,"Apollo has client and server support that requires less upfront learning and setup cost than Relay. It has automated TypeScript type generation through ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphql-code-generator.com/"}),"graphql-code-generator"),". Solid documentation and tooling with a thriving community. Ability to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.apollographql.com/batching-client-graphql-queries-a685f5bcd41b"}),"batch queries")," but can defer until needed, avoiding fragment complexity."),Object(r.b)("p",null,"The two major distinctions from a devX perspective I see between Relay and Apollo for queries are containers and cursors. Both are required in Relay (opinionated) and optional in Apollo (flexible)."),Object(r.b)("p",null,"Container queries batch all query fragments (data required by each component in the subtree) into a single container level query. In the simple Todo list case, this is actually a bit tricky. It involves importing the lower level fragments and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/relay/docs/en/quick-start-guide#composing-fragments"}),"composing them up the tree"),". In Apollo, we\u2019d simply request the data at the component level. The tradeoff is in the number of requests, containers are more efficient at the cost of complexity and difficulty debugging issues."),Object(r.b)("p",null,"Cursors are a standard way for ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/relay/docs/en/pagination-container"}),"pagination in Relay"),". They require the type you\u2019re fetching to wrap additional details."),Object(r.b)("p",null,"Todo GraphQL schema for Relay cursor pagination:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"# An object with an ID\ninterface Node {\n  # The id of the object.\n  id: ID!\n}\n\n# Information about pagination in a connection.\ntype PageInfo {\n  # When paginating forwards, are there more items?\n  hasNextPage: Boolean!\n  # When paginating backwards, are there more items?\n  hasPreviousPage: Boolean!\n  # When paginating backwards, the cursor to continue.\n  startCursor: String\n  # When paginating forwards, the cursor to continue.\n  endCursor: String\n}\n\ntype Todo implements Node {\n  # The ID of an object\n  id: ID!\n  text: String\n  complete: Boolean\n}\n\n# A connection to a list of items.\ntype TodoConnection {\n  # Information to aid in pagination.\n  pageInfo: PageInfo!\n  # A list of edges.\n  edges: [TodoEdge]\n}\n\n# An edge in a connection.\ntype TodoEdge {\n  # The item at the end of the edge\n  node: Todo\n  # A cursor for use in pagination\n  cursor: String!\n}\n")),Object(r.b)("p",null,"If we\u2019re using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/features/pagination"}),"Apollo offset based pagination")," (assuming you have a SQL database this is straightforward), then we just need the Todo type and we pass the limit and offset in the query. The downside is that if new items are inserted or deleted in the original set it can return duplicates or skip results. Cursor based pagination fixes this."),Object(r.b)("p",null,"This a simple comparison between Relay and Apollo. For Facebook, Relay\u2019s additional complexities make sense for performance and data guarantees. For us, the added complexity didn\u2019t make sense but it\u2019s something we could revisit."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/relay-tools/relay-compiler-language-typescript/tree/master/example"}),"Relay TypeScript Todo example")," for comparison (linked from the official docs)")),Object(r.b)("h2",{id:"why-node"},"Why Node?"),Object(r.b)("p",null,"Our requirement for a single language across client and server limits our server language choices."),Object(r.b)("p",null,"Node has some ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=M3BM9TB-8yA"}),"\u201cregrets\u201d")," like security, the build system, and package.json but, the ecosystem is unparalleled."),Object(r.b)("p",null,"Node is by far the most popular language on GAE and AWS Lambda. It\u2019s great for rapid development. However, many companies also use Node at scale in production (Instagram, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9"}),"Netflix"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/airbnb-engineering/operationalizing-node-js-for-server-side-rendering-c5ba718acfc9"}),"Airbnb"),", and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8"}),"Walmart"),")."),Object(r.b)("p",null,"Is there something else that can run TypeScript on the server safely in production? Unfortunately, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://deno.land/"}),"Deno")," (from the creator of Node) isn\u2019t there yet."),Object(r.b)("h2",{id:"conclusions"},"Conclusions"),Object(r.b)("p",null,"While there is never truly one stack to rule them all, we believe that our set of requirements likely matches many people building web apps today. While all of these pieces have been battle tested individually the sum of their parts creates a relatively novel way of developing web apps that isn\u2019t currently well documented."))}c.isMDXComponent=!0},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,b=u["".concat(i,".").concat(d)]||u[d]||h[d]||o;return a?r.a.createElement(b,s(s({ref:t},c),{},{components:a})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/typestudy-769397d5e37400fe1d17b3ae2fcf1e20.pdf"},99:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/typescript_comparison-1b7c7df159357f09949fecd6d4776385.png"}}]);