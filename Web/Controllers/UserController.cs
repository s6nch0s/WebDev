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
    public class UserController : ControllerBase
    {
        private readonly IRepositoryUser<User> _repositoryUser;

        public UserController(IRepositoryUser<User> repositoryUser)
        {
            _repositoryUser = repositoryUser;
        }
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _repositoryUser.GetAll();
        }
        [Route("/api/users/get/{id}")]
        [HttpGet]
        public IActionResult Get(int id)
        {
            if (id > 0)
            {
                try
                {
                    User User = _repositoryUser.FindById(id);
                    if (User != null)
                        return Ok(User);
                    else
                        return BadRequest($"Couldn't find a User with id: {id}");
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
        public IActionResult Add([FromBody] User User)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Error");
            }
            else
            {
                _repositoryUser.Create(User);
                return Ok();
            }
        }
        [Route("/api/{controller}/update")]
        [HttpPost]
        public IActionResult Update([FromBody] User User)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Error");
            }
            else
            {
                _repositoryUser.Update(User);
                return Ok();
            }
        }
        [Route("/api/{controller}/delete/{id}")]
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            User User = _repositoryUser.FindById(id);
            if (id <= 0) return BadRequest("Invalid Id");
            if (User != null) { _repositoryUser.Delete(User); }
            else
            {
                return BadRequest("Null object");
            }

            return Ok();
        }
    }
}