(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{321:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cosid-jackson-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cosid-jackson-模块"}},[t._v("#")]),t._v(" CosId-Jackson 模块")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Jackson")]),t._v(" 序列化/反序列化注解插件，相当于隔离了应用API边界内外的 "),s("em",[t._v("ID")]),t._v(" 使用方式，应用内部使用 "),s("code",[t._v("long")]),t._v("、外部使用 "),s("code",[t._v("String")]),t._v("，做到了应用无侵入，无感知。")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("JavaScript Number 溢出问题")]),t._v(" "),s("p",[s("code",[t._v("JavaScript")]),t._v(" 的 "),s("code",[t._v("Number.MAX_SAFE_INTEGER")]),t._v(" 只有"),s("strong",[t._v("53-bit")]),t._v("，如果直接将63位的 "),s("code",[t._v("SnowflakeId")]),t._v(" 返回给前端，那么会产生值溢出的情况（所以这里我们应该知道后端传给前端的 "),s("code",[t._v("long")]),t._v(" 值溢出问题，迟早会出现，只不过"),s("code",[t._v("SnowflakeId")]),t._v("出现得更快而已）。\n很显然溢出是不能被接受的，一般可以使用以下处理方案：")]),t._v(" "),s("ul",[s("li",[t._v("直接将 "),s("code",[t._v("long")]),t._v(" 转换成 "),s("code",[t._v("String")]),t._v(" ("),s("code",[t._v("@AsString(AsString.Type.TO_STRING)")]),t._v(")")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("SnowflakeFriendlyId")]),t._v(" 将 "),s("code",[t._v("SnowflakeId")]),t._v(" 转换成比较友好的字符串表示："),s("code",[t._v("{timestamp}-{machineId}-{sequence} -> 20210623131730192-1-0")]),t._v(" ("),s("code",[t._v("@AsString(AsString.Type.FRIENDLY_ID)")]),t._v(")")]),t._v(" "),s("li",[t._v("自定义 "),s("code",[t._v("SnowflakeId")]),t._v(" 位分配来缩短 "),s("code",[t._v("SnowflakeId")]),t._v(" 的位数（"),s("strong",[t._v("53-bit")]),t._v("）使 "),s("strong",[t._v("ID")]),t._v(" 提供给前端时不溢出("),s("code",[t._v("SafeJavaScriptSnowflakeId")]),t._v(")")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("Radix62IdConverter")]),t._v(" 转换 "),s("code",[t._v("long")]),t._v(" 类型的 "),s("strong",[t._v("ID")]),t._v("，并且压缩字符串。("),s("code",[t._v("@AsString(AsString.Type.RADIX)")]),t._v(")")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Ahoo-Wang/CosId/tree/main/cosid-jackson",target:"_blank",rel:"noopener noreferrer"}},[t._v("cosid-jackson"),s("OutboundLink")],1),t._v(" 模块为提供上述方案提供了最小的侵入性。")])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("blockquote",[s("p",[t._v("Kotlin DSL")])]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("implementation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"me.ahoo.cosid:cosid-jackson:')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("cosidVersion")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsStringDto")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AsString")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AsString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RADIX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" radixId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AsString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RADIX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" radixPadStart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" radixPadStartId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AsString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RADIX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" radixPadStart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" radixCharSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" radixPadStartCharSize10Id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AsString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FRIENDLY_ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" friendlyId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// getter / setter")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("序列化结果")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"266300479548424192"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"radixId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JferHIEYZk"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"radixPadStartId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0JferHIEYZk"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"radixPadStartCharSize10Id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JferHIEYZk"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"friendlyId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20211228202301948-0-0"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);