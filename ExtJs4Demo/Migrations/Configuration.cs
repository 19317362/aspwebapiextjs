namespace ExtJs4Demo.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Models;

    internal sealed class Configuration : DbMigrationsConfiguration<ExtJs4Demo.Models.BookServiceContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ExtJs4Demo.Models.BookServiceContext context)
        {
            context.Authors.AddOrUpdate(x => x.Id,
                new Author() { Id = 1, Name = "Wendell Wayne" },
                new Author() { Id = 2, Name = "Carline Key" },
                new Author() { Id = 3, Name = "Marvin Lloyd Ocampo" },
                new Author() { Id = 4, Name = "James Alain" });

            context.Books.AddOrUpdate(x => x.Id,
                new Book() { Id = 1, Genre = "Romance", Price = 400.00M, Title = "Love is Patience", Year = 2016, AuthorId = 1 },
                new Book() { Id = 2, Genre = "Romance", Price = 300.00M, Title = "Conditional Love", Year = 2016, AuthorId = 2 },
                new Book() { Id = 3, Genre = "Motivational", Price = 123.00M, Title = "Stepping Up", Year = 2016, AuthorId = 3 },
                new Book() { Id = 4, Genre = "Biology", Price = 110.00M, Title = "Human Anatomy", Year = 2011, AuthorId = 1 },
                new Book() { Id = 5, Genre = "Technology", Price = 215.00M, Title = "Elon Musk: Entrepreneur of the Year", Year = 2015, AuthorId = 1 },
                new Book() { Id = 6, Genre = "Humor", Price = 500.50M, Title = "The Art of Procastinating", Year = 2016, AuthorId = 4 });
        }
    }
}
