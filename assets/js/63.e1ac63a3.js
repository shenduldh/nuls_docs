(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{493:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"node-program-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-program-configuration"}},[t._v("#")]),t._v(" Node Program Configuration")]),t._v(" "),a("h2",{attrs:{id:"configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[t._v("#")]),t._v(" Configuration files")]),t._v(" "),a("p",[t._v("Core configuration file of the wallet, in which all modules can be configured.")]),t._v(" "),a("h3",{attrs:{id:"structure-of-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure-of-configuration-file"}},[t._v("#")]),t._v(" Structure of configuration file")]),t._v(" "),a("p",[t._v("It employs the structure of Windows-like configuration file, which is divided into group and parameter.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[network] # group\nPort=18001 # Parameter `key` and value\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("The content inside nuls.ncf looks like this.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[global]\nEncoding=UTF-8\nLanguage=en\n. . .\n[account]\nkeystoreFolder=/keystore/backup\n\n[network]\nPort=10081\n...\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("[global] is a special group, in which all modules inherit configuration items. The global universal configuration can be configured under this group.\n[account], [network] are the exclusive configurations of the account module and network module. The name corresponds to the "),a("code",[t._v("APP_NAME")]),t._v(" in the "),a("code",[t._v("Module.ncf")]),t._v(" of the module.\nWhen [global] and the module group have the same configuration item, the configuration in the module group has a higher priority and overrides the configuration in the "),a("code",[t._v("global")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"relationship-with-configuration-files-in-the-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relationship-with-configuration-files-in-the-module"}},[t._v("#")]),t._v(" Relationship with configuration files in the module")]),t._v(" "),a("p",[t._v("In the module directory (such as Modules/Nuls/account/1.0.0), there is a configuration file of Module.ncf. The priority of external "),a("code",[t._v("nuls.ncf")]),t._v(" is higher than that of Module.ncf in the module. So when the configuration item with the same name appears, the item in nuls.ncf will override the item with the same name in the module.")]),t._v(" "),a("h3",{attrs:{id:"generating-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-configuration-file"}},[t._v("#")]),t._v(" Generating configuration file")]),t._v(" "),a("p",[t._v("When the wallet program is downloaded or packaged for the first time, the nuls.ncf file does exist. And it will be automatically generated for the first time of executing start or start-dev.")]),t._v(" "),a("h3",{attrs:{id:"configuration-description-of-nuls-ncf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-description-of-nuls-ncf"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#nuls.ncf"}},[t._v("Configuration description of nuls.ncf")])]),t._v(" "),a("h2",{attrs:{id:"basic-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-command"}},[t._v("#")]),t._v(" Basic Command")]),t._v(" "),a("h3",{attrs:{id:"start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[t._v("#")]),t._v(" start")]),t._v(" "),a("p",[t._v("Wallet startup script, it is used in the production environment to launch the wallet")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./start\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"stop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[t._v("#")]),t._v(" stop")]),t._v(" "),a("p",[t._v("Wallet stop script, it is used in production environment to stop wallet")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./stop\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"start-dev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-dev"}},[t._v("#")]),t._v(" start-dev")]),t._v(" "),a("p",[t._v("Start the NULS2.0 development environment (compatible with macOS system)")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./start-dev\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"stop-dev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-dev"}},[t._v("#")]),t._v(" stop-dev")]),t._v(" "),a("p",[t._v("Stop the NULS2.0 development environment")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./stop-dev\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[t._v("#")]),t._v(" cmd")]),t._v(" "),a("p",[t._v("Start the command line and perform wallet-related operations.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./cmd\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Specify the log level. ERROR by default, optional log levels are DEBUG, INFO, WARN and ERROR")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./cmd -l DEBUG # set the log level to DEBUG\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Specify the path of the configuration file. By default the nuls.ncf is generated in the same directory")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./cmd -c /home/my.ncf\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"check-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-status"}},[t._v("#")]),t._v(" check-status")]),t._v(" "),a("p",[t._v("Check the startup status of the module. This function allows you to quickly check if each basic module is successfully started. The script logic is to read the log flag bits in the log file.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./check-status\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Execution return")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("==================MODULE PROCESS====================\naccount PROCESS IS START\nblock PROCESS IS START\nconsensus PROCESS IS START\nledger PROCESS IS START\nnetwork PROCESS IS START\ntransaction PROCESS IS START\n==================RPC REDAY MODULE==================\naccount RPC READY\nblock RPC READY\nconsensus RPC READY\nledger RPC READY\nnetwork RPC READY\ntransaction RPC READY\n======================REDAY MODULE==================\naccount STATE IS READY\nblock STATE IS READY\nconsensus STATE IS READY\nledger STATE IS READY\nnetwork STATE IS READY\ntransaction STATE IS READY\n================TRY RUNNING MODULE==================\naccount TRY RUNNING\nblock TRY RUNNING\nconsensus TRY RUNNING\nledger TRY RUNNING\nnetwork TRY RUNNING\ntransaction TRY RUNNING\n===================RUNNING MODULE===================\naccount STATE IS RUNNING\nblock STATE IS RUNNING\nconsensus STATE IS RUNNING\nledger STATE IS RUNNING\nnetwork STATE IS RUNNING\ntransaction STATE IS RUNNING\n==================NULS WALLET STATE=================\n==========================\nNULS WALLET IS RUNNING\n==========================\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br")])]),a("p",[t._v("The message NULS WALLET IS RUNNING indicates the success of the startup.")]),t._v(" "),a("h3",{attrs:{id:"create-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-address"}},[t._v("#")]),t._v(" create-address")]),t._v(" "),a("p",[t._v("Generate account address and private key. You can run it independently to generate address without relying on the wallet.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./create-address\nchainId: 2\nNumber:1\n=========================================================== ===========================================================\nAddress :tNULSeBaMi3UWVb1hMrsoEmv4XPPLW7CKmBVgn\nprivateKey:e27e3961384bc4749cb5bd535b16c90c4430d4da2cd34e1edd10b50b0d01fa1d\n=========================================================== ===========================================================\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("Generate the chainId of the specified address")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./create-address -c 1 # specify chainId to 1 (by default, reading chainId from nuls.ncf)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Generate the specified number of addresses")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./create-address -n 100 # generate 100 addresses in batches (1 by default)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"appendix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix"}},[t._v("#")]),t._v(" Appendix")]),t._v(" "),a("h3",{attrs:{id:"nuls-ncf-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuls-ncf-configuration-file"}},[t._v("#")]),t._v(" "),a("span",{attrs:{id:"nuls.ncf"}},[t._v("nuls.ncf Configuration File")])]),t._v(" "),a("h4",{attrs:{id:"global-configuration-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-configuration-group"}},[t._v("#")]),t._v(" Global configuration: group")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Item")]),t._v(" "),a("th",[t._v("Value Range")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("encoding")]),t._v(" "),a("td",[t._v("character set")]),t._v(" "),a("td",[t._v("UTF-8 by default, not recommended to modify")])]),t._v(" "),a("tr",[a("td",[t._v("language")]),t._v(" "),a("td",[t._v("en/zh_CHS")]),t._v(" "),a("td",[t._v("language package")])]),t._v(" "),a("tr",[a("td",[t._v("logPath")]),t._v(" "),a("td",[t._v("relative path of the folder")]),t._v(" "),a("td",[t._v("storage path of log file, configuring the context relative path of file")])]),t._v(" "),a("tr",[a("td",[t._v("logLevel")]),t._v(" "),a("td",[t._v("DEBUG,INFO,WARN,ERROR")]),t._v(" "),a("td",[t._v("log level")])]),t._v(" "),a("tr",[a("td",[t._v("dataPath")]),t._v(" "),a("td",[t._v("relative path of the folder")]),t._v(" "),a("td",[t._v("storage path of data file, configuring the context relative path of file")])]),t._v(" "),a("tr",[a("td",[t._v("chainId")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("chain ID of the default running chain")])]),t._v(" "),a("tr",[a("td",[t._v("assetId")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("main asset ID of the default running chain")])]),t._v(" "),a("tr",[a("td",[t._v("chainName")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("name of the default running chain")])]),t._v(" "),a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("main asset symbol of the default running chain")])]),t._v(" "),a("tr",[a("td",[t._v("decimals")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("number of digits to the right of the decimal point of the default asset")])]),t._v(" "),a("tr",[a("td",[t._v("blackHolePublicKey")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("public key of the black hole address")])])])]),t._v(" "),a("h4",{attrs:{id:"configuration-of-the-network-module-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-the-network-module-network"}},[t._v("#")]),t._v(" Configuration of the network module : network")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Item")]),t._v(" "),a("th",[t._v("Value Range")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("port")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("communication port of network")])]),t._v(" "),a("tr",[a("td",[t._v("CrossPort")]),t._v(" "),a("td",[t._v("positive Integer")]),t._v(" "),a("td",[t._v("communication port of cross-chain transaction")])]),t._v(" "),a("tr",[a("td",[t._v("packetMagic")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("network magic parameters, network connection happens only if the magic parameter are be the same")])]),t._v(" "),a("tr",[a("td",[t._v("selfSeedIps")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("network node IP connected to by default, separated by English commas for multiple IPs")])]),t._v(" "),a("tr",[a("td",[t._v("maxInCount")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("maximum incoming connections to the current node")])]),t._v(" "),a("tr",[a("td",[t._v("maxOutCount")]),t._v(" "),a("td",[t._v("Positive integer")]),t._v(" "),a("td",[t._v("maximum outgoing connections for the current node")])])])]),t._v(" "),a("h4",{attrs:{id:"configuration-of-the-account-module-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-the-account-module-account"}},[t._v("#")]),t._v(" Configuration of the account module : account")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Item")]),t._v(" "),a("th",[t._v("Value Range")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("keystoreFolder")]),t._v(" "),a("td",[t._v("folder path")]),t._v(" "),a("td",[t._v("path of the file storing the account keystore, which is the path in the "),a("code",[t._v("dataPath")])])])])]),t._v(" "),a("h4",{attrs:{id:"configuration-of-the-block-module-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-the-block-module-block"}},[t._v("#")]),t._v(" Configuration of the block module : block")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Item")]),t._v(" "),a("th",[t._v("Value Range")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("blockMaxSize")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("maximum number of bytes a block can store")])]),t._v(" "),a("tr",[a("td",[t._v("extendMaxSize")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("maximum number of bytes the extension field in a block can store")])]),t._v(" "),a("tr",[a("td",[t._v("chainSwtichThreshold")]),t._v(" "),a("td",[t._v("positive Integer")]),t._v(" "),a("td",[t._v("height difference threshold for forking chain switching")])]),t._v(" "),a("tr",[a("td",[t._v("maxRollback")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("local maximum rollback number in case of local block inconsistent with the network block")])]),t._v(" "),a("tr",[a("td",[t._v("consistencyNodePercent")]),t._v(" "),a("td",[t._v("positive Integer")]),t._v(" "),a("td",[t._v("percentage threshold of the latest block height and hash consistency of nodes on the network")])]),t._v(" "),a("tr",[a("td",[t._v("minNodeAmount")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("minimum number of connecting nodes, continually waiting in case of the connecting network node less than this value")])]),t._v(" "),a("tr",[a("td",[t._v("downloadNumber")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("number of blocks downloaded from nodes on the network each time during block synchronization")])]),t._v(" "),a("tr",[a("td",[t._v("SingleDownloadTimeout")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("timeout for downloading a single block from nodes on the network")])]),t._v(" "),a("tr",[a("td",[t._v("batchDownloadTimeout")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("timeout for downloading multiple blocks from nodes on the network")])]),t._v(" "),a("tr",[a("td",[t._v("cachedBlockSizeLimit")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("maximum number of block bytes cached during block synchronization")])])])]),t._v(" "),a("h4",{attrs:{id:"configuration-of-the-poc-consensus-module-consensus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-the-poc-consensus-module-consensus"}},[t._v("#")]),t._v(" Configuration of the poc consensus module : consensus")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Item")]),t._v(" "),a("th",[t._v("Value Range")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("seedNodes")]),t._v(" "),a("td",[t._v("address list")]),t._v(" "),a("td",[t._v("block address list of seed nodes, separated by English commas for multiple addresses")])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("default password for the seed node's block address. The password set when importing the address must be the same as this configuration item.")])]),t._v(" "),a("tr",[a("td",[t._v("packingInterval")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("block time in seconds. Configuration of 10 representing generating a new block every 10 seconds")])]),t._v(" "),a("tr",[a("td",[t._v("agentAssetId")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("asset ID allowed to participate in consensus")])]),t._v(" "),a("tr",[a("td",[t._v("agentChainId")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("chain ID of the asset allowed to participate in consensus")])]),t._v(" "),a("tr",[a("td",[t._v("awardAssetId")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("asset ID for consensus awards (must be in the chain where the consensus asset is located, that is, with the same chain ID")])]),t._v(" "),a("tr",[a("td",[t._v("feeUnit")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("unit price of the fee")])])])]),t._v(" "),a("h4",{attrs:{id:"configuration-of-the-smart-contract-smart-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-the-smart-contract-smart-contract"}},[t._v("#")]),t._v(" Configuration of the smart contract : smart_contract")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Item")]),t._v(" "),a("th",[t._v("Value Range")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("maxViewGas")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("maximum consumed Gas for contract attempting to invoke methods")])])])]),t._v(" "),a("h4",{attrs:{id:"configuration-of-api-interface-module-api-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-api-interface-module-api-module"}},[t._v("#")]),t._v(" Configuration of API interface module : api-module")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Item")]),t._v(" "),a("th",[t._v("Value Rang")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("rpcPort")]),t._v(" "),a("td",[t._v("port number")]),t._v(" "),a("td",[t._v("used by HTTP interface")])]),t._v(" "),a("tr",[a("td",[t._v("databaseUrl")]),t._v(" "),a("td",[t._v("IP address")]),t._v(" "),a("td",[t._v("IP address of mongodb database")])]),t._v(" "),a("tr",[a("td",[t._v("databasePort")]),t._v(" "),a("td",[t._v("port number")]),t._v(" "),a("td",[t._v("used by mongodb database")])]),t._v(" "),a("tr",[a("td",[t._v("maxAliveConnect")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("maximum number of connections of the database connection pool")])]),t._v(" "),a("tr",[a("td",[t._v("maxWaitTime")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("maximum waiting time (ms) to get a connection from the database")])]),t._v(" "),a("tr",[a("td",[t._v("connectTimeOut")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("timeout of database connection (ms)")])])])]),t._v(" "),a("h4",{attrs:{id:"configuration-of-cross-chain-module-cross-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-cross-chain-module-cross-chain"}},[t._v("#")]),t._v(" Configuration of cross-chain module: cross-chain")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Item")]),t._v(" "),a("th",[t._v("Value Range")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("minNodeAmount")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("minimum number of cross-chain node connection")])]),t._v(" "),a("tr",[a("td",[t._v("maxNodeAmount")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("maximum number of cross-chain node connection")])]),t._v(" "),a("tr",[a("td",[t._v("sendHeight")]),t._v(" "),a("td",[t._v("positive integer")]),t._v(" "),a("td",[t._v("confirmation number of cross-chain transaction inside the chain")])]),t._v(" "),a("tr",[a("td",[t._v("byzantineRatio")]),t._v(" "),a("td",[t._v("positive integers")]),t._v(" "),a("td",[t._v("Byzantine ratio of cross-chain transaction")])]),t._v(" "),a("tr",[a("td",[t._v("CrossSeedIps")]),t._v(" "),a("td",[t._v("IP list")]),t._v(" "),a("td",[t._v("cross-chain seed node list on MainNet")])])])])])}],!1,null,null,null);e.default=s.exports}}]);