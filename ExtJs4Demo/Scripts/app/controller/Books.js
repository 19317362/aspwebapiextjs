Ext.define("ExtJs4Demo.controller.Books", {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Books'
    ],

    models: [
        'Book'
    ],
    
    views: [
        'book.List'
    ]
})