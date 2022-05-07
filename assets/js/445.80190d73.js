(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{955:function(e,t,o){"use strict";o.r(t);var a=o(34),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"custom-completions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-completions"}},[e._v("#")]),e._v(" Custom completions")]),e._v(" "),o("p",[e._v("Custom completions allow you to mix together two features of Nushell: custom commands and completions. With them, you're able to create commands that handle the completions for positional parameters and flag parameters. These custom completions work both custom commands and "),o("RouterLink",{attrs:{to:"/book/externs.html"}},[e._v("known external, or "),o("code",[e._v("extern")]),e._v(", commands")]),e._v(".")],1),e._v(" "),o("p",[e._v("There are two parts to a custom command: the command that handles a completion and attaching this command to the type of another command using "),o("code",[e._v("@")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"example-custom-completion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-custom-completion"}},[e._v("#")]),e._v(" Example custom completion")]),e._v(" "),o("p",[e._v("Let's look at an example:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('> def animals [] { ["cat", "dog", "eel" ] }\n> def my-command [animal: string@animals] { print $animal }\n>| my-command\ncat                 dog                 eel\n')])])]),o("p",[e._v("In the first line, we create a custom command that will return a list of three different animals. These are the values we'd like to use in the completion. Once we've created this command, we can now use it to provide completions for other custom commands and "),o("code",[e._v("extern")]),e._v("s.")]),e._v(" "),o("p",[e._v("In the second line, we use "),o("code",[e._v("string@animals")]),e._v(". This tells Nushell two things: the shape of the argument for type-checking and the custom completion to use if the user wants to complete values at that position.")]),e._v(" "),o("p",[e._v("On the third line, we type the name of our custom command "),o("code",[e._v("my-command")]),e._v(" followed by hitting space and then the "),o("code",[e._v("<tab>")]),e._v(" key. This brings up our completions. Custom completions work the same as other completions in the system, allowing you to type "),o("code",[e._v("e")]),e._v(" followed by the "),o("code",[e._v("<tab>")]),e._v(' key and get "eel" automatically completed.')]),e._v(" "),o("h2",{attrs:{id:"modules-and-custom-completions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modules-and-custom-completions"}},[e._v("#")]),e._v(" Modules and custom completions")]),e._v(" "),o("p",[e._v("You may prefer to keep your custom completions away from the public API for your code. For this, you can combine modules and custom completions.")]),e._v(" "),o("p",[e._v("Let's take the example above and put it into a module:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('module commands {\n    def animals [] {\n        ["cat", "dog", "eel" ]\n    }\n\n    export def my-command [animal: string@animals] {\n        print $animal\n    }\n}\n')])])]),o("p",[e._v("In our module, we've chosen to export only the custom command "),o("code",[e._v("my-command")]),e._v(" but not the custom completion "),o("code",[e._v("animals")]),e._v(". This allows users of this module to call the command, and even use the custom completion logic, without having access the the custom completion. This keeps the API cleaner, while still offering all the same benefits.")]),e._v(" "),o("p",[e._v("This is possible because custom completion tags using "),o("code",[e._v("@")]),e._v(" are locked-in as the command is first parsed.")]),e._v(" "),o("h2",{attrs:{id:"custom-completion-and-extern"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-completion-and-extern"}},[e._v("#")]),e._v(" Custom completion and "),o("code",[e._v("extern")])]),e._v(" "),o("p",[e._v("A powerful combination is adding custom completions to "),o("RouterLink",{attrs:{to:"/book/externs.html"}},[e._v("known "),o("code",[e._v("extern")]),e._v(" commands")]),e._v(". These work the same way as adding a custom completion to a custom command: by creating the custom completion and then attaching it with a "),o("code",[e._v("@")]),e._v(" to the type of one of the positional or flag arguments of the "),o("code",[e._v("extern")]),e._v(".")],1),e._v(" "),o("p",[e._v("If you look closely at the examples in the default config, you'll see this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('export extern "git push" [\n    remote?: string@"nu-complete git remotes", # the name of the remote\n    refspec?: string@"nu-complete git branches"# the branch / refspec\n    ...\n]\n')])])]),o("p",[e._v("Custom completions will serve the same role in this example as in the previous examples. The examples above call into two different custom completions, based on the position the user is currently in.")])])}),[],!1,null,null,null);t.default=s.exports}}]);