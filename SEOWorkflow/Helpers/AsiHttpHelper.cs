using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;

namespace SEOWorkflow.Helpers
{
    public static class ASIHttpHelper
    {
        internal const string ApiBase = "/api/api/";
        internal static List<T> GetList<T>(HttpRequestBase requestBase, string resource)
        {
            List<T> defaultResult = new List<T>();
            return Get(requestBase, resource, defaultResult);
        }

        internal static T Get<T>(HttpRequestBase requestBase, string resource, T defaultResult)
        {
            T theResult = defaultResult;
            var handler = CookieAwareHttpClientHandler(requestBase);

            using (var client = new HttpClient(handler))
            {
                client.BaseAddress = new Uri(requestBase.Url.GetLeftPart(UriPartial.Authority));
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage response = client.GetAsync(ApiBase + resource).Result;
                if (response.IsSuccessStatusCode)
                    theResult = response.Content.ReadAsAsync<T>().Result;
            };
            return theResult;
        }

        internal static TResponse Post<TRequest, TResponse>(TRequest objToPost, HttpRequestBase requestBase, string resource, int timeOutSeconds = 5)
        {
            TResponse theResult = default(TResponse);

            using (HttpClient client = new HttpClient(CookieAwareHttpClientHandler(requestBase)))
            {
                client.BaseAddress = new Uri(requestBase.Url.GetLeftPart(UriPartial.Authority));
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.Timeout = TimeSpan.FromSeconds(timeOutSeconds);

                try
                {
                    HttpResponseMessage response = client.PostAsJsonAsync(ApiBase + resource, objToPost).Result;
                    if (response.IsSuccessStatusCode)
                        theResult = response.Content.ReadAsAsync<TResponse>().Result;
                }
                catch { }
            }
            return theResult;
        }

        internal static bool Post(HttpRequestBase requestBase, string resource, int timeOutSeconds = 5)
        {
            if (requestBase.Url != null)
            {
                using (HttpClient client = new HttpClient(CookieAwareHttpClientHandler(requestBase)))
                {
                    client.BaseAddress = new Uri(requestBase.Url.GetLeftPart(UriPartial.Authority));
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    client.Timeout = TimeSpan.FromSeconds(timeOutSeconds);

                    try
                    {
                        HttpContent content = new StringContent(string.Empty);
                        content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                        HttpResponseMessage response = client.PostAsync(ApiBase + resource, content).Result;
                        if (response.IsSuccessStatusCode)
                            return true;
                    }
                    catch
                    {
                    }
                }
            }
            return false;
        }

        public static void CreateSessionCookie(string key, string value, HttpResponseBase response)
        {
            if (response == null) return;
            if (string.IsNullOrEmpty(key)) return;
            HttpCookie cookie = new HttpCookie(key) { Value = value };
            response.Cookies.Add(cookie);
        }

        public static void CreateCookie(string key, string data, int days, HttpResponseBase response)
        {
            if (response == null) return;
            if (string.IsNullOrEmpty(key)) return;
            HttpCookie cookie = new HttpCookie(key);
            if (days > 0)
            {
                cookie.Expires = DateTime.Now.AddDays(days);
            }
            cookie.Value = data;
            response.Cookies.Add(cookie);
        }

        public static void CreateRootCookie(string key, string data, int days, HttpResponseBase response)
        {
            if (response == null) return;
            if (string.IsNullOrEmpty(key)) return;
            HttpCookie cookie = new HttpCookie(key) { Path = "/" };
            if (days > 0)
            {
                cookie.Expires = DateTime.Now.AddDays(days);
            }
            cookie.Value = data;
            response.Cookies.Add(cookie);
        }

        public static string GetCookieString(string cookieName)
        {
            string result = string.Empty;

            try
            {
                if (HttpContext.Current != null)
                {
                    HttpCookie checkCookie = HttpContext.Current.Request.Cookies[cookieName];
                    if (checkCookie != null)
                    {
                        result = checkCookie.Value;
                    }
                }
            }
            catch
            {
                result = string.Empty;
            }
            return result;
        }

        public static int? GetCookieInt(string cookieName)
        {
            string value = GetCookieString(cookieName);
            if (!string.IsNullOrEmpty(value))
            {
                int intValue;
                Int32.TryParse(value, out intValue);
                if (intValue > 0) return intValue;
            }
            return null;
        }

        public static string RemoveCookies(string cookieName)
        {
            string result = string.Empty;

            try
            {
                if (HttpContext.Current != null)
                {
                    if (HttpContext.Current.Request.Cookies[cookieName] != null)
                    {
                        HttpCookie myCookie = new HttpCookie(cookieName, "") { Expires = DateTime.Now.AddDays(-1d) };
                        HttpContext.Current.Request.Cookies.Add(myCookie);
                        HttpContext.Current.Response.Cookies.Add(myCookie);
                    }
                }
            }
            catch
            {
                result = string.Empty;
            }
            return result;
        }

        private static HttpClientHandler CookieAwareHttpClientHandler(HttpRequestBase requestBase)
        {
            HttpClientHandler handler = new HttpClientHandler { CookieContainer = new CookieContainer() };

            if (requestBase.Url != null)
            {
                var domain = requestBase.Url.Authority;
                foreach (var cookie in HttpContext.Current.Request.Cookies.AllKeys.Select(key => HttpContext.Current.Request.Cookies[key]).Where(cookie => cookie != null))
                {
                    handler.CookieContainer.Add(new Cookie { Name = cookie.Name, Value = cookie.Value, Domain = domain });
                }
            }
            return handler;
        }
    }
}