using System;
using System.Collections.Generic;
using System.Xml.Serialization;
using Newtonsoft.Json;

namespace ASI.Contracts.SEOWorkflow.Models
{
    [XmlRoot("Product", Namespace = "")]
    public class SEOApiProduct
    {
        [JsonProperty(Order = 1)]
        [XmlElement(Order = 1)]
        public string ExternalProductId { get; set; }

        [JsonProperty(Order = 2)]
        [XmlElement(Order = 2)]
        public int CompanyId { get; set; }

        [JsonProperty(Order = 3)]
        [XmlElement(Order = 3)]
        public string SEOStatus { get; set; }

        [JsonProperty(Order = 4)]
        [XmlElement(Order = 4)]
        public string Name { get; set; }

        [JsonProperty(Order = 5)]
        [XmlElement(Order = 5)]
        public string Description { get; set; }

        [JsonProperty(Order = 6, NullValueHandling = NullValueHandling.Include)]
        [XmlElement(Order = 6)]
        public string Summary { get; set; }

        [JsonProperty(Order = 6)]
        [XmlArray("SEOSelectedProductKeywords", Order = 6)]
        [XmlArrayItem("SEOSelectedProductKeywords")]
        public List<SEOSelectedProductKeywords> SEOSelectedProductKeywords { get; set; }

        [JsonProperty(Order = 7)]
        [XmlArray("SEOSelectedProductCategories", Order = 7)]
        [XmlArrayItem("SEOSelectedProductCategories")]
        public List<SEOSelectedProductCategories> SEOSelectedProductCategories { get; set; }

        [JsonProperty(Order = 8)]
        [XmlArray("SelectedProductThemes", Order = 8)]
        [XmlArrayItem("SelectedProductThemes")]
        public List<string> SelectedProductThemes { get; set; }

        //SelectedProductThemes
        public DateTime? PublishDateUtc;
    }
}
