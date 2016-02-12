Ext.require('Ext.container.Viewport');

Ext.application({
    name: 'ExtJsDemo',
    controllers: [
        'User'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'Users',
                    html: 'List of users will go here'
                }
            ]
        });
    }
});