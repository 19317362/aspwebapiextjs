Ext.define('ExtJs4Demo.view.book.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.bookList',

    title: 'All Books',

    initComponent: function () {
        this.store = 'Books',

        this.columns = [
            { header: 'Title', dataIndex: 'Title', flex: 1 },
            { header: 'Author', dataIndex: 'AuthorName', flex: 1 },
            { header: 'Year', dataIndex: 'Year', flex: 1 },
            { header: 'Genre', dataIndex: 'Genre', flex: 1 },
            { header: 'Price', dataIndex: 'Price', flex: 1 }
        ];
        this.callParent(arguments);
    }
});