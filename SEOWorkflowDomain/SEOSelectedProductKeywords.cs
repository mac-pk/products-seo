using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace SEOWorkflowDomain
{
    [XmlRoot("SEOSelectedProductKeywords", Namespace = "")]
    public class SEOSelectedProductKeywords
    {
        [JsonProperty(Order = 1)]
        [XmlElement(Order = 1)]
        public string Type { get; set; }

        [JsonProperty(Order = 2)]
        [XmlElement(Order = 2)]
        public string Value { get; set; }
    }
}
