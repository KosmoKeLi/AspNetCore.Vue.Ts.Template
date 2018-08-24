using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VueTest.Models;

namespace VueTest.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["page"] = "dashboard";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
