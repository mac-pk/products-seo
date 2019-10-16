using Newtonsoft.Json;
using System.Collections.Generic;
using System.Xml.Serialization;

namespace SEOWorkflowDomain
{
    [XmlRoot("Product", Namespace = "")]
    public class Product
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

        [JsonProperty(Order = 7)]
        [XmlElement(Order = 7)]
        public string AsiProdNo { get; set; }

        [JsonProperty(Order = 8)]
        [XmlElement(Order = 8)]
        public string Categories { get; set; }

        [JsonProperty(Order = 9)]
        [XmlElement(Order = 9)]
        public string Themes { get; set; }

        [JsonProperty(Order = 10)]
        [XmlElement(Order = 10)]
        public string Keywords { get; set; }

        [JsonProperty(Order = 11)]
        [XmlArray("SEOSelectedProductCategories", Order = 11)]
        [XmlArrayItem("SEOSelectedProductCategories")]
        public List<ProductCategory> ProductCategories { get; set; }

        [JsonProperty(Order = 12)]
        [XmlArray("SeoKeywords", Order = 12)]
        [XmlArrayItem("SeoKeywords")]
        public List<string> SeoKeywords { get; set; }

        [JsonProperty(Order = 13)]
        [XmlArray("ProductThemes", Order = 13)]
        [XmlArrayItem("ProductThemes")]
        public List<string> ProductThemes { get; set; }

        //public DateTime? PublishDateUtc;
    }
}
