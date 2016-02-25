Ext.application({
    name: 'ExtJs4Demo',
    extend: 'Ext.app.Application',
    appFolder: 'Scripts/app',
    autoCreateViewport: true,

    controllers: [
        'Books'
    ]
});