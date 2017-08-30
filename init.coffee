# Your init script
#
# Atom will evaluate this file each time a new window is opened. It is run
# after packages are loaded/activated and after the previous editor state
# has been restored.
#
# An example hack to log to the console when each text editor is saved.
#
# atom.workspace.observeTextEditors (editor) ->
#   editor.onDidSave ->
#     console.log "Saved! #{editor.getPath()}"


# Visit this link for more documentation on using the init script:
# http://flight-manual.atom.io/hacking-atom/sections/the-init-file/

# This example shows how to paste a link as a markdown url:
# atom.commands.add 'atom-text-editor', 'markdown:paste-as-link', ->
#     return unless editor = atom.workspace.getActiveTextEditor()
#
#     selection = editor.getLastSelection()
#     clipboardText = atom.clipboard.read()
#
#     selection.insertText("[#{selection.getText()}](#{clipboardText})")


# TODO: Finish this
# fs = require('fs')
# # esformatter = require('esformatter')
# esformatter = require('/usr/local/lib/node_modules/esformatter')
# configpath = '~/.atom/package-configs/esformatter/esformat.conf.json'
#
# # Run esformat on javascript file
# atom.workspace.observeTextEditors (editor) ->
#     editor.onDidSave ->
#         filepath = editor.getPath()
#         return unless filepath && filepath.match(/\.(?:js|jsx)$/i)
#
#         text = editor.getText()
#         return unless text
#
#         console.log "Running ESFormat on file '#{filepath}'..."
#         try
#             config = JSON.parse(fs.readFileSync(configpath).toString())
#             formattedCode = esformatter.format(text, config)
#             fs.writeFileSync(filepath, formattedCode, {
#                 flag: 'w',
#                 encoding: 'utf8'
#             })
#         catch err
#             console.error "An error occurred while running esformatter:\n#{err}"
