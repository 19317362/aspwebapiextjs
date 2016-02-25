Ext.define('ExtJs4Demo.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    items: [
        {
            region: 'west',
            title: 'Navigation',
            width: 200,
            split: true,
            collapsible: true,
            floatable: false
        },
        {
            region: 'center',
            xtype: 'tabpanel',
            items: [
                {
                    title: "Books",
                    closable: true,
                    xtype: 'bookList'
                },
                {
                    title: 'Authors',
                    html: 'Authors will be listed here.'
                }
            ]
        }
    ]
});