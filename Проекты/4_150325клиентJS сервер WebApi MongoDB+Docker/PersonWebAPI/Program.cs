using System.Diagnostics;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using PersonWebAPI;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
// AddSingleton создает неявно статический экземпляр класса - который существует в единственном виде
// помимо Singleton есть Scoped и Transient https://metanit.com/sharp/aspnet5/6.2.php 
builder.Services.AddSingleton<IMongoClient>(new MongoClient(connectionString));
// Cross Origin Resource Sharing. Блокируются запросы из JS в браузере. Причина отсутствие заголовков CORS https://metanit.com/sharp/aspnet6/14.1.php
// политика источника запрещает чтение удаленного ресурса. Для этого прописываем Cors
builder.Services.AddCors();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseCors(corsPolicyBuilder => corsPolicyBuilder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());  // позволяет обработку с любых адресов, любых заголовков и методов

app.MapGet("/", async () =>
{
    var html = await File.ReadAllTextAsync("index.html");
    return Results.Content(html, "text/html");  // возвращает не текст а страницу html 
});

app.MapGet("/api/persons", async (IMongoClient client) =>
{
    var db = client.GetDatabase("persons");
    var collection = db.GetCollection<Person>("persons");
    var persons =  await collection.Find("{}").ToListAsync();
    
    #if DEBUG
    Debug.WriteLine(string.Join(", ", persons));
    #endif
    
    return persons;
});

// post запрос добавления новой записи в БД 
app.MapPost("/api/persons", async (IMongoClient client, Person person) =>
{
    var db = client.GetDatabase("persons"); // обращаемся к БД 
    var collection = db.GetCollection<Person>("persons");
    await collection.InsertOneAsync(person);   // записываем туда данные
});

/* удаление */
app.MapDelete("/api/persons/{id}", async (IMongoClient client, string id) =>
{
    var db = client.GetDatabase("persons");
    var collection = db.GetCollection<Person>("persons");
    await collection.DeleteOneAsync(x => x.Id == id);
});

/* редактирование пользователя */
app.MapPut("/api/persons/", async (IMongoClient client, Person person) =>
{
    if(string.IsNullOrEmpty(person.Id))
        return Results.NotFound();
    
    var db = client.GetDatabase("persons");
    var collection = db.GetCollection<Person>("persons");
    var result = await collection.ReplaceOneAsync(x => x.Id == person.Id, person);
    return Results.Ok(result);
}); 

await app.RunAsync();