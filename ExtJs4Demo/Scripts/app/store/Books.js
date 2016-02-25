Ext.define('ExtJs4Demo.store.Books', {
    extend: 'Ext.data.Store',
    model: 'ExtJs4Demo.model.Book',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'api/books',
        method: 'get',
        reader: {
            type: 'json',
            root: 'books'
        }
    }

    //,
    //data: [
    //        { title: 'The City Horror', author: 'Wendell Wayne Estrada', year: 2016, genre: 'Horror', price: 1234.0 },
    //        { title: 'The Confessions of a Shoppaholic', author: 'Carline Key Capule', year: 2015, genre: 'Comedy', price: 24.0 }
    //]
})