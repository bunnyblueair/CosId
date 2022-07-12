(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{322:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cosid-jdbc-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cosid-jdbc-模块"}},[t._v("#")]),t._v(" CosId-Jdbc 模块")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Ahoo-Wang/CosId/tree/main/cosid-jdbc",target:"_blank",rel:"noopener noreferrer"}},[t._v("cosid-jdbc"),s("OutboundLink")],1),t._v(" 使用"),s("strong",[t._v("关系型数据库")]),t._v("作为"),s("strong",[t._v("雪花算法")]),t._v("("),s("code",[t._v("SnowflakeId")]),t._v(") 的 机器号分配器 ("),s("code",[t._v("MachineIdDistributor")]),t._v(") 、"),s("strong",[t._v("号段算法")]),t._v("("),s("code",[t._v("SegmentId")]),t._v(")的号段分发器 ("),s("code",[t._v("IdSegmentDistributor")]),t._v(")。")]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("blockquote",[s("p",[t._v("Kotlin DSL")])]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("implementation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"me.ahoo.cosid:cosid-jdbc:')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("cosidVersion")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"jdbcidsegmentdistributor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdbcidsegmentdistributor"}},[t._v("#")]),t._v(" JdbcIdSegmentDistributor")]),t._v(" "),s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:t.$withBase("/assets/design/SegmentId.png"),alt:"SegmentId"}})]),t._v(" "),s("p",[t._v("使用关系型数据库作为号段算法（"),s("code",[t._v("SegmentId")]),t._v("）的号段分发器。")]),t._v(" "),s("h3",{attrs:{id:"创建-cosid-表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-cosid-表"}},[t._v("#")]),t._v(" 创建 "),s("code",[t._v("cosid")]),t._v(" 表")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exists")]),t._v(" cosid\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    name            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{namespace}.{name}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    last_max_id     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    last_fetch_time "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constraint")]),t._v(" cosid_pk\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("engine")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"jdbcmachineiddistributor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdbcmachineiddistributor"}},[t._v("#")]),t._v(" JdbcMachineIdDistributor")]),t._v(" "),s("h3",{attrs:{id:"创建-cosid-machine-表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-cosid-machine-表"}},[t._v("#")]),t._v(" 创建 "),s("code",[t._v("cosid_machine")]),t._v(" 表")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exists")]),t._v(" cosid_machine\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    name            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{namespace}.{machine_id}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    namespace       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    machine_id      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("integer")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    last_timestamp  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    instance_id     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    distribute_time "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    revert_time     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constraint")]),t._v(" cosid_machine_pk\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("engine")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exists")]),t._v(" idx_namespace "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" cosid_machine "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("namespace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exists")]),t._v(" idx_instance_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" cosid_machine "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);