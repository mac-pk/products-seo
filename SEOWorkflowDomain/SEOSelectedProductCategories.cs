using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace SEOWorkflowDomain
{
    [XmlRoot("SEOSelectedProductCategories", Namespace = "")]
    public class ProductCategory
    {

        [JsonProperty(Order = 1)]
        [XmlElement(Order = 1)]
        public string Value { get; set; }

        [JsonProperty(Order = 2)]
        [XmlElement(Order = 2)]
        public string Type { get; set; }

        [JsonProperty(Order = 3)]
        [XmlElement(Order = 3)]
        public bool IsSelected { get; set; }

        [JsonProperty(Order = 4)]
        [XmlElement(Order = 4)]
        public bool IsDisabled { get; set; }
    }
}
