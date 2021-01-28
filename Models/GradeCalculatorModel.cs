using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FixedFirstWebApp.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public double Assignment { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public double GroupProject { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public double Quiz { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public double Exam { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public double Intex { get; set; }

    }
}
