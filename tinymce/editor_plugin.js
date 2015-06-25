/**
 * TinyMCE plugin Virtual Keyboard
 *
 * Copyright 2015, Arkaprava Midya
 * Author    Dualcube
 * License   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
(function() {
	var DOM = tinymce.DOM;
	tinymce.create('tinymce.plugins.MoodleVirtualKeyboardPlugin', {
		init : function(ed, url) {
			var s = ed.settings;
			// Register commands
			ed.addCommand('mceVirtualKeyboard', function() {
				document.getElementById(ed.id + 'xyz').click();
			});
			DOM.loadCSS((s.editor_css ? ed.documentBaseURI.toAbsolute(s.editor_css) : '') || url + "/css/keyboard.css");
			// Register buttons
			ed.addButton('keyboard', {
				title : 'virtual keyboard',
				cmd : 'mceVirtualKeyboard',
				image : url + '/img/keyboard.png'
			});
		},
		getInfo : function() {
			return {
				longname : 'Virtual Keyboard',
				author : 'Arkaprava Midya',
                version : '1.0' // Version of Virtual Keyboard plugin this plugin is based on.
			};
		}
	});
	// Register plugin
	tinymce.PluginManager.add('virtualkeyboard', tinymce.plugins.MoodleVirtualKeyboardPlugin);
})();
