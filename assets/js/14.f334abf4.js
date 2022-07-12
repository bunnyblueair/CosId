(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{310:function(t,a,e){"use strict";e.r(a);var v=e(3),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"snowflakeid-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snowflakeid-配置"}},[t._v("#")]),t._v(" SnowflakeId 配置")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("me.ahoo.cosid.spring.boot.starter.snowflake.SnowflakeIdProperties")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("enabled")]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[t._v("是否启用")]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[t._v("zone-id")]),t._v(" "),a("td",[a("code",[t._v("String")])]),t._v(" "),a("td",[t._v("时区")]),t._v(" "),a("td",[a("code",[t._v("ZoneId.systemDefault().getId()")])])]),t._v(" "),a("tr",[a("td",[t._v("epoch")]),t._v(" "),a("td",[a("code",[t._v("long")])]),t._v(" "),a("td",[t._v("EPOCH")]),t._v(" "),a("td",[a("code",[t._v("CosId.COSID_EPOCH")]),t._v(" "),a("br"),t._v(" (UTC 2019-12-24 16:00)")])]),t._v(" "),a("tr",[a("td",[t._v("clock-backwards")]),t._v(" "),a("td",[a("code",[t._v("ClockBackwards")])]),t._v(" "),a("td",[t._v("时钟回拨配置")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("machine")]),t._v(" "),a("td",[a("code",[t._v("Machine")])]),t._v(" "),a("td",[t._v("机器号分配器配置")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("share")]),t._v(" "),a("td",[a("code",[t._v("IdDefinition")])]),t._v(" "),a("td",[t._v("共享ID生成器配置")]),t._v(" "),a("td",[t._v("有")])]),t._v(" "),a("tr",[a("td",[t._v("provider")]),t._v(" "),a("td",[a("code",[t._v("Map<String, IdDefinition>")])]),t._v(" "),a("td",[t._v("多ID生成器配置")]),t._v(" "),a("td",[a("code",[t._v("null")])])])])]),t._v(" "),a("h2",{attrs:{id:"clockbackwards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clockbackwards"}},[t._v("#")]),t._v(" ClockBackwards")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("me.ahoo.cosid.spring.boot.starter.snowflake.SnowflakeIdProperties.ClockBackwards")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("spin-threshold")]),t._v(" "),a("td",[a("code",[t._v("int")])]),t._v(" "),a("td",[t._v("自旋同步阈值（ms）")]),t._v(" "),a("td",[a("code",[t._v("10")])])]),t._v(" "),a("tr",[a("td",[t._v("broken-threshold")]),t._v(" "),a("td",[a("code",[t._v("int")])]),t._v(" "),a("td",[t._v("抛出异常（"),a("code",[t._v("ClockTooManyBackwardsException")]),t._v("）阈值（ms）")]),t._v(" "),a("td",[a("code",[t._v("2000")])])])])]),t._v(" "),a("h2",{attrs:{id:"machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#machine"}},[t._v("#")]),t._v(" Machine")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("me.ahoo.cosid.spring.boot.starter.snowflake.SnowflakeIdProperties.Machine")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("stable")]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[t._v("是否为稳定的实例,稳定实例将不回收机器号")]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[t._v("port")]),t._v(" "),a("td",[a("code",[t._v("Integer")])]),t._v(" "),a("td",[t._v("端口号")]),t._v(" "),a("td",[t._v("进程ID（PID）")])]),t._v(" "),a("tr",[a("td",[t._v("instanceId")]),t._v(" "),a("td",[a("code",[t._v("String")])]),t._v(" "),a("td",[t._v("应用实例编号(全局唯一)")]),t._v(" "),a("td",[t._v("应用IP:PID")])]),t._v(" "),a("tr",[a("td",[t._v("machineBit")]),t._v(" "),a("td",[a("code",[t._v("int")])]),t._v(" "),a("td",[t._v("机器位数")]),t._v(" "),a("td",[a("code",[t._v("10")])])]),t._v(" "),a("tr",[a("td",[t._v("stateStorage")]),t._v(" "),a("td",[a("code",[t._v("Machine.StateStorage")])]),t._v(" "),a("td",[t._v("机器状态存储")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("distributor")]),t._v(" "),a("td",[a("code",[t._v("Machine.Distributor")])]),t._v(" "),a("td",[t._v("机器号分发器")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"machine-statestorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#machine-statestorage"}},[t._v("#")]),t._v(" Machine.StateStorage")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("enabled")]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[t._v("是否启用状态存储")]),t._v(" "),a("td",[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[t._v("local")]),t._v(" "),a("td",[a("code",[t._v("Machine.StateStorage.Local")])]),t._v(" "),a("td",[t._v("本地机器状态存储配置")]),t._v(" "),a("td")])])]),t._v(" "),a("h4",{attrs:{id:"machine-statestorage-local"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#machine-statestorage-local"}},[t._v("#")]),t._v(" Machine.StateStorage.Local")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("state-location")]),t._v(" "),a("td",[a("code",[t._v("String")])]),t._v(" "),a("td",[t._v("状态存储位置")]),t._v(" "),a("td",[a("code",[t._v("./cosid-machine-state/")])])])])]),t._v(" "),a("h3",{attrs:{id:"machine-distributor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#machine-distributor"}},[t._v("#")]),t._v(" Machine.Distributor")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[a("code",[t._v("Machine.Distributor.Type")])]),t._v(" "),a("td",[t._v("机器号分配器类型："),a("code",[t._v("MANUAL")]),t._v("/"),a("code",[t._v("STATEFUL_SET")]),t._v("/"),a("code",[t._v("JDBC")]),t._v("/"),a("code",[t._v("REDIS")]),t._v("/"),a("code",[t._v("ZOOKEEPER")])]),t._v(" "),a("td",[a("code",[t._v("MANUAL")])])]),t._v(" "),a("tr",[a("td",[t._v("manual")]),t._v(" "),a("td",[a("code",[t._v("Machine.Distributor.Manual")])]),t._v(" "),a("td",[t._v("手动分配器配置")]),t._v(" "),a("td")])])]),t._v(" "),a("h4",{attrs:{id:"machine-distributor-manual"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#machine-distributor-manual"}},[t._v("#")]),t._v(" Machine.Distributor.Manual")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("machineId")]),t._v(" "),a("td",[a("code",[t._v("Integer")])]),t._v(" "),a("td",[t._v("机器号")]),t._v(" "),a("td",[a("code",[t._v("null")])])])])]),t._v(" "),a("h2",{attrs:{id:"iddefinition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iddefinition"}},[t._v("#")]),t._v(" IdDefinition")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("me.ahoo.cosid.spring.boot.starter.snowflake.SnowflakeIdProperties.IdDefinition")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("clock-sync")]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[t._v("是否开启时钟同步")]),t._v(" "),a("td",[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[t._v("friendly")]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[t._v("是否启用"),a("code",[t._v("SnowflakeFriendlyId")])]),t._v(" "),a("td",[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[t._v("timestamp-unit")]),t._v(" "),a("td",[a("code",[t._v("IdDefinition.TimestampUnit")])]),t._v(" "),a("td",[t._v("时间戳位的单位："),a("code",[t._v("SECOND")]),t._v(" / "),a("code",[t._v("MILLISECOND")])]),t._v(" "),a("td",[a("code",[t._v("TimestampUnit.MILLISECOND")])])]),t._v(" "),a("tr",[a("td",[t._v("epoch")]),t._v(" "),a("td",[a("code",[t._v("int")])]),t._v(" "),a("td",[t._v("EPOCH")]),t._v(" "),a("td",[a("code",[t._v("cosid.snowflake.epoch")])])]),t._v(" "),a("tr",[a("td",[t._v("timestamp-bit")]),t._v(" "),a("td",[a("code",[t._v("int")])]),t._v(" "),a("td",[t._v("时间戳位数")]),t._v(" "),a("td",[t._v("41")])]),t._v(" "),a("tr",[a("td",[t._v("machine-bit")]),t._v(" "),a("td",[a("code",[t._v("int")])]),t._v(" "),a("td",[t._v("机器位数")]),t._v(" "),a("td",[a("code",[t._v("cosid.snowflake.machine.machine-bit")])])]),t._v(" "),a("tr",[a("td",[t._v("sequence-bit")]),t._v(" "),a("td",[a("code",[t._v("int")])]),t._v(" "),a("td",[t._v("序列位数")]),t._v(" "),a("td",[t._v("12")])]),t._v(" "),a("tr",[a("td",[t._v("converter")]),t._v(" "),a("td",[a("code",[t._v("IdConverterDefinition")])]),t._v(" "),a("td",[t._v("Id转换器配置")]),t._v(" "),a("td")])])]),t._v(" "),a("p",[a("strong",[t._v("YAML 配置样例")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cosid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("spring.application.name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("snowflake")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zone-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Asia/Shanghai\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("epoch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1577203200000")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clock-backwards")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spin-threshold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("broken-threshold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("machine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("distributor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("state-storage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("state-location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./cosid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("machine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("state/\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("share")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clock-sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("friendly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("short_id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("converter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cosid_\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" radix\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("radix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("char-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pad-start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("safe-js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("machine-bit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sequence-bit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);