using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        [Required, MaxLength(70)]
        public string Name { get; set; }
        public string Author { get; set; }
        public string Language { get; set; }
        public string Genre { get; set; }
        public int Year { get; set; }
    }
}
