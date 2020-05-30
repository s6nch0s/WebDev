using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web.Data;
using Web.Models;
using Web.Repositories;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {
        private readonly IRepositoryBook<Book> _repositoryBook;

        public BookController(IRepositoryBook<Book> repositoryBook)
        {
            _repositoryBook = repositoryBook;
        }
        [HttpGet]
        public IEnumerable<Book> Get()
        {
            return _repositoryBook.GetAll();
        }
        [Route("/api/users/get/{id}")]
        [HttpGet]
        public IActionResult Get(int id)
        {
            if (id > 0)
            {
                try
                {
                    Book book = _repositoryBook.FindById(id);
                    if (User != null)
                        return Ok(User);
                    else
                        return BadRequest($"Couldn't find a book with id: {id}");
                }

                catch (Exception ex)
                {
                    //logger.critical(ex.message);
                    return BadRequest("Server error(this is not correct)");
                }
            }
            else
            {
                return BadRequest("Incorrect id");
            }
        }
        [Route("/api/{controller}/add")]
        [HttpPost]
        public IActionResult Add([FromBody] Book book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Error");
            }
            else
            {
                _repositoryBook.Create(book);
                return Ok();
            }
        }
        [Route("/api/{controller}/update")]
        [HttpPost]
        public IActionResult Update([FromBody] Book book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Error");
            }
            else
            {
                _repositoryBook.Update(book);
                return Ok();
            }
        }
        [Route("/api/{controller}/delete/{id}")]
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            Book book = _repositoryBook.FindById(id);
            if (id <= 0) return BadRequest("Invalid Id");
            if (book != null) { _repositoryBook.Delete(book); }
            else
            {
                return BadRequest("Null object");
            }

            return Ok();
        }
    }
}