using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CleanShave.Controllers
{
    public class CharacterController : Controller
    {
        [HttpGetAttribute("api/characters")]
        public async Task<ActionResult> Get()
        {
            using (var httpClient = new HttpClient())
            {
                var response = await httpClient.GetAsync("http://nerdfest.servegame.com/characters");
                response.EnsureSuccessStatusCode();
                var responseBody = await response.Content.ReadAsStringAsync();
                return Content(responseBody, "application/json");
            }
        }

        [HttpGetAttribute("api/character/{id}")]
        public async Task<ActionResult> Get(string id)
        {
            using (var httpClient = new HttpClient())
            {
                var response = await httpClient.GetAsync(string.Format("http://nerdfest.servegame.com/character/{0}", id));
                response.EnsureSuccessStatusCode();
                var responseBody = await response.Content.ReadAsStringAsync();
                return Content(responseBody, "application/json");
            }
        }        
    }
}
